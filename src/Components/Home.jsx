import React from "react";

function Home() {
  return (
    <>
      <div className="h-[935px] md:h-[700px] w-full mt-4 md:mt-12 ">
        <div className="xl:mr-60 lg:mr-32 md:mr-24 mr-4">
          <div className="flex flex-col items-end text-transparent p-0 ">
            <h1
              className="logo text-[75px] mt-32 md:text-[110px] md:mt-34"
              style={{
                WebkitTextStroke: "2px #ff5f09",
                color: "transparent",
              }}
            >
              Akshay
            </h1>
            <h1
              className="logo text-[75px] md:text-[110px] text-transparent font-extrabold"
              style={{
                WebkitTextStroke: "2px #ff5f09",
                color: "transparent",
              }}
            >
              Bharamshetti
            </h1>
          </div>
          <div className="text-white md:text-center lg:text-right lg:mr-32">
            <h1 className="work-title text-3xl mt-5 ml-4">
              Front-<span className="text-[#ff5f09]">End</span> Developer
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <h1 className="work-title text-xl md:text-2xl flex flex-col md:flex-row items-center">
            Fresh Constructor, Original Programmer
            <span className="pl-1">and Developer.</span>
          </h1>
        </div>
        {/* resume Down */}
        <div className="flex justify-center mt-32 md:hidden">
          <a
            className="border-2 border-[#ff5f09] w-40 h-10 rounded-full flex justify-center items-center hover:bg-[#ff5f09] hover:scale-125 hover:outline-none transition-all"
            href="https://drive.google.com/file/d/1KXLjQ2hUrlKi7W6wvk8XyecJL72XnRfi/view?usp=drive_link"
            target="_blank"
          >
            <p>
              Resume&nbsp;
              <i className="fa-solid fa-arrow-down text-[#ff5f09]"></i>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
