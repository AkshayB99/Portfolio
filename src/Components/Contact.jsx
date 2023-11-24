import React from "react";

function Contact() {
  return (
    <>
      <div className=" flex flex-col mt-[450px] md:mt-44 md:mr-24 md:ml-[250px]">
        {/* Main content */}
        <div className="">
          {/* contact title */}
          <div className="flex justify-center text-2xl md:text-3xl text-[#ff5f09]">
            <div>CONTACT</div>
          </div>
          {/* Contact Content */}
          <div className="md:ml-72">
            <div className="ml-7 mt-10 flex">
              <div className="bday flex md:mt-2 mt-2">
                <i class="fa-solid fa-envelope text-[22px] md:text-[22px]"></i>
              </div>
              <div className="flex flex-col ml-3">
                <p className="text-[11px] md:text-[10px] ">Email</p>
                <a
                  href="mailto:akshaybharamshetti99@gmail.com"
                  className="md:text-[16px]"
                >
                  akshaybharamshetti99@gmail.com
                </a>
              </div>
            </div>
            <div className="ml-7 mt-10 flex">
              <div className="bday flex md:mt-2 mt-2">
                <i class="fa-solid fa-phone-flip text-[22px] md:text-[22px]"></i>
              </div>
              <div className="flex flex-col ml-3">
                <p className="text-[11px] md:text-[10px]">Phone-No</p>
                <a href="tel:9900421242" className="md:text-[16px]">
                  +91 9900-421-242
                </a>
              </div>
            </div>
            <div className="ml-7 mt-10 flex">
              <div className="bday flex md:mt-2 mt-2">
                <i class="fa-solid fa-location-dot text-[22px] md:text-[22px]"></i>
              </div>
              <div className="flex flex-col ml-3">
                <p className="text-[11px] md:text-[10px]">Location</p>
                <div className="md:text-[16px]">
                  #71, 3rd Bus Stop, Kanabargi - Belagavi
                </div>
              </div>
            </div>
            <div className="ml-7 mt-10 flex">
              <div className="bday flex mt-1">
                <i class="fa-solid fa-arrow-down text-[22px] md:text-[22px]"></i>
              </div>
              <div className="flex flex-col ml-3">
                <a
                  href="https://drive.google.com/file/d/1KXLjQ2hUrlKi7W6wvk8XyecJL72XnRfi/view?usp=drive_link"
                  target="_blank"
                  className="md:text-[16px] text-[20px]"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex justify-center  mt-[370px] md:mt-[220px] mb-3">
          <p className="flex justify-center items-center">
            Developed with&nbsp;<i class="fa-solid fa-heart text-[#ff5f09]"></i>
            &nbsp;by Akshay
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
