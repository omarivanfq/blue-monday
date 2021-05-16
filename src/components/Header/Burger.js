import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    display: flex;
    width: 50px;
    height: 45px;
    flex-direction: column;
    padding: 7px;
    cursor: pointer;
    align-self: center;
    span {
        background: #3a3c6b;
        flex: 1;
        :not(:last-child) {
            margin-bottom: 5px;
        }
    }
    :hover {
        background-color: #e5e8ea;
        transition: all .3s ease;
    }
    @media only screen and (min-width: 850px) {
        display: none;
    }
`;

const Burger = ({ ...props }) => {
    return (
        <Container {...props}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Container>
    );
};

export default Burger;