import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn link", () => {
  render(<App />);
  const linkElement = screen.getByText(/LEARN/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders work link", () => {
  render(<App />);
  const linkElement = screen.getByText(/WORK/i);
  expect(linkElement).toBeInTheDocument();
});
