import React from "react";

function About() {
  return (
    <>
      <div className="h-[800px] md:h-[700px] mx-4 md:ml-40 md:mr-10">
        <div className="flex flex-col md:flex-row ">
          <div className="mt-22 md:mt-32 md:mx-6 md:w-[35%] flex flex-col items-center">
            <p className="text-2xl mb-6 ml-2 text-[#ff5f09]">ABOUT</p>
            <p className="indent-14 leading-relaxed md:text-base text-justify">
              As a MERN stack developer specializing in Fullstack development, I
              focus on crafting dynamic and responsive user interfaces for
              websites and web applications. By integrating MongoDB, Express.js,
              React.js, and Node.js, I create engaging frontend components that
              seamlessly interact with backend systems, driving the success of
              the overall product.
            </p>
            <div className="md:text-sm flex flex-col md:flex-row">
              <div className="ml-7 mt-10 flex">
                <div className="bday flex md:mt-4 mt-2">
                  <i class="fa-regular fa-calendar-days text-[22px]"></i>
                </div>
                <div className="flex flex-col ml-3">
                  <p className="text-[11px] md:text-[10px]">BIRTHDAY</p>
                  <div>Apr 18, 1999</div>
                </div>
              </div>
              <div className="ml-7 mt-10 flex">
                <div className="location flex md:mt-4 mt-2">
                  <i className="fa-solid fa-location-dot text-[22px]"></i>
                </div>
                <div className="flex flex-col ml-3">
                  <p className="text-[11px] md:text-[10px]">LOCATION</p>
                  <div>Belagavi KA, INDIA</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-44 mt-20 md:mt-32 md:ml-10">
            <div className="flex flex-col items-center">
              <p className="text-2xl mb-8 ml-2 text-[#ff5f09]">EDUCATION</p>
              <div className="flex justify-center">
                <div className="flex flex-col ml-3">
                  <div className="text-right mr-4 md:mr-8">
                    <p className="md:text-xl text-[19px]">
                      Master of Computer Applications
                    </p>
                    <div className="my-2 md:text-lg">
                      KLE Dr. M.S.Sheshgiri College of Engineering & Technology,
                      Belgagavi
                    </div>
                    <div className="text-lg">CGPA : 8.6</div>
                  </div>
                  <div className="text-right mr-4 md:mr-8 mt-48  md:mt-24">
                    <p className="md:text-xl text-[19px]">2nd PUC - PCMB</p>
                    <div className="my-2 md:text-lg">
                      Shri Siddarameshwara Pre University College, Belagavi
                    </div>
                    <div className="text-lg">PERCENTAGE : 51%</div>
                  </div>
                </div>
                <div className="h-[680px] md:h-[450px] w-3 bg-[#e5e8ee] rounded "></div>
                <div className="flex flex-col">
                  <div className="md:ml-5 md:mt-24 mt-40 ml-4">
                    <p className="md:text-xl text-[19px] ">
                      Bachelor of Computer Applications
                    </p>
                    <div className="my-2 md:text-lg">
                      KLE'S College of BCA, RLSI Belagavi
                    </div>
                    <div className="text-lg">CGPA : 7.1</div>
                  </div>
                  <div className=" md:ml-5 md:mt-24 ml-4  mt-40">
                    <p className="md:text-xl text-[19px]">10th SSLC</p>
                    <div className="my-2 md:text-lg">
                      H.N.S high school Mahantesh nagar Belagavi
                    </div>
                    <div className="text-lg">PERCENTAGE : 60%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
