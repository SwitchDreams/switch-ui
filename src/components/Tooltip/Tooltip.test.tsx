import { render, screen } from "@testing-library/react";

import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  it("renders the default tooltip with title", () => {
    render(<Tooltip title="Default Tooltip" />);
    const tooltipTitle = screen.getByText("Default Tooltip");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with description", () => {
    render(<Tooltip title="Tooltip with Description" description="This is a description" />);
    const tooltipTitle = screen.getByText("Tooltip with Description");
    const tooltipDescription = screen.getByText("This is a description");
    expect(tooltipTitle).toBeInTheDocument();
    expect(tooltipDescription).toBeInTheDocument();
  });

  it("renders the tooltip at the top", () => {
    render(<Tooltip title="Tooltip (top)" position="top" />);
    const tooltipTitle = screen.getByText("Tooltip (top)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the bottom", () => {
    render(<Tooltip title="Tooltip (bottom)" position="bottom" />);
    const tooltipTitle = screen.getByText("Tooltip (bottom)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the right", () => {
    render(<Tooltip title="Tooltip (right)" position="right" />);
    const tooltipTitle = screen.getByText("Tooltip (right)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the left", () => {
    render(<Tooltip title="Tooltip (left)" position="left" />);
    const tooltipTitle = screen.getByText("Tooltip (left)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the top-right", () => {
    render(<Tooltip title="Tooltip (topRight)" position="topRight" />);
    const tooltipTitle = screen.getByText("Tooltip (topRight)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the bottom-right", () => {
    render(<Tooltip title="Tooltip (bottomRight)" position="bottomRight" />);
    const tooltipTitle = screen.getByText("Tooltip (bottomRight)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the top-left", () => {
    render(<Tooltip title="Tooltip (topLeft)" position="topLeft" />);
    const tooltipTitle = screen.getByText("Tooltip (topLeft)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the bottom-left", () => {
    render(<Tooltip title="Tooltip (bottomLeft)" position="bottomLeft" />);
    const tooltipTitle = screen.getByText("Tooltip (bottomLeft)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with primary color", () => {
    render(<Tooltip title="Tooltip (primary)" color="primary" />);
    const tooltipTitle = screen.getByText("Tooltip (primary)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with secondary color", () => {
    render(<Tooltip title="Tooltip (secondary)" color="secondary" />);
    const tooltipTitle = screen.getByText("Tooltip (secondary)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with thirteary color", () => {
    render(<Tooltip title="Tooltip (thirteary)" color="thirteary" />);
    const tooltipTitle = screen.getByText("Tooltip (thirteary)");
    expect(tooltipTitle).toBeInTheDocument();
  });
});
