import './Login.css'
import task from "../../../assets/banner/todo.png"
const Login = () => {
    return (
        <div className="loginBanner h-[100vh] flex justify-center items-center">
            <div className='max-w-2xl mx-auto space-y-5 border rounded-lg p-10 glass'>
                <div className='flex justify-center items-center'>
                    <img className='h-40' src={task} alt="" />
                </div>
                <h2 className='text-center text-white font-bold text-4xl'>Login</h2>
                <form className='space-y-5'>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-warning  w-full" required />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered input-warning  w-full" required />
                    <input
                                className="bg-[#F92659] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                                type="submit"
                            />
                </form>
                <p className='text-white text-center'>New Here? Please Register</p>
            </div>
        </div>
    );
};

export default Login;