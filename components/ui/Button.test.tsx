import Button, { Props } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render", () => {
    renderUI();
  });

  it("should render text", () => {
    const text = "foobar";
    renderUI();
    expect(screen.getByText(text)).toEqual(true);
  });
});

const renderUI = ({ text }: Props = {}) => render(<Button text={text} />);
