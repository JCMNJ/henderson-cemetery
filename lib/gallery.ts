import { readdir } from "node:fs/promises";
import path from "node:path";

const GALLERY_PUBLIC_PATH = "/gallery";
const GALLERY_ROOT = path.join(process.cwd(), "public", "gallery");
const SUPPORTED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const GALLERY_IMAGE_ALT_TEXT: Record<string, string> = {
  "cemetery-summer-view01-trees-headstones.jpg":
    "Headstones and monuments on a green lawn beneath mature leafy trees.",
  "cemetery-summer-view02-flags-graves.jpg":
    "American flags placed beside graves on a mown cemetery lawn.",
  "cemetery-summer-view03-obelisk-headstones.jpg":
    "A tall obelisk monument surrounded by headstones beneath a partly cloudy sky.",
  "cemetery-summer-view04-rows-lawn.jpg":
    "Rows of grave markers extending along a mown lawn bordered by trees.",
  "cemetery-summer-view05-headstones-flag.jpg":
    "Headstones spread across a sunny lawn with an American flag in the foreground.",
  "cemetery-summer-view06-upright-stones-evergreens.jpg":
    "A row of upright gravestones on green grass with evergreens behind them.",
  "cemetery-summer-view07-tall-monument-trees.jpg":
    "A tall stone monument and surrounding grave markers framed by leafy trees.",
  "cemetery-summer-view08-large-tree-markers.jpg":
    "A large leafy tree standing among rows of stone grave markers.",
  "cemetery-summer-view09-hillside-monuments.jpg":
    "Stone monuments and headstones arranged across a sunny hillside.",
  "cemetery-summer-view10-wide-lawn-monuments.jpg":
    "A broad mown cemetery lawn with scattered markers and distant monuments.",
  "cemetery-summer-view11-headstones-clouds.jpg":
    "Headstones across a green lawn beneath large white clouds and a blue sky.",
  "cemetery-summer-view12-obelisk-clouds.jpg":
    "A tall obelisk and smaller headstones beneath a bright, partly cloudy sky.",
  "cemetery-summer-view13-mown-rows-flags.jpg":
    "Mown rows of grave markers with American flags and trees in the distance.",
  "cemetery-summer-view14-sloping-lawn-monuments.jpg":
    "Stone monuments across a gently sloping lawn bordered by green trees.",
  "cemetery-summer-view15-sunlit-headstones-trees.jpg":
    "Sunlit headstones on a green lawn in front of a leafy tree line.",
};

export type GalleryImage = {
  id: string;
  src: string;
  filename: string;
  relativePath: string;
  category: string | null;
  alt: string;
};

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
    .map((filePath) => {
      const relativePath = path.relative(GALLERY_ROOT, filePath).split(path.sep).join("/");
      const segments = relativePath.split("/");

      return {
        id: relativePath,
        src: toPublicImagePath(relativePath),
        filename: segments[segments.length - 1],
        relativePath,
        category: segments.length > 1 ? segments[0] : null,
        alt:
          GALLERY_IMAGE_ALT_TEXT[relativePath] ??
          `Henderson Cemetery archive photograph: ${segments[segments.length - 1]}`,
      };
    })
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath, undefined, { sensitivity: "base" }));
}
