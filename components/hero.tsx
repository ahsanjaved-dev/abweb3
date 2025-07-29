"use client"

import { motion } from "framer-motion"
import React from "react"
import { AuroraBackground } from "./ui/aurora-background"
import Link from "next/link"

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
          <Link href={"/book"} className={"btn dark:bg-white dark:text-black"}>
            Book Now
          </Link>
        </motion.div>
      </AuroraBackground>
    </div>
  )
}

export default Hero
