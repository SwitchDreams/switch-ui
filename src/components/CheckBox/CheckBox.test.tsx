import { render, screen } from "@testing-library/react";
import React from "react";

import { CheckBox } from "./CheckBox";

describe("CheckBox", () => {
  it("renders unchecked CheckBox with default size", () => {
    render(<CheckBox />);

    const checkBox = screen.getByRole("radio");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();
    expect(checkBox).toHaveClass("h-5");
    expect(checkBox).toHaveClass("w-5");
  });

  it("renders checked CheckBox with specified size", () => {
    render(<CheckBox size="large" checked />);

    const checkBox = screen.getByRole("radio");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).toBeChecked();
    expect(checkBox).toHaveClass("h-6");
    expect(checkBox).toHaveClass("w-6");
  });

  it("renders disabled CheckBox", () => {
    render(<CheckBox disabled />);

    const checkBox = screen.getByRole("radio");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).toBeDisabled();
    expect(checkBox).toHaveClass("border-gray-200");
    expect(checkBox).toHaveClass("bg-gray-100");
  });
});
