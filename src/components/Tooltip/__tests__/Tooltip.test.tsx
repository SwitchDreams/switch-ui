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
