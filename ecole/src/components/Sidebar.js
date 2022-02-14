import React from "react";
// import {Link} from "react-router-dom";
import styled from 'styled-components';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";



// const Nav=styled.div`
//     background: #233050;
//     height: 60px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
// `;
// const NavIcon=styled(Link)`
//     margin-left: 2rem;
//     font-size: 2rem;
//     height: 80px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     `;
const SidebarNav=styled.nav`
background: #34495e;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: absolute;
top: 100;
left: ${({sidebar})=>(sidebar ? '0' : '0%')};
transition: 350ms;
z-index: -10;
    `;
const SidebarWrap=styled.div`
width: 100%;
`;    
const Sidebar = ()=>{

    // const [sidebar,setSidebar]=useState(false);
    // const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                {/* <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </NavIcon>
                </Nav> */}
                <SidebarNav>
                    <SidebarWrap>
                        {/* <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </NavIcon> */}
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