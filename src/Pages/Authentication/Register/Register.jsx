import './Register.css'
import task from "../../../assets/banner/todo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const handleGoogleSignin = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
      }

      const onSubmit = (data) => {
        console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUser(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            avatar:data.photoURL
          }

          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(userInfo)
          })
          .then(res => res.json())
          .then(data =>{
            if(data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          })
          
        })
        .catch((error) => console.log(error));
    });
      }
    
    return (
        <div className="registerBanner h-[100vh] flex justify-center items-center">
            <div className='max-w-4xl mx-auto space-y-5 border rounded-lg p-10 glass w-full'>
                <div className='flex justify-center items-center'>
                    <img className='h-40' src={task} alt="" />
                </div>
                <h2 className='text-center text-white font-bold text-4xl'><Link to='/' className='underline'>Home</Link> | Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Name</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        {...register("name", { required: true })}
                        className="input input-bordered"
                        />
                        {errors.name && (
                        <span className="text-red-500 mt-2">Name is required</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Photo Url</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Photo URL"
                        name="photo"
                        {...register("photoURL", { required: true })}
                        className="input input-bordered"
                        />
                        {errors.photoURL && (
                        <span className="text-red-500 mt-2">
                            Photo url is required
                        </span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Email</span>
                        </label>
                        <input
                        type="email"
                        placeholder="email (example@gmail.com)"
                        name="email"
                        {...register("email", { required: true })}
                        className="input input-bordered"
                        />
                        {errors.email && (
                        <span className="text-red-500 mt-2">Email is required</span>
                        )}
                    </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password (example - 123456Aa@)"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 mt-2">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 mt-2">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 mt-2">
                    Password not exceeded 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 mt-2">
                    Password must have an uppecase a lowercase a special
                    character and numbers
                  </span>
                )}
              </div>

              <div className="form-control">
                {/* <input
                  className="btn bg-cyan-400 border-none"
                  type="submit"
                  value="Signup"
                /> */}
                <input
                                className="bg-[#F92659] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                                type="submit" value="Signup"
                            />
              </div>
              
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