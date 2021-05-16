import React from 'react';
import { useState } from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import Option from './Option';
import Burger from './Burger';
import Back from './Back';
import {
    Home,
    AmpStories,
    Work,
    Book,
    ShoppingCart,
    Bookmark
} from '@material-ui/icons';

const Container = styled.header`
    background-color: #f3f3f3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 90px;
    padding: 0 85px;
`;

const Options = styled.div`
    flex:3;
    height: 100%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 850px) {
        flex-direction: column;
        width: 200px;
        background: #f3f3f3;
        position: fixed;
        right: ${({ open }) => open? '0' : '-200px'};
        box-shadow: 0 0 10px #bbbbbb;
        transition: all .35s ease;
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            {open? <Back onClick={() => setOpen(false)}/> : null}
            <Logo link="#"/>
            <Options open={open}>
                <Option link="#" name="Home" icon={Home}/>
                <Option link="#" name="Pages" icon={AmpStories}/>
                <Option link="#" name="Portfolio" icon={Work}/>
                <Option link="#" name="Blog" icon={Book}/>
                <Option link="#" name="Shop" icon={ShoppingCart}/>
                <Option link="#" name="Elements" icon={Bookmark}/>
            </Options>
            <Burger onClick={() => setOpen(!open)}/>
        </Container>
    );
};

export default Header;