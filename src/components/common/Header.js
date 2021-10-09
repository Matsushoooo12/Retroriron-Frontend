import React from 'react'
import styled from '@emotion/styled';
import Logo from '../../images/logo.PNG'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import { Link } from 'react-router-dom';

// HeaderContainer

const HeaderContainer = styled.div`
    width: 100%;
    height: 64px;
    background-color: blue;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    @media screen and (min-width: 900px) {
        background-color: white;
        width: 314px;
        position: fixed;
        left: 0;
        top: 0;
        display: block;
        text-align: center
    } 
`

// ロゴ

const LogoImage = styled.img`
    cursor: pointer;
    width: 150px;
    height: 64px;
    @media screen and (min-width: 900px) {
        margin-top: 64px;
    } 
`

// Menuリンク

const MenuUl = styled.ul`
    display: none;
    @media screen and (min-width: 900px) {
        display: block;
        list-style: none;
        margin: 32px auto;
        width: 150px;
    } 
`

const MenuLi = styled.li`
    @media screen and (min-width: 900px){
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
    @media screen and (min-width: 900px){
        text-decoration: none;
        color: #292929;
        &:hover{
            color: #F1A11B;
        }
    }
`

// SNSリンク

const SnsContainer = styled.div`
    display: none;
    @media screen and (min-width: 900px){
        display: block;
        width: 150px;
        margin: 32px auto;
    }
`

const SnsIcon = styled.img`
    @media screen and (min-width: 900px){
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: 32px;
        filter: drop-shadow(5px 5px 5px #aaa);
    }
`

const SnsLink = styled(Link)`
    link-style: none;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/"><LogoImage src={Logo} /></Link>
            <MenuUl>
                <MenuLi><MenuLink to="/">Home</MenuLink></MenuLi>
                <MenuLi><MenuLink to="/news">News</MenuLink></MenuLi>
                <MenuLi><MenuLink to="/live">Live</MenuLink></MenuLi>
                <MenuLi><MenuLink to="/discography">Discography</MenuLink></MenuLi>
                <MenuLi><MenuLink to="/contact">Contact</MenuLink></MenuLi>
            </MenuUl>
            <SnsContainer>
                <SnsLink to="#"><SnsIcon src={Twitter} /></SnsLink>
                <SnsLink to="#"><SnsIcon src={Instagram} /></SnsLink>
                <SnsLink to="#"><SnsIcon src={Youtube} /></SnsLink>
            </SnsContainer>
        </HeaderContainer>
    )
}

export default Header
