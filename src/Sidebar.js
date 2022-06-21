import { Avatar } from "@mui/material";
import React from "react";
import { selectUser } from "./features/counter/userSlice";
import "./Sidebar.css";
import {useSelector} from "react-redux";


function Sidebar(){
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>
                {topic}
            </p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1635819411092-d2308495c54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt=""/>
                <Avatar src={user.photoURL} className="sidebar__avatar">
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>
                        Who viewed you
                    </p>
                    <p className="sidebar__statNumber">
                        370 
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>
                        Views on posts
                    </p>
                    <p className="sidebar__statNumber">
                        870
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>
                    Recent
                </p>
                {recentItem('reactjs')}
                {recentItem('flutter')}
                {recentItem('nodejs')}
                {recentItem('html')}
                {recentItem('python')}
            </div>
        </div>
    );
}

export default Sidebar;