import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    a {
        color: #b1b1b1;
        letter-spacing: 1px;
        :hover {
            color: #989696;
        }
    }
`;

const Slash = styled.span`
    margin: 0 6px;
    color: #b1b1b1;
`;

const BreadCrumb = ({ crumbs }) => {
    return (
        <Container>
            {
                crumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.name}>
                        <a href={crumb.link}>{crumb.name}</a>
                        { index < crumbs.length - 1? <Slash>/</Slash> : null }
                    </React.Fragment>
                ))
            }
        </Container>
    );
};

export default BreadCrumb;