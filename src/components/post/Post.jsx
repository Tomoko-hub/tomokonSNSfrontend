import React, { useState, useEffect, useContext } from 'react'
import "./Post.css"
import MoreVert from '@mui/icons-material/MoreVert';
//import { Users } from "../../dummyData"
import axios from 'axios';
import {format} from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContexst';

export default function Post({ post }) {
    
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [ like, setLike ] = useState(post.likes.legth);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ user, setUser ] = useState({});

    const { user:currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async ()=> {
      const response = await axios.get(`/users?userId=${post.userId}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);


    const handleLike = async () => {

        try {
            // Like API
            await axios.put(`/posts/${post._id}/like`, {userId: currentUser._id});
        } catch(err) {
            console.log(err);
        }
        setLike( isLiked ? like -1 : like +1 );
        setIsLiked(!isLiked)
    };

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img   // public\assets\person\noAvatar.png
                                src={
                                    user.profilePicture 
                                    ? PUBLIC_FOLDER + user.profilePicture
                                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                                } 
                                alt=""
                                className='postProfileImg'
                            />
                            <span className="postUserName">{user.username}</span>
                            <span className="postDate">{format(post.createdAt)}</span>
                        </Link>                    
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img 
                        src= { PUBLIC_FOLDER + post.img} 
                        alt=""
                        className='postImg'
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img 
                            src={ PUBLIC_FOLDER + "/heart.png" } 
                            alt=""
                            className='likeIcon'
                            onClick={()=> handleLike()}
                        />
                        <span className="postLikeCounter">
                            {like} likes your post.
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">You have {post.comment}comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}