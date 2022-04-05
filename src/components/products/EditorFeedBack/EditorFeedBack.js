import React from "react";

import {
    EditorFeedBackStyles,
    FeedBackMessage,
    FeedBackOption,
    FeedBack,
} from "./styles";

import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function EditorFeedBack({ children, status, writeCompleted, ...props }) {
    const navigator = useNavigate()

    return (
        <EditorFeedBackStyles {...props}>
            {!status ? (
                <FeedBack>
                    <AiOutlineCheckCircle color="D0EAA2" size="13rem" />
                    <FeedBackMessage>
                        Product Uploaded Successfully
                    </FeedBackMessage>
                </FeedBack>
            ) : (
                <FeedBack>
                    <AiOutlineCloudUpload color="92A1FF" size="13rem" />
                    <FeedBackMessage>Uploading New Product</FeedBackMessage>
                </FeedBack>
            )}

            <FeedBackOption>
                <button
                    className="addAndViewProduct buttonEffects"
                    onClick={() => writeCompleted(false)}
                    disabled={status}
                >
                    Add Another Product
                </button>
                <button className="addAndViewProduct modifiedEffect" 
                onClick={() => navigator('/dashboard')}
                >
                    View All Products
                </button>
            </FeedBackOption>
        </EditorFeedBackStyles>
    );
}

export default EditorFeedBack;
