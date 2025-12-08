import Image from "next/image";

const Homepage = () => {
    return(
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 text-xl">

            {/* IMAGE */}
            <div className="h-1/2  lg:h-full w-1/2 relative">
                <Image src="/developer-pic-1.png" alt="dev pic" fill className="object-contain"/>
            </div>

            {/* TEXT */}
            <div className="h-1/2 lg:h-full w-1/2 flex flex-col gap-8 items-start justify-center ">
                <h1 className="text-4xl font-bold md:text-6xl ">
                    Hi,I'm Abhinav Krishna B <br/>
                    Turning Vision Into Reality With Code
                </h1>

                <p className="md:text-xl">
                    Hi there! I'm Abhinav Krishna B currently pursuing my Computer Science and Engineering degree at Kongu Engineering College, I am passionate about developing innovative and impactful projects.
                </p>

                <div className="w-full flex gap-4">
                    <button className="p-4 ring-1 ring-black bg-black text-white rounded-lg">View my work</button>
                    <button className="p-4 ring-1 ring-black rounded-lg">Contact Me</button>
                </div>
            </div>
        </div>
    )
};

export default Homepage;
