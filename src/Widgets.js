import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
             <iframe title='Weather'
                src="https://www.montevideo.com.uy/index.html"
                width="340"
                height="100%"
                style={{border: "none", overflow: "auto"}}
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
             ></iframe>
        </div>
    )
} 

export default Widgets
