import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './cssutils/Navbar.css';
import MyButton from './MyButton';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const showButton=()=> {
       if(window.innerWidth >=960)
         setButton(false);
    else
         setButton(true);
        
    }

    useEffect(()=> {
        showButton();
    },[])

    window.addEventListener('resize',showButton);
    const handleClick=()=> {
        setClick(prev=>!prev);
    }
    
    const closeMenu=() => setClick(false);
  return (
    <nav className='navbar'>
        <div className='navbar--container'>
          <Link to='/' className='navbar--title'>
            TRVL
            <i className='fa-brands fa-typo3'></i>
          </Link>
          <div className='navbar--menu-icon' onClick={handleClick}>
          <i className={click?"fa-solid fa-xmark":"fa-solid fa-bars"}></i>
          </div>
          
          <ul className={click?'navbar--menu-items-mobile':'navbar--menu-items'}>
            <li className='navbar-menu-list'>
                <Link to='/' onClick={closeMenu}
                className='navbar--menu-item-link'>Home
                </Link>
            </li>
            <li className='navbar-menu-list'>
                <Link to='/services' onClick={closeMenu}
                 className='navbar--menu-item-link'>Services
                 </Link>
            </li>
            <li className='navbar-menu-list'>
                <Link to='/products' onClick={closeMenu}
                className='navbar--menu-item-link'>Products
                </Link>
            </li>
            <li>
                <Link to='/' onClick={closeMenu} >
                <MyButton 
                    btnStyle='btn--outline'
                    btnSize='btn--medium'
                    className="navbar--menu-item-link-hide"
                >
                SIGN UP</MyButton>
                </Link>
            </li>
            
          </ul>
          {/* {button && <MyButton 
                    btnStyle='btn--outline'
                    btnSize='btn--large'
                    text='SIGN UP'
                    onClick={closeMenu}
                /> } */}
        </div>
    </nav>
  )
}

export default Navbar