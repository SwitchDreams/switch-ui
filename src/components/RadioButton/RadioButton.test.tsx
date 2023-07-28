import { render, screen } from "@testing-library/react";
import React from "react";

import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  it("renders unchecked RadioButton with default size", () => {
    render(<RadioButton />);

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).not.toBeChecked();
    expect(radioButton).toHaveClass("h-5");
    expect(radioButton).toHaveClass("w-5");
  });

  it("renders checked RadioButton with specified size", () => {
    render(<RadioButton size="large" checked />);

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeChecked();
    expect(radioButton).toHaveClass("h-6");
    expect(radioButton).toHaveClass("w-6");
  });

  it("renders disabled RadioButton", () => {
    render(<RadioButton disabled />);

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeDisabled();
    expect(radioButton).toHaveClass("border-gray-200");
    expect(radioButton).toHaveClass("bg-gray-100");
  });
});