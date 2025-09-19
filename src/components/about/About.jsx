import React from "react";
import Infocards from "../Infocards/Infocards";
import "./About.css";

export default function About() {
  return (
    <section className="about-section ">
      <div className="about-container ">
        <div className="about-title title ff-tc "> About</div>
        <div className="about-info flex flex-col justify-evenly ">
          <div className="info-text text-white responsive-text">
            <p>
              {" "}
              Welcome to <span className="span-emp">FORGE!</span>, the ultimate
              gaming experience featuring the spectacular{" "}
              <span className="span-emp">FORGE X DASTAAN Gaming Tournament 2025</span>!
              Join us from{" "}
              <span className="span-emp">October 1st to 12th, 2025</span> for an 
              electrifying esports showdown in Valorant, Free Fire, and BGMI.
            </p>
            <p>
              Experience online league matches from October 1st-10th, followed by 
              intense offline semi-finals and finals at Amrita Vishwa Vidyapeetham, 
              Bengaluru Campus from October 10th-12th. Get ready for high-energy 
              competition, skill, strategy, and esports passion like never before!
            </p>
            <p>
              Our flagship events including Hallucinate (VR gameplay), Rendezvous 
              (treasure hunt), Flash (movie screening), and Alt+f4 tournaments 
              will return next year bigger and better than ever!
            </p>
          </div>
          <div className="hero-cards w-full">
            <div className="info-container flex flex-wrap h-full flex-col justify-evenly ">
              <Infocards
                name="gaming"
                clr="black"
                gif="/pics/gif1.gif"
                bg="bg-white"
                // bg="white"
              />

              <Infocards
                name="gamification"
                clr="white"
                gif="/pics/gif2.gif"
                bg="bg-black"
                // bg="black"
              />

              <Infocards
                name="game dev"
                clr="black"
                gif="/pics/gif4.gif"
                bg="bg-[#ece1d6]"
                // bg="#ece1d6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
