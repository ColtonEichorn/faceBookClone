import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';




function Header() {
    const[{ user }, dispatch] = useStateValue();


    return <div className="header">
    <div className="header__left">
        <img title="https://iconscout.com/icons/facebook, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Facebook_icon_192.png" alt="Facebook icon 192" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
        />
        <div className="header__input">
        
            <button className="searchButton" type="submit"> <SearchIcon /> </button>
            <input placeholder='Search Facebook' type="text" />
    </div>
</div>

    <div className="header__center">
        <div className="header__option
        header__option--active">
            <HomeIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <FlagIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <SubscriptionsIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <StorefrontIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large"/>
        </div>
    </div>
    
    <div className="header__right">
        <div className="header__info">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
        </div>

        <IconButton>
            <AddIcon />
        </IconButton>
        <IconButton>
            <ForumIcon/>
        </IconButton>
        <IconButton>
            <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
            <ExpandMoreIcon/>
        </IconButton>





    </div>
</div>
    ;
}

export default Header;
