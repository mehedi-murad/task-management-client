import { Helmet } from "react-helmet-async";
import CreateTask from "../Dashboard/CreateTask/CreateTask";
import Navbar from "../Shared/Navbar/Navbar";


const AddTask = () => {
    return (
        <div className="bg-blue-950">
            <Helmet>
                <title>Task Management | Add Task</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <CreateTask></CreateTask>
            </div>
        </div>
    );
};

export default AddTask;