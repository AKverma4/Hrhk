import { useEffect } from 'react';
import ScrollButton from './ScrollButton';

const Hero = () => {
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

    return (
        <div id="home" className="relative min-h-screen overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/logistics-bg.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70 backdrop-blur-sm"></div>
            </div>

            {/* Adjusted Animated Trucks */}
            {[...Array(3)].map((_, i) => (
                <div
                    key={`truck-${i}`}
                    className="truck absolute opacity-30 hidden sm:block"
                    style={{
                        left: '-100px',
                        top: `${30 + (i * 20)}%`,
                        zIndex: 1
                    }}
                >
                    <svg
                        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                </div>
            ))}

            {/* Adjusted Animated Cubes */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="cube absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-20 bg-yellow-500 hidden sm:block"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: 'rotate(45deg)',
                        animation: `float ${3 + Math.random() * 2}s infinite alternate ease-in-out`,
                    }}
                ></div>
            ))}

            {/* Main Content */}
            <div className="relative flex items-center justify-center min-h-screen px-4 py-12 sm:py-16">
                <div className="text-center w-full max-w-5xl mx-auto">
                    {/* Company Name with Animation */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                            HARE RAMA
                        </span>
                        {" "}
                        <br className="sm:hidden" />
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                            HARE KRISHNA
                        </span>
                        <br />
                        <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-white opacity-90">
                            LOGISTICS
                        </span>
                    </h1>

                    {/* Animated Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6 sm:mb-8 animate-width"></div>

                    {/* Tagline */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 animate-fade-in-up px-4">
                        Your Trusted Partner in Logistics Solutions
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up delay-200 px-4">
                        {[
                            'Fleet Owners',
                            'Car Transport',
                            'Commission Agent',
                            'Packers & Movers'
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
                                onClick={() => {
                                    if (feature === 'Fleet Owners') {
                                        const fleetSection = document.getElementById('fleet-owners');
                                        if (fleetSection) {
                                            fleetSection.scrollIntoView({ 
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    } else if (feature === 'Car Transport') {
                                        const carSection = document.getElementById('car-transport');
                                        if (carSection) {
                                            carSection.scrollIntoView({ 
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    } else if (feature === 'Commission Agent') {
                                        const commissionSection = document.getElementById('commission-agent');
                                        if (commissionSection) {
                                            commissionSection.scrollIntoView({ 
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    } else if (feature === 'Packers & Movers') {
                                        const packersSection = document.getElementById('packers-movers');
                                        if (packersSection) {
                                            packersSection.scrollIntoView({ 
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    }
                                }}
                            >
                                <p className="text-sm sm:text-base text-white font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-300 px-4">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Add scroll down button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ScrollButton direction="down" targetId="services" />
            </div>
        </div>
    );
};

export default Hero; 