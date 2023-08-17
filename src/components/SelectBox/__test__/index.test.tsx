import "@testing-library/jest-dom/extend-expect"; // Importante para estender as asserções do Jest-Dom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SelectBox from "../index";

describe("SelectBox", () => {
  const component = () => {
    const options = [
      { value: 1, label: "Option 1" },
      { value: 2, label: "Option 2" },
      { value: 3, label: "Option 3" },
    ];
    return (
      <SelectBox
        options={options}
        size="md"
        label="Select an option"
        defaultValue={1}
        disabled={false}
        supportText="Choose an option from the list."
        placeholder="Placeholder"
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
    it("test the options", async () => {
      render(component());
      const element = screen.getByText("Option 1");

      fireEvent.click(element);

      await waitFor(() => {
        const optionsTwo = screen.getByText(/Option 2/i);
        const optionsThree = screen.getByText(/Option 3/i);

        expect(optionsTwo).toBeInTheDocument();
        expect(optionsThree).toBeInTheDocument();
      });
    });
  });
});
