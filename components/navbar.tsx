"use client"

import Link from "next/link"
import { FaPhoneVolume } from "react-icons/fa6"
import * as React from "react"
import { Moon, Sun, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavLink {
  label: string
  href: string
  subItems?: { label: string; href: string; description?: string }[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    subItems: [
      {
        label: "Carpet Cleaning",
        href: "/services/carpet-cleaning",
        description: "Deep cleaning for all carpet types",
      },
      {
        label: "Upholstery Cleaning",
        href: "/services/upholstery-cleaning",
        description: "Professional furniture cleaning",
      },
      {
        label: "Hardwood Floor Cleaning",
        href: "/services/hardwood-floor-cleaning",
        description: "Restore your hardwood floors",
      },
    ],
  },
  { label: "About Us", href: "/about" },
]

const Navbar = () => {
  const { setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = React.useState<string | null>(null)
  const [mounted, setMounted] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Handle hydration
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        setExpandedMobileItem(null)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest("[data-navbar]")) {
        setIsOpen(false)
        setExpandedMobileItem(null)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setExpandedMobileItem(null)
  }

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label)
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <div className="h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
    )
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-lg bg-white/10 dark:bg-slate-900/80" : ""
      )}
      data-navbar
    >
      {/* Main Navigation */}
      <div
        className={cn(
          "transition-all duration-300",
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",
          isScrolled ? "shadow-2xl py-1" : "shadow-lg py-2"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex justify-between items-center transition-all duration-300",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className={cn(
                  "font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent hover:from-blue-100 hover:to-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-lg px-2 py-1",
                  isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                )}
              >
                AB Carpet Cleaning
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {link.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-white hover:bg-white/10 hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-200   group"
                        >
                          <span>{link.label}</span>
                          <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className="w-80 mt-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl rounded-xl p-2"
                      >
                        <DropdownMenuGroup>
                          {link.subItems.map((subItem) => (
                            <DropdownMenuItem key={subItem.label} asChild>
                              <Link
                                href={subItem.href}
                                className="w-full px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                              >
                                <div>
                                  <div className="font-medium">{subItem.label}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white hover:bg-white/10 hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Actions */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden md:flex items-center space-x-4"
            >
              {/* Theme Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 rounded-xl w-10 h-10 focus:ring-2 focus:ring-white/30"
                      aria-label="Toggle theme"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="mt-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl rounded-xl"
                >
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <div className="mr-2 h-4 w-4 rounded-full bg-gradient-to-r from-slate-400 to-slate-600" />
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Phone Button */}
              <motion.a
                href="tel:+9176953712"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/20"
                aria-label="Call AB Carpet Cleaning"
              >
                <FaPhoneVolume className="w-4 h-4" />
                <span className="tracking-wide">(917)-695-3712</span>
              </motion.a>
            </motion.div>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 rounded-xl w-10 h-10 focus:ring-2 focus:ring-white/30"
                      aria-label="Toggle theme"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="mt-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl rounded-xl"
                >
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <div className="mr-2 h-4 w-4 rounded-full bg-gradient-to-r from-slate-400 to-slate-600" />
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-gradient-to-b from-blue-700/95 to-indigo-800/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md border-t border-white/10 dark:border-slate-700/50"
            >
              <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleMobileSubmenu(link.label)}
                          className="w-full flex items-center justify-between text-white hover:bg-white/10 hover:text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                        >
                          <span>{link.label}</span>
                          <motion.div
                            animate={{ rotate: expandedMobileItem === link.label ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedMobileItem === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-2 space-y-1"
                            >
                              {link.subItems.map((subItem, subIndex) => (
                                <motion.div
                                  key={subItem.label}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                                >
                                  <Link
                                    href={subItem.href}
                                    onClick={() => {
                                      setIsOpen(false)
                                      setExpandedMobileItem(null)
                                    }}
                                    className="block w-full text-left text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                                  >
                                    <div>
                                      <div className="font-medium">{subItem.label}</div>
                                      {subItem.description && (
                                        <div className="text-xs text-white/60 mt-1">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left text-white hover:bg-white/10 hover:text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
