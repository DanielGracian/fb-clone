import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // store in db stuff

        setInput("");
        setImageURL("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar />
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender-input" type="text"
                        placeholder={`What's on your mind,`} />
                    <input
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)} 
                        placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">HIDDEN</button>
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender-option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Phot/Video</h3>
                </div>

                <div className="messageSender-option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
