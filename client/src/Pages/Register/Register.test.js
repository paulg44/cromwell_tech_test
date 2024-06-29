import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

test("shows three inputs, a submit button and a link", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );

  const nameInputs = screen.getAllByRole("textbox");
  //   Have to get password inputs by label as they have no implicit role
  const passwordInputs = screen.getAllByLabelText(/password/i);
  const button = screen.getByRole("button");
  const link = screen.getByRole("link");

  expect(nameInputs).toHaveLength(2);
  expect(passwordInputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});

test("calls registeUser when the form is submitted", async () => {
  const mock = jest.fn();
  render(
    <MemoryRouter>
      <Register registerUser={mock} />
    </MemoryRouter>
  );

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const password = screen.getByLabelText(/enter password/i);
  const confirmPassword = screen.getByLabelText(/confirm password/i);

  user.click(nameInput);
  user.keyboard("Paul");

  user.click(emailInput);
  user.keyboard("paul@paul.com");

  user.click(password);
  user.keyboard("test1234");

  user.click(confirmPassword);
  user.keyboard("test1234");

  const button = screen.getByRole("button");

  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("Paul", "paul@paul.com", "test1234");
});
