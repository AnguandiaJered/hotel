import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';


export const MenuItems = [
    {
        title: 'Profile',
        path: '/profil',
        icon: <FaIcons.FaUser />
    },
    {
        title: 'Settings',
        path: '/profil',
        icon: <AiIcons.AiFillSetting />
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <FaIcons.FaSignOutAlt />
    }
]