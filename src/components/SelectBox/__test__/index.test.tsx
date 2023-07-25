import "@testing-library/jest-dom/extend-expect"; // Importante para estender as asserções do Jest-Dom

import { fireEvent, render, screen } from "@testing-library/react";

import SelectBox from "../index";

describe("Button", () => {
  const component = () => {
    const options = [
      { id: 1, option: 'Option 1' },
      { id: 2, option: 'Option 2' },
      { id: 3, option: 'Option 3' },
    ]
    return (
      <SelectBox
        options={options}
        size="md"
        label="Select an option"
        disabled={false}
        supportText="Choose an option from the list."
      />
    );
  };

  describe("tests the props", () => {
    it("test the text props", () => {
      render(component());

      const labelElement = screen.getByText(/Select an option/i);
      const optionsElement = screen.getByText(/Option 1/i);
      const supportTextElement = screen.getByText(/Choose an option from the list./i);

      expect(labelElement).toBeInTheDocument();
      expect(optionsElement).toBeInTheDocument();
      expect(supportTextElement).toBeInTheDocument();
    });
  });

  describe("test the dropdown", () => {
    it("test the options", () => {
      render(component());
      const element = screen.getByText("Option 1");

      fireEvent.click(element);
      const optionsTwo = screen.getByText(/Option 2/i);
      const optionsThree = screen.getByText(/Option 3/i);

      expect(optionsTwo).toBeInTheDocument();
      expect(optionsThree).toBeInTheDocument();
    });
  });
});
