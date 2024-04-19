import { fireEvent, render, screen } from "@testing-library/react";
import { vitest } from "vitest";

import Modal from "../index";

// Mocks
const mockSetOpen = vitest.fn();
const mockOnClickConfirm = vitest.fn();
const mockOnClickCancel = vitest.fn();

describe("Modal Component", () => {
  it("renders without crashing", () => {
    render(
      <Modal open={true} setOpen={mockSetOpen}>
        <div>Modal Content</div>
      </Modal>,
    );

    const modalContent = screen.getAllByText(/Modal Content/i);
    expect(modalContent).toHaveLength(1);
  });

  it("renders the buttons", () => {
    render(
      <Modal
        open={true}
        setOpen={mockSetOpen}
        onClickConfirm={mockOnClickConfirm}
        onClickCancel={mockOnClickCancel}
      >
        <div>Modal Content</div>
      </Modal>,
    );

    const ConfirmationButton = screen.getAllByText(/Confirmar/i);
    expect(ConfirmationButton).toHaveLength(1);

    const CancelButton = screen.getAllByText(/Cancelar/i);
    expect(CancelButton).toHaveLength(1);
  });

  it("calls handleClose when XMarkIcon is clicked", () => {
    render(
      <Modal open={true} setOpen={mockSetOpen}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByTestId("close-button"));

    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });

  it("calls onClickConfirm when Confirm Button is clicked", () => {
    render(
      <Modal open={true} setOpen={mockSetOpen} onClickConfirm={mockOnClickConfirm}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByText("Confirmar"));

    expect(mockOnClickConfirm).toHaveBeenCalled();
  });

  it("calls onClickCancel when Cancel Button is clicked", () => {
    render(
      <Modal open={true} setOpen={mockSetOpen} onClickCancel={mockOnClickCancel}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByText("Cancelar"));

    expect(mockOnClickCancel).toHaveBeenCalled();
  });
});
