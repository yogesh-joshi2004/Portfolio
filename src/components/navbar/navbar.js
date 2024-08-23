import { Component } from 'react';
import './navbar.css';
// const Navbar = () => {
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <nav>
        <div className="banners">
          <img className='logo' src='./logo.jpg' alt="" />
          <h3>YOGESH CHANDRA JOSHI</h3>
        </div>
        <ul id="nav-links" className={this.state.clicked ? "#nav-links allAtive": "#nav-links"}>
          <li>
            <a href="# " className="nav-menu-link allAtive">HOME</a></li>
          <li>
            <a href="#about " className="nav-menu-link">ABOUT</a>
            </li>
          <li>
            <a href="# " className="nav-menu-link">PROJECTS</a></li>
          <li><a href="#contact" className="nav-menu-link">CONTACT</a></li>
        </ul>
        {/* </div> */}
        <div className="mobile" onClick={this.handleClick}>
          {/* <i className='fas fa-bars'></i>
        <i className='fas fa-times'></i> */}
          <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    );
  }
}
export default Navbar;
