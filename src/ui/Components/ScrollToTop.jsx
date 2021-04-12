import React, { useEffect, useState } from 'react';

export const ScrollToTop = () => {
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
  }, []);
  return (
    <>
      {isVisible && (
        <button
          className={isVisible ? 'scrollUp' + ' ' + 'isVisible' : 'scrollUp'}
          onClick={scrollToTop}
        >
          <img
            src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png'
            alt='Go to top'
          />
        </button>
      )}
    </>
  );
};
