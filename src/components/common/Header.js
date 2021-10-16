import React, { useState } from 'react'
import styled from '@emotion/styled';
import Logo from '../../images/logo.PNG'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import { Link } from 'react-router-dom';
import TwitterOrange from '../../images/twitter-icon-orange.png'
import InstagramOrange from '../../images/insta-icon-orange.png'
import YoutubeOrange from '../../images/youtube-icon-orange.png'

const Header = () => {

    // Hamburger
    const [hamburger, setHamburger] = useState(false)

    const handleClick = () => {
        if(hamburger === false){
            setHamburger(true)
        } else{
            setHamburger(false)
        }
    }
    return (
        <>
            <HeaderContainer>
                <HamburgerMenuContainer>
                    <HamburgerButtonContainer onClick={handleClick}>
                        <HamburgerButtonLine className={!hamburger ? "line1":"line1 transform"} />
                        <HamburgerButtonLine className={!hamburger ? "line2":"line2 transform"} />
                    </HamburgerButtonContainer>
                    {!hamburger ? (
                        <HamburgerButtonText>menu - home</HamburgerButtonText>
                    ):(
                        <HamburgerButtonText>close</HamburgerButtonText>
                    )}
                </HamburgerMenuContainer>
                <Link to="/"><LogoImage src={Logo} /></Link>
                <MenuUl>
                    <MenuLi><MenuLink to="/">Home</MenuLink></MenuLi>
                    <MenuLi><MenuLink to="/news">News</MenuLink></MenuLi>
                    <MenuLi><MenuLink to="/live">Live</MenuLink></MenuLi>
                    <MenuLi><MenuLink to="/discography">Discography</MenuLink></MenuLi>
                    <MenuLi><MenuLink to="/contact">Contact</MenuLink></MenuLi>
                </MenuUl>
                <SnsContainer>
                    <SnsLink href="#"><SnsIcon src={Twitter} /></SnsLink>
                    <SnsLink href="#"><SnsIcon src={Instagram} /></SnsLink>
                    <SnsLink href="#"><SnsIcon src={Youtube} /></SnsLink>
                </SnsContainer>
            </HeaderContainer>
            {hamburger ? (
                <HamburgerMenuContentContainer className="hidden">
                    <HamburgerMenuContentTextContainer>
                        <HamburgerMenuContentText><HamburgerMenuLink href="/">Home</HamburgerMenuLink></HamburgerMenuContentText>
                        <HamburgerMenuContentText><HamburgerMenuLink href="/news">News</HamburgerMenuLink></HamburgerMenuContentText>
                        <HamburgerMenuContentText><HamburgerMenuLink href="/live">Live</HamburgerMenuLink></HamburgerMenuContentText>
                        <HamburgerMenuContentText><HamburgerMenuLink href="/discography">Discography</HamburgerMenuLink></HamburgerMenuContentText>
                        <HamburgerMenuContentText><HamburgerMenuLink href="/contact">Contact</HamburgerMenuLink></HamburgerMenuContentText>
                    </HamburgerMenuContentTextContainer>
                    <HamburgerMenuSnsContainer>
                        <HamburgerMenuSnsTextContainer>
                            <HamburgerMenuSnsText>our sns </HamburgerMenuSnsText>
                            <HamburgerMenuSnsBorder></HamburgerMenuSnsBorder>
                        </HamburgerMenuSnsTextContainer>
                        <HamburgerMenuSnsIconContainer>
                            <HamburgerMenuSnsIconLink><HamburgerMenuSnsIcon src={TwitterOrange} /></HamburgerMenuSnsIconLink>
                            <HamburgerMenuSnsIconLink><HamburgerMenuSnsIcon src={InstagramOrange} /></HamburgerMenuSnsIconLink>
                            <HamburgerMenuSnsIconLink><HamburgerMenuSnsIcon src={YoutubeOrange} /></HamburgerMenuSnsIconLink>
                        </HamburgerMenuSnsIconContainer>
                    </HamburgerMenuSnsContainer>
                    <HamburgerMenuCopyright>© 2021 retririon.</HamburgerMenuCopyright>
                </HamburgerMenuContentContainer>
            ):(
                <HamburgerMenuContentContainer></HamburgerMenuContentContainer>
            )}
            <SnsFixedContainer>
                    <SnsFixedBorder></SnsFixedBorder>
                    <SnsFixedText>our sns</SnsFixedText>
                    <SnsFixedIconLink href="#"><SnsFixedIconImage src={TwitterOrange} /></SnsFixedIconLink>
                    <SnsFixedIconLink href="#"><SnsFixedIconImage src={InstagramOrange} /></SnsFixedIconLink>
                    <SnsFixedIconLink href="#"><SnsFixedIconImage src={YoutubeOrange} /></SnsFixedIconLink>
                    <SnsFixedBorder></SnsFixedBorder>
            </SnsFixedContainer>
        </>
    )
}

export default Header

// HeaderContainer

const HeaderContainer = styled.div`
    width: 100%;
    height: 93px;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: end;
    z-index: 100;
    @media screen and (min-width: 768px){
        height: 100px;
    }
    @media screen and (min-width: 900px) {
        background-color: white;
        width: 250px;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: block;
        text-align: center
    } 
    @media screen and (min-width: 1150px){
        width: 314px;
    }
`

// HamburgerMenu

const HamburgerMenuContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
    @media screen and (min-width: 900px){
        display: none;
    }
`

// HamburgerButtonContainer

const HamburgerButtonContainer = styled.div`
    position: relative;
    width: 32px;
    height: 18px;
    margin-left: 24px;
    @media screen and (min-width: 768px){
        width: 48px;
        height: 27px;
        margin-left: 56px;
    }
`

const HamburgerButtonLine = styled.span`
    position: absolute;
    left: 0;
    width: 32px;
    height: 3px;
    background-color: #292929;
    transition: all 0.3s;
    &.line1{
        top: 0;
        &.transform{
            transform: rotate(-25deg);
            margin-top: 7.5px;
        }
    }
    &.line2{
        bottom: 0;
        &.transform{
            transform: rotate(25deg);
            margin-bottom: 7.5px;
        }
    }
    @media screen and (min-width: 768px){
        width: 48px;
        height: 4px;
        &.line1{
            &.transform{
                transform: rotate(-25deg);
                margin-top: 11px;
            }
        }
        &.line2{
            &.transform{
                transform: rotate(25deg);
                margin-bottom: 11px;
            }
        }
    }
`

// HamburgerButtonText

const HamburgerButtonText = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 12px;
    margin-bottom: 4px;
    @media screen and (min-width: 768px){
        font-size: 1.6rem;
    }
`

// HamburgerMenuContentContainer

const HamburgerMenuContentContainer = styled.div`
    position: fixed;
    top: 93px;
    right: 100%;
    width: 100%;
    z-index: 100;
    height: 100vh;
    background-color: #fff;
    transition: all 0.3s;
    &.hidden{
        right: 0;
    }
`

const HamburgerMenuContentTextContainer = styled.ul`
    margin: 40px 0 56px;
`

const HamburgerMenuContentText = styled.li`
    margin-bottom: 16px;
    margin-left: 24px;
    @media screen and (min-width: 768px){
        margin-left: 56px;
    }
`

const HamburgerMenuLink = styled.a`
    text-decoration: none;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    font-size: 2.0rem;
    font-weight: 700;
`

// HamburgerMenuSnsContainer

const HamburgerMenuSnsContainer = styled.div`
    width: 150px;
    margin: 0 24px 85px;
    @media screen and (min-width: 768px){
        margin: 0 56px 85px;
    }
`

// HamburgerMenuSnsTextContainer

const HamburgerMenuSnsTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
`

const HamburgerMenuSnsText = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    font-size: 1.0rem;
    font-weight: 700;
`

const HamburgerMenuSnsBorder = styled.div`
    width: 97px;
    height: 1px;
    background-color: #000;
    margin-top: 4px;
`

// HamburgerMenuSnsIconContainer

const HamburgerMenuSnsIconContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const HamburgerMenuSnsIcon = styled.img`
    width: 32px;
    height: 30px;
`

const HamburgerMenuSnsIconLink = styled(Link)`
    text-decoration: none;
`

// HamburgerMenuCopyright

const HamburgerMenuCopyright = styled.p`
    display: block;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 24px;
    @media screen and (min-width: 768px){
        margin-left: 56px;
    }
`

// ロゴ

const LogoImage = styled.img`
    cursor: pointer;
    width: 88px;
    height: 37px;
    margin-right: 24px;
    @media screen and (min-width: 768px){
        width: 150px;
        height: 64px;
        margin-right: 56px;
    }
    @media screen and (min-width: 900px) {
        margin: 64px 0 0;
        width: 150px;
        height: 64px;
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
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }
`

const SnsLink = styled.a`
`

// SP SNS固定

const SnsFixedContainer = styled.div`
    display: flex;
    position: fixed;
    height: 32px;
    width: 263px;
    left: -90px;
    top: 480px;
    transform: rotate(90deg);
    align-items: center;
    @media screen and (min-width: 900px){
        display: none;
    }
`

const SnsFixedBorder = styled.div`
    height: 1px;
    width: 24px;
    background-color: #000000;
`

const SnsFixedText = styled.p`
    color: #292929;
    font-size: 1.0rem;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    margin-left: 16px;
    margin-right: 16px;
`

const SnsFixedIconLink = styled.a`
    text-decoration: none;
    margin-right: 16px;
`

const SnsFixedIconImage = styled.img`
    width: 32px;
    height: 30px;
    transform: rotate(-90deg);
`