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
    
    it("links are present in the page",async () => {
        const router = createMemoryRouter(routes, {initialEntries:["/home"]});

        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1,
                title: "hello", 
                description: "aaa", 
                image: "#", 
                price: "3.15", 
                rating: {rate: 4.5}}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByAltText(/home/i)).toBeInTheDocument();
        expect(screen.getByAltText(/shop/i)).toBeInTheDocument();
        expect(screen.getByAltText(/cart/i)).toBeInTheDocument();

    });

    it("click the links -> successfully navigates to the corresponding pages", async () => {
        const router = createMemoryRouter(routes, {initialEntries:["/home"]});

        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1,
                title: "hello", 
                description: "aaa", 
                image: "#", 
                price: "3.15", 
                rating: {rate: 4.5}}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        const usr = userEvent.setup();

        const home = screen.getByAltText(/home/i);
        const shop = screen.getByAltText(/shop/i);
        const cart = screen.getByAltText(/cart/i);

        await usr.click(home);
        expect(screen.getByRole("heading", {name: /Hello, welcome to our shop!/i})).toBeInTheDocument();

        await usr.click(shop);
        expect(screen.getByRole("heading", {name: /Shop/i})).toBeInTheDocument();

        await usr.click(cart);
        expect(screen.getByRole("heading", {name: /Cart/i})).toBeInTheDocument();
    })

    it("Add some items to the cart -> the number on top of the cart icon updates", async () => {
        const router = createMemoryRouter(routes, {initialEntries:["/home"]});

        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1,
                title: "hello", 
                description: "aaa", 
                image: "#", 
                price: "3.15", 
                rating: {rate: 4.5}}],
        error: false,
        loading: false,
        })

        const usr = userEvent.setup();

        render(<RouterProvider router={router}></RouterProvider>);
        const buttons = screen.getAllByRole("button", {name: /Add to cart/i});
        await usr.click(buttons[0]);

        expect(screen.getByText("1")).toBeInTheDocument();

        await usr.click(screen.getByAltText(/cart/i));
        await usr.click(screen.getByRole("button", {name: "X"}));

        expect(screen.getByText("0")).toBeInTheDocument();

        await usr.click(screen.getByAltText(/shop/i));

        await usr.click(screen.getByAltText(/Image n. 1/i));
        await usr.click(screen.getByText("Add to Cart"));

        expect(screen.getByText("1")).toBeInTheDocument();
        

    })
});