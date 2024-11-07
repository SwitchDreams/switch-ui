import { fireEvent, render, screen } from "@testing-library/react";
import { ElementType } from "react";
import { vitest } from "vitest";

import FloatingButton from "../index";

describe("FloatingButton", () => {
  const onClickMock = vitest.fn();
  const MockIcon = () => <div data-testid="mock-icon" />;

  const component = (variant: "primary" | "invisible", icon: ElementType) => {
    return (
      <FloatingButton
        variant={variant}
        size="md"
        icon={icon}
        label="floating button"
        onClick={onClickMock}
      />
    );
  };

  describe("tests the label", () => {
    it("test the label props", () => {
      render(component("primary", MockIcon));
      const buttonElement = screen.getByRole("button");
      const label = screen.getByText("floating button");
      expect(buttonElement).toContainElement(label);
    });
  });

  describe("test the colors", () => {
    it("primary variant", () => {
      render(component("primary", MockIcon));
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveClass("bg-primary-25");
      expect(buttonElement).toHaveClass("hover:bg-primary-50");
      expect(buttonElement).toHaveClass("focus:bg-primary-100");
      expect(buttonElement).toHaveClass("text-gray-800");
    });

    it("invisible variant", () => {
      render(component("invisible", MockIcon));
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveClass("bg-white");
      expect(buttonElement).toHaveClass("hover:bg-gray-50");
      expect(buttonElement).toHaveClass("focus:bg-gray-100");
      expect(buttonElement).toHaveClass("text-gray-800");
    });
  });

  describe("test the icon", () => {
    it("test the icon props", () => {
      render(component("primary", MockIcon));
      const iconElement = screen.getByTestId("mock-icon");
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe("test click", () => {
    it("test the onClick props", () => {
      render(component("primary", MockIcon));
      const buttonElement = screen.getByRole("button");

      fireEvent.click(buttonElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
