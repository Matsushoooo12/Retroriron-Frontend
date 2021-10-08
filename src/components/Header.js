import React from 'react'
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import Logo from '../images/logo.PNG'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'
import Youtube from '../images/youtube2.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    @media screen and (min-width: 1024px) {
        width: 314px;
        position: fixed;
        left: 0;
        top: 0;
        display: block;
        text-align: center
    } 
`

const LogoImage = styled.img`
    cursor: pointer;
    @media screen and (min-width: 1024px) {
        width: 150px;
        height: 64px;
        margin-top: 64px;
    } 
`

const MenuUl = styled.ul`
    @media screen and (min-width: 1024px) {
        list-style: none;
        margin: 32px auto;
        width: 150px;
    } 
`

const MenuLi = styled.li`
    @media screen and (min-width: 1024px){
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 2.4rem;
        margin-bottom: 16px;
        text-align: left;
        font-weight: 700;
        &:last-child{
            margin-bottom: 0;
        }
    }
`

const MenuLink = styled(Link)`
    @media screen and (min-width: 1024px){
        text-decoration: none;
        color: #292929;
        &:hover{
            color: #F1A11B;
        }
    }
`

const SnsContainer = styled.div`
    width: 150px;
    margin: 32px auto;
`

const SnsIcon = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 32px;
    filter: drop-shadow(5px 5px 5px #aaa);
`

const SnsLink = styled(Link)`
    link-style: none;
`



const Header = () => {
    return (
        <Container>
            <Link to="#"><LogoImage src={Logo} /></Link>
            <MenuUl>
                <MenuLi><MenuLink to="#">Home</MenuLink></MenuLi>
                <MenuLi><MenuLink to="#">News</MenuLink></MenuLi>
                <MenuLi><MenuLink to="#">Live</MenuLink></MenuLi>
                <MenuLi><MenuLink to="#">Discography</MenuLink></MenuLi>
                <MenuLi><MenuLink to="#">Contact</MenuLink></MenuLi>
            </MenuUl>
            <SnsContainer>
                <SnsLink to="#"><SnsIcon src={Twitter} /></SnsLink>
                <SnsLink to="#"><SnsIcon src={Instagram} /></SnsLink>
                <SnsLink to="#"><SnsIcon src={Youtube} /></SnsLink>
            </SnsContainer>
        </Container>
    )
}

export default Header
