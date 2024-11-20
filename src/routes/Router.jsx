import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/services",
        element: <h1>Service Layout</h1>
    },
    {
        path: "/auth",
        element: <h1>Login</h1>
    },
    {
        path: "*",
        element: <h1>Error, Page not found</h1>
    }
]);

export default Router;