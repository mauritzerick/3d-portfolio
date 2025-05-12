import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/portfolio");
  };

  const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠂⣠⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠞⠽⠿⠟⠻⠿⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡤⠒⠋⠉⠁⠀⠀⠀⠀⠀⠀⠈⠙⠓⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⢀⣀⣀⡀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠙⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⠋⠀⢠⠞⠉⠀⠀⠈⠙⢦⣴⠟⠉⠀⠀⠀⠙⣧⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⡤⠶⢤⣼⡟⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⢀⣀⣀⠀⢸⡆⢸⣷⣤⣴⣦⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣰⡏⣰⠿⠦⣌⣻⠀⢸⡇⣾⣻⡿⣷⠀⠀⠀⠀⠀⢀⣿⣯⣽⣷⣸⡇⠀⣿⣡⠾⠛⢷⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢿⡆⣿⡀⢾⡟⠁⢀⣸⣿⣷⡿⢿⣿⠀⣠⡤⠤⣄⠘⣿⣿⣹⣿⣿⣧⡀⠙⠓⣶⣤⣾⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠻⣞⢷⡾⠁⣰⠟⠉⠉⠿⣷⣿⠟⢺⣥⣤⣤⣼⡆⠙⠻⠿⠟⠀⠉⢻⡆⣤⣿⡞⣣⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠛⣿⡷⣇⠀⠀⠀⠀⣀⠀⠀⠀⠈⠉⠉⠀⠀⢀⣀⠀⠀⠀⠀⣸⡇⣼⡿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢷⡹⣄⠀⠀⠀⢻⡝⠓⠲⠤⣤⣤⠴⠚⢋⡿⠃⠀⠀⣠⡟⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠳⣝⣦⣀⠀⠀⠙⢶⣞⠉⠙⠋⠉⣹⡟⠁⢀⣠⣴⣿⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣄⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠛⠛⠻⠦⠴⣦⣌⠙⠒⠛⣋⣽⠷⠞⠋⠉⠀⠀⠹⣦⠀⠀⠀⠀⠀⠀⠀⠀⢸⠋⠀⠀⠀⠹⡆
⠀⠀⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⡷
⠀⠀⠀⠀⠀⢀⣾⠁⠀⠀⠀⠀⢠⡀⣠⡶⠖⠒⠒⠒⠲⠦⣀⠀⠰⣤⠀⠀⠀⠀⠀⢳⡄⠀⠀⠀⠀⠀⢠⡿⠀⠀⠀⣴⠇
⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⡿⢰⠏⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⢸⣧⠀⠀⠀⠀⠀⢻⡀⠀⠀⢀⣴⠟⠁⠀⢀⣼⠋⠀
⠀⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⢰⠇⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⣸⠋⣧⠀⠀⠀⠀⠸⣇⣠⡶⠋⠁⠀⠀⣠⡾⠁⠀⠀
⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⣼⡀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠇⠀⣹⡄⠀⠀⠀⠀⣿⠁⠀⠀⢀⣠⠾⠋⠀⠀⠀⠀
⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⢸⢿⣇⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠟⠛⠛⢯⡇⠀⠀⠀⠀⣿⣧⠤⠞⠋⠀⠀⠀⠀⠀⠀⠀
`

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Horizontal row: ASCII - Image - ASCII */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <pre className="text-purple-400 text-[10px] md:text-xs whitespace-pre leading-tight text-left hidden md:block animate-bounce-slow">
        {asciiArt}
        </pre>


        {/* Monkey Image with Confetti */}
        <div className="relative group flex flex-col items-center">
          <img
            src="/images/monkey.png"
            alt="Ferocia Monkey"
            className="max-w-xs md:max-w-md"
          />

          {[...Array(10)].map((_, i) => {
            const colors = ["bg-purple-400", "bg-pink-400", "bg-blue-400", "bg-yellow-400"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const x = Math.random() * 120 - 60;
            const delay = Math.random() * 0.5 + "s";

            return (
              <span
                key={i}
                className={`absolute w-1.5 h-1.5 ${randomColor} rounded-full opacity-0 group-hover:opacity-100 confetti-float`}
                style={{
                  top: "50%",
                  left: "50%",
                  marginLeft: `${x}px`,
                  animationDelay: delay,
                }}
              />
            );
          })}
        </div>

        
        <pre className="text-purple-400 text-[10px] md:text-xs whitespace-pre leading-tight text-left hidden md:block animate-bounce-slow">
        {asciiArt}
        </pre>
      </div>

      {/* Button directly below monkey */}
      <div className="mt-8 flex flex-col items-center">
        <button
          onClick={handleNavigate}
          className="relative bg-purple-600 text-white font-bold py-2 px-6 tracking-widest cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        >
          PORTFOLIO
        </button>
      </div>
    </div>
  );
};

export default HomePage;
