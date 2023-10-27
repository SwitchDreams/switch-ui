import { XMarkIcon } from "@heroicons/react/24/solid";
import { fireEvent, render, screen } from "@testing-library/react";
import { vitest } from "vitest";

import TextField from "..";

describe("Textfield render", () => {
  it("render textfield", () => {
    render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
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
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
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
      <TextField
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
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
        name="name"
        size="large"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-14");
  });
  it("renders with size medium", () => {
    render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
        name="name"
        size="medium"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-11");
  });
  it("renders with size small", () => {
    render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
        name="name"
        size="small"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("h-10");
  });
});
describe("Textfield renders with custom class 'text-orange-100'", () => {
  it("render textfield", () => {
    render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
        name="name"
        className="text-orange-100"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("text-orange-100");
  });
  describe("Test the click event", () => {
    it("tests the props onClickIcon", () => {
      const onClickMock = vitest.fn();

      const { container } = render(
        <TextField
          label="Username"
          placeholder="Enter your username"
          leftIcon={XMarkIcon}
          name="name"
          className="text-orange-100"
          onClickIcon={onClickMock}
        />,
      );

      const textFieldElement = container.querySelector(".text-field-icon");

      if (textFieldElement) fireEvent.click(textFieldElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
describe("Test the icon padding", () => {
  it("should not have padding right", () => {
    render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        supportText="Enter your username."
        name="name"
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).not.toHaveClass("pr-10");
  });
  it("should have padding right", () => {
    render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        leftIcon={XMarkIcon}
        rightIcon={XMarkIcon}
        supportText="Enter your username."
        name="name"
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");

    expect(inputElement).toHaveClass("pr-10");
  });
});
