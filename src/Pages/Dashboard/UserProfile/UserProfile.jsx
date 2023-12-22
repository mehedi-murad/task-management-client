import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex justify-evenly items-center glass max-w-5xl mx-auto rounded-xl p-20 my-20">
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