import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";



describe("ErrorPage", () => {
    
    const router = createMemoryRouter(routes, {initialEntries:["/"]});
    
    it("renders error page", () => {

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByText(/Oh! there seems to be a problem here!/i)).toBeInTheDocument();
        expect(screen.getByText(/We are automatically redirecting you to the home page in 3s.../i)).toBeInTheDocument();
        expect(screen.getByText(/Or you can click here!/i)).toBeInTheDocument();

    });


    it("renders the homepage after clicking the link", async () => {
        const usr = userEvent.setup();

        render(<RouterProvider router={router}></RouterProvider>);
        
        const bttn = screen.getByText(/Or you can click here!/i);

        await usr.click(bttn);

        expect(screen.getByText("Hello, welcome to our shop!")).toBeInTheDocument();
        expect(bttn).not.toBeInTheDocument();


    });


    it("Waiting for 3 seconds trigger the automatic navigation", () => {
        render(<RouterProvider router={router}></RouterProvider>);
        vi.useFakeTimers();

        vi.advanceTimersByTime(3000);

        expect(screen.getByText("Hello, welcome to our shop!")).toBeInTheDocument();

        vi.runOnlyPendingTimers();
        vi.useRealTimers();
    });
});