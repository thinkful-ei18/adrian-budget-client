import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return(
    <div>
      <footer className='footer'>
        <div className='footer-img-container'>
          <img className='footer-img' src="https://res.cloudinary.com/adriantoddross/image/upload/v1527785141/adrian-ross.png" alt="Adrian Ross"/>
        </div>
        <p>
          Designed and developed by <a className='attribution' href="https://www.adriantoddross.com/" target="_blank" rel="noopener noreferrer">Adrian Ross</a>.
        </p>
        <p>Hosted on Netlify. Code is licensed under MIT and available on Github. All images and graphics are licensed under CC BY-SA.
        </p>
        <p>© 2018 Adrian Ross</p>
        <nav className='footer-nav'>
          <ul className='footer-list'>
            <li><a href="https://github.com/thinkful-ei18/adrian-budget-client" target="_blank" rel="noopener noreferrer">Client Repo</a></li>
            <li><a href="https://github.com/thinkful-ei18/adrian-budget-server" target="_blank" rel="noopener noreferrer">Server Repo</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};