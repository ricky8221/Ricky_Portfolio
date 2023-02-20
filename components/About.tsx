import Image from "next/image";
import React from "react";
import portfolioImage from '../asset/portfolio.jpg'
import { motion } from 'framer-motion'

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{
            once:true
        }}
        transition={{
            duration:1.2
        }}
        src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/300630783_10227108152834683_3462862914510379183_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HQBt3diTDRwAX_gc24o&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAMfCwaan4ZhvVIs56aZCbFQ1IwRFa9aN7RiiaqOIPR8Q&oe=63F82F93"
        alt="Ricky Picture with Bella"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div 
        className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a {''}
            <span className="underline decoration-[#7AB0A]">little</span>
            {''} background</h4>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, numquam qui itaque nemo nobis, magni sequi, nihil asperiores consectetur praesentium ex facere deserunt sed dignissimos eveniet earum similique possimus ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nemo esse quos at tempore, dicta aut asperiores laboriosam rerum facilis neque sequi nisi exercitationem corrupti amet incidunt itaque numquam sed.</p>
        </div>
    </motion.div>
  );
}
