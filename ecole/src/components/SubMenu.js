// import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// import Sidebar from "./Sidebar";

const SidebarLink=styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding:20px;
list-style: none;
height:60px;
text-decoration: none;
font-size: 18px;

&:hover{
    background:#3d566e;
    border-left: 4px solid #fff;
    color:#fff;
    cursorr: pointer;
    text-decoration:none;   
   }
`;
const DropdownLink=styled(Link)`
background: #ecf0f1;
height:60px;
padding-left:3rem;
display:flex;
align-items: center;
text-decoration: none;
color: #000;
font-size: 18px;
list-style-type: none;

&:hover{
    background: #e0e7e8;
    cursor:ponter;
    list-style-type: none;
    color:#000;
    text-decoration:none;
}
`;

const SidebarLabel=styled.span`
margin-left:15px;
`;

const SubMenu = ({item}) =>{

    const [subnav,setSubnav]=useState(false);

    const showSubnav = () =>setSubnav(!subnav);
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed :null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item,index)=>{
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu;