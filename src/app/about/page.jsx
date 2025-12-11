"use client";
import { motion } from "framer-motion";

const AboutPage = () =>{
    return(
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
            {/* CONTAINER */}
            <div className="">

                {/* TEXT */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">

                    {/* ABOUT */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">ABOUT ME</h1>
                        <p className="text-lg">
                        I'm Abhinav Krishna, a Computer Science student who enjoys learning, coding, and improving through simple, consistent work. I'm a software enthusiast who loves exploring new technologies and creating useful things. 
                        </p>

                        <div className="self-end opacity-50 rounded">
                        <svg width="180" height="70" viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="180" height="70" fill="#F5F5F5"/>
                        <path d="M1.00024 68.1429C1.26423 67.0869 1.52823 66.0309 5.62423 55.8509C9.72022 45.6709 17.6402 26.3989 21.7202 15.6789C25.8002 4.95891 25.8002 3.37491 26.1962 3.35091C31.858 3.00778 33.5122 16.0949 36.0563 24.5069C40.041 37.6827 43.3842 45.9669 44.4642 51.3269C44.9127 53.5528 45.8002 56.6549 45.2722 59.4589C44.5324 63.3878 36.2322 53.7749 29.2922 47.6309C24.0377 42.9791 19.1602 38.8309 15.2803 35.3549C14.3443 34.5509 13.2883 33.7589 12.2162 32.9549C11.1442 32.1509 10.0882 31.3589 7.40026 29.7429" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M56.2002 56.1429C58.5922 50.8309 61.7842 43.9029 64.5922 33.5269C68.4335 19.3328 62.6162 14.0309 59.4123 8.43092C56.6766 3.64952 53.0082 1.75091 51.6762 1.21092C45.9359 -1.11627 51.6562 16.3829 54.7202 25.4389C57.8062 34.5598 62.3123 42.7669 65.6562 48.7909C66.8999 51.0313 68.1922 52.9349 69.9202 54.2669C70.7761 54.9266 71.9122 55.0709 73.1162 54.9429C74.3202 54.8149 75.6402 54.2869 76.5842 53.4869C80.0967 50.5102 79.9283 45.2309 79.6722 35.2469C79.6184 33.1481 78.0882 32.6869 77.2802 32.9429C72.3058 34.519 77.5282 45.4549 78.8602 49.5949C79.191 50.6231 80.1842 51.3269 81.1202 51.2069C85.9835 50.5834 86.3282 44.6869 87.7883 43.2189C89.3797 41.6187 92.4562 44.1349 94.4522 44.9389C96.2142 45.6487 97.7922 42.2869 99.5202 40.6869C102.555 37.8769 108.44 41.2149 116.424 41.6069C125.151 42.0354 131.92 41.4789 133.26 40.4189C137.981 36.6848 122.104 32.4309 116.484 29.6189C115.352 29.0522 114.616 28.1589 114.34 27.2229C112.825 22.0854 119.912 14.5749 122.46 9.75892C122.996 8.74631 123.128 7.63092 123.66 6.29492C124.192 4.95892 124.984 3.37492 126.184 6.51892C133.698 26.2041 132.984 31.8549 139.108 37.8549C143.933 42.5823 155.864 41.7429 164.84 39.2229C168.168 37.2309 170.856 35.3509 173.248 33.7549C174.584 32.9509 176.168 32.1589 178.6 29.7429" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        </div>

                        {/*  SCROLL SVG */}
                        <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        </motion.svg>

                        
                    </div>

                    {/* SKILLS */}
                    <div className="flex flex-col gap-12 justify-center">
                        <div className="font-bold text-2xl">
                        SKILLS
                        </div>

                        {/* SKILLS LIST */}
                        <div className="flex flex-wrap gap-4">
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">JavaScript</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">Java</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">Python</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">C</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">ReactJS</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">NextJS</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">TailWind CSS</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">NodeJS</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">ExpressJS</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">MongoDB</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">MySQL</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">Git</div>
                            <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">VsCode</div>
                            
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="">
                        EXPERIENCE
                    </div>
                </div>

                {/* SVG */}
                <div className="hidden">

                </div>

            </div>
        </motion.div>
    )
}

export default AboutPage;