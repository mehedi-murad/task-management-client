import image from "../../assets/banner/tm.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Section = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="flex flex-col md:flex-row justify-center items-start max-w-7xl mx-auto bg-base-200 p-14">
            <div data-aos="fade-right" className="flex-1">
                <img className="h-80 md:ml-20" src={image} alt="" />
            </div>
            <div data-aos="fade-left" className="flex-1 space-y-4 my-20">
                <h2 className="text-4xl font-bold">What is Task Management?</h2>
                <p className="text-gray-400 text-justify">Task management helps teams communicate the status of various tasks and duties for a project to make sure it is progressing smoothly and in a timely manner. Being able to see what other team members are working on and what tasks have been completed helps teams stay organized and keep the momentum high.</p>
                <button className="btn btn-secondary mt-6">Know more</button>
            </div>
            
        </div>
    );
};

export default Section;