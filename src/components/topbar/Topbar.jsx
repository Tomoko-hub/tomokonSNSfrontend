import { Search } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>SNS</span>
        </div>
        <div className="topbarCenter">
            <div className='searchbar'>
                <Search className='searchIcon' />
                <input 
                    type="text" 
                    className='serchInput' 
                    placeholder='search'
                 />
            </div>
        </div>
        <div className="topbarRight">
            <div className='topbarIconItem'>
                <ChatIcon />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className='topbarIconItem'>
                <NotificationsIcon />
                <span className="topbarIconBadge">2</span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
    </div>
  )
}
