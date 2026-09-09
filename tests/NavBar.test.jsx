import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../routes";
import { createMemoryRouter, RouterProvider } from "react-router";

describe("Navigation bar", () => {
    
    const router = createMemoryRouter(routes);
    
    it("renders correct navigation", () => {

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByText(/home/i)).toBeInTheDocument();
    });
});