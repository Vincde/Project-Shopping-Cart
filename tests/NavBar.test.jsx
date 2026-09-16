import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";


describe("Navigation bar", () => {
    
    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
    
    it("renders correct navigation", () => {

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByAltText(/home/i)).toBeInTheDocument();
        expect(screen.getByAltText(/shop/i)).toBeInTheDocument();
        expect(screen.getByAltText(/cart/i)).toBeInTheDocument();

    });

    it("Successfully clicks the links", async () => {

        render(<RouterProvider router={router}></RouterProvider>);

        const usr = userEvent.setup();

        const home = screen.getByAltText(/home/i);
        // const shop = screen.getByAltText(/shop/i);
        // const cart = screen.getByAltText(/cart/i);

        await usr.click(home);

        expect(screen.getByRole("heading", {name: /Hello, welcome to our shop!/i}));

        // await usr.click(shop);
        // await usr.click(cart);

    })
});