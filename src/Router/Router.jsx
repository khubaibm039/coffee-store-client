import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import Home from "../Components/UpdateCoffee/Home/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/coffee"),
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updateCoffee",
                element: <UpdateCoffee />,
            },
        ],
    },
]);

export default router;
