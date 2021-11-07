import React, { Component } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';


const StyledHeader = styled.div`
    width: 100%;
    height: 12vh;
    background-color: white;
    display: flex;  
    flex-direction: row;
    align-items: center;
    button {
        width: 10%;
        height: 50%;
        margin-left: 10vh;
    }
    .socials {
        margin: 10vh;
        > a {
            margin: 5px;
        }
    }
`

class Header extends Component {
    render() {
        return (
        <StyledHeader>
            <div className="socials">
                <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/james-sarlo-8b26b648/"/>
                <SocialIcon url="https://www.instagram.com/jamessarlo/"/>
            </div>
        </StyledHeader>
        )
    }
}

export default Header;