import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddTask from "../AddTask/AddTask";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import CreateTask from "../Dashboard/CreateTask/CreateTask";
import ToDo from "../Dashboard/ToDo/ToDo";
import UpdateToDo from "../Dashboard/UpdateToDo/UpdateToDo";
import Error from "../Error/Error";
import Contact from "../Contact/Contact";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/addTask",
                element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:"userProfile",
                element:<UserProfile></UserProfile>
            },
            {
                path: "createTask",
                element:<CreateTask></CreateTask>
            },
            {
                path: "toDo",
                element:<ToDo></ToDo>
            },
            {
                path: "updateToDo/:id",
                element:<UpdateToDo></UpdateToDo>,
                loader: ({params}) => fetch(`https://task-management-server-lovat.vercel.app/tasks/${params.id}`)
            }
        ]
    }
])

export default Routes;