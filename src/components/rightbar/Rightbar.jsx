import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ post }) {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}
