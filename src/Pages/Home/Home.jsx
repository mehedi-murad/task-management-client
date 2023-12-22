import { Parallax } from "react-parallax";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import webBanner from "../../assets/banner/mainBg.jpg"
import Section from "../Section/Section";
import SectionWho from "../SectionWho/SectionWho";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <Parallax blur={6.5} bgImage={webBanner} bgImageAlt="background" strength={200}>
            <Helmet>
                <title>Task Management | Home</title>
            </Helmet>
            <div className="font-lato">
                <Navbar></Navbar>
                <Banner></Banner>
                <Section></Section>
                <div>
                    <SectionWho></SectionWho>
                </div>
                <Footer></Footer>
            </div>
        </Parallax>
    );
};

export default Home;