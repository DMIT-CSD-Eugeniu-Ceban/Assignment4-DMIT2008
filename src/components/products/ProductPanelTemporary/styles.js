import styled from "styled-components";

const ProductPanelTemporaryStyles = styled.div`
    /* styles */
    width: 350px;
    padding: 20px;
    border-radius: 5px;
    background: linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%);
    box-shadow: 3px 3px 7px 0px #7a7a7a;
    margin-top: 30px;
    margin: 20px;
    /* min-height: 15rem; */
    max-height: 32rem;
    

    h2 {
        font-size: 1.75rem;
        /* color: #374151; */
        padding: 0.7rem 0;
        margin: 0 auto;
        font-weight: 650;
        color: #3f3f46;
        line-height: 2.5rem;
    }

    p {
        font-size: 1rem;
        padding-top: 1rem;
    }
    .titleCard {
        padding-top: 1rem;
    }
    
`;

const Card = styled.div`
    width: 310px;
`;

export { ProductPanelTemporaryStyles, Card};
