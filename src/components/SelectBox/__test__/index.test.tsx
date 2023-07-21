import "@testing-library/jest-dom/extend-expect"; // Importante para estender as asserções do Jest-Dom

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import SelectBox from "../index";

describe("Button", () => {
  const component = () => {
    return (
      <SelectBox
        options={["Option 1", "Option 2", "Option 3"]}
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
