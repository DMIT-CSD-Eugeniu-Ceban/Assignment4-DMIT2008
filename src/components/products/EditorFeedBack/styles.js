import styled from "styled-components";

const EditorFeedBackStyles = styled.aside`
    width: 80%;
    margin: 4rem auto 0;
    text-align: center;
    min-width: 580px;
    `;

const FeedBackMessage = styled.figcaption`
    font-size: 1.75rem;
    font-weight: 600;
    color: #48d873;
`;

const FeedBackOption = styled.footer`
    margin-top: 8rem;
    button {
        margin: 0.25rem;
        width: fit-content !important; //need to check if need to be here
    }

    .addAndViewProduct {
        width: 240px !important;
        font-size: 16px;
        font-weight: 600;
        color: black;
        cursor: pointer;
        margin: 18px;
        height: 55px;
        text-align: center;
        border: none;
        background-size: 300% 100%;
        border-radius: 8px;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .addAndViewProduct:hover {
        background-position: 100% 0;
        moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .addAndViewProduct:focus {
        outline: none;
    }

    .addAndViewProduct.buttonEffects {
        background-image: linear-gradient(
            to right,
            #8596ff,
            #b752d0,
            #a3a1ff,
            #f24645
        );
        box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
    }

    .addAndViewProduct.modifiedEffect {
        background-image: linear-gradient(
            to right,
            #ff8c69,
            #d0d03b,
            #ffdc46,
            #fda4ff
        );
        box-shadow: 0 4px 15px 0 #e5b6a3;
    }
`;

const FeedBack = styled.figure``;

export { EditorFeedBackStyles, FeedBackMessage, FeedBackOption, FeedBack };
