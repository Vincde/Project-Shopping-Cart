import App from "./App";
import ErrorPage from "./components/errorPage/ErrorPage";

const routes = [
    {
        path: "/:location",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>
    }
];


export default routes;