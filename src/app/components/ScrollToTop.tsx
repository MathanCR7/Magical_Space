'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    // UPDATE: Standardized positioning to stack below the WhatsApp button
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          // UPDATE: Matched padding, hover effect, and transition for consistency
          className="bg-brand-gold text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          {/* UPDATE: Matched icon size */}
          <ArrowUp size={28} />
        </button>
      )}
    </div>
  );
}