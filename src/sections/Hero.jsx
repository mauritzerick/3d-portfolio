import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";
import Quote from "./Quote";

const Hero = () => {
  const [visitCount, setVisitCount] = useState(null);

  // Use GSAP for animations
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  // Increment visit count on mount and fetch the updated count
  useEffect(() => {
    // Send a POST request to increment the visit count
    fetch("https://visit-tracker-production.up.railway.app/api/visits", {
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => {
        // After posting, fetch the updated visit count
        fetch("https://visit-tracker-production.up.railway.app/api/visits")
          .then((res) => res.json())
          .then((data) => setVisitCount(data.visits))
          .catch((error) => console.error("Error fetching visit count:", error));
      })
      .catch((error) => console.error("Error incrementing visit count:", error));
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        {/* <img src="/images/bg.png" alt="" /> */}
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Fast,</h1>
              <h1>Precise,</h1>
              <h1>
                Powered by
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Mauritz, coding away from Australia! 🦘
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />

            {/* Show the visit count */}
            <div className="visit-counter">
              {visitCount !== null ? (
                <p>Total Visits: {visitCount}</p>
              ) : (
                <p>Loading...</p>
              )}
              <p>
                Node.js Visitor Count API  →{" "}
                <a
                  href="https://visit-tracker-production.up.railway.app/api/visits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Railway Visit Tracker
                </a>
              </p>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
        <div className="hero-3d-layout pt-[100px] pb-[30px] sm:pt-0 sm:pb-0">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <Quote />



      <AnimatedCounter />
    </section>
  );
};

export default Hero;
