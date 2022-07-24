import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ profile }) {

  const HomeRightBar = () => {

    return (
      <>
        <div className="eventContainer">
          <img 
            src="assets/star.png" 
            alt=""
            className='starImg'
           />
          <span className="eventText"><b>Upcomming events </b>for your followers</span>
        </div>
        <img 
          src="assets/event.jpeg" 
          alt=""
          className='eventImgs'
         />
        <h4 className='rightbarTitle'>Friends online</h4>
        <ul className="rightbarFriendList">
          { Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Promotion Ad</p>
        <img 
          src="assets/promotion/promotion1.jpeg" 
          alt=""
          className='rightbarPromotionImg'
         />
        <p className='promotionName'>Shopping Ad</p>
        <img 
          src="assets/promotion/promotion2.jpeg" 
          alt=""
          className='rightbarPromotionImg'
         />
        <p className='promotionName'>Car Ad</p>
        <img 
          src="assets/promotion/promotion3.jpeg" 
          alt=""
          className='rightbarPromotionImg'
         />
        <p className='promotionName'>Bussiness Ad</p>
      </>
    )
  }

  const ProfileRightBar = () => {

    return (
      <>
        <h4 className='rightbarTitle'>User info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoKey'>Okinawa</span>
          </div>
          <h4 className='rightbarTitle'>Your Friend List</h4>
          <div className='rightbarFollowings'>
            <div className="rightbarFollowing">
              <img 
                src="assets/person/2.jpeg" 
                alt=""
                className='rightbarFollowingImg'
                 />
              <span className='rightbarFollowingName'>Satosan</span>
            </div>
            <div className="rightbarFollowing">
              <img 
                src="assets/person/3.jpeg" 
                alt=""
                className='rightbarFollowingImg'
                 />
              <span className='rightbarFollowingName'>Hakonen</span>
            </div>
            <div className="rightbarFollowing">
              <img 
                src="assets/person/4.jpeg" 
                alt=""
                className='rightbarFollowingImg'
                 />
              <span className='rightbarFollowingName'>Yoyoma</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
