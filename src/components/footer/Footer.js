import React from "react";
import './footer.css';


const Footer = () => {


  return (

    <footer className="footer">
      <div className="footer-box">
        <p className="footer-pera">
          &copy; 2024 Made By Yogesh Chandra Joshi. All rights reserved.
        </p>
        <hr className="footer-hr" />
        <p className="footer-pera">Follow me on</p>
      </div>
      <div className="footer-icon">
        <div className="footer-icon-1"><a href="https://leetcode.com/u/yogeshJoshi2004"><img src="./instagram-brands-solid.svg" alt="insta" /> </a></div>
        <div className="footer-icon-1"><a href="https://github.com/yogesh-joshi2004"><img src="./github-brands-solid.svg" alt="github" /></a></div>
        <div className="footer-icon-1"><a href="https://www.linkedin.com/in/yogesh-joshi-b1a6822a6" ><img src="./linkedin-brands-solid.svg" alt="linkedin" /></a> </div>
      </div>
    </footer>


  )
}
export default Footer;