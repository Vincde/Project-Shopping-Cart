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






    describe("Shop", () => {

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
    
        it("Click on one item -> open the details page for the item",async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});

            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByAltText("shop"));

            expect(screen.getByText("hello")).toBeInTheDocument();

            await usr.click(screen.getByText("hello"));

            expect(screen.getByText("Description: aaa")).toBeInTheDocument();

        });

        it("Click on one item -> open the details page -> click X button -> returns back to Shop page",async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});

            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByAltText("shop"));

            await usr.click(screen.getByText("hello"));
            expect(screen.getByText("Description: aaa")).toBeInTheDocument();
            await usr.click(screen.getByText("X"));
            expect(screen.getByText("hello")).toBeInTheDocument();

        });

        it("Click on one item -> open the details page -> click 'add to cart' button -> adds item to cart",async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});

            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByAltText("shop"));

            await usr.click(screen.getByText("hello"));
            await usr.click(screen.getByText("Add to Cart"));
            await usr.click(screen.getByText("Add to Cart"));
            await usr.click(screen.getByAltText("cart"));
            expect(screen.getByRole("heading", {name: "hello"})).toBeInTheDocument();
            expect(screen.getByText("Quantity: 2")).toBeInTheDocument();

        });
        

    
});

 

