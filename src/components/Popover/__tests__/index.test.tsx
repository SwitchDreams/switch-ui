import { fireEvent, render, screen } from "@testing-library/react";

import Popover from "..";

describe("Popover", () => {
  it("renders the default Popover with title", () => {
    render(
      <Popover button="botão">
        <div>teste</div>
      </Popover>,
    );
    const PopoverTitle = screen.getByText("botão");
    expect(PopoverTitle).toBeInTheDocument();

    const button = screen.getByText("botão");

    fireEvent.click(button);

    expect(screen.getByText("teste")).toBeInTheDocument();
  });
  it("applies custom class names to the Popover", () => {
    render(
      <Popover button="botão" className="custom-class">
        <div>Custom Class Test</div>
      </Popover>,
    );

    const PopoverButton = screen.getByText("botão");
    fireEvent.click(PopoverButton);

    const popoverPanel = screen.getByText("Custom Class Test").parentElement;
    expect(popoverPanel).toHaveClass("custom-class");
  });
});
