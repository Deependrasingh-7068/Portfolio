import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='main-nav-container'>
        <div className='nav-heading'>
          

          <span>7he</span>
          <span>Deependra</span>
        </div>
        <div className='nav-container'>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">About</Link></li>
            <li><Link to="/contact">About</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
