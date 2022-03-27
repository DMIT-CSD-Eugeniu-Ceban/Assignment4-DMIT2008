import React, { useState } from "react";
import { Link } from "react-router-dom";

import backgroundImg from "./../../static/404error.gif";
import logo from "static/logo.png";
import { Frame } from "./styles";

import { auth } from "libs/firebase";
import { onAuthStateChanged } from "firebase/auth";

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    });

    return (
        <>
            <div
                style={{
                    background: `url(${backgroundImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    minWidth:'1200px'
                }}
            >
                <span>
                    <img
                        src={logo}
                        width="60"
                        style={{ margin: "1rem 0 1rem 1rem", position: 'absolute', top: '0' }}
                        alt="company logo"
                    />
                </span>
                <Frame
                    style={{
                        margin: "0 auto",
                        position: "relative",
                        top: "-40%",
                        right: "-9%",
                    }}
                >
                    <form>
                        <div className="loginButton">
                            <button
                                style={{
                                    position: "absolute",
                                    top: "0rem",
                                    right: "0rem",
                                }}
                                type="submit"
                            >
                                {isUser ? (
                                    <Link
                                        to={"/dashboard"}
                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                            fontWeight: "650",
                                        }}
                                    >
                                        Back to Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        to={"/"}
                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                            fontWeight: "650",
                                        }}
                                    >
                                        Back to Login Page
                                    </Link>
                                )}
                            </button>
                        </div>
                    </form>
                </Frame>
            </div>
        </>
    );
}

export default PageNotFound;
