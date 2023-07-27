import { render, screen } from "@testing-library/react";

import { Text } from "../Text";

describe("Text", () => {
  it("renders text", () => {
    render(<Text as="p">Texto teste </Text>);
    const TextContent = screen.getByText(/Texto teste/i);
    expect(TextContent).toBeInTheDocument();
  });
  it("renders text as <p> element", () => {
    render(<Text as="p">Texto teste</Text>);
    const TextElement = screen.getByText(/Texto teste/i);

    expect(TextElement.tagName).toBe("P");
  });
  it("renders with size 'sm'", () => {
    render(
      <Text as="p" size="sm">
        Texto teste
      </Text>,
    );
    const TextElement = screen.getByText(/Texto teste/i);

    expect(TextElement).toHaveClass("text-sm");
  });
  it("renders with the class 'text-orange-100'", () => {
    render(
      <Text as="p" className="text-orange-100">
        Texto teste
      </Text>,
    );
    const TextElement = screen.getByText(/Texto teste/i);

    expect(TextElement).toHaveClass("text-orange-100");
  });
});
