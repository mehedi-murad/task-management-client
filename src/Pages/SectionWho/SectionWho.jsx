import image from "../../assets/banner/who.png"
import './SectionWho.css'

const SectionWho = () => {
    return (
        <div className="questionBg max-w-7xl mx-auto p-14">
            <h2 className="text-center text-4xl font-bold">Who need this?</h2>
            <div className=" flex justify-center items-center">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>To meet the demands of today’s competitive market, it is essential to have a task management system in place. A business can stay on top of deadlines, priorities, and progress by keeping track of and organizing tasks.Running a business at scale without a task management system in place is a chaotic and near-impossible feat. Gone are the days when a business owner or manager could rely on their own memory or a haphazard system of sticky notes and Excel spreadsheets to get the job done. Sophisticated but simple-to-use task management tools are now available that can make a world of difference in how your business runs.</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default SectionWho;