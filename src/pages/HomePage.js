import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {Typewriter} from 'react-simple-typewriter'
import {motion} from "framer-motion";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <section className="py-20 bg-white-200 ">
        <div className="container mx-auto flex flex-col items-start justify-start px-10 mb-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to 
            <span className="text-blue-500 font-bold ml-4">
                <Typewriter
                    words= {['Arizon Digital E-Commerce']}
                    loop={true}
                    cursor
                    cursorStyle=''
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={3000}
                    />
            </span>
          </h1>
          <motion.p className="text-lg "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover the best products at unbeatable prices. Quality meets affordability for your perfect shopping experience.</motion.p>
          <Link to="/products" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Shop Now 
          </Link>
        </div>
        <motion.img src="https://img.lovepik.com/free-png/20211108/lovepik-men-and-women-are-shopping-in-the-mall-png-image_400526633_wh1200.png" 
        alt="website-image" 
        className="w-[250px] lg:w-[300px] rounded-lg mx-auto mt-4" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;