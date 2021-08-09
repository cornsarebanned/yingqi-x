import Link from 'next/link'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React, {useState} from 'react'
import Image from 'next/image'
import logoImg from '../public/logo_light.png'
// 谢映绮

const Navbar = () => {
    const[navtoggle, setNavtoggle] = useState(false);

    return (
        <nav className="nav-container">
            <h1 className="nav-logo"><Link href="/">YINGQI xiè</Link></h1>
            <ul className={navtoggle ? "nav-links-mobile":"nav-links-todos"}
                onClick={() => setNavtoggle(false)}
            >
                <li className="navbar-links" id="about"><Link href="/about"><a>ABOUT</a></Link></li>
                <li className="navbar-links" id="projects"><Link href="/projects"><a>PROJECTS</a></Link></li>
                <li className="navbar-links" id="contact"><Link href="/contact"><a>CONTACT</a></Link></li>
            </ul>
            <button className="navbar-btn-toggle"
            onClick={()=>setNavtoggle(!navtoggle)}
            >
                {navtoggle ? <i className="fa fa-times fa-lg"></i> : <i className="fa fa-bars fa-lg"></i>}
            </button>
        </nav>
    ); 
}
 
export default Navbar;