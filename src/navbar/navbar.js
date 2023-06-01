import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){

    return(
       
      
          <nav>
            <ul>
            {/* <li><a href='/'>Home</a></li> */}
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/service'>Services</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>
       
       
        
    )
}

export default Navbar;