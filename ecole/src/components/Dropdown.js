import React,{ useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from './MenuItems';
import './Dropdown.css';

const Dropdown = () =>{
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return(
        <Fragment>
            <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} onClick={handleClick}>
                {
                    MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <Link className="nav-link" to={item.path} onClick={() =>setClick(false)}>
                                {item.icon} <strong>{item.title}</strong>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

export default Dropdown;