import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
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
