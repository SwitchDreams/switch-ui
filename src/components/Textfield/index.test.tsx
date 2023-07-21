import { XMarkIcon } from "@heroicons/react/24/solid";
import { render, screen } from "@testing-library/react";

import { Textfield } from "./Textfield";

describe("Textfield render", () => {
  it("render textfield", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
      />,
    );
    const labelElement = screen.getByText("Username");
    const inputElement = screen.getByPlaceholderText("Enter your username");
    const supportElement = screen.getByText("Enter your username.");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(supportElement).toBeInTheDocument();
  });
  it("render textfield disbled", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        className="text-orange-100"
        disabled
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeDisabled();
  });
  it("render textfield error", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        className="text-orange-100"
        error
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("border-error-500");
    expect(screen.getByText("Enter your username.")).toHaveClass("text-error-500");
  });
});
describe("Textfield sizes", () => {
  it("renders with size large", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        size="large"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-[52px]");
  });
  it("renders with size medium", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        size="medium"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-[48px]");
  });
  it("renders with size small", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        size="small"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-[44px]");
  });
});
describe("Textfield renders with custom class 'text-orange-100'", () => {
  it("render textfield", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        className="text-orange-100"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("text-orange-100");
  });
});
