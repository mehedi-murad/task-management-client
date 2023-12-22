import { Link } from "react-router-dom";
import './Banner.css'
import Aos from "aos"
import "aos/dist/aos.css"
import { useContext, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AuthContext } from "../Provider/AuthProvider";



const Banner = () => {
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="max-w-7xl mx-auto md:h-[70vh] bannerimg">
            {/* <img data-aos="fade-down" className="relative" src={bannerimg} alt="" /> */}
            <div className="md:absolute p-4 top-[15%] space-y-4 md:ml-20">
                {/* <h2 data-aos="fade-right" className="text-5xl font-bold">Manage Your Every <br /> Schedule</h2> */}
                <div>
                <TypeAnimation
                            sequence={[
                                'Manage Your Every Schedule',
                                1000,
                                'Manage Your Every Task',
                                1000,
                            ]}
                            speed={40}
                            style={{ fontSize: '3em', fontWeight: 'bold' }}
                            repeat={Infinity}
                            />
                </div>
                <p data-aos="fade-left" className="text-xl text-gray-500">A schedule defends from chaos and whim.</p>
                <div data-aos="fade-up" className="bg-[#F92659] hover:bg-[#001238] w-52 p-2 rounded-lg">
                    {user ? 
                        <Link to="/dashboard">
                            <h2 data-aos="zoom-out" className="text-2xl uppercase text-center font-bold text-white">Dashboard</h2>
                        </Link>
                        :
                        <Link to="/login">
                            <h2 data-aos="zoom-out" className="text-2xl uppercase text-center font-bold text-white">let's explore</h2>
                        </Link>}
                </div>
                
            </div>  
        </div>
    );
};

export default Banner;