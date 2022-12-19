import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Post from '../post/Post'
import Share from '../share/Share'
import "./Timeline.css"
//import { Posts } from "../../dummyData"
import axios from "axios";
import { AuthContext } from '../../state/AuthContexst';

export default function Timeline({ username }) {
  const [ posts,setPosts ] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {

    const fetchPosts = async ()=> {
      const response = username 
        ? await axios.get(`/posts/profile/${username}`) //profile
        : await axios.get(`/posts/timeline/${user._id}`); //home
      //console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className='timeLine'>
      <div className="timelineWrapper">
        <Share />
        { posts.map((post)=> (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
