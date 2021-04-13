import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';



function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://static.toiimg.com/photo/76729750.cms"
                message="Woow this works!"
                timestamp="this is a time stamp"
                username="Jhon J. Rich"
                image="https://www.w3schools.com/w3css/img_lights.jpg"
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
