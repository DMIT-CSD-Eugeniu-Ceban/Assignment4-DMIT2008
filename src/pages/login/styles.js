import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    min-width: 850px; /* test */
    width: calc(100% / 1.7);
    min-height: 39rem;
    height: calc(80% - 8rem); /* Need to check if I should to modify something*/
    margin: 0 auto;
    border: 1px solid 808080;
    border-radius: 8px;
    box-shadow: 7px 6px 6px 0px rgba(122, 122, 122, 0.63);
    background: linear-gradient(135deg, #a45856 0%, #9bcbca 68%, #ffb997 100%);
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 1rem;
    transition: all 0.5s ease-in-out;

    .loginSection {
        box-shadow: 4px 4px 4px 2px rgba(124, 124, 124, 0.38);
        border: 1px solid silver;
        border-radius: 5px;
        min-width: 355px;
        width: calc(
            34% - 5rem
        ); /* Here I can adjust the width of the login cell */
    }

    @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");

    .header {
        font-family: "Pacifico", cursive;
        font-size: 2.2rem;
        color: #b9548d;
        font-weight: 600;
        text-align: center;
        padding: 2rem 0 1rem 0;
        text-shadow: 2px 2px 3px rgba(88, 55, 88, 0.81);
    }

    form {
        padding: 0 1.5rem 1.5rem;
    }

    .inputSection {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
    }

    .inputSection label {
        font-size: 1.2rem;
        font-family: "Acme", sans-serif;
        color: #b9548d;
        font-weight: 600;
        text-shadow: 1px 1px 3px rgba(88, 55, 88, 0.83);
    }

    .inputSection input {
        padding: 0.6rem;
        border: 1px solid grey;
        border-radius: 8px;
        background-color: transparent;
    }

    .rememberForgot {
        display: flex;
        justify-content: space-between;
    }

    .rememberForgot label {
        font-size: 1rem;
        font-weight: 500;
        color: #353535;
        padding-top: 0.5rem;
        display: flex;
        align-items: center;
    }

    .rememberForgot label input {
        padding-right: 1rem;
    }

    .forgotPass {
        padding-top: 0.3rem;
        display: flex;
        align-items: center;
    }

    .forgotPass a {
        font-size: 1rem;
        font-weight: 500;
        color: #553793;
    }

    .loginButton {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }

    /* Button design ------------------------*/
    .loginButton button {
        width: 145px;
        height: 50px;
        border: none;
        outline: none;
        color: #474747;
        background: #232323;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 27px; /* radius */
        font-weight: 550;
    }

    .loginButton button:before {
        content: "";
        background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        border-radius: 27px;
    }

    .loginButton button:active {
        color: #000;
    }

    .loginButton button:active:after {
        background: transparent;
    }

    .loginButton button:hover:before {
        opacity: 1;
    }

    .loginButton button:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #db8970;
        left: 0;
        top: 0;
        border-radius: 27px;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }

    /* END of button design */

    .socialMedia {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-around;
    }

    .socialMedia img {
        width: 50px;
    }

    @media (max-width: 700px) {
        min-width: unset;
        flex-direction: column;
        align-items: center;
        min-width: 410px;
        height: 1000px;
        transition: all 0.4s ease-in-out;

        div > img {
            width: 25rem;
        }
    }

    //Toastify design
    .Toastify__toast {
        background-color: mediumpurple;
        color: white;
        font-size: 1.1rem;
    }
    
    .Toastify__toast-body {
        padding: 0.6rem 0.5rem;
        letter-spacing: 1px;
    }
    
    .Toastify__toast-icon {
        color: maroon;
        width: 50px;
        margin: unset;
    }
    
    .Toastify__progress-bar--error {
        background-color: lightcoral;
    }
`;

export { Container }