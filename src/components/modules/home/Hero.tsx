"use client";
import heroImage from "@/assets/image/hero/hero_image.png";
import Image from "next/image";
import line from "@/assets/image/hero/waterMark.png";
import MovementElement from "@/components/animation/MovementElement";
import HeroSearch from "./HeroSearch";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/components/animation/FramerMotionVariant";
const Hero = () => {
  return (
    <div className="flex-center flex-col-reverse md:flex-row lg:gap-10 gap-5 relative">
      <motion.div
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        exit={{ y: "-10%", opacity: 0 }}
        className="flex-1"
      >
        <motion.div
          variants={parentVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          exit="exit"
          className="md:space-y-6 space-y-3"
        >
          <motion.h1
            variants={childrenVariants}
            className="xl:text-6xl md:text-4xl text-2xl font-bold"
          >
            Good <span className="text-primary-color">food</span>, great <br />
            memories
          </motion.h1>
          <motion.p
            variants={childrenVariants}
            className="max-w-md text-xl text-primary-black ml-0"
          >
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </motion.p>
          <motion.p variants={childrenVariants}>
            <HeroSearch></HeroSearch>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* hero section image */}
      <div className="flex-1 overflow-hidden">
        <MovementElement duration={0.5}>
          <Image src={heroImage} alt="hero_image"></Image>
        </MovementElement>
      </div>
      <div className="absolute xl:-top-10 2xl:top-0 lg:-top-10 md:-top-6 top-10 left-1/4 overflow-hidden">
        <MovementElement duration={0.5}>
          <Image src={line} alt="a_line"></Image>
        </MovementElement>
      </div>
    </div>
  );
};

export default Hero;
