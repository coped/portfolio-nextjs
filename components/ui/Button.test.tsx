import Button, { Props } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render", () => {
    renderUI();
  });

  it("should render text", () => {
    const text = "foobar";
    renderUI({ text: text });
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

const renderUI = ({ text }: Props = {}) => render(<Button text={text} />);
