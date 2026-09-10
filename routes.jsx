import App from "./src/App";
import Home from "./src/components/home/Home"

const routes = [
    {
        path: "/",
        element: <App></App>,
        children: [
            {index: true, element: <Home></Home>},
        ]
    }
];


export default routes;