import React from "react";

function ProjectCard({img, title, content, link}) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:mx-10 md:hover:scale-110 transition-all">
        <div className="w-[384px] h-[330px] my-5 border-2">
            <div>
                <a href={link} target="_blank"><img src={img} /></a>
            </div>
            <div className="text-2xl mt-2 ml-3">
                <h1 className="flex">Title : &nbsp; <a href={link} target="_blank" className="text-[#ff5f09]">{title}</a></h1>
            </div>
            <div className="ml-3">
                <p className="mt-4 text-lg">About Project : &nbsp; <p className="ml-4 mt-2 text-base">{content}</p></p>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
