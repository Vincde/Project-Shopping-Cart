import { it, describe, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";


    const mockFetch = vi.hoisted(() => ({
        useItemsFetching: vi.fn(),
    }))

  vi.mock('./../src/components/useItemsFetching', () => ({
        useItemsFetching: mockFetch.useItemsFetching,
    }));






    describe("Checkout", () => {

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
    
        it("With at least one input not filled the pay button doesn't work",async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});

            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            // WARNING: THIS COULD GIVE ERRORS IF THE ELEMENTS ARE MORE THAN 2
            // getByRole could return error if more than one element is found
            await usr.click(screen.getByAltText("cart"));
            await usr.click(screen.getByRole("link", {name: "Checkout"}));

            await usr.click(screen.getByRole("button", {name: "Pay"}));
            expect(screen.queryByRole("paragraph", {name: "Payment done!"})).not.toBeInTheDocument();

        });

        it("All the inputs filled -> page shows the finalized payment, then goes back to home", async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});
            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            // WARNING: THIS COULD GIVE ERRORS IF THE ELEMENTS ARE MORE THAN 2
            // getByRole could return error if more than one element is found
            await usr.click(screen.getByAltText("cart"));
            await usr.click(screen.getByRole("link", {name: "Checkout"}));

            const fields = [
              ["Name and Surname:", "John Carmack"],
              ["Address:", "Via Roma 23"],
              ["Card number:", "12347638273"],
              ["Card owner:", "John Carmack"],
              ["CVV:", "345"],
              ["Card expiration date:", "2026-10-25"],
            ];

            for (const [label, value] of fields) {
              await usr.type(screen.getByLabelText(label), value);
            }

            await usr.click(screen.getByRole("button", {name: "Pay"}));
            expect(screen.getByText("Payment done!")).toBeInTheDocument();
            await usr.click(screen.getByRole("link", {name: /Or you can click here!/i}));
            expect(screen.getByRole("heading", {name: /Hello, welcome to our shop!/i})).toBeInTheDocument();
        });

        it("All the inputs filled -> page shows the finalized payment, automatically goes back home", async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});
            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByRole("button", {name: /Add to cart/i}));
            // WARNING: THIS COULD GIVE ERRORS IF THE ELEMENTS ARE MORE THAN 2
            // getByRole could return error if more than one element is found
            await usr.click(screen.getByAltText("cart"));
            await usr.click(screen.getByRole("link", {name: "Checkout"}));

            const fields = [
              ["Name and Surname:", "John Carmack"],
              ["Address:", "Via Roma 23"],
              ["Card number:", "12347638273"],
              ["Card owner:", "John Carmack"],
              ["CVV:", "345"],
              ["Card expiration date:", "2026-10-25"],
            ];

            for (const [label, value] of fields) {
              await usr.type(screen.getByLabelText(label), value);
            }

            await usr.click(screen.getByRole("button", {name: "Pay"}));
            expect(screen.getByText("Payment done!")).toBeInTheDocument();
            await waitFor(() => expect(screen.getByRole("heading", {name: /Hello, welcome to our shop!/i})).toBeInTheDocument(), {timeout: 5000});
        });
        

        

    
});

 

