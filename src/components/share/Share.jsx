import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/GifBox';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import "./Share.css"

export default function Share() {
    
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img
                    src={PUBLIC_FOLDER + "/person/noAvatar.png"} 
                    alt=""
                    className='shareProfileImage' 
                />
                <input type="text" className='shareInput' placeholder='What are you doing now?' />
            </div>
            <hr className='shareHr' />
            <div className="shareButtons">
                <div className="shareOptions">
                    <div className='shareOption'>
                        <AddPhotoAlternateIcon className='shareIcon' htmlColor='blue' />
                        <span className='shareOptionText'>Pictures</span>
                    </div>
                    <div className='shareOption'>
                        <GifIcon className='shareIcon' htmlColor='hotpink' />
                        <span className='shareOptionText'>GIF</span>
                    </div>
                    <div className='shareOption'>
                        <FaceIcon className='shareIcon' htmlColor='green' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <div className='shareOption'>
                        <AnalyticsIcon className='shareIcon' htmlColor='red' />
                        <span className='shareOptionText'>Vote</span>
                    </div>
                </div>
                <button className='shareButton'>Post</button>
            </div>
        </div>
    </div>
  )
}
