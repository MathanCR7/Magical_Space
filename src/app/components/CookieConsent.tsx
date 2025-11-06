'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieConsent = () => {
  // Initialize state from cookie or default to false
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie_consent cookie is already set
    const consent = Cookies.get('cookie_consent');
    // If it's not set, we show the banner
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // When user clicks "Accept", set a cookie that expires in 365 days
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm text-white p-5 shadow-lg z-[100]"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 flex-shrink-0"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};