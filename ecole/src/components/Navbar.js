import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


const Navbar = () =>{
    const [click,setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };
    return (
        <nav className="navbar-top navbar navbar-expand-lg navbar-light bg-dark" role="navigation">
            <div className="navbar-header">
                {/* <button type="button" className="navbar-toggle pull-right" data-toggle="collapse" data-target=".sidebar-collapse">
                    <i className="fa fa-bars"></i> Menu
                </button> */}
                <div className="navbar-brand">
                    <Link to="/" className="nav-link text-white">
                        Gold Star Hotel
                    </Link>
                </div>
            </div>
            <div className="offset-1" onClick={handleClick}>
                <ul className="nav navbar-left navbar-nav">
                    <li className="tooltip-sidebar-toggle nav-item">
                        <Link to="#" className="nav-link text-white" id="sidebar-toggle" data-toggle="tooltip" data-placement="right" title="Sidebar Toggle">
                            {/* <i className="fa fa-bars"></i> */}
                            <i className={click ? 'fa fa-bars' :'fa fa-bars'}></i>
                        </Link>
                    </li>
                </ul>         
            </div>
            <ul className="navbar-nav offset-7">
                <li className="nav-item" id="envel">
                    <Link to="#" className="nav-link" onClick={closeMobileMenu} >
                        <i className="fa fa-envelope text-white mt-2"></i>
                    </Link>
                </li>
                <li className="nav-item" id="bell">
                    <Link to="#" className="nav-link" onClick={closeMobileMenu} >
                        <i className="fa fa-bell text-white mt-2"></i> 
                    </Link>
                </li>
                <li className="nav-item" id="task"> 
                    <Link to="#" className="nav-link" onClick={closeMobileMenu} >
                        <i className="fa fa-tasks text-white mt-2"></i> 
                    </Link>
                </li>
                <li className="nav-item" id="setting"
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} >
                    <Link to="#" className="nav-link" onClick={closeMobileMenu} >
                        <i className="fa fa-user text-white mt-2"></i>  <i className="fa fa-caret-down text-white mt-2"></i>
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;