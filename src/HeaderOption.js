import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import "./HeaderOption.css";

function HeaderOption({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser);
    return (
        <div className='headerOption' onClick={onClick}>
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && (<Avatar className='headerOption_icon' src={user?.email[0]}>
            </Avatar>)}
            <h1 className='headerOption__title'>{title}</h1>
        </div>
    )
}

export default HeaderOption
