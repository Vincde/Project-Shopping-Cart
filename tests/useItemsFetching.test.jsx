import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";

    const mockFetch = vi.hoisted(() => ({
        useItemsFetching: vi.fn(),
    }))

  vi.mock('./../src/components/useItemsFetching', () => ({
        useItemsFetching: mockFetch.useItemsFetching,
    }));
        


describe("useItemsFetching", () => {
    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
  

    it("returns items, no error, loading false",async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        vi.useFakeTimers();
        await act(async () => {
            await vi.advanceTimersByTimeAsync(3000);
        });

        vi.useRealTimers();
        expect(await screen.findByRole("heading", {name: /See our discounts!/i})).toBeInTheDocument();
        
    })


    it("returns items, no error, loading false",async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: null,
            error: true,
            loading: false,
        })
        

        render(<RouterProvider router={router}></RouterProvider>);

        vi.useFakeTimers();
        await act(async () => {
            await vi.advanceTimersByTimeAsync(3000);
        });

        vi.useRealTimers();
        expect(await screen.findByText(/A network error was encountered/i)).toBeInTheDocument();
        
    })
})