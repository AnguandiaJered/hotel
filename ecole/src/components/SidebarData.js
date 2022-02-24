import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillHome />     
    },
    {
        title: "Clients",
        path: "/client",
        icon: <FaIcons.FaUser />     
    },
    {
        title: "Reservation Chambre",
        path: "/reservation",
        icon: <FaIcons.FaProcedures />, 
        iconClosed:<IoIcons.IoIosArrowDown />,
        iconOpened :<IoIcons.IoIosArrowUp />,
        subNav:[
            {
                title: "Chambres",
                path: "/chambre",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },
            {
                title: "Classe Chambres",
                path: "/classechambre",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },
            {
                title: "Reservation",
                path: "/reservationchambre",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },                      
        ]
    },
    {
        title: "Reservation Salles",
        path: "/salles",
        icon: <AiIcons.AiFillMacCommand />,
        iconClosed:<IoIcons.IoIosArrowDown />,
        iconOpened :<IoIcons.IoIosArrowUp />,
        subNav:[
            {
                title: "Salles",
                path: "/salle",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },
            {
                title: "Reservation salles",
                path: "/reservesalle",
                icon: <AiIcons.AiOutlineDoubleRight />,
            }            
        ]
    }, 
    {
        title: "Paiements",
        path: "/paiement",
        icon: <FaIcons.FaDollarSign />,
        iconClosed:<IoIcons.IoIosArrowDown />,
        iconOpened :<IoIcons.IoIosArrowUp />,
        subNav:[
            {
                title: "Consommations",
                path: "/consommation",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },
            {
                title: "Paiement salle",
                path: "/paiesalle",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },
            {
                title: "Paiement hotel",
                path: "/paiehotel",
                icon: <AiIcons.AiOutlineDoubleRight />,
            }             
        ]
    },    
    {
        title: "Personnel",
        path: "/personnel",
        icon: <AiIcons.AiOutlineUser />,
        iconClosed:<IoIcons.IoIosArrowDown />,
        iconOpened :<IoIcons.IoIosArrowUp />,
        subNav:[
            {
                title: "Fonction",
                path: "/fonction",
                icon: <AiIcons.AiOutlineDoubleRight />,
            },
            {
                title: "Agents",
                path: "/agents",
                icon: <AiIcons.AiOutlineDoubleRight /> 
            }             
        ]
    }, 
    {
        title: "Parametres",
        path: "/parametre",
        icon: <AiIcons.AiFillSetting />,
        iconClosed:<IoIcons.IoIosArrowDown />,
        iconOpened :<IoIcons.IoIosArrowUp />,
        subNav:[
            {
                title: "Services",
                path: "/service",
                icon: <AiIcons.AiOutlineDoubleRight />
            },
            {
                title: "Affectations",
                path: "/affectation",
                icon: <AiIcons.AiOutlineDoubleRight />
            },
            {
                title: "Nos utilisateurs",
                path: "/users",
                icon: <AiIcons.AiOutlineDoubleRight />,
            }            
        ]
    }
];