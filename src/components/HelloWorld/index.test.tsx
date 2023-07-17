import { render, screen } from "@testing-library/react"

import { HelloWorld } from "../HelloWorld"

describe("HelloWorld", () => {
  it("renders text", () => {
    render(<HelloWorld text="Text" />)
    const headline = screen.getByText(/This is test text/i)
    expect(headline).toBeInTheDocument()
  })
})
