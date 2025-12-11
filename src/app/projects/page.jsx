"use client";
import { motion } from "framer-motion";

const ProjectPage = () =>{
    return(
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
        <div className='h-full overflow-scroll'>
            ProjectPage
        </div>
    </motion.div>
    )
}

export default ProjectPage;