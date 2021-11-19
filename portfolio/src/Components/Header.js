import React, { Component } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';

import { MdOutlineDarkMode } from 'react-icons/md';
import { useDarkMode } from './UseDarkMode';

const StyledHeader = styled.div`
    width: 100%;
    height: 12vh;
    background-color: white;
    display: flex;  
    flex-direction: row;
    align-items: center;
    // button {
    //     width: 10%;
    //     height: 50%;
    //     margin-left: 10vh;
    // }
    .socials {
        margin: 10vh;
        > a {
            margin: 5px;
        }
    }
    .dark-mode {
        justify-content: flex-end;
        margin-left: auto;
        margin-right: 10vh;
    }
    @media only screen and (max-width: 1000px) {
        .socials {
            margin: 5vh;
        }
    }
`


const Header = ({themeToggler}) => {

    // const [theme, themeToggler] = useDarkMode();

    return (
        <StyledHeader>
            <div className="socials">
                <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/james-sarlo-8b26b648/" />
                <SocialIcon url="https://www.instagram.com/jamessarlo/" />
                <SocialIcon url="https://codepen.io/jsarlo" />
            </div>
            <div className="dark-mode">
                <IconButton size="md" icon={<Icon as={MdOutlineDarkMode} />} onClick={themeToggler} />
            </div>
        </StyledHeader>
    )

}

export default Header;