import React from 'react'
import "./Profile.css"

import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {

    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img 
                                src= { PUBLIC_FOLDER + "/post/3.jpeg" }
                                alt=""
                                className='profilecoverImg'
                            />
                            <img 
                                src={ PUBLIC_FOLDER + "/person/1.jpeg" }
                                alt=""
                                className='profileUserImg'
                            />
                            </div>
                            <div className="profileInfo">
                                <h4 className='profileInfoUsername'>Tomoko</h4>
                                <span className='profileInfoDesc'>Hi, I am from Okinawa.</span>
                            </div>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline username="Tomoko Uehara" />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
    }
