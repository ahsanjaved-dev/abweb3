"use client"

import { motion } from "framer-motion"
import React from "react"
import { AuroraBackground } from "./ui/aurora-background"
import { FaPhoneVolume } from "react-icons/fa6"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            We Bring Carpets Back to Life!
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Refresh Your Carpets Today!
          </div>
          <a href="tel:+9176953712">
            <Button variant={"secondary"} className="h-12 w-44 border border-zinc-200">
              <FaPhoneVolume />
              (917)-695-3712
            </Button>
          </a>
        </motion.div>
      </AuroraBackground>
    </div>
  )
}

export default Hero
