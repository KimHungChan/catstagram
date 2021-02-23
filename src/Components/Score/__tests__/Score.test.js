import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Score from "../Score";

it("renders Score", () => {
  render(<Score />);

  expect(screen.getByTestId("score")).toBeVisible(true);
});

describe("Score text", () => {
  it("has a number", () => {
    render(<Score />);

    const score = screen.getByTestId("score");

    fireEvent.change(score, { target: { text: 3 } });
    expect(score.text).toBe(3);
  });
});
