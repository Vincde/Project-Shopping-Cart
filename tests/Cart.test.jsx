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

    describe("Cart component", () => {

    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
    
    it("Clicking on the plus, minus, cancel buttons changes data correctly",async () => {
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

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            await usr.click(screen.getByAltText("cart"));

            expect(screen.getByRole("heading", {name: /hello/i}).textContent).toMatch("hello");

            const plusBttn = screen.getByRole("button", {name: "+"});
            const minusBttn = screen.getByRole("button", {name: "-"});
            const cancelBttn = screen.getByRole("button", {name: "X"});
            const quantity = screen.getByText("Quantity: 1");

            await usr.click(plusBttn);
            expect(quantity.textContent).toMatch("Quantity: 2");

            await usr.click(minusBttn);
            expect(quantity.textContent).toMatch("Quantity: 1");

            await usr.click(cancelBttn);
            expect(quantity).not.toBeInTheDocument();

        });

    
    });

 

