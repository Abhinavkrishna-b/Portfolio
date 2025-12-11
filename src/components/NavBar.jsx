"use client";
import Link from "next/link"
import Image from "next/image";
import {motion, stagger} from "framer-motion"
import { useState } from "react";
import NavLink from "./NavLink";

const NavBar = () =>{
    
    const links = [
        {url:"/",title:"Home"},
        {url:"/about", title:"About"},
        {url: "/projects", title:"Projects"},
        {url: "/contact", title: "Contact"}
    ]

    const [open,setOpen]=useState(false)

    const topVariants ={
        closed:{
            rotate:0
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const midVariants={
        closed:{
            opacity:1
        },
        opened:{
            opacity:0
        }
    }

    const bottomVariants={
        closed:{
            rotate:0
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const listVariants ={
        closed:{
            x:"100%",
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            }
        }
    }

    const lstItemsVariants={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }

    return(
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 text-xl'>
            
            <div className="hidden md:flex gap-5 flex-1">
                {links.map(link=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>

            {/*LOGO */}
            <div className="flex-1 flex justify-center">
            <motion.div className="w-16 h-16 bg-gray-800 text-white flex items-center justify-center rounded-full text-xl font-bold"
                whileHover={{
                    backgroundColor : ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                    transition:{duration:1,repeat:Infinity}
                }}>
                AK
            </motion.div>
            </div>
            
            {/* PROFILE LINKS */}
            <div className="hidden md:flex gap-7 flex-1 justify-end">
                <Link href="https://www.linkedin.com/in/abhinavkrishna-b-cs/">
                    <Image src="/linkedin.png" alt="LinkedIn logo" width={27} height={27}/>
                </Link>
                <Link href="https://github.com/Abhinavkrishna-b">
                    <Image src="/github.png" alt="GitHub logo" width={27} height={27} />
                </Link>
                <Link href="https://leetcode.com/u/Abhinav_Krishna_B/">
                    <Image src="/leetcode.png" alt="LeetCode logo" width={27} height={27}/>
                </Link>
            </div>

            <div className='md:hidden'>
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative"
                 onClick={() => setOpen((prev) => (!prev))}>
                    <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div variants={midVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>
                { open && (
                <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    
                    {links.map(link=>(
                        <motion.div variants={lstItemsVariants} className="" key={link.title}>
                        <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}

                </motion.div>
                )}
            </div>

        </div>

        
    )
}

export default NavBar
