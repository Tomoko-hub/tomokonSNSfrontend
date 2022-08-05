import React, { useState } from 'react'
import { useEffect } from 'react';
import Post from '../post/Post'
import Share from '../share/Share'
import "./Timeline.css"
//import { Posts } from "../../dummyData"
import axios from "axios";

export default function Timeline() {
  const [ posts,setPosts ] = useState([]);

  useEffect(() => {

    const fetchPosts = async ()=> {

      const response = await axios.get("/posts/timeline/62af6bb0acd2115799660bbe");
      //console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='timeLine'>
      <div className="timelineWrapper">
        <Share />
        { posts.map((post)=> (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
