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
        name="name"
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
        name="name"
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
        errorMsg="Enter your username."
        className="text-orange-100"
        name="name"
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
        name="name"
        size="large"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-14");
  });
  it("renders with size medium", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        name="name"
        size="medium"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-12");
  });
  it("renders with size small", () => {
    render(
      <Textfield
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        support="Enter your username."
        name="name"
        size="small"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-11");
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
        name="name"
        className="text-orange-100"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("text-orange-100");
  });
});
