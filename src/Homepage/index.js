import React, {useState} from 'react';
import './index.css'
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';
    };
    return(
        <div className='Homepage-body'>
        <div className='Navbar-container'>
            <div className='logo-image'>
            <img src='/media/logo.png' alt='logo' className='logo-image'/>
            </div>
            <div className={`hamburger-menu ${isMenuOpen? 'active': ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div className=  {`show-nav ${isMenuOpen ? 'active': ''}`}>
                <a href="#" onClick={toggleMenu}>Home</a>
                <a href="#" onClick={toggleMenu}>How it works</a>
                <a href="#" onClick={toggleMenu}>Born A Crime Blog</a>
                <a href="#" onClick={toggleMenu}>Podcast</a>
                <a href="#" onClick={toggleMenu}>Resume Porfolio</a>
            </div>
        </div>
            <div className='Recycling-context'>
               <div className='words'>
                <h2>Welcome To Multimedia Join Us Today 
                    And Let Your Mind Soar New Heights
                </h2>
                <p>Unlock your full potential with our transformative project that challenges you to push the boundaries of critical thinking, creating and analytical prowess. Embark on a journey of self-discovery, where you'll cultivate the skills to innovate, problem-solve, and make a lasting impact. Dare to explore the limitless possibilities that lie within, and let your creativity take flight to new, uncharted territories. 
                </p>
                <button>
                    Learn More
                </button>
                </div> 
                <div>
                    <img src='/media/innovative.jpg' className='innovative'/>
                </div>
                
            </div>
     </div>
    );
}
export default Navbar;