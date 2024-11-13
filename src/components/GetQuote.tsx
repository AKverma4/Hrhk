import { useState } from 'react';
import { motion } from 'framer-motion';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromLocation: '',
    toLocation: '',
    serviceType: '',
    vehicleType: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Sending request...');
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      
      alert('Quote request sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        fromLocation: '',
        toLocation: '',
        serviceType: '',
        vehicleType: '',
        date: '',
        message: ''
      });
    } catch (error) {
      console.error('Error details:', error);
      alert('Failed to send quote request. Please try again.');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="get-quote" className="py-16 sm:py-20 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-200 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Request a Quote
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a customized quote for your logistics needs. We'll analyze your requirements and provide competitive pricing.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-10 border border-red-100"
          variants={fadeInUp}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Enter your full name', field: 'name' },
                { label: 'Email Address', type: 'email', placeholder: 'Enter your email', field: 'email' },
                { label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', field: 'phone' },
                { label: 'Service Type', type: 'select', field: 'serviceType' },
                { label: 'From Location', type: 'text', placeholder: 'Enter pickup location', field: 'fromLocation' },
                { label: 'To Location', type: 'text', placeholder: 'Enter delivery location', field: 'toLocation' }
              ].map((input) => (
                <motion.div 
                  key={input.field}
                  className="space-y-2 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="text-sm font-medium text-gray-700 block">
                    {input.label} *
                  </label>
                  {input.type === 'select' ? (
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-red-400"
                      onChange={(e) => setFormData({...formData, [input.field]: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="fleet">Fleet Management</option>
                      <option value="car">Car Transportation</option>
                      <option value="commission">Commission Agent</option>
                      <option value="packers">Packers & Movers</option>
                    </select>
                  ) : (
                    <input
                      type={input.type}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-red-400"
                      placeholder={input.placeholder}
                      onChange={(e) => setFormData({...formData, [input.field]: e.target.value})}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="space-y-2"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <label className="text-sm font-medium text-gray-700">Additional Details</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-red-400"
                placeholder="Please provide any additional information about your requirements"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </motion.div>

            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
            >
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-medium text-lg shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Your Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetQuote; 