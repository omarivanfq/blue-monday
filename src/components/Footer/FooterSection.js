import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    padding: 20px;
    h4 {
        font-size: 21px;
    }
    @media only screen and (max-width: 850px) {
        width: 50%;
        flex: none;
        text-align: center;
    }
    @media only screen and (max-width: 615px) {
        width: 100%;
    }
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    > * {
        margin-bottom: 10px;
    }
`;

const FooterSection = ({ title, items }) => {
    return (
        <Container>
            <h4>{title}</h4>
            <Items>
                {items}
            </Items>
        </Container>
    );
};

export default FooterSection;