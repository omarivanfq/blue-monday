import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #ffffff;
    border-radius: 5px;
    width: calc(50% - 12px);
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0px 0px 20px -8px rgba(0,0,0,0.35);
    height: 372px;
    position: relative;
    overflow: hidden;
    :hover {
        transform: scale(1.02);
        transition: all 0.5s ease;
    }
    ::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: 35px;
        width: 100%;
        border-radius: 0 0 5px 5px;
        background: linear-gradient(0deg, rgba(255,255,255,1) 47%,rgba(255,255,255,0.4322771344866071) 80%,rgba(255,255,255,0) 100%);
    }
    @media only screen and (max-width: 850px) {
        width: 100%;
    }
`;

const Image = styled.div`
    background-image: url(${props => props.url});
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 5px 5px 0 0;
    transition: all 0.3s ease;
    :hover {
        height: 230px;
    }
`;

const Content = styled.div`
    padding: 18px;
`;

const Details = styled.span`
    color: #8c8c8c;
    font-size: 11px;
    font-weight: 500;
`;

const Title = styled.h4`
    margin: 0;
`;

const Description = styled.p`
    color: #8c8c8c;
    font-size: 14px;
`;

const Card = props => {
    const { title, image, description } = props;
    return (
        <Container>
            <Image url={image}/>
            <Content>
                <Details>FOOD, TRAVEL - NOV 17, 2020</Details>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </Container>
    );
}

export default Card;