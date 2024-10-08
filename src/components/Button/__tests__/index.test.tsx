import { fireEvent, render, screen } from "@testing-library/react";
import { ElementType } from "react";
import { vitest } from "vitest";

import Button from "../index";

describe("Button", () => {
  const onClickMock = vitest.fn();

  const component = (
    variant: "primary" | "invisible" | "outline" | "danger",
    size: "xl" | "lg" | "md" | "sm" | "xs",
    disabled: boolean,
    loading?: boolean,
  ) => {
    return (
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        label="botão"
        onClick={onClickMock}
        loading={loading}
      />
    );
  };

  const componentWithIcon = (icon: ElementType, iconSide: "right" | "left") => {
    return <Button variant="primary" size="md" icon={icon} iconSide={iconSide} label="botão" />;
  };

  describe("tests the label", () => {
    it("test the label props", () => {
      render(component("primary", "md", false));
      const label = screen.getByText("botão");
      expect(label).toBeInTheDocument();
    });
  });

  describe("test the colors", () => {
    it("primary variant enable", () => {
      render(component("primary", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("sw-ui-btn-primary");
    });

    it("outline variant enable", () => {
      render(component("outline", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("sw-ui-btn-outline");
    });

    it("invisible variant enable", () => {
      render(component("invisible", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("sw-ui-btn-invisible");
    });

    it("danger variant enable", () => {
      render(component("danger", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("bg-error-600");
      expect(buttonElement).toHaveClass("hover:bg-error-700");
      expect(buttonElement).toHaveClass("active:bg-error-800");
      expect(buttonElement).toHaveClass("focus:bg-error-600");
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("opacity-100");
    });

    it("primary variant disabled", () => {
      render(component("primary", "md", true));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("sw-ui-btn-primary");
      expect(buttonElement).toHaveClass("opacity-40");
    });

    it("outline variant disabled", () => {
      render(component("outline", "md", true));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("sw-ui-btn-outline");
      expect(buttonElement).toHaveClass("opacity-40");
    });

    it("invisible variant disabled", () => {
      render(component("invisible", "md", true));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("sw-ui-btn-invisible");
      expect(buttonElement).toHaveClass("opacity-40");
    });

    it("danger variant disabled", () => {
      render(component("danger", "md", true));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("bg-error-600");
      expect(buttonElement).toHaveClass("hover:bg-error-700");
      expect(buttonElement).toHaveClass("active:bg-error-800");
      expect(buttonElement).toHaveClass("focus:bg-error-600");
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("opacity-40");
    });
  });

  describe("test the sizes", () => {
    it("xl size", () => {
      render(component("primary", "xl", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("text-xl");
      expect(buttonElement).toHaveClass("h-[56px] w-full");
    });

    it("lg size", () => {
      render(component("primary", "lg", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("text-sm");
      expect(buttonElement).toHaveClass("h-[48px] w-full");
    });

    it("md size", () => {
      render(component("primary", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("text-sm");
      expect(buttonElement).toHaveClass("h-[44px] w-full");
    });

    it("sm size", () => {
      render(component("primary", "sm", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("text-sm");
      expect(buttonElement).toHaveClass("h-[40px] w-full");
    });

    it("xs size", () => {
      render(component("primary", "xs", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("text-xs");
      expect(buttonElement).toHaveClass("h-[34px] w-full");
    });
  });

  describe("test the icon", () => {
    it("right side", () => {
      const MockIcon = () => <div data-testid="mock-icon" />;
      render(componentWithIcon(MockIcon, "right"));

      const iconElement = screen.getByTestId("mock-icon");
      expect(iconElement).toBeInTheDocument();
    });

    it("left side", () => {
      const MockIcon = () => <div data-testid="mock-icon" />;
      render(componentWithIcon(MockIcon, "left"));

      const iconElement = screen.getByTestId("mock-icon");
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe("test click", () => {
    it("test the onClick props", () => {
      render(component("primary", "xs", false));
      const buttonElement = screen.getByText("botão");

      fireEvent.click(buttonElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
  describe("test loading", () => {
    it("test the loading props", () => {
      render(component("primary", "xs", false, true));
      const spinnerElement = screen.getByTestId("spinner");
      expect(spinnerElement).toBeInTheDocument();
    });
  });
});
