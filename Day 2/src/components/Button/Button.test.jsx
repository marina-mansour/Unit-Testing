import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { test } from "vitest";

describe("Button component", () => {
  test("renders with correct label", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick when click", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("has the correct class when className prop is provided", () => {
    render(<Button label="Click Me" className="button" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("button");
  });

  test("Disabled when giving disabled prop", () => {
    render(<Button label="Click Me" disabled />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });

  test("does not call onClick handler when disabled", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled />);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
