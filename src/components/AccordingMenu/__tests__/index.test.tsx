import { fireEvent, render, screen } from "@testing-library/react";

import AccordingMenu from "../index";

describe("AccordingMenu", () => {
  it("test the props", () => {
    const title = "Título de teste";
    const infos = "Informações de teste";

    render(<AccordingMenu title={title} infos={infos} size="md" />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("test the title color", () => {
    const title = "Título de teste";
    const infos = "Informações de teste";

    render(<AccordingMenu title={title} infos={infos} size="md" />);

    expect(screen.getByText(title)).not.toHaveClass("text-primary-300");

    fireEvent.click(screen.getByText(title));

    expect(screen.getByText(title)).toHaveClass("text-primary-300");
  });

  it("test size lg", () => {
    const title = "Título de teste";
    const infos = "Informações de teste";

    render(<AccordingMenu title={title} infos={infos} size="lg" />);

    const menuButton = document.querySelector(".according-button");
    expect(menuButton).toHaveClass("py-5");
    expect(menuButton).toHaveClass("text-lg");

    fireEvent.click(screen.getByText(title));
    const infosPanel = document.querySelector(".according-infos");
    expect(infosPanel).toHaveClass("pb-6");
    expect(infosPanel).toHaveClass("text-md");
  });

  it("test size md", () => {
    const title = "Título de teste";
    const infos = "Informações de teste";

    render(<AccordingMenu title={title} infos={infos} />); // Tamanho md é o padrão

    const menuButton = document.querySelector(".according-button");
    expect(menuButton).toHaveClass("py-4");
    expect(menuButton).toHaveClass("text-md");

    fireEvent.click(screen.getByText(title));
    const infosPanel = document.querySelector(".according-infos");
    expect(infosPanel).toHaveClass("pb-5");
    expect(infosPanel).toHaveClass("text-sm");
  });

  it("test size sm", () => {
    const title = "Título de teste";
    const infos = "Informações de teste";

    render(<AccordingMenu title={title} infos={infos} size="sm" />);

    const menuButton = document.querySelector(".according-button");
    expect(menuButton).toHaveClass("py-3");
    expect(menuButton).toHaveClass("text-sm");

    fireEvent.click(screen.getByText(title));
    const infosPanel = document.querySelector(".according-infos");
    expect(infosPanel).toHaveClass("pb-4");
    expect(infosPanel).toHaveClass("text-xs");
  });
});
