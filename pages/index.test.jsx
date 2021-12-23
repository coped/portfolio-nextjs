import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("should render", () => {
    renderUI();
  });

  it("renders a heading", () => {
    renderUI();

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

const renderUI = () => render(<Home />)
