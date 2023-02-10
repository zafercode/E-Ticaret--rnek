import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-[#E7EAEF]">
      <Navbar />
      <div className="mt-20 py-20">
        <h1 className="font-semibold text-center text-lg md:text-4xl text-[#15284B]">
          Bizi tanıyın
        </h1>
        <p className="flex justify-center text-sm md:text-lg items-center mx-20 pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iusto minima. Unde repellat enim aliquid, repellendus ipsam eius labore, quam, dolores exercitationem debitis doloremque corporis perspiciatis sed nulla ipsa tempora autem necessitatibus? Illo deserunt natus sunt id, aperiam a repudiandae eum ipsam et cum iure. Quod maiores aspernatur repellat at impedit quibusdam error. Tenetur provident impedit expedita debitis ab doloremque excepturi porro dicta, ipsum necessitatibus vitae praesentium consectetur quibusdam nesciunt, facere voluptatem quod amet dolor voluptas? Cumque ut repudiandae nisi magnam maxime necessitatibus distinctio architecto voluptas perferendis, voluptate, expedita natus sint nemo quasi impedit quam labore ratione soluta error beatae!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
