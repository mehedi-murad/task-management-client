import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="font-lato">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;