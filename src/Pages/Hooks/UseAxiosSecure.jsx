import axios from "axios";

const axiosSecure = axios.create({
    baseURL:"https://task-management-server-lovat.vercel.app"
})
const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;