import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='main-nav-container'>
        <div className='nav-heading'>
          <h1>My Portfolio</h1>
        </div>
        <div className='nav-container'>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
