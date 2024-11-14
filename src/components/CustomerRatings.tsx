import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    rating: number;
    comment: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Fleet Manager",
        company: "ABC Logistics",
        rating: 5,
        comment: "Outstanding service! Their commitment to timely delivery and professional handling of our cargo exceeded our expectations.",
        image: "/testimonials/person1.jpg" // Add actual image path
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Operations Director",
        company: "XYZ Transport",
        rating: 5,
        comment: "The most reliable logistics partner we've worked with. Their attention to detail and customer service is exceptional.",
        image: "/testimonials/person2.jpg"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Business Owner",
        company: "Swift Movers",
        rating: 5,
        comment: "Their commission agent services have transformed our business operations. Highly recommended!",
        image: "/testimonials/person3.jpg"
    }
];

const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const duration = 2000; // 2 seconds duration
            
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = (currentTime - startTime) / duration;
                
                if (progress < 1) {
                    setCount(Math.min(Math.floor(end * progress), end));
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            
            requestAnimationFrame(animate);
        }
    }, [isInView, end]);

    return (
        <div
            ref={ref}
            className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <motion.h3 
                className="text-3xl font-bold text-maroon-600 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                {count}{end >= 1000 ? 'K+' : '+'}
            </motion.h3>
            <motion.p 
                className="text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {label}
            </motion.p>
        </div>
    );
};

const CustomerRatings = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const stats = [
        { label: 'Happy Clients', value: 500 },
        { label: 'Deliveries', value: 1000 },  // Changed from 10 to 1000
        { label: 'Cities Covered', value: 100 },
        { label: 'Years of Trust', value: 15 }
    ];

    return (
        <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Customers Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-maroon-600 to-yellow-500 mx-auto"></div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                        >
                            <div className="flex flex-col items-center">
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-6 h-6 text-yellow-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Content */}
                                <p className="text-xl text-gray-600 text-center mb-8 italic">
                                    "{testimonials[activeIndex].comment}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-maroon-600">
                                        <img
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">
                                            {testimonials[activeIndex].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? 'bg-maroon-600 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Updated Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {stats.map((stat, index) => (
                        <CounterAnimation
                            key={index}
                            end={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerRatings; 