import React from "react";
import Layout from "../../components/Layouts/Layout";
import HeroSection from "./HeroSection";
import "../../styles/HeroSection.css";
import About from "./About";
import Menu from "./Menu";
import Promotion from "./Promotion";
import Shop from "./Shop";
import Brand from "./Brand";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <About />
        <Menu />
        <Promotion />
        <Shop />
        <Brand />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
