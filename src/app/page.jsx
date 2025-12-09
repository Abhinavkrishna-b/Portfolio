import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 lg:py-0">

      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px]">
          <Image 
            src="/developer-pic-1.png" 
            alt="dev pic" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm Abhinav Krishna B <br /> Turning Vision Into Reality With Code
        </h1>

        <p className="text-base md:text-lg">
          Hi there! I'm Abhinav Krishna B currently pursuing my Computer Science and Engineering 
          degree at Kongu Engineering College. I am passionate about developing innovative and 
          impactful projects.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="px-5 py-3 ring-1 ring-black bg-black text-white rounded-lg">
            View my work
          </button>
          <button className="px-5 py-3 ring-1 ring-black rounded-lg">
            Contact Me
          </button>
        </div>
      </div>

    </div>
  );
};

export default Homepage;
