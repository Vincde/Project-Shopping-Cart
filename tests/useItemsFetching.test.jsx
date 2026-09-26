import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";

    const mockFetch = vi.hoisted(() => ({
        useItemsFetching: vi.fn(),
    }))

  vi.mock('./../src/components/useItemsFetching', () => ({
        useItemsFetching: mockFetch.useItemsFetching,
    }));
        


    describe("useItemsFetching", () => {
    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
  

    it("returns items, no error, loading false", () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        
        expect(screen.getByRole("heading", {name: /See our discounts!/i})).toBeInTheDocument();
        
    })


    it("returns null, error set, loading false", () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: null,
            error: true,
            loading: false,
        })
        

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByText(/A network error was encountered/i)).toBeInTheDocument();
        
    })
})