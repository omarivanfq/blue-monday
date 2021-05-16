import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    :hover {
        background-color: #e5e8ea;
        transition: all .3s ease;
    }
    svg {
        margin-left: 13px;
        font-size: 25px;
        margin-top: 3px;
    }
    border-bottom: 1px solid #e1e1e1;
    @media only screen and (min-width: 850px) {
        svg {
            display: none;
        }
        border-bottom: none;
    }
`;

const Option = ({ link, name, icon: Icon }) => {
    return (
        <Container href={link}>
            { name }
            { Icon && <Icon/> }
        </Container>
    );
};

export default Option;