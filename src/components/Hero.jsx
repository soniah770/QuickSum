import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-5 ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="flex items-center gap-3">
         
          <a
            href="https://github.com/soniah770/QuickSum"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-100 hover:bg-blue-200 text-xl text-black flex items-center gap-2 font-bold p-1 rounded-full"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              className="h-8 w-8"
            />
          </a>
        </div>
      </nav>

      <h1 className="head_text">
      QuickSum AI <br />
        <span className="blue_gradient">ChatGPT</span>
      </h1>

      <p className="font-inter text-xl text-gray-700 text-center max-w-3xl mt-2">
      Just paste the URL of any article, and our AI-driven platform, powered by ChatGPT, instantly provides you with a concise, accurate summary. <br />
      </p>
    </header>
  );
};

export default Hero;
