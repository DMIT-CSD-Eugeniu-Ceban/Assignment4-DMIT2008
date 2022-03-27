import styled from "styled-components";

const ProductEditorStyles = styled.aside`
    width: fit-content;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const ProductImage = styled.div`
    display: block;
    margin: 1rem auto;
    width: 300px;
    img {
        width: 100%;
        height: auto;
    }
`;

const ProductName = styled.h2`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.5rem;
    letter-spacing: -0.5px;
    color: purple;
    word-wrap: break-word;
`;

const ProductPrice = styled.p`
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: -1px;
    color: #64748b;
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
`;

const ProductDescription = styled.p`
    font-size: 13px;
    color: #94a3b8;
`;

export {
    ProductEditorStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
};
