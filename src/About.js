import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";
const About = () => {

  const {myname}= useProductContext()

  const data = {
    name: "Utkarsh Ecommerce",
  };

  return(
    <>
    {myname}
  <HeroSection myData={data} />
    </>
  );
};


export default About;
