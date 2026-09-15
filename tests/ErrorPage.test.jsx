import { it, describe, expect } from "vitest";
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
});