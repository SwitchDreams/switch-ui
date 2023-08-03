import { render, screen } from "@testing-library/react";

import { Spinner } from "..";

describe("Spinner", () => {
  it("renders the spinner with the correct size class", () => {
    render(<Spinner size="large" />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toHaveClass("h-9");
    expect(spinnerElement).toHaveClass("w-9");
    expect(spinnerElement).toHaveClass("border-[5px]");
  });

  it("renders the spinner with additional classes correctly", () => {
    render(<Spinner size="medium" className="text-red-500" />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toHaveClass("h-7");
    expect(spinnerElement).toHaveClass("w-7");
    expect(spinnerElement).toHaveClass("border-[3px]");
    expect(spinnerElement).toHaveClass("text-red-500");
  });
});
