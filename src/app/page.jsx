'use client'
import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const COLORS = ['#13ffaa', '#1e67c6', '#ce84cf', '#dd335c']
export default function Home() {
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0, #020617 55%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 10,
          
        })
    }, [color])
  return (
    <motion.div style={{
      backgroundImage,
    }} 
    className=" relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
        <div className=" relative z-10 flex flex-col items-center">
            <span className="  mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1 p-3 ring">$FUPA</span>
            <h1 className=" max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl md:font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tigh">Scaling Ethereum technology and values</h1>
              <p className=" my-6 max-w-xl text-center text-base leading-relaxed md:leading-relaxed">
                This has been my stance, all women belong to the kitchen take a look at Agent Fupa 😅 terrible or not? if you believe she belongs to the kitchen 
              </p>
              <button className=" bg-gradient-to-br from-blue-800  px-5 py-2 rounded-2xl ring ring-green-400 hover:ring-green-200">CLICK BUY</button>
              
        </div>
    </motion.div>
  );
}
