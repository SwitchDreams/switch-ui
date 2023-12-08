import "@testing-library/jest-dom/extend-expect"; // Importante para estender as asserções do Jest-Dom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SelectBox from "../index";

describe("SelectBox", () => {
  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const component = () => {
    return (
      <SelectBox
        options={options}
        size="md"
        label="Select an option"
        disabled={false}
        supportText="Choose an option from the list."
        placeholder="Placeholder"
      />
    );
  };

  it("render the text passed in props", () => {
    render(component());

    const labelElement = screen.getByText(/Select an option/i);
    const supportTextElement = screen.getByText(/Choose an option from the list./i);

    expect(labelElement).toBeInTheDocument();
    expect(supportTextElement).toBeInTheDocument();
  });

  it("should render selected option when passed value prop", () => {
    const value = 2;
    render(<SelectBox options={options} value={value} label="Teste" />);
    const selectedOption = screen.getByText("Option 2");
    expect(selectedOption).toBeVisible();
  });

  describe("multiple", () => {
    it("should render the placeholder when no option is selected", () => {
      render(
        <SelectBox options={options} label="Teste" multiple={true} placeholder="Placeholder" />,
      );
      const placeholder = screen.getByText("Placeholder");
      expect(placeholder).toBeVisible();
    });
    it("should render multiple options when multiple is true", () => {
      const value = [1, 2];
      render(<SelectBox multiple={true} options={options} value={value} label="Teste" />);
      const selectedOption = screen.getByText("Option 1, Option 2");
      expect(selectedOption).toBeVisible();
    });

    it("should add a option in selected options when click in a option", async () => {
      const value = [1, 2];
      render(<SelectBox multiple={true} options={options} value={value} label="Teste" />);
      const select = screen.getByRole("button");

      fireEvent.click(select);

      await waitFor(() => {
        const option = screen.getByText("Option 3");
        fireEvent.click(option);

        const selectedOptionTwo = screen.getByText("Option 1, Option 2, Option 3");
        expect(selectedOptionTwo).toBeVisible();
      });
    });

    it("should render error message", () => {
      const value = [1, 2];
      render(
        <SelectBox
          multiple={true}
          options={options}
          value={value}
          label="Teste"
          error={true}
          errorMsg="Mensagem de erro"
        />,
      );

      expect(screen.getByText("Mensagem de erro")).toBeInTheDocument();
    });
  });
});
