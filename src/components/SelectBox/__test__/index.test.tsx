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
        defaultValue={1}
        disabled={false}
        supportText="Choose an option from the list."
        placeholder="Placeholder"
      />
    );
  };

  it("render the text passed in props", () => {
    render(component());

    const labelElement = screen.getByText(/Select an option/i);
    const optionsElement = screen.getByText(/Option 1/i);
    const supportTextElement = screen.getByText(/Choose an option from the list./i);

    expect(labelElement).toBeInTheDocument();
    expect(optionsElement).toBeInTheDocument();
    expect(supportTextElement).toBeInTheDocument();
  });

  it("render the options when click in the select", async () => {
    render(component());
    const element = screen.getByText("Option 1");

    fireEvent.click(element);

    await waitFor(() => {
      const optionsTwo = screen.getByText(/Option 2/i);
      const optionsThree = screen.getByText(/Option 3/i);

      expect(optionsTwo).toBeVisible();
      expect(optionsThree).toBeVisible();
    });
  });

  it("should render selected option when passed value prop", () => {
    const value = 2;
    render(<SelectBox options={options} defaultValue={value} label="Teste" />);
    const selectedOption = screen.getByText("Option 2");
    expect(selectedOption).toBeVisible();
  });

  it("should render selected option when passed defaultValue prop", () => {
    const value = 2;
    render(<SelectBox options={options} defaultValue={value} label="Teste" />);
    const selectedOption = screen.getByText("Option 2");
    expect(selectedOption).toBeVisible();
  });

  describe("multiple", () => {
    it("should render multiple options when multiple is true", () => {
      const value = [1, 2];
      render(
        <SelectBox
          multiple={true}
          options={options}
          value={value}
          defaultValue={value}
          label="Teste"
        />,
      );
      const selectedOption = screen.getByText("Option 1, Option 2");
      expect(selectedOption).toBeVisible();
    });

    it("should add a option in selected options when click in a option", async () => {
      const value = [1, 2];
      render(
        <SelectBox
          multiple={true}
          options={options}
          value={value}
          defaultValue={value}
          label="Teste"
        />,
      );
      const select = screen.getByRole("button");

      fireEvent.click(select);

      await waitFor(() => {
        const option = screen.getByText("Option 3");
        fireEvent.click(option);

        const selectedOptionTwo = screen.getByText("Option 1, Option 2, Option 3");
        expect(selectedOptionTwo).toBeVisible();
      });
    });
  });
});
