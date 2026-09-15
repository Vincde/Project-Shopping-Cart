import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router";


/*Probably need to write 2 tests to verify functionality: 
    - one snapshot test for general things
    - one (or three) test that verifies three pages get clicked
*/ 

describe("Navigation bar", () => {
    
    const router = createMemoryRouter(routes, {initialEntries:["/home"]});
    
    it("renders correct navigation", () => {

        render(<RouterProvider router={router}></RouterProvider>);

        expect(screen.getByAltText(/home/i)).toBeInTheDocument();
    });
});