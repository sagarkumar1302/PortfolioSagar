"use client";
import Image from "next/image";
import React, { useRef } from "react";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <div className="flex h-dvh items-center justify-between">
      {/* I'd figure all the animations and transitions out later */}
      <div className="text w-[60%]">
        <div className="flex gap-2 mb-6">
          {/* SOME SICK ANIMATION FOR THE HEY, THERE TEXT. LIKE A TORCH LIGHT THAT SHINES THROUGH THE TRANSLUCENT TEXT, MAKING ERRTHING WHITE.*/}
          <p className="text-white/60 text-3xl">Hey, there</p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
          >
            <Image
              src="/hand-wave.svg"
              width={30}
              height={30}
              alt="hand-waving"
            />
          </motion.div>
        </div>
        <motion.h1
          className="text-7xl font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Adeola Badero
          </span>
          <p>a Software Engineer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40 text-4xl mt-6"
        >
          currently focused on building user experiences that drive growth.
        </motion.p>
      </div>

      {/* IMAGE */}
      <motion.div
        ref={imgRef}
        style={{ rotate }}
        className="h-image flex items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={animateIn1}
      >
        {/* <div className="bg-white absolute w-[300px] h-[300px] rounded-2xl z-50 mix-blend-screen"></div> */}
        <Image
          src="/transparent-ade.png"
          width={400}
          height={470}
          alt="the-trans"
          className="bg-image-radial px-10 pt-20"
        />
      </motion.div>
    </div>
  );
}
