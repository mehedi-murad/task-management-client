import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img src={user?.photoURL} alt="" />
            <h2>Name: {user?.displayName}</h2>
        </div>
    );
};

export default UserProfile;