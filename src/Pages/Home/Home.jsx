import React from "react";
import Header from "../../Component/Header/Header";
import Navbar from "../../Component/Navbar/Navbar";
import Slider from "../../Component/Slider/Slider";
import Card_1_2_map from "../../Component/Home_Cards/Card_sec_1/Card_1_2_map";
import Card3_map from "../../Component/Home_Cards/Card_sec_2/Card3_map";
import Card4_map from "../../Component/Home_Cards/Card_sec_3/Card4_map";
import Footer from "../../Component/Footer/Footer";


const Home = () => {
  return (
    <div>

      <Header/>
      <Navbar />
      <Slider />
      <Card_1_2_map/>
      <Card3_map/>
      <Card4_map/>
      <Footer/>
    </div>
  );
};

export default Home;
