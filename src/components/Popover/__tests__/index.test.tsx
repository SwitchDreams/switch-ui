import { fireEvent, render, screen } from "@testing-library/react";

import Popover from "..";

describe("Popover", () => {
  it("renders the default Popover with title", () => {
    render(
      <Popover color="primary" button="botão">
        <div>teste</div>
      </Popover>,
    );
    const PopoverTitle = screen.getByText("botão");
    expect(PopoverTitle).toBeInTheDocument();

    const button = screen.getByText("botão");

    fireEvent.click(button);

    expect(screen.getByText("teste")).toBeInTheDocument();
  });
});
