import React from "react";
import "./Header.css";
import Search from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';
import Logo from './linkedin.png'
import HeaderOption from "./HeaderOption";
import {useDispatch} from "react-redux";
import { logout, selectUser } from "./features/counter/userSlice";
import {auth} from "./firebase";
import {useSelector} from "react-redux";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logOutOfApp = () => {
        dispatch(logout());
        auth.signOut();     
    };
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={Logo} 
                alt=""/>
                <div className = "header__search">
                <Search/>
                <input type="text" placeholder="Search"/>
                </div>
            </div>  
            <div className='header__right'>
                <HeaderOption Icon={Home} title = 'Home'/>
                <HeaderOption Icon={SupervisorAccount} title = 'My Network'/>
                <HeaderOption Icon={BusinessCenter} title = 'Jobs'/>
                <HeaderOption Icon={Chat} title = 'Messaging'/>
                <HeaderOption Icon={Notifications} title = 'Notifications'/>
                <HeaderOption avatar={true} title="me"
                    onClick={logOutOfApp}
                />
            </div>
        </div>
    )
}

export default Header;
