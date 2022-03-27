import React, { useState } from "react";
import { /* Link,  */ useNavigate } from "react-router-dom";

import logo from "./../../static/logo.png";
import backgroundImage from "./../../static/picture1.jpg";
import loginImage from "./../../static/login.png";
import avatar from "./../../static/avatar.png";
import facebook from "./../../static/facebook.png";
import google from "./../../static/google.png";
import linkedin from "./../../static/linkedin.png";
import { Container } from "./styles";

import { auth } from "./../../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Icon for the notification message
import { FcHighPriority } from "react-icons/fc";

function LoginPage(props) {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const notify = (error) =>
        toast.error(error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: <FcHighPriority size={32} />,
        });

    function onSignInHandler(e) {
        e.preventDefault();
        /* navigate("/dashboard"); */
        signInWithEmailAndPassword(auth, email, password)
            .then((userCrediental) => {
                //move dashboard page
                navigate("dashboard");
            })
            .catch((error) => {
                let MessageConfirmation = "";

                if (error.code === "auth/invalid-email") {
                    MessageConfirmation =
                        "All fields are required! Please insert you email.";
                } else if (error.code === "auth/internal-error") {
                    MessageConfirmation = "Please insert you password!";
                } else if (error.code === "auth/wrong-password") {
                    MessageConfirmation =
                        "You inserted the wrong password. Try again.";
                } else if (error.code === "auth/user-not-found") {
                    MessageConfirmation =
                        "This user does not exist. Insert correct account.";
                }
                notify(MessageConfirmation);
            });
    }

    return (
        <>
            <div
                style={{
                    background: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    minHeight: "600px",
                    minWidth: "600px",
                }}
            >
                <Container>
                    <ToastContainer />
                    {/* notification message */}
                    <div>
                        <span>
                            <img
                                src={logo}
                                width="65"
                                style={{
                                    margin: "1rem 0 1rem 1rem",
                                    position: "absolute",
                                    left: "0.5rem",
                                    top: "0.5rem",
                                }}
                                alt="company logo"
                            />
                        </span>
                        <img
                            className="picture"
                            src={loginImage}
                            width="700px"
                            style={{ padding: "1rem " }}
                            alt="Sing in logo"
                        />
                    </div>
                    <div className="loginSection">
                        <p className="header">Login</p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                paddingBottom: "0.4rem",
                            }}
                        >
                            <span>
                                <img
                                    src={avatar}
                                    width="70"
                                    style={{ position: "static" }}
                                    alt="company logo"
                                />
                            </span>
                        </div>

                        <form onSubmit={onSignInHandler} action="post">
                            <div className="inputSection">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="User email"
                                    /* required */
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="inputSection">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    /* required */
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div className="rememberForgot">
                                <div>
                                    <label>
                                        Remember Me
                                        <input
                                            type="checkbox"
                                            style={{
                                                marginLeft: "0.2rem",
                                                width: "1rem",
                                                height: "1rem",
                                                cursor: "pointer",
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="forgotPass">
                                    <span>
                                        <a href="#top">Forgot Password</a>
                                    </span>
                                </div>
                            </div>

                            <div className="loginButton">
                                <button type="submit">Sign In</button>
                                <button type="submit">Sign Up</button>
                            </div>
                            <div className="socialMedia">
                                <span>
                                    <a href="#top">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </span>
                                <span>
                                    <a href="#top">
                                        <img src={google} alt="Gmail" />
                                    </a>
                                </span>
                                <span>
                                    <a href="#top">
                                        <img src={linkedin} alt="LinkIn" />
                                    </a>
                                </span>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default LoginPage;
