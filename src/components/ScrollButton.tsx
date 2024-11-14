import { motion } from 'framer-motion';

interface ScrollButtonProps {
  direction: 'up' | 'down';
  targetId: string;
}

const ScrollButton = ({ direction, targetId }: ScrollButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300"
      aria-label={`Scroll ${direction}`}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 xs:w-6 xs:h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ y: 0 }}
        animate={{ y: direction === 'down' ? 3 : -3 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1
        }}
      >
        {direction === 'down' ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        )}
      </motion.svg>
    </motion.button>
  );
};

export default ScrollButton; 