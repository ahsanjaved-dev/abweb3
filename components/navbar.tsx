"use client"

import Link from "next/link"
import { FaPhoneVolume } from "react-icons/fa6"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const { setTheme } = useTheme()
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex justify-center gap-3 items-center md:hidden px-2 py-4 border-b border-zinc-600">
        <a href="tel:+9176953712" className="btn tracking-widest text-xs h-9">
          <FaPhoneVolume />
          (917)-695-3712
        </a>
        <Link href={"#contact"} className="btn text-xs h-9">
          Get an Instant Quote
        </Link>
      </div>
      <div className="md:navbar bg-white dark:bg-[#1d232a] shadow-sm border-b md:border-b-0 py-4 border-zinc-600">
        <div className="flex justify-between md:justify-start md:w-[50%]">
          <div className="xl:hidden flex items-center px-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full mt-3 ml-1">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Services</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-[2px]">
                        <DropdownMenuItem>Carpet Cleaning</DropdownMenuItem>
                        <DropdownMenuItem>Upholstery Cleaning</DropdownMenuItem>
                        <DropdownMenuItem>Hardwood Floor Cleaning</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>About Us</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a className="btn btn-ghost text-xl ">AB Carpet Cleaning</a>
          <div className="flex items-center md:hidden">
            <div className="px-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden xl:inline-flex">
          <ul className="menu menu-horizontal items-center px-1">
            <li>
              <Link href={"/"}>
                <Button variant="link">Home</Button>
              </Link>
            </li>
            <li>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link">Services</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60 p-2">
                    <DropdownMenuItem>Carpet Cleaning</DropdownMenuItem>
                    <DropdownMenuItem>Upholstery Cleaning</DropdownMenuItem>
                    <DropdownMenuItem>Hardwood Floor Cleaning</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </li>
            <li>
              <Link href={"/"}>
                <Button variant="link">About Us</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 hidden md:inline-flex">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a href="tel:+9176953712" className="btn text-white tracking-widest">
            <FaPhoneVolume />
            (917)-695-3712
          </a>
          <Link href={"#contact"} className="btn text-white hidden sm:inline-flex">
            Get an Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
