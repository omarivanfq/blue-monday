import React from 'react';
import styled from 'styled-components';
import FooterSection from './FooterSection';
import Socials from './Socials';

const Container = styled.div`
    display: flex;
    height: 310px;
    padding: 0 90px;
    @media only screen and (max-width: 850px) {
        flex-wrap: wrap;
    }
    @media only screen and (max-width: 615px) {
        > *:first-child {
            order: 4;
        }
    }
`;

const CopyRight = styled.p`
    color: #8c8c8c;
    font-size: 14px;
`;

const ContactInfo = styled.a`
    color: #8c8c8c;
    font-size: 14px;
`;

const Footer = () => {
    return (
        <Container>
            <FooterSection
                title="Sada."
                items={[
                    <CopyRight>@ 2018 Energetic Themes</CopyRight>
                ]}
            />
            <FooterSection
                title="About us"
                items={[
                    <a href="#">Anaunt mattins</a>,
                    <a href="#">Vestibulum ante</a>,
                    <a href="#">Sapien etiam</a>,
                    <a href="#">Morbi eget leo</a>,
                ]}
                />
            <FooterSection
                title="Product"
                items={[
                    <a href="#">Vestibulum diam</a>,
                    <a href="#">Phasellus sapien eros</a>,
                    <a href="#">Finibus bibendum nulla</a>,
                    <a href="#">Duis tristique, turpis</a>,
                ]}
                />
            <FooterSection
                title="Contact us"
                items={[
                    <ContactInfo href="#">Hello@sadaweb.com</ContactInfo>,
                    <ContactInfo href="#">+ 0845-3354-202</ContactInfo>,
                    <Socials/>
                ]}
                />
        </Container>
    );
};

export default Footer;