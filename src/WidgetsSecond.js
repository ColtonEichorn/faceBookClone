import React from 'react'
import "./WidgetsSecond.css"

function WidgetsSecond() {
    return (
        <div>
            <iframe 
                class="iframe2"
                title="iframe2" 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="340" 
                height="100%" 
                style={{ border: "none", overflow: "hidden" }} 
                scrolling="no" 
                frameborder="0" 
                allowTransparency="true" 
                allow="encrypted-media"
                ></iframe>
        </div>
    )
}

export default WidgetsSecond
