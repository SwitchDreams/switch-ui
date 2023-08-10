import { render } from "@testing-library/react";

import { ProgressBar } from "./ProgressBar";

describe("ProgressBar Component", () => {
  it("renders without crashing", () => {
    render(<ProgressBar percentage={50} />);
  });

  it("renders with custom percentage", () => {
    const { getByTestId } = render(<ProgressBar percentage={75} />);
    const progressBar = getByTestId("progress-bar");

    expect(progressBar.style.width).toBe("75%");
  });

  it("renders with default size variant", () => {
    const { getByTestId } = render(<ProgressBar percentage={50} />);
    const progressBar = getByTestId("progress-bar");

    expect(progressBar).toHaveClass("h-2");
  });

  it("renders with custom size variant", () => {
    const { getByTestId } = render(<ProgressBar percentage={50} size="xl" />);
    const progressBar = getByTestId("progress-bar");

    expect(progressBar).toHaveClass("h-4");
  });
});
