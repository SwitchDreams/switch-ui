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
  handlePage?: (pageNumber: number) => void;
  visiblePagesRange?: number;
}

const PaginationVariants = cva(
  "hover:bg-coolGray-150 flex h-10 w-10 cursor-pointer items-center justify-center text-coolGray-600 hover:text-coolGray-900",
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

const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  className,
  handlePreviousPage,
  handleNextPage,
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
      <div onClick={handlePreviousPage} className={PaginationClasses}>
        <ChevronLeftIcon className="h-4 w-4 " />
      </div>
      <div className="flex gap-1">
        {pagesArray.map((pageNumber) => (
          <div
            key={pageNumber}
            onClick={() => handlePage && handlePage(pageNumber)}
            className={`${PaginationClasses} ${
              currentPage === pageNumber ? "bg-coolGray-850 text-white" : ""
            }`}
          >
            <span>{pageNumber}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        <div onClick={handleNextPage} className={PaginationClasses}>
          <ChevronRightIcon className="h-4 w-4 " />
        </div>
        <div onClick={handleNextPage} className={PaginationClasses}>
          <ChevronDoubleRightIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
