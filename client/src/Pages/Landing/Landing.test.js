import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import { createServer } from "../../test/server";
import { MemoryRouter } from "react-router-dom";
import { SWRConfig } from "swr";

async function renderComponent() {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      {" "}
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    </SWRConfig>
  );
}

test("loading is visible", () => {
  renderComponent();
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

describe("when user is signed in", () => {
  createServer([
    {
      path: "/get/login",
      res: () => {
        return {
          id: 3,
          name: "Paul G",
          email: "paul@asdf.com",
          password: "test1234",
        };
      },
    },
  ]);
  test("user data is visible when logged in", async () => {
    await renderComponent();

    // screen.debug();
    // const name = await screen.findByText(/Paul G/i);
    // const email = screen.getByText(/paul@asdf.com/i);

    // expect(name).toBeInTheDocument();
    // expect(email).toBeInTheDocument();
  });
});
