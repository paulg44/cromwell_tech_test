import { render, screen } from "@testing-library/react";
import App from "./App";

test("cromwell header is visible", () => {
  render(<App />);

  const header = screen.getByRole("heading", { name: /cromwell/i });

  expect(header).toBeInTheDocument();
});
