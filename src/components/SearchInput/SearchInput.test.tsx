import { act, fireEvent, render, waitFor } from "@testing-library/react";

import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  const options = [
    { label: "Opção 1", value: 1 },
    { label: "Opção 2", value: 2 },
    { label: "Opção 3", value: 3 },
  ];

  it("deve exibir a lista de opções filtradas após a digitação", async () => {
    const setSelectedValue = () => {};

    const { queryByText, getByLabelText } = render(
      <SearchInput
        name="teste1"
        options={options}
        label="Teste"
        placeholder="Buscar"
        setSelectedValue={setSelectedValue}
      />,
    );

    const inputElement = getByLabelText("Teste") as HTMLInputElement;

    act(() => {
      fireEvent.change(inputElement, { target: { value: "o" } });
    });

    await waitFor(() => {
      expect(queryByText("Opção 1")).to.exist;
      expect(queryByText("Opção 2")).to.exist;
      expect(queryByText("Opção 3")).to.exist;
    });
  });
  // TODO: Fix this tests.
  // it("deve selecionar uma opção ao clicar nela", async () => {
  //   let selectedValue = "";

  //   const setSelectedValue = (value: string) => {
  //     selectedValue = value;
  //   };

  //   const { getByText, getByLabelText } = render(
  //     <SearchInput
  //       name="teste1"
  //       options={options}
  //       label="Teste"
  //       placeholder="Buscar"
  //       setSelectedValue={setSelectedValue}
  //       fetchRemoteData={mockFetchRemoteData}
  //     />,
  //   );

  //   const inputElement = getByLabelText("Teste") as HTMLInputElement;

  //   act(() => {
  //     fireEvent.change(inputElement, { target: { value: "o" } });
  //   });

  //   const optionElement = getByText("Opção 1");
  //   console.log(optionElement);
  //   waitFor(() => {
  //     fireEvent.click(optionElement);
  //   });

  //   expect(selectedValue).to.equal(options[0]);
  // });

  // it("deve limpar a seleção e a entrada ao clicar no ícone de limpar", async () => {
  //   let selectedValue = "Opção 1";

  //   const setSelectedValue = (value: string) => {
  //     selectedValue = value;
  //   };

  //   const { getByTestId, queryByText, getByLabelText, getByText } = render(
  //     <SearchInput
  //       name="teste1"
  //       options={options}
  //       label="Teste"
  //       setSelectedValue={setSelectedValue}
  //     />,
  //   );

  //   const inputElement = getByLabelText("Teste") as HTMLInputElement;

  //   fireEvent.change(inputElement, { target: { value: "o" } });

  //   const optionElement = getByText("Opção 1");

  //   fireEvent.click(optionElement);

  //   await waitFor(() => {
  //     expect(queryByText("Opção 1")).not.to.exist;
  //     expect(selectedValue).to.equal("");
  //   });
  // });
});
