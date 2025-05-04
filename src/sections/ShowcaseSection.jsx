import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
            <a
                href="https://www.winnings.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src="/images/project6.png" alt="Ryde App Interface" className="w-full h-auto" />
              </a>
            </div>
            <div className="text-content mb-20">
            <h2>
                <a
                    href="https://www.winnings.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Winnings – World Leading Appliance Brands
                </a>
                </h2>
              {/* <h2>
                (WIP) - On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2> */}
              {/* <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p> */}
            </div>

            <div className="image-wrapper">
            <a
                href="https://www.winnings.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src="/images/project5.png" alt="Ryde App Interface" className="w-full h-auto" />
              </a>
            </div>
            <div className="text-content">
            <h2 mb-20>
                <a
                    href="https://www.appliancesonline.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Appliances Online Australia
                </a>
                </h2>
              {/* <h2>
                (WIP) - On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2> */}
              {/* <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p> */}
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#ffffff]">
              <a
                href="https://www.homeclearance.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/project7.png"
                  alt="HC" className="w-full h-auto"
                />
              </a>
              </div>
              <h2>
                <a
                  href="https://www.homeclearance.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home Clearance - High Quality Brands, Low Cost
                </a>
              </h2>
            </div>
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFFFFF]">
              <a
                href="https://www.andoo.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/project4.png" alt="Andoo" className="w-full h-auto" />
                </a>
              </div>
              <h2>
                <a
                    href="https://www.andoo.co.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Andoo – Trusted Appliances Seller for Aussies & Kiwis
                </a>
                </h2>
            </div>
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#040404]">
              <a
                href="https://docs.helloclever.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/project8.png" alt="helloclever" className="w-full h-auto"/>
                </a>
              </div>
              <h2>
                <a
                    href="https://docs.helloclever.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Hello Clever Developer Documentation
                </a>
                </h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;