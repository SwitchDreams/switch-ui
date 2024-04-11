import { render, screen } from "@testing-library/react";

import Modal from "../index";

describe("Modal Component", () => {
  it("renders without crashing", () => {
    render(
      <Modal open={true} setOpen={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    const modalContent = screen.getAllByText(/Modal Content/i);
    expect(modalContent).toHaveLength(2);
  });
  it("renders the buttons", () => {
    render(
      <Modal open={true} setOpen={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    const ConfirmationButton = screen.getAllByText(/Confirmar/i);
    expect(ConfirmationButton).toHaveLength(2);
    const CancelButton = screen.getAllByText(/Cancelar/i);
    expect(CancelButton).toHaveLength(2);
  });
});
