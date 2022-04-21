import React from 'react';
import "./Widgets.css";
/* <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script> */

function Widgets() {
    
    
    return (
        <div className="widgets">
        <iframe 
            title="iframe"
            class="iframe"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCE-Development-105409351512759&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340" 
            height="500" 
            style={{ border: "none", overflow: "hidden" }} 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media; autoplay"
    ></iframe>
    </div>
    // data-vanity="colton-eichorn-a24bba197"
    // ><a 
    // class="LI-simple-link" 
    // href='https://www.linkedin.com/in/colton-eichorn-a24bba197?trk=profile-badge'
    // >Colton Eichorn</a></div>
    );
}


export default Widgets
