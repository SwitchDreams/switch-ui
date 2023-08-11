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
  ) => {
    return (
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        label="botão"
        onClick={onClickMock}
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
      expect(buttonElement).toHaveClass("bg-primary-300");
      expect(buttonElement).toHaveClass("hover:bg-primary-400");
      expect(buttonElement).toHaveClass("active:bg-primary-500");
      expect(buttonElement).toHaveClass("focus:bg-primary-300");
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("opacity-100");
    });

    // it("secondary variant enable", () => {
    //   render(component("secondary", "md", false));
    //   const buttonElement = screen.getByText("botão");
    //   expect(buttonElement).toHaveClass("bg-secondary-300");
    //   expect(buttonElement).toHaveClass("hover:bg-secondary-400");
    //   expect(buttonElement).toHaveClass("active:bg-secondary-500");
    //   expect(buttonElement).toHaveClass("focus:bg-secondary-300");
    //   expect(buttonElement).toHaveClass("text-white");
    //   expect(buttonElement).toHaveClass("opacity-100");
    // });

    it("outline variant enable", () => {
      render(component("outline", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("bg-white");
      expect(buttonElement).toHaveClass("hover:bg-primary-25");
      expect(buttonElement).toHaveClass("active:bg-primary-100");
      expect(buttonElement).toHaveClass("focus:bg-white");
      expect(buttonElement).toHaveClass("text-primary-300");
      expect(buttonElement).toHaveClass("opacity-100");
      expect(buttonElement).toHaveClass("border border-solid border-primary-50");
    });

    it("invisible variant enable", () => {
      render(component("invisible", "md", false));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("bg-white");
      expect(buttonElement).toHaveClass("hover:bg-gray-50");
      expect(buttonElement).toHaveClass("active:bg-gray-100");
      expect(buttonElement).toHaveClass("focus:bg-white");
      expect(buttonElement).toHaveClass("text-gray-800");
      expect(buttonElement).toHaveClass("opacity-100");
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
      expect(buttonElement).toHaveClass("bg-primary-300");
      expect(buttonElement).toHaveClass("hover:bg-primary-400");
      expect(buttonElement).toHaveClass("active:bg-primary-500");
      expect(buttonElement).toHaveClass("focus:bg-primary-300");
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("opacity-40");
    });

    it("outline variant disabled", () => {
      render(component("outline", "md", true));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("bg-white");
      expect(buttonElement).toHaveClass("hover:bg-primary-25");
      expect(buttonElement).toHaveClass("active:bg-primary-100");
      expect(buttonElement).toHaveClass("focus:bg-white");
      expect(buttonElement).toHaveClass("text-primary-300");
      expect(buttonElement).toHaveClass("opacity-40");
      expect(buttonElement).toHaveClass("border border-solid border-primary-50");
    });

    it("invisible variant disabled", () => {
      render(component("invisible", "md", true));
      const buttonElement = screen.getByText("botão");
      expect(buttonElement).toHaveClass("bg-white");
      expect(buttonElement).toHaveClass("hover:bg-gray-50");
      expect(buttonElement).toHaveClass("active:bg-gray-100");
      expect(buttonElement).toHaveClass("focus:bg-white");
      expect(buttonElement).toHaveClass("text-gray-800");
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
});
