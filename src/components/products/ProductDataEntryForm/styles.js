import styled from "styled-components";

const ProductDataEntryFormStyles = styled.form`
    width: 400px;
    input:focus,
    textarea:focus {
        border-color: cornflowerblue;
        background-color: lightcyan;
        outline-color: cornflowerblue;
    }

    fieldset {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .addProduct {
        width: 160px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        margin: 20px;
        height: 45px;
        text-align: center;
        border: none;
        background-size: 300% 100%;
        border-radius: 8px;
        moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .addProduct:hover {
        background-position: 100% 0;
        moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .addProduct:focus {
        outline: none;
    }

    .addProduct.buttonEffect {
        background-image: linear-gradient(
            to right,
            #29323c,
            #485563,
            #2b5876,
            #4e4376
        );
        box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
`;


const ProductImage = styled.div``;

const ProductName = styled.div`
    flex:3.5;
`;

const ProductPrice = styled.div`
    flex:1.5;
`;

const ProductDescription = styled.div`
    textarea{
        resize: none;
        font-size: 14px;
    }
`;



export {
    ProductDataEntryFormStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
};
