import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center glass max-w-5xl mx-auto rounded-xl p-20 my-20">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div>
                <img className="rounded-lg h-36" src={user?.photoURL} alt="" />
            </div>
            <div>
                <h2 className="text-4xl text-white font-bold">Name: {user?.displayName}</h2>
                <h2 className="text-xl text-white font-bold">Email: {user?.email}</h2>
            </div>
            
        </div>
    );
};

export default UserProfile;