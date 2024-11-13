import { useState } from 'react';
import { motion } from 'framer-motion';
import Transport1 from '../assets/1.webp';
import Transport2 from '../assets/2.avif';
import Loading1 from '../assets/4.png';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: GalleryImage[] = [
    { id: 1, src: Transport1, alt: 'Transport Service 1' },
    { id: 2, src: Transport2, alt: 'Transport Service 2' },
    { id: 3, src: 'https://imgs.search.brave.com/4o5YNlWhjmgGfjEjKgQGduO2ZjllF9thSxfsTHcXpEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjIz/MzYyNjE0L3Bob3Rv/L21vZGVybi13YXJl/aG91c2UtaW50ZXJp/b3IuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTY1Zi0wYV9u/WVB0d3V2VWo1ZEtE/cmlIeExOaUFSYU44/d3U5dmNNaXdTdjg9', alt: 'Warehouse 1' },
    { id: 4, src: Loading1, alt: 'Loading Operation 1' },
    { id: 5, src: 'https://imgs.search.brave.com/JJ3Kpp7b0LUXyXkTSIH4H3DZvlrvKh-ahiavotF9kUM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NzM5MjMxNi9waG90/by9tb2Rlcm4tdHJ1/Y2tzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1FeHAyVFVw/aGZYOVlGMXp2R2N3/Wk42YjltaGVmSWQt/OVp5bnlHX3ZGdmtv/PQ', alt: 'Fleet 1' },
    { id: 6, src: 'https://imgs.search.brave.com/WiYCj1DyfptA3iD_rG98WDxqxvBpgG5oDX77W9j7ePo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/NjE0NjQxL3Bob3Rv/L3dvcmtlci1wYWNr/aW5nLWNhcmRib2Fy/ZC1ib3hlcy1pbi13/YXJlaG91c2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTRj/eTZjMUZVOHpsdkg0/ZV9xS25HbDhpNEJZ/SjI1UVBQYXotWTNr/dGFQRzQ9', alt: 'Packing Service 1' },
    { id: 7, src: 'https://imgs.search.brave.com/Nx2g5vWHO4QpjnCG48mPsqzX0-b7Zrtp7aBHq0-7sQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NzExNzQwMC9waG90/by9jb3dvcmtlcnMt/cnVzaGluZy10by1s/b2FkLXBhY2thZ2Vz/LWluLWEtZGVsaXZl/cnktdmFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04a3JE/aUg0WVNHRi1rb2tz/MzlScmVnU19idF92/RXV0c2RQc1ViV0ZR/UTdrPQ', alt: 'Delivery Service 1' },
    { id: 8, src: 'https://imgs.search.brave.com/4q2AV5ET5k9azMyCLRP0xK6MHQRHx9XFLAOr7pxSWYE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODIxNDY0/OTA3NTUtYzMzYTUz/YzQ1MDJkP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE5Y/eDhjM1J2Y21GblpY/eGxibnd3Zkh3d2ZI/eDhNQT09.jpeg', alt: 'Storage Facility 1' },
    // { id: 9, src: '', alt: 'Our Team 1' },
    // { id: 10, src: '/gallery/office1.jpg', alt: 'Office 1' },
  ];

  const handleImageClick = (src: string): void => {
    setSelectedImage(src);
  };

  const handleCloseModal = (): void => {
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#8B0000] tracking-wider uppercase mb-3 block">
            Explore Our World
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#8B0000] to-[#FFA500] bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Take a visual journey through our logistics operations and services
          </p>
          
          {/* Animated horizontal line */}
          <div className="relative h-1 max-w-2xl mx-auto overflow-hidden">
            <div className="absolute w-full h-0.5 bg-gray-200"></div>
            <div className="absolute w-1/3 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFA500] animate-slide"></div>
          </div>
        </div>

        {/* Enhanced container with refined glass effect */}
        <div className="relative p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30">
          {/* Refined decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/3 to-[#FFA500]/3 rounded-3xl" />
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-200/50 to-orange-100/50 rounded-3xl blur-2xl" />

          {/* Grid container with enhanced shadows */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="group relative bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => handleImageClick(image.src)}
              >
                {/* Card content wrapper */}
                <div className="aspect-square relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-lg drop-shadow-lg mb-2">
                        {image.alt}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="h-0.5 w-12 bg-[#FFA500] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        <span className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced modal with refined backdrop */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/95 z-50 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-5xl max-h-[90vh] group"
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl ring-4 ring-white/10"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-[#8B0000] rounded-full p-3 backdrop-blur-sm transition-all duration-300 opacity-75 hover:opacity-100"
              onClick={handleModalClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery; 