import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vitest } from "vitest";

import TextArea from "./";

describe("TextArea", () => {
  test("renders correct", () => {
    render(<TextArea label="Teste" name="test" />);
    const textareaElement = screen.getByLabelText("Teste");
    expect(textareaElement).toBeInTheDocument();
  });

  test("renders placeholder", () => {
    const placeholderText = "Digite aqui";
    render(<TextArea label="Teste" name="test" placeholder={placeholderText} />);
    const textareaElement = screen.getByLabelText("Teste");
    expect(textareaElement).toHaveAttribute("placeholder", placeholderText);
  });

  test("verify user interaction", () => {
    const handleChange = vitest.fn();
    render(<TextArea label="Teste" name="test" onChange={handleChange} />);

    const textareaElement = screen.getByLabelText("Teste") as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: "Texto de teste" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textareaElement.value).toBe("Texto de teste");
  });

  test("correct css when error", () => {
    render(<TextArea label="Teste" name="test" error />);
    const textareaElement = screen.getByLabelText("Teste");

    // Exemplo: Verificando se a classe de erro está presente
    expect(textareaElement).toHaveClass("border-error-500");
  });
});
