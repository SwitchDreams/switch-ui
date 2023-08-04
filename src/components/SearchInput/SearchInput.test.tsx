import { fireEvent, render, screen } from "@testing-library/react";

import SearchInput from "./SearchInput";

const options = [{ info: "Option 1" }, { info: "Option 2" }, { info: "Option 3" }];

describe("SearchInput render", () => {
  it("renders with placeholder", () => {
    render(<SearchInput label="Search" />);
    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();
  });

  it("updates value on input change", () => {
    render(<SearchInput label="Search" />);
    const inputElement = screen.getByPlaceholderText("Search");

    fireEvent.change(inputElement, { target: { value: "hello" } });

    expect(inputElement.value).toBe("hello");
  });

  it("shows options on input focus", () => {
    render(<SearchInput label="Search" options={options} />);
    const inputElement = screen.getByPlaceholderText("Search");

    fireEvent.focus(inputElement);

    options.forEach((option) => {
      const optionElement = screen.getByText(option.info);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("selects option on click", () => {
    render(<SearchInput label="Search" options={options} />);
    const inputElement = screen.getByPlaceholderText("Search");

    fireEvent.focus(inputElement);

    const optionElement = screen.getByText("Option 2");
    fireEvent.click(optionElement);

    expect(inputElement.value).toBe("Option 2");
  });

  it("clears selected value on XMarkIcon click", () => {
    render(<SearchInput label="Search" options={options} />);
    const inputElement = screen.getByPlaceholderText("Search");

    fireEvent.focus(inputElement);

    const optionElement = screen.getByText("Option 1");
    fireEvent.click(optionElement);

    expect(inputElement.value).toBe("Option 1");

    const xIcon = screen.getByTestId("clear-icon");
    fireEvent.click(xIcon);

    expect(inputElement.value).toBe("");
  });
});
