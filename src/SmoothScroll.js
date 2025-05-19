import { useEffect } from 'react';

function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}

export default SmoothScroll;