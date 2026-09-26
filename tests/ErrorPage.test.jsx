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


    describe("ErrorPage", () => {

    const router = createMemoryRouter(routes, {initialEntries:["/"]});
    
    it("renders error page",async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByText(/Oh! there seems to be a problem here!/i)).toBeInTheDocument();
        expect(screen.getByText(/We are automatically redirecting you to the home page in 3s.../i)).toBeInTheDocument();
        expect(screen.getByText(/Or you can click here!/i)).toBeInTheDocument();

    });


    it("renders the homepage after clicking the link", async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })

        const usr = userEvent.setup();

        render(<RouterProvider router={router}></RouterProvider>);
        
        const bttn = screen.getByText(/Or you can click here!/i);

        await usr.click(bttn);

        expect(screen.getByText("Hello, welcome to our shop!")).toBeInTheDocument();
        expect(bttn).not.toBeInTheDocument();
    });


    it("Waiting for 3 seconds trigger the automatic navigation", async () => {
        mockFetch.useItemsFetching.mockReturnValue({
            items: [{id: 1, title: "hello"}],
        error: false,
        loading: false,
        })
        
        render(<RouterProvider router={router}></RouterProvider>);
        

        expect(screen.getByText("Hello, welcome to our shop!")).toBeInTheDocument();       
    });
}); 

