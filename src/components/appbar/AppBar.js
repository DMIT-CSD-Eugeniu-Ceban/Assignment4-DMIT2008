import React from 'react';
import logo from './../../static/logo.png'
import { Button } from './../../ui/buttons';

import { IoEllipsisVertical, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5'
import { AppBarLogoStyle, AppBarLogo, AppBarButton, AppBarIcons, AppBarIcon } from './styles'

/* import { Link } from "react-router-dom" */

import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

function AppBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <AppBarLogoStyle bgcolor="#ECEFF1" color="#424242">
            <AppBarLogo>
                <span>
                    <img
                        src={logo}
                        width="60"
                        style={{ margin: "1rem 0 1rem 1rem" }}
                        alt="company logo"
                    />
                </span>
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        padding: "0 4rem 0 1rem",
                    }}
                >
                    EC
                </h1>
            </AppBarLogo>
            <AppBarIcons>
                <AppBarIcon>
                    {/* <span><AppBarButton>sign out</AppBarButton></span> */}
                    <AppBarButton
                        className="button"
                        onClick={onLogoutRequest}
                        style={{ color: "#9C27B0"}}
                    >
                        {/* <Link
                            to="/"
                            style={{ color: "#9C27B0", textDecoration: "none" }}
                        > */}
                        sign out
                        {/* </Link> */}
                    </AppBarButton>
                    <Button className="button">
                        <IoMailOutline size="1.5rem" />
                    </Button>
                    <Button className="button">
                        <IoNotificationsOutline size="1.5rem" />
                    </Button>
                    <span>
                        <img
                            src="https://avatars.dicebear.com/api/initials/eugeniu%20ceban.svg?b=%23ef7534&r=50&scale=104"
                            width="35"
                            alt="Avatar"
                        />
                    </span>
                    <Button className="button">
                        <IoEllipsisVertical size="1.2rem" />
                    </Button>
                </AppBarIcon>
            </AppBarIcons>
        </AppBarLogoStyle>
    );
}

export default AppBar;