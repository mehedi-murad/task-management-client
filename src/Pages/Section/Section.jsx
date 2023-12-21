import image from "../../assets/banner/tm.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Section = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="flex justify-center items-start max-w-7xl mx-auto bg-base-200 p-14">
            <div data-aos="fade-right" className="flex-1">
                <img src={image} alt="" />
            </div>
            <div data-aos="fade-left" className="flex-1 space-y-4 my-20">
                <h2 className="text-4xl font-bold">What is Task Management?</h2>
                <p className="text-gray-400 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis, minima dignissimos laborum officia asperiores, natus consequuntur placeat velit quaerat quae similique recusandae voluptates nulla! Autem vitae doloribus exercitationem pariatur, blanditiis accusamus ipsa aliquid? Velit, nulla? Vel quaerat, laboriosam cum totam enim deserunt aliquam libero iste culpa quo fuga sunt.</p>
                <button className="btn btn-secondary mt-6">Know more</button>
            </div>
            
        </div>
    );
};

export default Section;