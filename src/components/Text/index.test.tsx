import { render, screen } from "@testing-library/react";

import { Text } from "../Text";

describe("Text", () => {
  it("renders text", () => {
    render(<Text text="Texto teste" as="p" />);
    const TextContent = screen.getByText(/Texto teste/i);
    expect(TextContent).toBeInTheDocument();
  });
  it("renders text as <p> element", () => {
    render(<Text text="Texto teste" as="p" />);
    const TextElement = screen.getByText(/Texto teste/i);

    expect(TextElement.tagName).toBe("P");
  });
  it("renders with size 'sm'", () => {
    render(<Text text="Texto teste" as="p" textSize="sm" />);
    const TextElement = screen.getByText(/Texto teste/i);

    expect(TextElement).toHaveAttribute("textSize", "sm");
  });
  it("renders with the class 'text-orange-100'", () => {
    render(<Text text="Texto teste" as="p" className="text-orange-100" />);
    const TextElement = screen.getByText(/Texto teste/i);

    expect(TextElement).toHaveClass("text-orange-100");
  });
});
