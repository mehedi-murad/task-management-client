import './Register.css'
import task from "../../../assets/banner/todo.png"
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="registerBanner h-[100vh] flex justify-center items-center">
            <div className='max-w-2xl mx-auto space-y-5 border rounded-lg p-10 glass'>
                <div className='flex justify-center items-center'>
                    <img className='h-40' src={task} alt="" />
                </div>
                <h2 className='text-center text-white font-bold text-4xl'>Signup</h2>
                <form className='space-y-5'>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-warning  w-full" required />
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered input-warning  w-full" required />
                    <div className='flex justify-center items-center'>
                        <h2 className='text-white font-bold text-xl'>Choose your Photo </h2>
                        <input type="file" className="file-input file-input-bordered w-full" required/>
                    </div>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered input-warning  w-full" required />
                    <input
                                className="bg-[#F92659] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                                type="submit"
                            />
                </form>
                <p className='text-white text-center'>Already have an account? Please 
                    <Link to="/login">
                        <span className='text-bold text-xl ml-4 underline'>Login</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;