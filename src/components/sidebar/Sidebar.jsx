import React from 'react'
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from "@mui/icons-material"
import "./Sidebar.css"
import Friend from '../friend/Friend'
import { Users } from "../../dummyData"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <Home className='sidebarIcon' />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className='sidebarListItemText'>Home</span>
                    </Link>
                </li>
                <li className='sidebarListItem'>
                    <Search className='sidebarIcon' />
                    <span className='sidebarListItemText'>Search</span>
                </li>
                <li className='sidebarListItem'>
                    <Notifications className='sidebarIcon' />
                    <span className='sidebarListItemText'>Notifications</span>
                </li>
                <li className='sidebarListItem'>
                    <MessageRounded className='sidebarIcon' />
                    <span className='sidebarListItemText'>Messages</span>
                </li>
                <li className='sidebarListItem'>
                    <Bookmark className='sidebarIcon' />
                    <span className='sidebarListItemText'>Bookmark</span>
                </li>
                <li className='sidebarListItem'>
                    <Person className='sidebarIcon' />
                    <Link to="/profile/shincode" style={{ textDecoration: "none", color: "black" }}>
                        <span className='sidebarListItemText'>Profile</span>
                    </Link>
                </li>
                <li className='sidebarListItem'>
                    <Settings className='sidebarIcon' />
                    <span className='sidebarListItemText'>Settings</span>
                </li>
            </ul>
            <hr className='sidebarHr' />
            <ul className='sidebrFriendList'>
                {Users.map((user) => (
                    <Friend user={user} key={user.id} />
                ))}
            </ul>
        </div>
    </div>
  )
}
