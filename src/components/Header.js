// importing react, react components and main css file
import React, { useState } from 'react';
import Navigation from './Navigation';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../index.css'

// adding padding so footer displays properly
const styles = {
    paddingForFooter: {
        paddingBottom: "135px"
    }
}

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
    <div style={styles.paddingForFooter}>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
// exporting react component
export default Header;
