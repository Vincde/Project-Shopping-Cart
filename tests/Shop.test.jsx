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
    
        it("Clicking on one item opens the details page for the same item",async () => {
            const router = createMemoryRouter(routes, {initialEntries:["/home"]});

            render(<RouterProvider router={router}></RouterProvider>);
            const usr = userEvent.setup();

            await usr.click(screen.getByAltText("shop"));

            expect(screen.getByText("Title: hello")).toBeInTheDocument();

            await usr.click(screen.getByText("Title: hello"));

            expect(screen.getByText("X")).toBeInTheDocument();

        });

       
       

        

    
});

 

