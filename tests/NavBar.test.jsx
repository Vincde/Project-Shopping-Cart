import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";


describe("Navigation bar", () => {


    const fetchMock = vi.fn();
        globalThis.fetch = fetchMock;

        fetchMock.mockResolvedValue({
            status: 200,
            ok: true,
            json: async () => Promise.resolve({
                id: "1",
                title: "John"
            })
        })
    
    
    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
    
    it("renders correct navigation",async () => {

        render(<RouterProvider router={router}></RouterProvider>);

        expect(await screen.findByAltText(/home/i)).toBeInTheDocument();
        expect(await screen.findByAltText(/shop/i)).toBeInTheDocument();
        expect(await screen.findByAltText(/cart/i)).toBeInTheDocument();

    });

    it("Successfully clicks the links", async () => {

        render(<RouterProvider router={router}></RouterProvider>);

        const usr = userEvent.setup();

        const home = screen.getByAltText(/home/i);
        // const shop = screen.getByAltText(/shop/i);
        // const cart = screen.getByAltText(/cart/i);

        await usr.click(home);

        expect(await screen.findByRole("heading", {name: /Hello, welcome to our shop!/i})).toBeInTheDocument();

        // await usr.click(shop);
        // await usr.click(cart);

    })
});