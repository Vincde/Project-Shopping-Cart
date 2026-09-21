import { it, describe, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";



describe("ErrorPage", () => {

    const fetchMock = vi.fn();
        globalThis.fetch = fetchMock;

        fetchMock.mockResolvedValue({
            status: 200,
            ok: true,
            json: async () => Promise.resolve({
                id: "1",
                title: "John"
            })
        })
    
    
    const router = createMemoryRouter(routes, {initialEntries:["/"]});
    
    it("renders error page",async () => {

        render(<RouterProvider router={router}></RouterProvider>);

        expect(await screen.findByText(/Oh! there seems to be a problem here!/i)).toBeInTheDocument();
        expect(await screen.findByText(/We are automatically redirecting you to the home page in 3s.../i)).toBeInTheDocument();
        expect(await screen.findByText(/Or you can click here!/i)).toBeInTheDocument();

    });


    it("renders the homepage after clicking the link", async () => {
        const usr = userEvent.setup();

        render(<RouterProvider router={router}></RouterProvider>);
        
        const bttn = await screen.findByText(/Or you can click here!/i);

        await usr.click(bttn);

        expect(await screen.findByText("Hello, welcome to our shop!")).toBeInTheDocument();
        expect(bttn).not.toBeInTheDocument();


    });


    it("Waiting for 3 seconds trigger the automatic navigation", async () => {
        vi.useFakeTimers();
        render(<RouterProvider router={router}></RouterProvider>);
        

        await act(async () => {
            await vi.advanceTimersByTimeAsync(3000);
        });

        vi.useRealTimers();

        expect(await screen.findByText("Hello, welcome to our shop!")).toBeInTheDocument();       
    });
}); 

