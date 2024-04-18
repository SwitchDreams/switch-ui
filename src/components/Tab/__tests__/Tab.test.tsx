import { render, screen } from "@testing-library/react";

import { Tab } from "..";

describe("Tab", () => {
  const tabs = [
    { name: "Tab 1", info: <div>Content for Tab 1</div> },
    { name: "Tab 2", info: <div>Content for Tab 2</div> },
    { name: "Tab 3", info: <div>Content for Tab 3</div> },
  ];

  it("renders the default tab", () => {
    render(<Tab tabs={tabs} />);
    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();
  });
  it("applies the correct size class to the tabs (md)", () => {
    render(<Tab size="md" tabs={tabs} />);

    const tab1 = screen.getByTestId("Tab 1");
    const tab2 = screen.getByTestId("Tab 2");
    const tab3 = screen.getByTestId("Tab 3");

    expect(tab1).toHaveClass("text-md");
    expect(tab2).toHaveClass("text-md");
    expect(tab3).toHaveClass("text-md");
  });

  it("applies the correct size class to the tabs (lg)", () => {
    render(<Tab size="lg" tabs={tabs} />);

    const tab1 = screen.getByTestId("Tab 1");
    const tab2 = screen.getByTestId("Tab 2");
    const tab3 = screen.getByTestId("Tab 3");

    expect(tab1).toHaveClass("text-lg");
    expect(tab2).toHaveClass("text-lg");
    expect(tab3).toHaveClass("text-lg");
  });

  it("applies the correct size class to the tabs (sm)", () => {
    render(<Tab size="sm" tabs={tabs} />);

    const tab1 = screen.getByTestId("Tab 1");
    const tab2 = screen.getByTestId("Tab 2");
    const tab3 = screen.getByTestId("Tab 3");

    expect(tab1).toHaveClass("text-sm");
    expect(tab2).toHaveClass("text-sm");
    expect(tab3).toHaveClass("text-sm");
  });
  it("renders the default tab with children", () => {
    render(
      <Tab>
        <Tab.Panel title="Tab 1">
          <div className="h-full w-full rounded bg-primary-100">
            Teste 1 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
          </div>
        </Tab.Panel>
      </Tab>,
    );
    const tab1 = screen.getByText("Tab 1");
    const content = screen.getByText(/Teste 1/i);

    expect(tab1).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
