import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQH6POubfzuxFQ/profile-displayphoto-shrink_400_400/0/1592793369833?e=1613606400&v=beta&t=m5dxdLb7YmrY_jvKnTut-mMDnvME3005OZioVlWuX_Q"
                title="Colton Eichorn"
            />
            <Story
                image="https://media-exp1.licdn.com/dms/image/C4E2DAQHgx1R9MrWSlw/profile-treasury-image-shrink_1920_1920/0/1607879541209?e=1611295200&v=beta&t=r5UnV85vP_r6408iowcFjPtHR7wCanecWG7U34lyotQ"
                profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQFr8ZUBdIQMpw/profile-displayphoto-shrink_400_400/0/1608060068305?e=1616630400&v=beta&t=9y_pVwXuOdz_nEL99Joe1cAYewtFv9BL6ThYC-v6V_4"
                title="Ricci Eichorn"
            />
            <Story
                image="https://images.pexels.com/photos/2745835/pexels-photo-2745835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                profileSrc="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Max Speedman"
            />
            <Story
                image="https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                profileSrc="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Rich Goldman"
            />
            <Story
                image="https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                profileSrc="https://images.pexels.com/photos/3326711/pexels-photo-3326711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                title="Hertz Humbucker"
            />

        </div>
    );
}

export default StoryReel
