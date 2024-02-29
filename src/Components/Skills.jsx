import React from "react";
import Udemy from '../assets/udemy-Certi.jpg'
import javascript from '../assets/Javascript-HackerRank.png'
import reactImg from '../assets/React-HackerRank.png'

function Skills() {
  return (
    <>
      <div className="h-[700px] mt-[600px] md:mt-[100px]  mx-4 md:ml-40 md:mr-10">
        <div className="flex flex-col md:flex-row md:justify-between md:mx-8 md:mt-32">
          <div className="left  md:w-[40%] h-52 mx-5 md:ml-20">
            <div className="flex justify-center">
              <p className="text-[#ff5f09] text-2xl">SKILLS</p>
            </div>
            <div className="md:mt-2 md:text-2xl">
              <p className="text-xl">Front End</p>
            </div>
            <div className="mt-0 text-lg md:text-md">
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
              <li>Tailwind Css</li>
            </div>
            <div className="md:mt-2 md:text-2xl">
              <p className="text-xl">Back End</p>
            </div>
            <div className="mt-1 text-lg md:text-md">
              <li>Node Js</li>
              <li>Express</li>
              <li>socket io</li>
            </div>
            <div className="md:mt-2 md:text-2xl">
              <p className="text-xl">Database</p>
            </div>
            <div className="mt-1 text-lg md:text-md">
              <li>MongoDb</li>
            </div>
            <div className="mt-5">
              <p className="text-xl">IDE And Tools</p>
            </div>
            <div className="mt-1 text-lg md:text-md">
              <li>Visual Studio Code</li>
              <li>Sublime Text</li>
            </div>
            <div className="mt-5">
              <p className="text-xl">Development Tools</p>
            </div>
            <div className="mt-1 text-lg md:text-md">
              <li>Git/Github</li>
            </div>
          </div>
          <div className="right mt-[380px] md:mt-0 md:w-[75%] h-52 mx-5 sm:mr-4">
            <div className="flex justify-center">
              <p className="text-[#ff5f09] text-2xl">Certifications</p>
            </div>
            {/* add Certificates */}
            <div>
              <div>
                <img
                  src={`${Udemy}`}
                  className="mt-4 w-[300px] md:w-[230px]"
                  alt=""
                />
              </div>
              <div className="flex md:justify-center">
                <img
                  src={`${javascript}`}
                  className="mt-4 w-[300px] md:w-[230px] md:-mt-4"
                  alt=""
                />
              </div>
              <div className="flex md:justify-end">
                <img
                  src={`${reactImg}`}
                  className="mt-4 w-[300px] md:w-[230px] md:-mt-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
