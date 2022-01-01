import Button, { Props } from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render", () => {
    renderUI();
  });

  it("should have button role", () => {
    renderUI();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render text", () => {
    const text = "foobar";
    renderUI({ text: text });
    
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should trigger onClick handler", () => {
    const func = jest.fn();
    renderUI({ onClick: func });

    userEvent.click(screen.getByRole("button"));

    expect(func).toHaveBeenCalled();
  });
});

const renderUI = ({ text, onClick }: Props = {}) =>
  render(<Button text={text} onClick={onClick} />);
