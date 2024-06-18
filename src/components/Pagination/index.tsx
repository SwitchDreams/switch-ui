import {
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface IPagination {
  pages: number;
  currentPage: number;
  className?: string;
  handlePreviousPage?: () => void;
  handleNextPage?: () => void;
  handleDoubleNextPage?: () => void;
  handlePage?: (pageNumber: number) => void;
  visiblePagesRange?: number;
}

const PaginationVariants = cva(
  "flex h-10 w-10 cursor-pointer items-center justify-center text-coolGray-600 hover:bg-coolGray-200 hover:text-coolGray-900",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
      outline: {
        true: "border border-coolGray-300",
        false: "border-none",
      },
    },
    defaultVariants: {
      shape: "square",
      outline: false,
    },
  },
);

type PaginationVariantProps = VariantProps<typeof PaginationVariants>;

export interface PaginationProps extends IPagination, PaginationVariantProps {}

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  className,
  handlePreviousPage,
  handleNextPage,
  handleDoubleNextPage,
  handlePage,
  visiblePagesRange = 5,
  shape = "square",
  outline = false,
}: PaginationProps) => {
  const PaginationClasses = twMerge(PaginationVariants({ shape, outline }), className);

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(visiblePagesRange / 2), pages - visiblePagesRange + 1),
  );
  const endPage = Math.min(startPage + visiblePagesRange - 1, pages);

  const pagesArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <div className="flex w-full justify-between gap-5">
      <button onClick={handlePreviousPage} className={PaginationClasses} data-testid="left-arrow">
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      <div className="flex gap-1">
        {pagesArray.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePage && handlePage(pageNumber)}
            className={`${PaginationClasses} ${
              currentPage === pageNumber ? "bg-coolGray-900 text-white" : ""
            }`}
            data-testid={`page-${pageNumber}`}
          >
            <span>{pageNumber}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-1">
        <button onClick={handleNextPage} className={PaginationClasses} data-testid="right-arrow">
          <ChevronRightIcon className="h-4 w-4" />
        </button>
        <button
          onClick={handleDoubleNextPage}
          className={PaginationClasses}
          data-testid="double-right-arrow"
        >
          <ChevronDoubleRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
