import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";


const mockFetch = vi.hoisted(() => ({
        useItemsFetching: vi.fn(),
    }))

  vi.mock('./../src/components/useItemsFetching', () => ({
        useItemsFetching: mockFetch.useItemsFetching,
    }));

    describe("Navigation bar", () => {

    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
    
    it("renders correct navigation",async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByAltText(/home/i)).toBeInTheDocument();
        expect(screen.getByAltText(/shop/i)).toBeInTheDocument();
        expect(screen.getByAltText(/cart/i)).toBeInTheDocument();

    });

    it("Successfully clicks the links", async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        const usr = userEvent.setup();

        const home = screen.getByAltText(/home/i);
        // const shop = screen.getByAltText(/shop/i);
        // const cart = screen.getByAltText(/cart/i);

        await usr.click(home);

        expect(screen.getByRole("heading", {name: /Hello, welcome to our shop!/i})).toBeInTheDocument();

        // await usr.click(shop);
        // await usr.click(cart);

    })
});