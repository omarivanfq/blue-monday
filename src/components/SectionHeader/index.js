import React from 'react';
import styled from 'styled-components';
import BreadCrumb from './BreadCrumb';

const Container = styled.div`
    height: 83px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 95px;
`;

const Title = styled.h2`
    font-size: 24px;
`;

const crumbs = [
    { name: 'Home', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Left Sidebar', link: '#' }
];

const SectionHeader = ({ name }) => {
    return (
        <Container>
            <Title>{ name }</Title>
            <BreadCrumb crumbs={crumbs}/>
        </Container>
    );
};

export default SectionHeader;