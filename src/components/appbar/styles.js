import styled from 'styled-components';

const AppBarLogoStyle = styled.nav`
    box-shadow: 0px 2px 5px 0px #000000;
    padding-right: 1.2rem;
    background-color: ${(props) => props.bgcolor || "tomato"};
    color: ${(props) => props.color || "pink"};
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
`;


const AppBarLogo = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid #78909C;
    /* &::hover{background-color:} */
`;


const AppBarButton = styled.button`
    cursor: pointer;
    font-weight: 650;
    color: #616161;
    border: unset;

    
`;


const AppBarIcons = styled.div`
    display: flex;
`;

    
const AppBarIcon = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 14rem;

    // style for button
    .button {
        position: relative;
        border-radius: 3px;
        color: black;
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




export { AppBarLogoStyle, AppBarLogo, AppBarButton, AppBarIcons, AppBarIcon }