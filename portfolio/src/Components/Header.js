import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';

import { MdOutlineDarkMode } from 'react-icons/md';

const StyledHeader = styled.div`
    width: 100%;
    height: 12vh;
    background-color: white;
    display: flex;  
    flex-direction: row;
    align-items: center;
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