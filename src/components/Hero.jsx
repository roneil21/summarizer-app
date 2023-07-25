import React from "react";

const Hero = () => {
  return (
    <header
      className="w-full flex 
    justify-center items-center flex-col mb-10 pt-3"
    >
      <h1 className="head_text mb-10">
        Summarize Article with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading and generate unique, quality content and summaries
        with this open-source article summarizer that transforms lengthy
        articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
