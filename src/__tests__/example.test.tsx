import "@testing-library/jest-dom"; // to be included in each test file
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("renders heading", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
test("check text if exist", () => {
  render(<Page />);
  expect(screen.getByText("Visit Channel")).toBeInTheDocument();
});

// snapshot tets next
// 🆕 Snapshot test
test("renders homepage unchanged", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
