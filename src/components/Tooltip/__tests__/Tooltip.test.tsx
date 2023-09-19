import { render, screen } from "@testing-library/react";

import Tooltip from "..";

describe("Tooltip", () => {
  it("renders the default tooltip with title", () => {
    render(<Tooltip title="Default Tooltip" content={<div>Tooltip Content</div>} />);
    const tooltipTitle = screen.getByText("Default Tooltip");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with description", () => {
    render(
      <Tooltip
        title="Tooltip with Description"
        description="This is a description"
        content={<div>Tooltip Content</div>}
      />,
    );
    const tooltipTitle = screen.getByText("Tooltip with Description");
    const tooltipDescription = screen.getByText("This is a description");
    expect(tooltipTitle).toBeInTheDocument();
    expect(tooltipDescription).toBeInTheDocument();
  });

  it("renders the tooltip at the top", () => {
    render(<Tooltip title="Tooltip (top)" position="top" content={<div>Tooltip Content</div>} />);
    const tooltipTitle = screen.getByText("Tooltip (top)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the bottom", () => {
    render(
      <Tooltip title="Tooltip (bottom)" position="bottom" content={<div>Tooltip Content</div>} />,
    );
    const tooltipTitle = screen.getByText("Tooltip (bottom)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the right", () => {
    render(
      <Tooltip title="Tooltip (right)" position="right" content={<div>Tooltip Content</div>} />,
    );
    const tooltipTitle = screen.getByText("Tooltip (right)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the left", () => {
    render(<Tooltip title="Tooltip (left)" position="left" content={<div>Tooltip Content</div>} />);
    const tooltipTitle = screen.getByText("Tooltip (left)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the top-right", () => {
    render(
      <Tooltip
        title="Tooltip (topRight)"
        position="topRight"
        content={<div>Tooltip Content</div>}
      />,
    );
    const tooltipTitle = screen.getByText("Tooltip (topRight)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the bottom-right", () => {
    render(
      <Tooltip
        title="Tooltip (bottomRight)"
        position="bottomRight"
        content={<div>Tooltip Content</div>}
      />,
    );
    const tooltipTitle = screen.getByText("Tooltip (bottomRight)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the top-left", () => {
    render(
      <Tooltip title="Tooltip (topLeft)" position="topLeft" content={<div>Tooltip Content</div>} />,
    );
    const tooltipTitle = screen.getByText("Tooltip (topLeft)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip at the bottom-left", () => {
    render(
      <Tooltip
        title="Tooltip (bottomLeft)"
        position="bottomLeft"
        content={<div>Tooltip Content</div>}
      />,
    );
    const tooltipTitle = screen.getByText("Tooltip (bottomLeft)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with primary color", () => {
    render(
      <Tooltip title="Tooltip (primary)" color="primary" content={<div>Tooltip Content</div>} />,
    );
    const tooltipTitle = screen.getByText("Tooltip (primary)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with secondary color", () => {
    render(
      <Tooltip
        title="Tooltip (secondary)"
        color="secondary"
        content={<div>Tooltip Content</div>}
      />,
    );
    const tooltipTitle = screen.getByText("Tooltip (secondary)");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("renders the tooltip with thirteary color", () => {
    render(
      <Tooltip title="Tooltip (tertiary)" color="tertiary" content={<div>Tooltip Content</div>} />,
    );
    const tooltipTitle = screen.getByText("Tooltip (tertiary)");
    expect(tooltipTitle).toBeInTheDocument();
  });
});
