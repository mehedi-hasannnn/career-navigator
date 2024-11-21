import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/services/:id",
        element: <PrivateRoute> 
            <ServiceDetails></ServiceDetails>
        </PrivateRoute> ,
        loader: async ({ params }) => {
            const response = await fetch("/serviceData.json");
            if (!response.ok) {
                throw new Error("Failed to fetch service data");
            }
            const services = await response.json();
            const service = services.find(service => service.id === parseInt(params.id)); // Find the matching service
            if (!service) {
                throw new Error("Service not found");
            }
            return service; // Return the specific service
        }
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element: <Login></Login> ,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Error, Page not found</h1>
    }
]);

export default Router;