import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm King.
            <br className="hidden lg:inline-block" />I love to build amazing Blockchain
            apps, and Write Secure and Excellent Smart contracts.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a dedicated and skilled junior blockchain developer with three years of hands-on experience in the realm of decentralized technologies. My expertise lies in crafting smart contracts, developing innovative decentralized applications (dApps), and contributing to prominent web3 projects. Proficient in Solidity, Ethers.js, web3.js, and Substrate, I possess a comprehensive understanding of blockchain protocols.

My journey extends beyond blockchain, encompassing the creation of dynamic web applications using a versatile tech stack. I am well-versed in React.js, Next.js, Node.js, MongoDB, Express.js, TypeScript, and JavaScript. This dual proficiency allows me to seamlessly integrate cutting-edge blockchain functionalities into web solutions, enhancing user experiences and promoting decentralization.

With a track record of collaborating on top-tier projects and a commitment to staying at the forefront of technological advancements, I am poised to contribute effectively to the ever-evolving landscape of blockchain and web development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}