/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

function Index({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'instant',
  });
  }, [location]);
  return <>{children}</>;
}

export default Index;
