import { fireEvent, render, screen } from "@testing-library/react";

import AccordionMenu from "../index";

describe("AccordionMenu", () => {
  it("test the props", () => {
    const title = "Título de teste";
    const children = <h1>Informações de teste</h1>;

    render(
      <AccordionMenu title={title} size="md">
        {children}
      </AccordionMenu>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("test the title color", () => {
    const title = "Título de teste";
    const children = <h1>Informações de teste</h1>;

    render(
      <AccordionMenu title={title} size="md">
        {children}
      </AccordionMenu>,
    );

    expect(screen.getByText(title)).not.toHaveClass("text-primary-300");

    fireEvent.click(screen.getByText(title));

    expect(screen.getByText(title)).toHaveClass("text-primary-300");
  });

  it("test size lg", () => {
    const title = "Título de teste";
    const children = <h1>Informações de teste</h1>;

    render(
      <AccordionMenu title={title} size="lg">
        {children}
      </AccordionMenu>,
    );

    const menuButton = document.querySelector(".accordion-button");
    expect(menuButton).toHaveClass("py-5");
    expect(menuButton).toHaveClass("text-lg");

    fireEvent.click(screen.getByText(title));
    const infosPanel = document.querySelector(".accordion-infos");
    expect(infosPanel).toHaveClass("pb-6");
    expect(infosPanel).toHaveClass("text-md");
  });

  it("test size md", () => {
    const title = "Título de teste";
    const children = <h1>Informações de teste</h1>;

    render(
      <AccordionMenu title={title} size="md">
        {children}
      </AccordionMenu>,
    );

    const menuButton = document.querySelector(".accordion-button");
    expect(menuButton).toHaveClass("py-4");
    expect(menuButton).toHaveClass("text-md");

    fireEvent.click(screen.getByText(title));
    const infosPanel = document.querySelector(".accordion-infos");
    expect(infosPanel).toHaveClass("pb-5");
    expect(infosPanel).toHaveClass("text-sm");
  });

  it("test size sm", () => {
    const title = "Título de teste";
    const children = <h1>Informações de teste</h1>;

    render(
      <AccordionMenu title={title} size="sm">
        {children}
      </AccordionMenu>,
    );

    const menuButton = document.querySelector(".accordion-button");
    expect(menuButton).toHaveClass("py-3");
    expect(menuButton).toHaveClass("text-sm");

    fireEvent.click(screen.getByText(title));
    const infosPanel = document.querySelector(".accordion-infos");
    expect(infosPanel).toHaveClass("pb-4");
    expect(infosPanel).toHaveClass("text-xs");
  });
});
