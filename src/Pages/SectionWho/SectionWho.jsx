import { useEffect } from "react";
import image from "../../assets/banner/who.png"
import './SectionWho.css'
import Aos from "aos"
import "aos/dist/aos.css"

const SectionWho = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="questionBg max-w-7xl mx-auto p-14">
            <h2 data-aos="fade-up" className="text-center text-4xl font-bold mb-8">Who need this?</h2>
            <div className=" flex flex-col-reverse md:flex-row justify-center items-center">
                <div>
                    <img data-aos="zoom-in" src={image} alt="" />
                </div>
                <div>
                    <p data-aos="fade-down">To meet the demands of today’s competitive market, it is essential to have a task management system in place. A business can stay on top of deadlines, priorities, and progress by keeping track of and organizing tasks.Running a business at scale without a task management system in place is a chaotic and near-impossible feat. Gone are the days when a business owner or manager could rely on their own memory or a haphazard system of sticky notes and Excel spreadsheets to get the job done. Sophisticated but simple-to-use task management tools are now available that can make a world of difference in how your business runs.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                        <h2 data-aos="fade-right" className="bg-base-200 p-2 rounded-lg font-bold">Developer</h2>
                        <h2 data-aos="fade-right" className="bg-base-200 p-2 rounded-lg font-bold">Planner</h2>
                        <h2 data-aos="fade-left" className="bg-base-200 p-2 rounded-lg font-bold">Marketing Team</h2>
                        <h2 data-aos="fade-left" className="bg-base-200 p-2 rounded-lg font-bold">And so On</h2>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default SectionWho;