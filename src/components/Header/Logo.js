import React from 'react';
import LogoImg from './../../img/logo.png';
import styled from 'styled-components';

const Container = styled.a`
    display: flex;
    flex:3;
    align-items: center;
    img {
        heigth: 60px;
    }
`;

const Logo = ({ link }) => {
    return (
        <Container href={link}>
            <img alt="logo" src={LogoImg}/>
        </Container>
    );
};

export default Logo;