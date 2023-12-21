import { Parallax } from "react-parallax";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import webBanner from "../../assets/banner/4.jpg"
import Section from "../Section/Section";


const Home = () => {
    return (
        <Parallax blur={6.5} bgImage={webBanner} bgImageAlt="the cat" strength={200}>
            <div className="font-lato">
                <Navbar></Navbar>
                <Banner></Banner>
                <Section></Section>
                <Footer></Footer>
            </div>
        </Parallax>
    );
};

export default Home;