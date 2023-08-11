import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { Slider } from "./Slider";

describe("Slider", () => {
  it("should render with default props", () => {
    render(<Slider min={0} max={100} />);
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
  });

  it("should update value on input change", () => {
    render(<Slider min={0} max={100} />);
    const slider = screen.getByRole("slider");
    const valueBox = screen.getByTestId("value-box");

    fireEvent.change(slider, { target: { value: "50" } });

    waitFor(() => expect(valueBox).toHaveTextContent("50"));
  });
});
