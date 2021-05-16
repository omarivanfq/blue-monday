import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Sidebar from './Sidebar';
import PostImage from './../../img/post-image-1.png';

const Container = styled.div`
    padding: 50px 85px;
    display: flex;
    background-color: #ededed;
    box-shadow: inset 0 0 9px 0px #dfdfdf;
`;

const Posts = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px; 
`;

const cards = [
    { 
        title: 'Aenean mattis tortor ac sapien congue molestia',
        image: PostImage,
        description: 'Integer sed orci in orci hendrerit scelerisque in quis nunc. Mauris ac iaculis odio, at eleifend erat.'
    },
    { 
        title: 'Aenean mattis tortor ac sapien congue molestia',
        image: PostImage,
        description: 'Integer sed orci in orci hendrerit scelerisque in quis nunc. Mauris ac iaculis odio, at eleifend erat. Cras non diam eros. Mauris sit amet hendrerit ligula.'
    },
    { 
        title: 'Aenean mattis tortor ac sapien congue molestia',
        image: PostImage,
        description: 'Integer sed orci in orci hendrerit scelerisque in quis nunc. Mauris ac iaculis odio, at eleifend erat. Cras non diam eros. Mauris sit amet hendrerit ligula.'
    }
];

const Body = () => {
    return (
        <Container>
            <Sidebar/>
            <Posts>
                { getPosts() }
            </Posts>
        </Container>
    );
};

function getPosts() {
    return cards.map(card => (
        <Card
            key={card.title}
            title={card.title}
            image={card.image}
            description={card.description}
            />
    ))
}

export default Body;