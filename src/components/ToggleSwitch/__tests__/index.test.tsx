import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { vitest } from "vitest";

import ToggleSwitch from "../index";

// Mock the CheckIcon and XMarkIcon components as they're used in the ToggleSwitch component
vitest.mock("@heroicons/react/20/solid", () => ({
  CheckIcon: () => <div data-testid="check-icon" />,
}));

vitest.mock("@heroicons/react/24/solid", () => ({
  XMarkIcon: () => <div data-testid="xmark-icon" />,
}));

// Helper function to render the ToggleSwitch component with optional props
const renderToggleSwitch = (props: any) => {
  return render(<ToggleSwitch {...props} />);
};

describe("ToggleSwitch", () => {
  it("renders without crashing", () => {
    const { container } = renderToggleSwitch({});
    expect(container).toBeInTheDocument();
  });

  it("renders the check icon when checked is true and withIcon is true", () => {
    const { getByTestId } = renderToggleSwitch({
      checked: true,
      withIcon: true,
    });
    expect(getByTestId("check-icon")).toBeInTheDocument();
  });

  it("renders the xmark icon when checked is false and withIcon is true", () => {
    const { getByTestId } = renderToggleSwitch({
      checked: false,
      withIcon: true,
    });
    expect(getByTestId("xmark-icon")).toBeInTheDocument();
  });

  it("does not render the icon when withIcon is false", () => {
    const { queryByTestId } = renderToggleSwitch({
      checked: true,
      withIcon: false,
    });
    expect(queryByTestId("check-icon")).toBeNull();
    expect(queryByTestId("xmark-icon")).toBeNull();
  });

  it("calls onChange prop when clicked", () => {
    const onChangeMock = vitest.fn();
    const { getByRole } = renderToggleSwitch({
      checked: false,
      onChange: onChangeMock,
    });

    fireEvent.click(getByRole("switch"));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);

    fireEvent.click(getByRole("switch"));
    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });

  it("does not call onChange prop when disabled", () => {
    const onChangeMock = vitest.fn();
    const { getByRole } = renderToggleSwitch({
      checked: false,
      onChange: onChangeMock,
      disabled: true,
    });

    fireEvent.click(getByRole("switch"));
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
