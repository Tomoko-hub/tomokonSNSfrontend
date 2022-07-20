import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/GifBox';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import "./Share.css"

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img
                    src="/assets/person/1.jpeg" 
                    alt=""
                    className='shareProfileImage' 
                />
                <input type="text" className='shareInput' placeholder='What are you doing now?' />
                <hr className='shareHr' />
            </div>
            <div className="shareButtons">
                <div className="shareOptions">
                    <div className='shareOption'>
                        <AddPhotoAlternateIcon className='shareIcon' />
                        <span className='shareOptionText'>Pictures</span>
                    </div>
                    <div className='shareOption'>
                        <GifIcon className='shareIcon' />
                        <span className='shareOptionText'>GIF</span>
                    </div>
                    <div className='shareOption'>
                        <FaceIcon className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <div className='shareOption'>
                        <AnalyticsIcon />
                        <span className='shareOptionText'>Vote</span>
                    </div>
                    <button className='shareButton'>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}
