import { Search } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContexst';
import "./Topbar.css";

export default function Topbar() {

    const { user } = useContext(AuthContext);
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <span className='logo'>SNS</span>
            </Link>
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
            <div className="topbarIconItems">
                <div className='topbarIconItem'>
                    <ChatIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className='topbarIconItem'>
                    <NotificationsIcon />
                    <span className="topbarIconBadge">2</span>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture 
                        ? PUBLIC_FOLDER + user.profilePicture
                        : PUBLIC_FOLDER + "/person/noAvatar.png"} 
                        alt="" className='topbarImg' />
                </Link>
            </div>
        </div>
    </div>
  );
}
