import { StarIcon } from "@heroicons/react/20/solid";
import { render, screen } from "@testing-library/react";

import { Badge } from "..";

describe("Show Badge", () => {
  it("renders the Badge", () => {
    render(<Badge label="Hello world" />);
    const badgeComponent = screen.getByText(/Hello world/i);
    expect(badgeComponent).toBeInTheDocument();
  });
});
describe("Badge With icon", () => {
  it("renders the Badge with XMarkIcon on right", () => {
    render(<Badge label="Hello world" leftIcon={StarIcon} />);
    const badgeComponent = screen.getByText(/Hello world/i);
    const iconElement = badgeComponent.querySelector("svg");

    expect(badgeComponent).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
  it("renders the Badge with XMarkIcon on left", () => {
    render(<Badge label="Hello world" rightIcon={StarIcon} />);
    const badgeComponent = screen.getByText(/Hello world/i);
    const iconElement = badgeComponent.querySelector("svg");

    expect(badgeComponent).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
describe("Badge With outline", () => {
  it("renders the Badge with outline", () => {
    render(<Badge label="Hello world" outline />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("border")).toBe(true);
  });
});
describe("Badge With opacity", () => {
  it("renders the Badge with opacity", () => {
    render(<Badge label="Hello world" opacity />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("bg-opacity-50")).toBe(true);
  });
});
describe("Badge With opacity and outline", () => {
  it("renders the Badge with opacity", () => {
    render(<Badge label="Hello world" opacity outline />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("bg-opacity-50")).toBe(true);
    expect(badgeComponent.classList.contains("border")).toBe(true);
  });
});
describe("Color styles", () => {
  it("renders the Badge primary", () => {
    render(<Badge label="Hello world" color="primary" />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("sw-ui-badge-primary")).toBe(true);
  });
  it("renders the Badge secondary", () => {
    render(<Badge label="Hello world" color="secondary" />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("sw-ui-badge-secondary")).toBe(true);
  });
  it("renders the Badge success", () => {
    render(<Badge label="Hello world" color="success" />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("sw-ui-badge-success")).toBe(true);
  });
  it("renders the Badge warning", () => {
    render(<Badge label="Hello world" color="warning" />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("sw-ui-badge-warning")).toBe(true);
  });
  it("renders the Badge danger", () => {
    render(<Badge label="Hello world" color="danger" />);
    const badgeComponent = screen.getByText(/Hello world/i);

    expect(badgeComponent).toBeInTheDocument();
    expect(badgeComponent.classList.contains("sw-ui-badge-danger")).toBe(true);
  });
});
