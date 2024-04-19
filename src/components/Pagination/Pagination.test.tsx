import { render } from "@testing-library/react";
import { vitest } from "vitest";

import Pagination from "./index";

const mockHandlePage = vitest.fn();
const mockHandleNextPage = vitest.fn();
const mockHandlePreviousPage = vitest.fn();
const mockHandleDoubleNextPage = vitest.fn();

describe("Pagination Component", () => {
  it("renders without crashing", () => {
    render(<Pagination pages={5} currentPage={1} />);
  });

  it("renders correctly with default props", () => {
    const { getByText } = render(<Pagination pages={5} currentPage={1} />);
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("renders active page correctly", () => {
    const { getByText } = render(<Pagination pages={5} currentPage={3} />);
    expect(getByText("3").parentElement).toHaveClass("bg-coolGray-900 text-white");
  });

  it("calls handlePreviousPage on left arrow click", () => {
    const { getByTestId } = render(
      <Pagination pages={5} currentPage={3} handlePreviousPage={mockHandlePreviousPage} />,
    );

    getByTestId("left-arrow").click();

    expect(mockHandlePreviousPage).toHaveBeenCalled();
  });

  it("calls handleNextPage on right arrow click", () => {
    const { getByTestId } = render(
      <Pagination pages={5} currentPage={3} handleNextPage={mockHandleNextPage} />,
    );

    getByTestId("right-arrow").click();

    expect(mockHandleNextPage).toHaveBeenCalled();
  });

  it("calls handleDoubleNextPage on right arrow click", () => {
    const { getByTestId } = render(
      <Pagination pages={5} currentPage={3} handleNextPage={mockHandleDoubleNextPage} />,
    );

    getByTestId("double-right-arrow").click();

    expect(mockHandleNextPage).toHaveBeenCalled();
  });

  it("calls handlePage with correct page number", () => {
    const { getByText } = render(
      <Pagination pages={5} currentPage={3} handlePage={mockHandlePage} />,
    );

    getByText("4").click();

    expect(mockHandlePage).toHaveBeenCalledWith(4);
  });
});
