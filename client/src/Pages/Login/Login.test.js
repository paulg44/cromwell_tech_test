import { render, screen } from "@testing-library/react";
import Login from "./Login";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

test("shows two inputs, a button and a link", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const emailInput = screen.getByRole("textbox");
  const passwordInput = screen.getByLabelText(/password/i);
  const button = screen.getByRole("button");
  const registerLink = screen.getByRole("link");

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});

test("calls login when the form is submitted", async () => {
  const mock = jest.fn();
  render(
    <MemoryRouter>
      <Login login={mock} />
    </MemoryRouter>
  );

  const emailInput = screen.getByRole("textbox");
  const passwordInput = screen.getByLabelText(/password/i);

  user.click(emailInput);
  user.keyboard("paul@paul.com");

  user.click(passwordInput);
  user.keyboard("test");

  const button = screen.getByRole("button");
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("paul@paul.com", "test");
});
