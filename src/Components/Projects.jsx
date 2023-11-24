import React from "react";
import ProjectCard from "./ProjectCard";
import TicTacToe from "../assets/Tic-Tac-Toe.png";
import RockPaperScissors from '../assets/Rock-Paper-Scissors.png'
import Calculator from '../assets/Calculator.png'

function Projects() {
  const TicTacToeTitle = `TicTacToc`;
  const TicTacToeContent = "This is the game in which user play with Computer";
  const TicTacToeLink = "https://tic-tac-toe-ak18.netlify.app/";
  
  const RockPaperScissorsTitle = `RockPaperScissors`;
  const RockPaperScissorsContent = "This is the game in which user play with Computer";
  const RockPaperScissorsLink = "https://akshayb99.github.io/Rock-Paper-Scissor/index.html";
  
  const CalculatorTitle = `Calculator`;
  const CalculatorContent = "This is the Calculator using HTML, CSS and JavaScript";
  const CalculatorLink = "https://akshayb99.github.io/Micro-project-4/";

  return (
    <div className="mt-[750px] h-screen md:mt-48 md:mr-24 md:ml-[155px]">
      {/* heading */}
      <div className="flex justify-center text-2xl md:text-3xl text-[#ff5f09]">
        <div>PROJECTS</div>
      </div>
      {/* add projects */}
      <div className="flex justify-center items-center md:mt-5">
        <div className=" md:grid md:grid-cols-3 ">
          <ProjectCard
            img={TicTacToe}
            title={TicTacToeTitle}
            content={TicTacToeContent}
            link={TicTacToeLink}
          />
          <ProjectCard
            img={RockPaperScissors}
            title={RockPaperScissorsTitle }
            content={RockPaperScissorsContent}
            link={RockPaperScissorsLink}
          />
          <ProjectCard
            img={Calculator}
            title={CalculatorTitle}
            content={CalculatorContent}
            link={CalculatorLink}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;