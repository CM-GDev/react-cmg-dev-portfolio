import React, { useState } from 'react';
import Navigation from './Navigation';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const Header = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {renderPage()} */}
    </div>
  );
}

export default Header;
