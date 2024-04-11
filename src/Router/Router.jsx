import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import Home from "../Components/UpdateCoffee/Home/Home";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Users from "../Components/User/Users";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>
                    fetch("https://coffe-store-server-jet.vercel.app/coffee"),
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) =>
                    fetch(
                        `https://coffe-store-server-jet.vercel.app/coffee/${params.id}`
                    ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/users",
                element: <Users></Users>,
                loader: () =>
                    fetch("https://coffe-store-server-jet.vercel.app/users/"),
            },
        ],
    },
]);

export default router;
