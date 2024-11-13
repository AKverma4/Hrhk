import { motion } from 'framer-motion';

interface ScrollButtonProps {
  direction: 'up' | 'down';
  targetId?: string;
}

const ScrollButton = ({ direction, targetId }: ScrollButtonProps) => {
  const handleClick = () => {
    if (direction === 'down' && targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (direction === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group bg-gradient-to-r from-[#8B0000] to-[#FFA500] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        className={`w-6 h-6 text-white transition-transform duration-300 ${
          direction === 'down' ? 'rotate-180' : ''
        } group-hover:transform ${
          direction === 'down' ? 'group-hover:translate-y-1' : 'group-hover:-translate-y-1'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollButton; 