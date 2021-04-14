import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import {ExpandMoreOutlined} from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 
function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar" />
                <div className="post-topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post-bottom">
                <p>{message}</p>
            </div>

            <div className="post-image">
                <img src={image} alt="" />
            </div>

            <div className="post-options">
                <div className="post-option">
                    <ThumUpIcon />
                    <p>Like</p>
                </div>

                <div className="post-option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="post-option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>

        </div>
    )
}

export default Post
