"use client";

import { useMemo, useState } from "react";
import { BurialEmptyState } from "./BurialEmptyState";
import { BurialRecordCard } from "./BurialRecordCard";
import { BurialRecordsTable } from "./BurialRecordsTable";
import type { BurialRecord } from "./types";

type BurialSearchProps = {
  records: BurialRecord[];
  initialQuery?: string;
  initialPlan?: string;
};

export function BurialSearch({
  records,
  initialQuery = "",
  initialPlan = "",
}: BurialSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [planFilter, setPlanFilter] = useState(initialPlan);
  const [sortKey, setSortKey] = useState<
    "name" | "birth" | "death" | "plan" | "plot" | "photo"
  >("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedPlan = planFilter.trim().toLowerCase();

    if (!normalizedQuery && !normalizedPlan) {
      return records;
    }

    return records.filter((record) => {
      if (normalizedPlan && record.plan.trim().toLowerCase() !== normalizedPlan) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        record.surname,
        record.givenMiddle,
        record.birth,
        record.death,
        record.plan,
        record.plot,
        record.comments,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [planFilter, query, records]);

  const sortedRecords = useMemo(() => {
    const normalized = [...filteredRecords];
    normalized.sort((a, b) => {
      const getValue = (record: BurialRecord) => {
        switch (sortKey) {
          case "name":
            return `${record.surname} ${record.givenMiddle}`.toLowerCase();
          case "birth":
            return record.birth.toLowerCase();
          case "death":
            return record.death.toLowerCase();
          case "plan":
            return record.plan.toLowerCase();
          case "plot":
            return record.plot.toLowerCase();
          case "photo":
            return record.image ? "1" : "0";
        }
      };

      const aValue = getValue(a);
      const bValue = getValue(b);
      const compare = aValue.localeCompare(bValue, undefined, { numeric: true });
      return sortDirection === "asc" ? compare : -compare;
    });
    return normalized;
  }, [filteredRecords, sortDirection, sortKey]);

  const totalRecords = sortedRecords.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  const activePage = Math.min(currentPage, totalPages);
  const pageStart = totalRecords === 0 ? 0 : (activePage - 1) * pageSize + 1;
  const pageEnd = Math.min(activePage * pageSize, totalRecords);
  const pageOptions = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages]
  );
  const paginatedRecords = useMemo(
    () => sortedRecords.slice((activePage - 1) * pageSize, activePage * pageSize),
    [activePage, pageSize, sortedRecords]
  );

  const handleSortChange = (
    key: "name" | "birth" | "death" | "plan" | "plot" | "photo"
  ) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      setCurrentPage(1);
      return;
    }
    setSortKey(key);
    setSortDirection("asc");
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="bg-white p-4 shadow-2xl shadow-[#243A2E]/10 ring-1 ring-[#D8D4C8] sm:p-5">
        <label
          htmlFor="burial-search"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77746C]"
        >
          Search records
        </label>
        <input
          id="burial-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setCurrentPage(1);
          }}
          placeholder="Surname, given name, birth, death, plan, plot, or notes"
          className="mt-2 w-full rounded-full border border-[#D8D4C8] bg-white px-5 py-4 text-base text-[#243A2E] outline-none transition focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/35"
        />

        <p className="mt-3 text-sm text-[#77746C]" aria-live="polite">
          Showing {pageStart.toLocaleString()}–{pageEnd.toLocaleString()} of{" "}
          {totalRecords.toLocaleString()} records
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label
              htmlFor="plan-filter"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77746C]"
            >
              Plan
            </label>
            <select
              id="plan-filter"
              value={planFilter}
              onChange={(event) => {
                setPlanFilter(event.target.value);
                setCurrentPage(1);
              }}
              className="mt-1 w-full rounded-xl border border-[#D8D4C8] bg-white px-3 py-2 text-sm text-[#243A2E] focus:outline-none focus:ring-2 focus:ring-[#B08A3E]/35"
            >
              <option value="">All plans</option>
              <option value="H/D">H/D</option>
              <option value="1">Plan I</option>
              <option value="2">Plan II</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="page-size"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77746C]"
            >
              Page size
            </label>
            <select
              id="page-size"
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value));
                setCurrentPage(1);
              }}
              className="mt-1 w-full rounded-xl border border-[#D8D4C8] bg-white px-3 py-2 text-sm text-[#243A2E] focus:outline-none focus:ring-2 focus:ring-[#B08A3E]/35"
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div className="md:hidden">
          <label
            htmlFor="sort-records"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77746C]"
          >
            Sort
          </label>
          <select
            id="sort-records"
            value={`${sortKey}:${sortDirection}`}
            onChange={(event) => {
              const [key, direction] = event.target.value.split(":");
              setSortKey(key as typeof sortKey);
              setSortDirection(direction as typeof sortDirection);
            }}
            className="mt-1 w-full rounded-xl border border-[#D8D4C8] bg-white px-3 py-2 text-sm text-[#243A2E] focus:outline-none focus:ring-2 focus:ring-[#B08A3E]/35"
          >
            <option value="name:asc">Name (A-Z)</option>
            <option value="name:desc">Name (Z-A)</option>
            <option value="birth:asc">Birth (A-Z)</option>
            <option value="birth:desc">Birth (Z-A)</option>
            <option value="death:asc">Death (A-Z)</option>
            <option value="death:desc">Death (Z-A)</option>
            <option value="plan:asc">Plan (A-Z)</option>
            <option value="plan:desc">Plan (Z-A)</option>
            <option value="plot:asc">Plot (A-Z)</option>
            <option value="plot:desc">Plot (Z-A)</option>
            <option value="photo:desc">Stone photo first</option>
            <option value="photo:asc">No photo first</option>
          </select>
          </div>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setPlanFilter("");
              setSortKey("name");
              setSortDirection("asc");
              setCurrentPage(1);
            }}
            className="button-soft rounded-full border border-[#D8D4C8] bg-[#F7F6F1] px-4 py-2 text-sm font-semibold text-[#243A2E] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] sm:self-end"
          >
            Clear filters
          </button>
        </div>
      </div>

      <div
        id="burial-results"
        className="relative mt-5 overflow-hidden bg-white shadow-2xl shadow-[#243A2E]/10 ring-1 ring-[#D8D4C8]"
      >
        {totalRecords === 0 ? (
          <div className="p-5 sm:p-6">
            <BurialEmptyState />
          </div>
        ) : (
          <>
            <div className="max-h-[75vh] overflow-y-auto md:max-h-[70vh]">
              <div className="p-4 md:hidden">
                <div className="space-y-4">
                  {paginatedRecords.map((record) => (
                    <BurialRecordCard key={record.slug} record={record} />
                  ))}
                </div>
              </div>

              <div className="hidden overflow-x-auto md:block">
                <BurialRecordsTable
                  records={paginatedRecords}
                  sortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSortChange}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent md:h-8" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent md:h-8" />
          </>
        )}
      </div>

      <div className="mt-4 bg-white px-4 py-3 text-sm text-[#514B42] shadow-lg shadow-[#243A2E]/5 ring-1 ring-[#D8D4C8]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              disabled={activePage <= 1}
              className="button-soft rounded-full border border-[#D8D4C8] px-3 py-2 text-[#243A2E] disabled:cursor-not-allowed disabled:opacity-50"
            >
              First
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(Math.max(1, activePage - 5))}
              disabled={activePage <= 1}
              className="button-soft rounded-full border border-[#D8D4C8] px-3 py-2 text-[#243A2E] disabled:cursor-not-allowed disabled:opacity-50"
            >
              -5
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(Math.max(1, activePage - 1))}
              disabled={activePage <= 1}
              className="button-soft rounded-full border border-[#D8D4C8] px-4 py-2 text-[#243A2E] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
          </div>

          <label className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#77746C]">
            <span>Page</span>
            <select
              value={activePage}
              onChange={(event) => setCurrentPage(Number(event.target.value))}
              className="rounded-xl border border-[#D8D4C8] bg-white px-3 py-2 text-sm normal-case tracking-normal text-[#243A2E]"
              aria-label="Choose results page"
            >
              {pageOptions.map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <span>of {totalPages}</span>
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage(Math.min(totalPages, activePage + 1))}
              disabled={activePage >= totalPages}
              className="button-soft rounded-full border border-[#D8D4C8] px-4 py-2 text-[#243A2E] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(Math.min(totalPages, activePage + 5))}
              disabled={activePage >= totalPages}
              className="button-soft rounded-full border border-[#D8D4C8] px-3 py-2 text-[#243A2E] disabled:cursor-not-allowed disabled:opacity-50"
            >
              +5
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(totalPages)}
              disabled={activePage >= totalPages}
              className="button-soft rounded-full border border-[#D8D4C8] px-3 py-2 text-[#243A2E] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
