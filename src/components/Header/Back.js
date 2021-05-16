import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: rgba(0,0,0,.15);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 500vh;
    @media only screen and (min-width: 850px) {
        display:none;
    }
`;

const Back = ({ ...props }) => {
    return (
        <Container {...props}/>
    );
};

export default Back;