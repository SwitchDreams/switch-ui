import { render, screen } from "@testing-library/react";
import React from "react";

import { RadioButton } from "..";

describe("RadioButton", () => {
  it("renders unchecked RadioButton with default size", () => {
    render(<RadioButton name="teste1" />);

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).not.toBeChecked();
    expect(radioButton).toHaveClass("h-5");
    expect(radioButton).toHaveClass("w-5");
  });

  it("renders checked RadioButton with specified size", () => {
    render(<RadioButton size="large" checked name="teste1" />);

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeChecked();
    expect(radioButton).toHaveClass("h-6");
    expect(radioButton).toHaveClass("w-6");
  });

  it("renders disabled RadioButton", () => {
    render(<RadioButton disabled name="teste1" />);

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeDisabled();
  });
});
