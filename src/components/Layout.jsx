import React from 'react';
import Hero from './Hero';

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      {children}
    </>
  );
};

export default Layout;