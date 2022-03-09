import React, {useEffect} from "react";
import DoctorsHome from "./DoctorsHome/DoctorsHome";
import GalleryHome from "./GalleryHome/GalleryHome";
import HeroSlider from "./HeroSlider/HeroSlider";
import "./Home.css";
import NewsHome from "./NewsHome/NewsHome";
import ServiceHome from "./ServiceHome/ServiceHome";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../../Layouts/Layout";

const Home = ({news, seo}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <Layout seo={seo}>
            <div className="homePage">
                <HeroSlider/>
                <ServiceHome/>
                <DoctorsHome/>
                <NewsHome news={news}/>
                <GalleryHome/>
            </div>
        </Layout>

    );
};

export default Home;
