import React, {useEffect} from 'react';
import Background from '../img/beach.jpg';
import ProfilePic from '../img/Picture.jpg';
import M from "materialize-css/dist/js/materialize.min.js";

const styles = {
    navigation: {
        paddingBottom: "10px",
        paddingLeft: '2%'
    },
    h3: {
        marginBottom: '0%',
    },
    header: {
        height: '8rem',
        backgroundImage: `url(${Background})`,
        margin: '0.5%',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    headerDiv: {
        height: '100%',
        marginBottom: '0px',
    },
    headerDivH4: {
        margin: '0%',
        padding: '5px 15px',
        borderRadius: '20px'
    }
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {

    // employing useEffect for side nav
    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
    }, []);

  return (
    <div>
        {/* Main Nav */}
        <nav className='blue lighten-2 nav-extended' style={styles.navigation}>
            <div className='nav-wrapper'>
                <h3 className='brand-logo flow-text truncate' style={styles.h3}>Cristobal Marquez-Glynn</h3>
                <a href='#' data-target="mobile-demo" className='sidenav-trigger'><i className='material-icons'>menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'active' : ''}
                        >About Me<i className='material-icons right'>person</i>
                        </a>
                    </li>
                    <li>
                        <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'active' : ''}
                        >Portfolio<i className='material-icons right'>work</i>
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'active' : ''}
                        >Contact<i className='material-icons right'>contact_mail</i>
                        </a>
                    </li>
                    <li>
                        <a href="#Resume" onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'active' : ''}
                        >Resume<i className='material-icons right'>description</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Code for side nav when screen is small */}
        <ul className="sidenav" id="mobile-demo">
            <li>
                <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'active' : ''}>About Me<i className="material-icons right">person</i>
                </a>
            </li>
            <li>
                <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'active' : ''}>Portfolio<i className="material-icons right">work</i>
                </a>
            </li>
            <li>
                <a href="#Contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'active' : ''}>Contact<i className="material-icons right">contact_mail</i>
                </a>
            </li>
            <li>
                <a href="#Resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'active' : ''}
                >Resume<i className='material-icons right'>description</i>
                </a>
            </li>
        </ul>
        {/* Header info */}
        <header className="card-panel z-depth-3" style={styles.header}>
            <div className="row valign-wrapper right animate__animated animate__rubberBand animate__repeat-2" style={styles.headerDiv} >
                <img src={ProfilePic} alt="Profile" className="circle responsive-img z-depth-2" />
                <h4 className="right white-text z-depth-2" style={styles.headerDivH4}>Welcome to my page!</h4>
            </div>
        </header>
    </div>
  );
}

export default Navigation;
