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






    describe("Cart", () => {

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
    
        it("Click the plus, minus, cancel buttons on specific item -> changes data correctly",async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});

            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            // WARNING: THIS COULD GIVE ERRORS IF THE ELEMENTS ARE MORE THAN 2
            // getByRole could return error if more than one element is found
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

        it("Click on the checkout button -> links into the checkout page", async () => {
        
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});
            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            await usr.click(screen.getByAltText("cart"));
            await usr.click(screen.getByRole("link", {name: /checkout/i}));
            expect(screen.getByRole("heading", {name: /checkout/i})).toBeInTheDocument();
        })

        it("Click on the checkbox -> change the checked state", async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});
            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            await usr.click(screen.getByAltText("cart"));

            const checkbox = screen.getByRole('checkbox');

            expect(checkbox).toBeChecked();
            expect(screen.getByRole("heading", {level: 3}).textContent).toBe("Total price: €3.15");
            await usr.click(checkbox);
            expect(checkbox).not.toBeChecked();
            expect(screen.queryByRole("heading", {level: 3})).not.toBeInTheDocument();

        });

    
});

 

