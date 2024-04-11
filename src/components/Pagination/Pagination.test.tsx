import { render } from "@testing-library/react";

import Pagination from "./index";

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
    expect(getByText("3").parentElement).toHaveClass("bg-coolGray-850 text-white");
  });
});
