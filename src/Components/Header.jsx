import React from "react";
import { useState } from "react";
import resume from "../assets/Akshay_B.pdf";

function Header() {
  const [bars, setBars] = useState();

  const hoverEff = `fixed hover:bg-slate-300 hover:h-40px hover:w-[100px] hover:ml-20 flex hover:justify-center hover: rounded-full hover:text-black transition-all duration-300 ease-out cursor-pointer`;

  const btnEff = `px-4 text-xl cursor-pointer hover:text-[#ff5f09]`;

  const HandleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HandleAboutClick = () => {
    window.scrollTo({ top: 780, behavior: "smooth" });
  };

  const HandleSkillsClick = () => {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  const HandleProjectClick = () => {
    window.scrollTo({ top: 2380, behavior: "smooth" });
  };

  const HandleContactClick = () => {
    window.scrollTo({ top: 6297, behavior: "smooth" });
  };

  const HandleAboutMobClick = () => {
    window.scrollTo({ top: 950, behavior: "smooth" });
  };

  const HandleSkillsMobClick = () => {
    window.scrollTo({ top: 2250, behavior: "smooth" });
  };

  const HandleProjectMobClick = () => {
    window.scrollTo({ top: 3750, behavior: "smooth" });
  };

  const HandleContactMobClick = () => {
    window.scrollTo({ top: 6700, behavior: "smooth" });
  };
  return (
    <>
      <div className="">
        {/* mob nac */}
        <div className={`mob-nav flex `}>
          <div
            className={` fixed right-0 w-1/4 top-0 h-screen z-50 backdrop-blur-[2px] ${
              !bars ? "hidden" : ""
            }`}
            onClick={() => setBars(false)}
          ></div>
          <div
            className={`backdrop-blur-[12px] b bg-gray-600/50 fixed w-3/4 top-0 h-screen shadow-2xl md:hidden flex transition-all justify-center ${
              !bars ? "hidden" : ""
            } `}
          >
            <div className="md:flex flex-col">
              <h1 className="logo font-extrabold text-5xl text-[#ff5f09] mt-12">
                Akshay B
              </h1>
              <div
                className="px-4 text-xl cursor-pointer my-7 mt-24"
                onClick={() => HandleHomeClick()}
              >
                Home
              </div>
              <div
                className="px-4 text-xl cursor-pointer my-7"
                onClick={() => HandleAboutMobClick()}
              >
                About
              </div>
              <div
                className="px-4 text-xl cursor-pointer my-7"
                onClick={() => HandleSkillsMobClick()}
              >
                Skills
              </div>
              <div
                className="px-4 text-xl cursor-pointer my-7"
                onClick={() => HandleProjectMobClick()}
              >
                Projects
              </div>
              <div
                className="px-4 pr-8 text-xl cursor-pointer my-7"
                onClick={() => HandleContactMobClick()}
              >
                Contacts
              </div>
              {/* icon mob */}
              <div className="flex justify-center mt-32 text-2xl">
                <a
                  className="m-2 mr-8 hover:scale-110 transition-all"
                  href="mailto:akshaybharamshetti99@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                  className="m-2 mr-8 hover:scale-110 transition-all"
                  href="https://www.linkedin.com/in/akshaybharamshetti/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  className="m-2 mr-8 hover:scale-110 transition-all"
                  href="https://github.com/AkshayB99"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  className="m-2  hover:scale-110 transition-all"
                  href="https://drive.google.com/file/d/1KXLjQ2hUrlKi7W6wvk8XyecJL72XnRfi/view?usp=drive_link"
                  target="_blank"
                >
                  <i className="fa-solid fa-circle-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* web icon */}
        <div className="web-nav z-0 fixed w-full bg-img">
          <div className=" content-container">
            <div className="flex justify-between pt-6 p-2 xl:mx-20 z-40">
              <div className="md:ml-16">
                <h1
                  className={`logo font-extrabold text-4xl text-[#e5e8ee] ${
                    bars ? "hidden" : ""
                  }`}
                >
                  AB
                </h1>
              </div>
              <div className="md:flex md:flex-row hidden text-right">
                <div className={`${btnEff}`} onClick={() => HandleHomeClick()}>
                  Home
                </div>
                <div className={`${btnEff}`} onClick={() => HandleAboutClick()}>
                  About
                </div>
                <div
                  className={`${btnEff}`}
                  onClick={() => HandleSkillsClick()}
                >
                  Skills
                </div>
                <div
                  className={`${btnEff}`}
                  onClick={() => HandleProjectClick()}
                >
                  Projects
                </div>
                <div
                  className={`${btnEff} pr-8`}
                  onClick={() => HandleContactClick()}
                >
                  Contacts
                </div>
              </div>
              <div className="md:hidden text-2xl mt-3 mr-4 z-50">
                <i
                  className="fa-solid fa-bars"
                  onClick={() => setBars(true)}
                ></i>
              </div>
            </div>
          </div>
        </div>
        {/* side Icon */}
        <div className="fixed hidden h-screen items-center md:flex flex-col mt-36 text-3xl text-[#ff5f09] md:ml-16">
          <a
            className={`m-4 mt-28 ${hoverEff}`}
            href="mailto:akshaybharamshetti99@gmail.com"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            className={`m-4 mt-44 ${hoverEff}`}
            href="https://www.linkedin.com/in/akshaybharamshetti/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className={`m-4 mt-60 ${hoverEff}`}
            href="https://github.com/AkshayB99"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className={`m-4 mt-[304px] ${hoverEff}`}
            href="https://drive.google.com/file/d/1KXLjQ2hUrlKi7W6wvk8XyecJL72XnRfi/view?usp=drive_link"
            target="_blank"
          >
            <i className="fa-solid fa-circle-arrow-down"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
