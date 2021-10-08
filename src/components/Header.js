import React from 'react'
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import Logo from '../images/logo.PNG'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'
import Youtube from '../images/youtube.png'
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

const StyledLink = styled(Link)`
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
    &:last-child{
        border: 1px solid #292929;
    }
`



const Header = () => {
    return (
        <Container>
            <Link to="#"><LogoImage src={Logo} /></Link>
            <MenuUl>
                <MenuLi><StyledLink to="#">Home</StyledLink></MenuLi>
                <MenuLi><StyledLink to="#">News</StyledLink></MenuLi>
                <MenuLi><StyledLink to="#">Live</StyledLink></MenuLi>
                <MenuLi><StyledLink to="#">Discography</StyledLink></MenuLi>
                <MenuLi><StyledLink to="#">Contact</StyledLink></MenuLi>
            </MenuUl>
            <SnsContainer>
                <SnsIcon src={Twitter} />
                <SnsIcon src={Instagram} />
                <SnsIcon src={Youtube} />
            </SnsContainer>
        </Container>
    )
}

export default Header
