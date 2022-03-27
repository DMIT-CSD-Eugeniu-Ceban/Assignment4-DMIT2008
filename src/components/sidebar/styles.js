/* import { Button } from 'bootstrap'; */
import styled from 'styled-components';

const Sections = styled.div`
    background-color: #eceff1;
    width: 12.1rem; /* here */
    min-width: 12.1rem;
    border-top: 1px solid #78909c;
    border-right: 1px solid #78909c;
    /* height: 92.5vh; */
    /* min-height: 650px; */

    button {
        cursor: pointer;
        border: unset;
    }

    .multiButton {
        margin: 0 0 0.8rem 0;
        padding-left: 0.3rem;
    }

    .multiButton > button {
        margin: 0.4rem 0;
    }

    .button {
        position: relative;
        border-radius: 3px;
        color: white;
        user-select: none;
        transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
    }

    .button:hover {
        transition-duration: 0.5s;
        background-color: silver;
    }

    .button:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 3px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s;
        box-shadow: 0 0 10px 40px white;
    }

    .button:active:after {
        box-shadow: 0 0 0 0 white;
        position: absolute;
        border-radius: 3px;
        left: 0;
        top: 0;
        opacity: 1;
        transition: 0s;
    }

    .button:active {
        top: 1px;
        border: none;
        outline: none;
    }
`;

const H3 = styled.h3`
  margin-left: 0.5rem;
`


export { Sections, H3 }
