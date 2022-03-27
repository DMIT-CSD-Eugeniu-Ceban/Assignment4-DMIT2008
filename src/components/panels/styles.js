import styled from 'styled-components';

const PanelColor = styled.section`
    background-color: ${(props) => props.bgcolor || "#EFEBE9"};
    /* width: calc(100% - 193.59px); */
    padding: 2rem 2rem;
    min-height: 450px;
    flex:1;
`;
const PanelNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
`


const PanelRootFolder = styled.span`
    display:flex;
    align-items:center;
`

export { PanelColor, PanelNavbar, PanelRootFolder}