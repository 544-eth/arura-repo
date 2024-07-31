'use client'
import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";



const COLORS = ['#13ffaa', '#1e67c6', '#ce84cf', '#dd335c']
  export default function Home() {
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0, #020617 55%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

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
        <div className=" relative z-10 flex flex-col items-center gap-3">
            <span className="  mb-1.5 inline-block rounded-full bg-gray-600 px-3 py-1 p-3 ring">$FUPA</span>
            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl md:font- leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tigh">Agent Fupa had one job to do but failed woefully. </h1>
              <p className=" my-6 max-w-xl text-center text-base leading-relaxed md:leading-relaxed ">
                This has been my stance, all women belong to the kitchen take a look at Agent Fupa 😅 terrible or not? if you believe she belongs to the kitchen 
              </p>
              <motion.button
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.985,
                }}

                style={{
                  border,
                  boxShadow
                }}

               className=" group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950 px-4 py-2 text-gray-50 transition-colors">CLICK BUY
                <FaLongArrowAltRight className=" transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
               </motion.button>
              
        </div>

        <div className=" absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={1500} factor={2} fade speed={2} />
          </Canvas>
        </div>
    </motion.div>
  );
}
