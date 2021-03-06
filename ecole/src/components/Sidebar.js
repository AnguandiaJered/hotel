import React from "react";
import styled from 'styled-components';
import {SidebarData} from './SidebarData';
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Jered from '../images/Jered.JPG';
import { Logout } from "../modals/Logout";



const SidebarNav=styled.nav`
background: #34495e;
width: 250px;
height:100vh;
display: flex;
justify-content: center;
position: absolute;
top: 0;
left: ${({sidebar})=>(sidebar ? '0' : '0%')};
transition: 350ms;
z-index: -10;
margin-top: 50px;
    `;
const SidebarWrap=styled.div`
width: 100%;
`;    
const Sidebar = ()=>{

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <SidebarNav>
                    <SidebarWrap>                       
                        <nav className="mt-3">
                            <ul className="navbar-nav">
                                <li className="nav-item ml-5">
                                    <img className="rounded-circle" src={Jered} width={50} height={50} alt="" />
                                    <p className="text-white">
                                        <i className="fa fa-key"></i> Logged in as
                                    </p>
                                    <p className="text-white row">Jered Anguandia <Logout /></p>
                                    <div className="clearfix"></div>
                                </li>
                                <li className="nav-search">
                                    <form className="col-md-12">
                                        <input type="search" className="form-control" placeholder="Search..." />
                                    </form>
                                </li>
                            </ul>  
                        </nav>
                        { SidebarData.map((item,index)=>{
                            return <SubMenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}
export default Sidebar;