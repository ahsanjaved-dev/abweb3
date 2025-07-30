"use client"

import { motion } from "framer-motion"
import React from "react"
import Link from "next/link"
import { Sparkles, Award, Clock, Shield, ArrowRight, Phone, CheckCircle, Star } from "lucide-react"

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface StatItem {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const features: FeatureItem[] = [
  {
    icon: Award,
    title: "Professional Service",
    description: "Expert cleaning with premium equipment and eco-friendly solutions",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick response with flexible scheduling to fit your needs",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete protection with 100% satisfaction guarantee",
  },
]

const stats: StatItem[] = [
  {
    value: "5000+",
    label: "Happy Customers",
    icon: Star,
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
    icon: CheckCircle,
  },
]

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center  py-10 justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-blue-400 dark:bg-slate-900/30 backdrop-blur-md px-6 py-3 rounded-full text-black dark:text-white border border-zinc-50 dark:border-slate-700/50 shadow-xl mb-8"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-medium text-sm sm:text-base ">
              New York's Premier Carpet Cleaning Service
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-blue-500 dark:text-white drop-shadow-2xl">We Bring </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Carpets
            </span>
            <span className="text-blue-500 dark:text-white drop-shadow-2xl">
              {"\n"}Back to Life!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-black dark:text-neutral-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your home with our{" "}
            <span className="font-semibold text-blue-500">professional carpet cleaning</span>{" "}
            services. Refresh your carpets today!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
              <Link
                href="/book"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 border border-blue-400/20"
              >
                <span>Book Now</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
              <a
                href="tel:+9176953712"
                className="inline-flex items-center space-x-3 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 backdrop-blur-md text-black dark:text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 border border-white/20"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
                <span>(917) 695-3712</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-black dark:text-white">{stat.value}</div>
                  <div className="text-sm font-medium text-black dark:text-white">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group bg-white/10 dark:bg-slate-900/20 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-dark dark:text-white group-hover:text-blue-200 transition-colors duration-200">
                    {feature.title}
                  </h3>

                  <p className="text-black dark:text-white/80 leading-relaxed text-sm lg:text-base group-hover:text-black dark:group-hover:text-white/90 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-16 pt-8 border-t border-white/20 dark:border-slate-700/50"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-black dark:text-white/70">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Same Day Service Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-8 h-8 bg-blue-400/20 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-16 w-6 h-6 bg-purple-400/20 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 right-8 w-4 h-4 bg-pink-400/20 rounded-full blur-sm"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
