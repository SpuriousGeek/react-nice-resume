import React, {useEffect} from "react";
import ParticlesBg from "particles-bg";
import {motion} from "framer-motion";
import ScrollIcon from "./icons/ScrollIcon";

const Header = ({data}) => {
    // Add state to track the number of particles
    const [particleCount, setParticleCount] = React.useState(250);

    // Function to calculate an appropriate number of particles
    const calculateParticleCount = () => {
        const width = window.innerWidth;

        // Scale number of particles based on screen width breakpoints
        if(width <= 480) {              // Mobile phones
            console.log("Mobile");
            return 100;
        } else if (width <= 768) {      // Tablets
            console.log("Tablet");
            return 150;
        } else if (width <= 1024) {     // Small laptops
            console.log("Laptop");
            return 200;
        } else {                        // Larger screens
            console.log("Desktop");
            return 250;
        }
    };

    // Effect to handle screen resize
    useEffect(() => {
        // Set initial particles count
        setParticleCount(calculateParticleCount());

        // Create the resize handler
        const handleResize = () => {
            // Add a small delay to avoid excessive updates
            const timeoutId = setTimeout(() => {
                setParticleCount(calculateParticleCount());
            }, 150);

            // Clean up timeout on subsequent calls
            return () => clearTimeout(timeoutId);
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener when component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array means this effect runs once on mount

    const {name, description, subTitle} = data;

    if (!data) return null;

    return (
        <header id="home">
            <ParticlesBg color="#708090" num={particleCount} type="cobweb" bg={true}/>

            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    {/*<li><a className="smoothscroll" href="#portfolio">Works</a></li>*/}
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <motion.h1
                        className="responsive-headline"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        {name}
                    </motion.h1>
                    <motion.h2
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        {subTitle}
                    </motion.h2>
                    <motion.h3
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        {description}
                    </motion.h3>
                    <hr/>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <ScrollIcon />
                </a>
            </p>
        </header>
    );
};

export default Header;