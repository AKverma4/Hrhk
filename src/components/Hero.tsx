import { useEffect, useState } from 'react';
import ScrollButton from './ScrollButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTruck, FaCar, FaHandshake, FaBoxes } from 'react-icons/fa';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);

    useEffect(() => {
        // Type guard function to check if element is HTMLElement
        const isHTMLElement = (element: Element): element is HTMLElement => {
            return element instanceof HTMLElement;
        };

        const cubes = document.querySelectorAll('.cube');

        cubes.forEach((element, index) => {
            if (isHTMLElement(element)) {
                const keyframes: Keyframe[] = [
                    { transform: 'translateY(0px) rotate(0deg)' },
                    { transform: 'translateY(-20px) rotate(180deg)' },
                    { transform: 'translateY(0px) rotate(360deg)' }
                ];

                const options: KeyframeAnimationOptions = {
                    duration: 3000 + (index * 500),
                    iterations: Infinity,
                    direction: 'alternate',
                    easing: 'ease-in-out'
                };

                try {
                    const animation = element.animate(keyframes, options);

                    // Optional: Handle animation cleanup
                    return () => {
                        animation.cancel();
                    };
                } catch (error) {
                    console.error('Animation failed:', error);
                }
            }
        });
    }, []); // Empty dependency array since we only want this to run once

    // Truck animation
    const trucks = document.querySelectorAll('.truck');
    trucks.forEach((truck, index) => {
        truck.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(100vw)' }
        ], {
            duration: 15000 + (index * 2000),
            iterations: Infinity,
            easing: 'linear'
        });
    });

    // Service category data with icons
    const services = [
        { name: 'Fleet Owners', icon: FaTruck },
        { name: 'Car Transport', icon: FaCar },
        { name: 'Commission Agent', icon: FaHandshake },
        { name: 'Packers & Movers', icon: FaBoxes }
    ];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div id="home" className="relative min-h-screen overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Professional dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#1E293B]/90 to-[#334155]/85 backdrop-blur-[2px]">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                                linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
                                linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
                                linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%)
                            `,
                            backgroundSize: '20px 20px',
                            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                        }}
                    ></div>
                </div>
            </motion.div>

            {/* Progressive Loading Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
            >
                {/* Enhanced Animated Trucks */}
                {[...Array(3)].map((_, i) => (
                    <div
                        key={`truck-${i}`}
                        className="truck absolute opacity-40 hidden sm:block"
                        style={{
                            left: '-100px',
                            top: `${35 + (i * 15)}%`,
                            zIndex: 1,
                            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                        }}
                    >
                        <svg
                            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                    </div>
                ))}

                {/* Enhanced Animated Cubes */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="cube absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-15 bg-gradient-to-br from-yellow-400 to-orange-500 hidden sm:block rounded-sm"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: 'rotate(45deg)',
                            animation: `float ${3 + Math.random() * 2}s infinite alternate ease-in-out`,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                    ></div>
                ))}

                {/* Main Content with enhanced styling */}
                <div className="relative flex items-center justify-center min-h-screen px-4 py-12 sm:py-16">
                    <div className="text-center w-full max-w-6xl mx-auto">
                        {/* Enhanced Company Name with Professional Gradient */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in tracking-tight">
                            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#FFA500] text-transparent bg-clip-text drop-shadow-lg">
                                HARE RAMA
                            </span>
                            {" "}
                            <br className="sm:hidden" />
                            <span className="bg-gradient-to-r from-[#FFA500] via-[#FF8C38] to-[#FF6B00] text-transparent bg-clip-text drop-shadow-lg">
                                HARE KRISHNA
                            </span>
                            <br />
                            <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-100 tracking-widest mt-2 block bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                                LOGISTICS
                            </span>
                        </h1>

                        {/* Enhanced Animated Line */}
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 mx-auto mb-8 sm:mb-10 animate-width rounded-full shadow-lg"></div>

                        {/* Enhanced Tagline */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-10 sm:mb-14 animate-fade-in-up px-4 font-light tracking-wide">
                            Your Trusted Partner in Logistics Solutions
                        </p>

                        {/* Enhanced Features Grid with Icons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14 animate-fade-in-up delay-200 px-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                                    }}
                                    className="group bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl cursor-pointer border border-white/10 hover:border-white/20"
                                    onClick={() => {
                                        const sectionId = service.name.toLowerCase().replace(/\s+/g, '-');
                                        const section = document.getElementById(sectionId);
                                        if (section) {
                                            section.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    }}
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <service.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                                        <p className="text-base sm:text-lg text-white font-medium transition-transform duration-300">
                                            {service.name}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Enhanced CTA Buttons with Micro-interactions */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-300 px-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 text-base sm:text-lg"
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 text-base sm:text-lg border border-white/10 hover:border-white/20"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Enhanced Scroll Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ScrollButton direction="down" targetId="services" />
            </div>
        </div>
    );
};

export default Hero; 