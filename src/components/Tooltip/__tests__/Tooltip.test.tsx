import { fireEvent, render, screen } from "@testing-library/react";

import Tooltip from "../index";

describe("Tooltip", () => {
  it("renders the tooltip with children", () => {
    render(
      <Tooltip content="Test1" title="test1">
        <p>Aloha</p>
      </Tooltip>,
    );
    expect(screen.getByText(/Test1/i)).toBeInTheDocument();
    const tooltipTrigger = screen.getByText("Test1");
    fireEvent.mouseEnter(tooltipTrigger);
    expect(screen.getByText(/Aloha/i)).toBeInTheDocument();
  });

  it("renders the tooltip without children", () => {
    render(
      <Tooltip content="Test2" title="test1" description="testando o componente sem o children" />,
    );
    expect(screen.getByText(/Test2/i)).toBeInTheDocument();
    const tooltipTrigger = screen.getByText("Test2");
    fireEvent.mouseEnter(tooltipTrigger);
    expect(screen.getByText(/testando o componente sem o children/i)).toBeInTheDocument();
  });

  it("renders the tooltip with primary color", () => {
    render(<Tooltip content="Test3" title="test1" color="primary" />);
    expect(screen.getByText(/Test3/i)).toBeInTheDocument();
    const tooltipTrigger = screen.getByText("Test3");
    fireEvent.mouseEnter(tooltipTrigger);
    expect(screen.getByTestId("tooltip-content")).toHaveClass("bg-gray-950 text-white");
  });

  it("renders the tooltip with secondary color", () => {
    render(<Tooltip content="Test4" title="test1" color="secondary" />);
    expect(screen.getByText(/Test4/i)).toBeInTheDocument();
    const tooltipTrigger = screen.getByText("Test4");
    fireEvent.mouseEnter(tooltipTrigger);
    expect(screen.getByTestId("tooltip-content")).toHaveClass("bg-white text-gray-950");
  });

  it("renders the tooltip with tertiary color", () => {
    render(<Tooltip content="Test5" title="test1" color="tertiary" />);
    expect(screen.getByText(/Test5/i)).toBeInTheDocument();
    const tooltipTrigger = screen.getByText("Test5");
    fireEvent.mouseEnter(tooltipTrigger);
    expect(screen.getByTestId("tooltip-content")).toHaveClass("bg-primary-300 text-gray-100");
  });
});
