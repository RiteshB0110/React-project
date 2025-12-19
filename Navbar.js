import './navbar.css';
import {Link} from "react-router-dom";

function Navbar(){
    return(

        <>
                
        <nav>
       <ul className='navul'>
        <li className='abc'><Link to='/'>Home </Link></li>
        <li className='abc'><Link to='/about'>About  </Link></li>
        <li className='abc'><Link to='/contact'>Contact </Link></li>
           <li className='abc'><Link to='/login'>Login </Link></li>
       </ul></nav>
        </>

       
       
    );
}
export default Navbar;