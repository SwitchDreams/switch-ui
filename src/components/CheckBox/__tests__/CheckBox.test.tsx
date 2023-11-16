import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import { CheckBox } from "..";

const getTailwindClasses = (element: any) => {
  const classAttribute = element.getAttribute("class");
  return classAttribute ? classAttribute.split(" ") : [];
};

describe("CheckBox", () => {
  it("renders the CheckBox", () => {
    render(<CheckBox name="testCheckBox" />);
    const checkBoxElement = screen.getByLabelText("testCheckBox");
    expect(checkBoxElement).toBeInTheDocument();
  });

  it("renders the CheckBox with disabled attribute", () => {
    render(<CheckBox name="testCheckBox" disabled />);
    const checkBoxElement = screen.getByLabelText("testCheckBox");
    expect(checkBoxElement).toBeDisabled();
  });

  it("applies appropriate Tailwind CSS classes based on variants", () => {
    render(<CheckBox name="testCheckBox" size="small" shape="circle" color="primary" />);
    const checkBoxElement = screen.getByLabelText("testCheckBox");
    const classes = getTailwindClasses(checkBoxElement);
    expect(classes).toContain("h-4");
    expect(classes).toContain("w-4");
    expect(classes).toContain("rounded-full");
    expect(classes).toContain("checkbox-primary");
  });

  it("applies default Tailwind CSS classes when no variants are provided", () => {
    render(<CheckBox name="testCheckBox" />);
    const checkBoxElement = screen.getByLabelText("testCheckBox"); // Use getByLabelText to access the CheckBox
    const classes = getTailwindClasses(checkBoxElement);
    expect(classes).toContain("h-5");
    expect(classes).toContain("w-5");
    expect(classes).toContain("rounded-sm");
    expect(classes).toContain("checkbox-primary");
  });
});
