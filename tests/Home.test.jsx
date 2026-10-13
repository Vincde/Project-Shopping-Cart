import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import Home from "../src/components/home/Home";


    const handleClick = vi.fn();
    const routes = [
        {
            path: "/home",
            element: <Home items={
                [{id: 1,
                title: "hello", 
                description: "aaa", 
                image: "#", 
                price: "3.15", 
                rating: {rate: 4.5}}]} 
                handleAddItemToCart={handleClick}
                ></Home>,
        }
    ];


    describe("Home Page", () => {

    const router = createMemoryRouter(routes, {initialEntries:["/home"]});

    it("Clicking the 'Add to cart' button does call the setCart", async () => {

        const usr = userEvent.setup();

        render(<RouterProvider router={router}></RouterProvider>);
        
        const bttn = screen.getByRole("button", {name: /Add to cart/i});

        await usr.click(bttn);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });


}); 

