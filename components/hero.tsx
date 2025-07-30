"use client"

import { motion } from "framer-motion"
import React from "react"
import Link from "next/link"
import { Sparkles, Award, Clock, Shield, ArrowRight, CheckCircle, Star, Phone } from "lucide-react"

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight?: string
}

interface StatItem {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  prefix?: string
  suffix?: string
}

const features: FeatureItem[] = [
  {
    icon: Award,
    title: "Professional Service",
    description: "Expert cleaning with premium equipment and eco-friendly solutions",
    highlight: "Certified & Trained Technicians",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick response with flexible scheduling to fit your busy lifestyle",
    highlight: "24/7 Emergency Service",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete protection with 100% satisfaction guarantee for peace of mind",
    highlight: "Licensed & Bonded",
  },
]

const stats: StatItem[] = [
  {
    value: "5,000",
    label: "Happy Customers",
    icon: Star,
    suffix: "+",
  },
  {
    value: "15",
    label: "Years Experience",
    icon: Award,
    suffix: "+",
  },
  {
    value: "100",
    label: "Satisfaction Rate",
    icon: CheckCircle,
    suffix: "%",
  },
]

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl -z-10"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl -z-10"
      />

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 right-8 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-xl -z-10"
      />

      {/* Main Hero Content */}
      <motion.div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-md px-6 py-3 rounded-full text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-slate-600 shadow-lg mb-8 hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <span className="font-semibold text-sm sm:text-base">
              New York&apos;s Premier Carpet Cleaning Service
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-slate-800 dark:text-white drop-shadow-sm">We Bring </span>
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Carpets
            </motion.span>
            <br />
            <span className="text-slate-800 dark:text-white drop-shadow-sm">Back to Life!</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your home with our{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              professional carpet cleaning
            </span>{" "}
            services. Experience the difference today!
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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+9176953712"
                className="inline-flex items-center space-x-3 bg-white/10 dark:bg-slate-800/50 hover:bg-white/20 dark:hover:bg-slate-700/50 backdrop-blur-sm text-slate-700 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-500/20 border border-slate-200 dark:border-slate-600"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
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
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-slate-800 dark:text-white">
                    {stat.prefix}
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/80"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {feature.title}
                    </h3>

                    {feature.highlight && (
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {feature.highlight}
                      </div>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-600 dark:text-slate-400">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Fully Licensed & Insured</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Same Day Service Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-1 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + i * 0.1, duration: 0.3 }}
                >
                  <Star className="w-5 h-5 fill-current" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Rated 5 stars by over 1,000+ satisfied customers
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
