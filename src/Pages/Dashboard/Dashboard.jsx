import { FaClipboardList, FaEdit, FaHome, FaTasks } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import WelcomeNote from "./WelcomeNote";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const location = useLocation()
    const noWelcomeNote =  location.pathname.includes('dashboard/userProfile') || location.pathname.includes('dashboard/createTask') || location.pathname.includes('dashboard/toDo') || location.pathname.includes('dashboard/updateToDo') 
  return (
    <div className="flex flex-col md:flex-row">
        <Helmet>
                <title>Task Management | Dashboard</title>
            </Helmet>
      <div className="bg-[#F92659] md:w-96 min-h-screen text-white p-10">
        <ul className="menu p-4 space-y-4">
            <li>
                <NavLink to="/dashboard/userprofile">
                    <FaHome></FaHome>User Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/createTask">
                    <FaTasks></FaTasks>Create Task
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/toDo">
                <FaClipboardList />To Do List
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/updateToDo">
                <FaEdit></FaEdit>Update toDo
                </NavLink>
            </li>
            {/* <li>
            <NavLink to="/dashboard/addDoctor">
                <FaDochub></FaDochub>Add Doctor
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/addTest">
                <FaTablets></FaTablets>Add Test Service
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/doctorsList">
                <FaList></FaList>Doctors List
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/updateDoctor">
                <FaEdit></FaEdit>Update Doctor
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/manageAppointment">
                <FaBook></FaBook>Booked Appointment by patient
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/allUsers">
                <FaUsers></FaUsers>All Users
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/newsletter">
                <FaNewspaper></FaNewspaper>NewsLetter
            </NavLink>
            </li> */}
        </ul>
        <div className="divider"></div>
        <ul className="menu p-4 space-y-4">
            <li>
                <NavLink to="/">
                    <FaHome></FaHome>Home
                </NavLink>
            </li>
        </ul>
      </div>
      <div className="flex-1 bg-base-200 taskBg">
        {noWelcomeNote || <WelcomeNote></WelcomeNote>}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
