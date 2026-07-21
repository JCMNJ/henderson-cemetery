import { readdir } from "node:fs/promises";
import path from "node:path";

const GALLERY_PUBLIC_PATH = "/gallery";
const GALLERY_ROOT = path.join(process.cwd(), "public", "gallery");
const SUPPORTED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const UNPUBLISHED_GALLERY_IMAGES = new Set(
  [
    ...Array.from({ length: 14 }, (_, index) => `hendersoncemetery${index + 2}.jpg`),
    "cemetery-fall-flagsflowers.jpg",
    "cemetery-fall-portrait.jpg",
    "cemetery-spring-group.jpg",
    "cemetery-summer-view13-mown-rows-flags.jpg",
    "cemetery-summer-view14-sloping-lawn-monuments.jpg",
    "cemetery-summer-view15-sunlit-headstones-trees.jpg",
    "cemetery-winter-road.jpg",
    "cemetery-wintersnow-group2.jpg",
  ],
);

export type GallerySeason = "spring" | "summer" | "fall" | "winter";

type GalleryImageMetadata = {
  alt: string;
  caption: string;
  season: GallerySeason | null;
};

const GALLERY_IMAGE_METADATA: Record<string, GalleryImageMetadata> = {
  "cemetery-fall-flagsflowers.jpg": {
    alt: "American flags and flowers placed beside headstones among fallen leaves.",
    caption: "Flags and flowers beside headstones with fallen leaves.",
    season: "fall",
  },
  "cemetery-fall-portrait.jpg": {
    alt: "A vertical cemetery view with headstones, grass, and autumn leaves.",
    caption: "Headstones and grass framed by autumn leaves.",
    season: "fall",
  },
  "cemetery-spring-group.jpg": {
    alt: "A group of headstones on green grass near flowering spring branches.",
    caption: "Headstones on green grass near spring blossoms.",
    season: "spring",
  },
  "cemetery-summer-monument.jpg": {
    alt: "A stone cemetery monument on a green lawn with trees behind it.",
    caption: "Stone monument on a green lawn.",
    season: "summer",
  },
  "cemetery-summer-view01-trees-headstones.jpg":
    {
      alt: "Headstones and monuments on a green lawn beneath mature leafy trees.",
      caption: "Headstones and monuments beneath mature trees.",
      season: "summer",
    },
  "cemetery-summer-view02-flags-graves.jpg":
    {
      alt: "American flags placed beside graves on a mown cemetery lawn.",
      caption: "Flags placed beside graves on a mown lawn.",
      season: "summer",
    },
  "cemetery-summer-view03-obelisk-headstones.jpg":
    {
      alt: "A tall obelisk monument surrounded by headstones beneath a partly cloudy sky.",
      caption: "Obelisk monument surrounded by headstones.",
      season: "summer",
    },
  "cemetery-summer-view04-rows-lawn.jpg":
    {
      alt: "Rows of grave markers extending along a mown lawn bordered by trees.",
      caption: "Rows of grave markers across a mown lawn.",
      season: "summer",
    },
  "cemetery-summer-view05-headstones-flag.jpg":
    {
      alt: "Headstones spread across a sunny lawn with an American flag in the foreground.",
      caption: "Headstones on a sunny lawn with a flag.",
      season: "summer",
    },
  "cemetery-summer-view06-upright-stones-evergreens.jpg":
    {
      alt: "A row of upright gravestones on green grass with evergreens behind them.",
      caption: "Upright gravestones with evergreens behind them.",
      season: "summer",
    },
  "cemetery-summer-view07-tall-monument-trees.jpg":
    {
      alt: "A tall stone monument and surrounding grave markers framed by leafy trees.",
      caption: "Tall monument and grave markers framed by trees.",
      season: "summer",
    },
  "cemetery-summer-view08-large-tree-markers.jpg":
    {
      alt: "A large leafy tree standing among rows of stone grave markers.",
      caption: "Large tree among rows of grave markers.",
      season: "summer",
    },
  "cemetery-summer-view09-hillside-monuments.jpg":
    {
      alt: "Stone monuments and headstones arranged across a sunny hillside.",
      caption: "Stone monuments and headstones on a hillside.",
      season: "summer",
    },
  "cemetery-summer-view10-wide-lawn-monuments.jpg":
    {
      alt: "A broad mown cemetery lawn with scattered markers and distant monuments.",
      caption: "Broad lawn with scattered markers and monuments.",
      season: "summer",
    },
  "cemetery-summer-view11-headstones-clouds.jpg":
    {
      alt: "Headstones across a green lawn beneath large white clouds and a blue sky.",
      caption: "Headstones beneath a bright sky with large clouds.",
      season: "summer",
    },
  "cemetery-summer-view12-obelisk-clouds.jpg":
    {
      alt: "A tall obelisk and smaller headstones beneath a bright, partly cloudy sky.",
      caption: "Obelisk and headstones beneath a partly cloudy sky.",
      season: "summer",
    },
  "cemetery-summer-view13-mown-rows-flags.jpg":
    {
      alt: "Mown rows of grave markers with American flags and trees in the distance.",
      caption: "Mown rows of markers with American flags.",
      season: "summer",
    },
  "cemetery-summer-view14-sloping-lawn-monuments.jpg":
    {
      alt: "Stone monuments across a gently sloping lawn bordered by green trees.",
      caption: "Stone monuments across a sloping lawn.",
      season: "summer",
    },
  "cemetery-summer-view15-sunlit-headstones-trees.jpg":
    {
      alt: "Sunlit headstones on a green lawn in front of a leafy tree line.",
      caption: "Sunlit headstones in front of leafy trees.",
      season: "summer",
    },
  "cemetery-winter-group.jpg": {
    alt: "A group of cemetery headstones and monuments on snow-covered ground.",
    caption: "Headstones and monuments on snow-covered ground.",
    season: "winter",
  },
  "cemetery-winter-road.jpg": {
    alt: "A cemetery road with snow-covered ground and bare trees.",
    caption: "Cemetery road with snow and bare trees.",
    season: "winter",
  },
  "cemetery-wintersnow-contrast.jpg": {
    alt: "Dark headstones and trees standing against bright snow.",
    caption: "Dark headstones and trees against bright snow.",
    season: "winter",
  },
  "cemetery-wintersnow-flagsflowers.jpg": {
    alt: "Flags and flowers beside grave markers in snow.",
    caption: "Flags and flowers beside grave markers in snow.",
    season: "winter",
  },
  "cemetery-wintersnow-flagsflowers2.jpg": {
    alt: "Flags, flowers, and grave markers surrounded by snow.",
    caption: "Flags, flowers, and grave markers surrounded by snow.",
    season: "winter",
  },
  "cemetery-wintersnow-group.jpg": {
    alt: "Cemetery monuments and headstones in winter snow.",
    caption: "Monuments and headstones in winter snow.",
    season: "winter",
  },
  "cemetery-wintersnow-group2.jpg": {
    alt: "A group of headstones and monuments on a snow-covered cemetery lawn.",
    caption: "Grouped headstones and monuments on snow-covered ground.",
    season: "winter",
  },
  "cemetery-wintersnow-portrait.jpg": {
    alt: "A vertical winter cemetery view with headstones and snow.",
    caption: "Headstones in a vertical winter view.",
    season: "winter",
  },
  "hendersoncemetery1.jpg": {
    alt: "A cemetery view with headstones, grass, and trees.",
    caption: "Cemetery grounds with headstones and trees.",
    season: null,
  },
};

export type GalleryImage = {
  id: string;
  src: string;
  filename: string;
  relativePath: string;
  category: string | null;
  alt: string;
  caption: string;
  season: GallerySeason | null;
};

function inferSeason(relativePath: string): GallerySeason | null {
  const normalized = relativePath.toLowerCase();

  if (normalized.includes("spring")) return "spring";
  if (normalized.includes("summer")) return "summer";
  if (normalized.includes("fall")) return "fall";
  if (normalized.includes("winter") || normalized.includes("snow")) return "winter";

  return null;
}

async function readGalleryDirectory(directory: string): Promise<string[]> {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const discovered = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return readGalleryDirectory(entryPath);
      }

      if (!entry.isFile()) {
        return [];
      }

      const extension = path.extname(entry.name).toLowerCase();
      return SUPPORTED_IMAGE_EXTENSIONS.has(extension) ? [entryPath] : [];
    }),
  );

  return discovered.flat();
}

function toPublicImagePath(relativePath: string) {
  return `${GALLERY_PUBLIC_PATH}/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const files = await readGalleryDirectory(GALLERY_ROOT);

  return files
    .filter((filePath) => {
      const relativePath = path.relative(GALLERY_ROOT, filePath).split(path.sep).join("/");
      return !UNPUBLISHED_GALLERY_IMAGES.has(relativePath);
    })
    .map((filePath) => {
      const relativePath = path.relative(GALLERY_ROOT, filePath).split(path.sep).join("/");
      const segments = relativePath.split("/");

      return {
        id: relativePath,
        src: toPublicImagePath(relativePath),
        filename: segments[segments.length - 1],
        relativePath,
        category: segments.length > 1 ? segments[0] : null,
        alt: GALLERY_IMAGE_METADATA[relativePath]?.alt ?? "Cemetery photograph with headstones and grounds.",
        caption: GALLERY_IMAGE_METADATA[relativePath]?.caption ?? "Cemetery photograph.",
        season: GALLERY_IMAGE_METADATA[relativePath]?.season ?? inferSeason(relativePath),
      };
    })
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath, undefined, { sensitivity: "base" }));
}
