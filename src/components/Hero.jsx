import React, { useState, useEffect } from "react";
import DarkVeil from "../reactbit/Back.jsx";

export default function Hero() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil
            hueShift={-56}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={2.9}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center text-white">
          <div className="md:w-1/2 mb-8 md:mb-0" data-scroll-animate="up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm John Oladepo-Jesuloba
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              A Front-end Developer and Professional Cinematographer passionate
              about creating stunning visuals and seamless user experiences.
            </p>
            <div className="flex space-x-2 sm:space-x-3 items-center -mt-2 -mb-8">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg
                  width="40px"
                  height="40px"
                  className="sm:w-[50px] sm:h-[50px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                      fill="#164dbb"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="-mt-1 -ml-2"
              >
                <svg
                  width="38px"
                  height="38px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    ></rect>{" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    ></rect>{" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    ></rect>{" "}
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    ></path>{" "}
                    <defs>
                      {" "}
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        {" "}
                        <stop stop-color="#B13589"></stop>{" "}
                        <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                        <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                      </radialGradient>{" "}
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        {" "}
                        <stop stop-color="#E0E8B7"></stop>{" "}
                        <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                        <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                        <stop
                          offset="1"
                          stop-color="#E2425C"
                          stop-opacity="0"
                        ></stop>{" "}
                      </radialGradient>{" "}
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        {" "}
                        <stop
                          offset="0.156701"
                          stop-color="#406ADC"
                        ></stop>{" "}
                        <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                        <stop
                          offset="1"
                          stop-color="#6A45BE"
                          stop-opacity="0"
                        ></stop>{" "}
                      </radialGradient>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </a>
              <a href="#about" className="w-6 h-6  inline-block">
                <img src="/logo-white.png" />
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/30 w-full">
              <p className="text-sm font-semibold text-gray-300 mb-4">
                Page Navigation
              </p>
              <div className="grid grid-cols-3 gap-4 w-90">
                <a
                  href="#hero"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>Home</span>
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>About Me</span>
                </a>
                <a
                  href="#skills"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>Skill</span>
                </a>
                <a
                  href="#projects"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>Projects</span>
                </a>
                <a
                  href="#gallery"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>Gallery</span>
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>Contact</span>
                </a>
                <a
                  href="#footer"
                  className="text-white hover:text-indigo-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="text-indigo-500">→</span>
                  <span>Footer</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Me.jpg"
              alt="John Oladepo-Jesuloba"
              className="w-130 h-130 object-cover rounded-full shadow-"
            />
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 h-10 w-10 right-1 transform -translate-x-1/2 z-40 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-2 rounded-full font-semibold transition duration-300 shadow-lg  items-right space-x-2"
          aria-label="Back to top"
        >
          {/* <span>↑</span> */}
          <span>Top</span>
        </button>
      )}
    </>
  );
}

// export default Hero;
