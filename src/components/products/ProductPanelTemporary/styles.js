import styled from "styled-components";

const ProductPanelTemporaryStyles = styled.div`
    /* styles */
    width: 350px;
    padding: 20px;
    border-radius: 5px;
    background: linear-gradient(135deg, #fff983 0%, #7d7ccb 50%, #ffc8c8 100%);
    box-shadow: 3px 3px 7px 0px #7a7a7a;
    max-height: 23rem;
    margin-top: 30px;
    margin: 20px;

    h2 {
        font-size: 1.75rem;
        color: #374151;
        padding: 0.7rem 0;
        margin: 0 auto;
        font-weight: 600;
        color: #d7faff;
    }

    p {
        font-size: 1rem;
    }
    .titleCard {
        display: flex;
    }
`;

const Card = styled.div`
    width: 310px;
    
`

export { ProductPanelTemporaryStyles, Card};
