import { Link } from "react-router-dom";
import bannerimg from "../../assets/banner/banner1.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div>
            <img data-aos="fade-down" className="relative" src={bannerimg} alt="" />
            <div className="absolute top-[25%] space-y-4 ml-20">
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
                    <Link to="/">
                        <h2 data-aos="zoom-out" className="text-2xl uppercase text-center font-bold text-white">let's explore</h2>
                    </Link>
                </div>
                {/* <div className="flex space-x-4 text-2xl ml-14">
                    <Link>
                        <FaGithub />
                    </Link>
                    <Link>
                        <FaLinkedin />
                    </Link>
                </div> */}
            </div>  
        </div>
    );
};

export default Banner;