import { render } from "@testing-library/react";

import Avatar from "../index";

describe("Avatar", () => {
  const component = (
    color: "primary" | "gray",
    size: "xl" | "lg" | "md" | "sm" | "xs",
    isOn: boolean,
    name: string,
    avatarUrl?: string,
  ) => {
    return <Avatar color={color} isOn={isOn} name={name} avatarUrl={avatarUrl} size={size} />;
  };

  describe("test the name props", () => {
    it("test the initials", () => {
      const { getByText } = render(component("primary", "xl", false, "marty mcfly"));
      expect(getByText("MM")).toBeInTheDocument();
    });
  });

  describe("test the color props", () => {
    it("test the primary color", () => {
      const { container } = render(component("primary", "xl", false, "marty mcfly"));
      expect(container.querySelector(".bg-primary-25, text-primary-400")).toBeInTheDocument();
    });
    it("test the gray color", () => {
      const { container } = render(component("gray", "xl", false, "marty mcfly"));
      expect(container.querySelector(".bg-gray-100, text-gray-600")).toBeInTheDocument();
    });
  });

  describe("test the size props", () => {
    it("test the size xl", () => {
      const { container } = render(component("primary", "xl", false, "marty mcfly"));
      expect(container.querySelector(".h-16, .w-16 .test-2xl")).toBeInTheDocument();
    });
    it("test the size lg", () => {
      const { container } = render(component("primary", "lg", false, "marty mcfly"));
      expect(container.querySelector(".h-14, .w-14 .test-xl")).toBeInTheDocument();
    });
    it("test the size md", () => {
      const { container } = render(component("primary", "md", false, "marty mcfly"));
      expect(container.querySelector(".h-12, .w-12 .test-lg")).toBeInTheDocument();
    });
    it("test the size sm", () => {
      const { container } = render(component("primary", "sm", false, "marty mcfly"));
      expect(container.querySelector(".h-10, .w-10 .test-md")).toBeInTheDocument();
    });
    it("test the size xs", () => {
      const { container } = render(component("primary", "xs", false, "marty mcfly"));
      expect(container.querySelector(".h-8, .w-8 .test-sm")).toBeInTheDocument();
    });
  });

  describe("test the isOn props", () => {
    it("test if the green circle is render", () => {
      const { container } = render(component("primary", "sm", true, "marty mcfly"));
      expect(container.querySelector(".online-circle")).toBeInTheDocument();
    });
  });

  describe("test the avatarUrl props", () => {
    it("test if the image is render", () => {
      const { container } = render(
        component("primary", "xl", false, "marty mcfly", "http://teste.com"),
      );
      const imgElement = container.querySelector("img");
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", "http://teste.com");
    });
  });
});