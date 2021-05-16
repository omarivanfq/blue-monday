import React from 'react';
import styled from 'styled-components';
import {
    Facebook,
    Instagram,
    Twitter
} from '@material-ui/icons';

const Container = styled.div`
    display: flex;
    a {
        margin-right: 8px;        
    }
    svg {
        font-size: 14px;
    }
    @media only screen and (max-width: 850px) {
        justify-content: center;
    }
`;

const socials = [
    { icon: <Facebook/>, link: 'https://www.facebook.com' },
    { icon: <Instagram/>, link: 'https://www.instagram.com' },
    { icon: <Twitter/>, link: 'https://www.twitter.com' }
];

const Socials = () => {
    return (
        <Container>
            {
                socials.map(social => (
                    <a key={social.link} href={social.link}>{social.icon}</a>
                ))
            }
        </Container>
    );
};

export default Socials;