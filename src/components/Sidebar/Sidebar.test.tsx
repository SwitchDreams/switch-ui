import { XMarkIcon } from "@heroicons/react/24/solid"; // Import the required icons
import { fireEvent, render } from "@testing-library/react";

import { Sidebar } from "./Sidebar";

describe("Complete Sidebar Component", () => {
  it("renders without crashing", () => {
    render(<Sidebar />);
  });

  it("toggles SidebarDrop dropdown when clicked", () => {
    const { getByText, queryByText } = render(
      <Sidebar>
        <Sidebar.Group>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          />
        </Sidebar.Group>
      </Sidebar>,
    );

    const dropdownLabel = getByText("Bom dia");
    fireEvent.click(dropdownLabel);

    const pokemonOption = queryByText("Pokemon");
    expect(pokemonOption).toBeInTheDocument();

    fireEvent.click(dropdownLabel);
    expect(pokemonOption).toBeInTheDocument();
  });

  it("renders SidebarUser with username and handle when Sidebar is open", () => {
    const { getByText } = render(
      <Sidebar>
        <Sidebar.Footer>
          <Sidebar.User>
            <div>Test User</div>
            <div>@testuser</div>
          </Sidebar.User>
        </Sidebar.Footer>
      </Sidebar>,
    );

    const userName = getByText("Test User");
    const userHandle = getByText("@testuser");

    expect(userName).toBeInTheDocument();
    expect(userHandle).toBeInTheDocument();
  });

  it("toggles SidebarDrop dropdown when label is clicked", () => {
    const { getByText, queryByText } = render(
      <Sidebar>
        <Sidebar.Group>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          />
        </Sidebar.Group>
      </Sidebar>,
    );

    const dropdownLabel = getByText("Bom dia");
    fireEvent.click(dropdownLabel);

    const pokemonOption = queryByText("Pokemon");
    expect(pokemonOption).toBeInTheDocument();

    fireEvent.click(dropdownLabel);
    expect(pokemonOption).toBeInTheDocument();
  });

  it("toggles SidebarDrop dropdown when ChevronDownIcon is clicked", () => {
    const { getByTestId, queryByText } = render(
      <Sidebar>
        <Sidebar.Group>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          />
        </Sidebar.Group>
      </Sidebar>,
    );

    const chevronIcon = getByTestId("chevron-icon");
    fireEvent.click(chevronIcon);

    const pokemonOption = queryByText("Pokemon");
    expect(pokemonOption).toBeInTheDocument();

    fireEvent.click(chevronIcon);
    expect(pokemonOption).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(
      <Sidebar>
        <Sidebar.Logo logo="https://switchdreams.com.br/og_image.png" />
        <Sidebar.Group>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          />
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          />
        </Sidebar.Group>
        <Sidebar.Footer>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          />
          <hr className="mb-10 mt-8 h-px w-full" />
          <Sidebar.User>
            <div>Test User</div>
            <div>@testuser</div>
          </Sidebar.User>
        </Sidebar.Footer>
      </Sidebar>,
    );
  });

  it("toggles SidebarDrop dropdown when label is clicked", () => {
    const { getByText, queryByText } = render(
      <Sidebar>
        <Sidebar.Group>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          />
        </Sidebar.Group>
      </Sidebar>,
    );

    const dropdownLabel = getByText("Bom dia");
    fireEvent.click(dropdownLabel);

    const pokemonOption = queryByText("Pokemon");
    expect(pokemonOption).toBeInTheDocument();

    fireEvent.click(dropdownLabel);
    expect(pokemonOption).toBeInTheDocument();
  });

  it("toggles SidebarDrop dropdown when ChevronDownIcon is clicked", () => {
    const { getByTestId, queryByText } = render(
      <Sidebar>
        <Sidebar.Group>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          />
        </Sidebar.Group>
      </Sidebar>,
    );

    const chevronIcon = getByTestId("chevron-icon");
    fireEvent.click(chevronIcon);

    const pokemonOption = queryByText("Pokemon");
    expect(pokemonOption).toBeInTheDocument();

    fireEvent.click(chevronIcon);
    expect(pokemonOption).toBeInTheDocument();
  });
});
