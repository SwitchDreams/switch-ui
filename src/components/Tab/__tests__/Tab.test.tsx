import { render, screen } from "@testing-library/react";

import TabComponent from "..";

describe("TabComponent", () => {
  const tabs = [
    { name: "Tab 1", info: <div>Content for Tab 1</div> },
    { name: "Tab 2", info: <div>Content for Tab 2</div> },
    { name: "Tab 3", info: <div>Content for Tab 3</div> },
  ];

  it("renders the default tab", () => {
    render(<TabComponent tabs={tabs} />);
    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();
  });
  it("applies the correct size class to the tabs (md)", () => {
    render(<TabComponent size="md" tabs={tabs} />);

    const tab1 = screen.getByTestId("Tab 1");
    const tab2 = screen.getByTestId("Tab 2");
    const tab3 = screen.getByTestId("Tab 3");

    expect(tab1).toHaveClass("text-md");
    expect(tab2).toHaveClass("text-md");
    expect(tab3).toHaveClass("text-md");
  });

  it("applies the correct size class to the tabs (lg)", () => {
    render(<TabComponent size="lg" tabs={tabs} />);

    const tab1 = screen.getByTestId("Tab 1");
    const tab2 = screen.getByTestId("Tab 2");
    const tab3 = screen.getByTestId("Tab 3");

    expect(tab1).toHaveClass("text-lg");
    expect(tab2).toHaveClass("text-lg");
    expect(tab3).toHaveClass("text-lg");
  });

  it("applies the correct size class to the tabs (sm)", () => {
    render(<TabComponent size="sm" tabs={tabs} />);

    const tab1 = screen.getByTestId("Tab 1");
    const tab2 = screen.getByTestId("Tab 2");
    const tab3 = screen.getByTestId("Tab 3");

    expect(tab1).toHaveClass("text-sm");
    expect(tab2).toHaveClass("text-sm");
    expect(tab3).toHaveClass("text-sm");
  });
});
