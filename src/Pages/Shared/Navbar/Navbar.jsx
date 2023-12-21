import { Link, NavLink } from "react-router-dom";
import { FaIndent } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const menus = (
    <div className="text-xl font-semibold space-x-8">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addTask">Add Task</NavLink>
      <NavLink to="/">Contact</NavLink>
      
    </div>
  );
  return (
    <div className="navbar bg-base-100 bannerbg py-6 px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold">Task Management</h2>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
                <FaIndent /> <h2>{user?.displayName}</h2>
          </div>
          
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-[#F92659] rounded-box w-52"
          >
            <div className="avatar flex justify-center p-6">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user ? 
                        <img src={user?.photoURL} />
                        :
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
                </div>
            </div>
            {user ? 
              <li>
                <p onClick={handleLogOut}>Logout</p>
              </li>
                :
              <li className="text-white font-semibold">
                <Link to="/login">Login</Link>
              </li>
              }
            <li className="text-white font-semibold">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
