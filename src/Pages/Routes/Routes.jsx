import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddTask from "../AddTask/AddTask";
import Login from "../Authentication/Login/Login";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/addTask",
                element:<AddTask></AddTask>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])

export default Routes;