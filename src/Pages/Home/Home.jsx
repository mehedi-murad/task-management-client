import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;