import React, { useState } from 'react';
import styled from '@emotion/styled';
import Logo from '../../images/logo.webp';
import { Link, useLocation } from 'react-router-dom';
import TwitterOrange from '../../images/twitter-icon-orange.png';
import InstagramOrange from '../../images/insta-icon-orange.png';
import YoutubeOrange from '../../images/youtube-icon-orange.png';

const Header = () => {
  // URL取得
  const location = useLocation();

  const getLocation = () => {
    if (location.pathname === '/') {
      return 'home';
    } else if (location.pathname === '/news') {
      return 'news';
    } else if (location.pathname === '/live') {
      return 'live';
    } else if (location.pathname === '/discography') {
      return 'discography';
    } else if (location.pathname === '/contact') {
      return 'contact';
    } else if (location.pathname === '/live/sp/ticketform') {
      return 'live - ticket';
    }
  };

  // Hamburger
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    if (hamburger === false) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  };

  // fixedSNSを隠すlocation指定
  const hiddenFixedSns = () => {
    return location.pathname === '/contact' || location.pathname === '/live';
  };
  return (
    <>
      <HeaderContainer>
        <HamburgerMenuContainer>
          <HamburgerButtonContainer onClick={handleClick}>
            <HamburgerButtonLine
              className={!hamburger ? 'line1' : 'line1 transform'}
            />
            <HamburgerButtonLine
              className={!hamburger ? 'line2' : 'line2 transform'}
            />
          </HamburgerButtonContainer>
          {!hamburger ? (
            <HamburgerButtonText>menu - {getLocation()}</HamburgerButtonText>
          ) : (
            <HamburgerButtonText>close</HamburgerButtonText>
          )}
        </HamburgerMenuContainer>
        <Link to="/">
          <LogoImage src={Logo} alt="レトロリロンのロゴ" />
        </Link>
        <MenuUl>
          <MenuLi>
            <MenuLink active={location.pathname === '/'} to="/">
              Home
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink active={location.pathname === '/news'} to="/news">
              News
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink active={location.pathname === '/live'} to="/live">
              Live
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink
              active={location.pathname === '/discography'}
              to="/discography"
            >
              Discography
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink active={location.pathname === '/contact'} to="/contact">
              Contact
            </MenuLink>
          </MenuLi>
        </MenuUl>
        <SnsContainer>
          <SnsLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/retroriron"
          >
            <SnsIcon
              loading="lazy"
              src={TwitterOrange}
              alt="レトロリロンのTwitterアイコン"
            />
          </SnsLink>
          <SnsLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/retroriron/?hl=ja"
          >
            <SnsIcon
              loading="lazy"
              src={InstagramOrange}
              alt="レトロリロンのInstagramアイコン"
            />
          </SnsLink>
          <SnsLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCkE8tVIvmdos9b1OqEhePlg"
          >
            <SnsIcon
              loading="lazy"
              src={YoutubeOrange}
              alt="レトロリロンのYouTubeアイコン"
            />
          </SnsLink>
        </SnsContainer>
      </HeaderContainer>
      {hamburger ? (
        <HamburgerMenuContentContainer className="hidden">
          <HamburgerMenuContentTextContainer>
            <HamburgerMenuContentText>
              <HamburgerMenuLink active={location.pathname === '/'} href="/">
                Home
              </HamburgerMenuLink>
            </HamburgerMenuContentText>
            <HamburgerMenuContentText>
              <HamburgerMenuLink
                active={location.pathname === '/news'}
                href="/news"
              >
                News
              </HamburgerMenuLink>
            </HamburgerMenuContentText>
            <HamburgerMenuContentText>
              <HamburgerMenuLink
                active={location.pathname === '/live'}
                href="/live"
              >
                Live
              </HamburgerMenuLink>
            </HamburgerMenuContentText>
            <HamburgerMenuContentText>
              <HamburgerMenuLink
                active={location.pathname === '/discography'}
                href="/discography"
              >
                Discography
              </HamburgerMenuLink>
            </HamburgerMenuContentText>
            <HamburgerMenuContentText>
              <HamburgerMenuLink
                active={location.pathname === '/contact'}
                href="/contact"
              >
                Contact
              </HamburgerMenuLink>
            </HamburgerMenuContentText>
          </HamburgerMenuContentTextContainer>
          <HamburgerMenuSnsContainer>
            <HamburgerMenuSnsTextContainer>
              <HamburgerMenuSnsText>our sns </HamburgerMenuSnsText>
              <HamburgerMenuSnsBorder></HamburgerMenuSnsBorder>
            </HamburgerMenuSnsTextContainer>
            <HamburgerMenuSnsIconContainer>
              <HamburgerMenuSnsIconLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/retroriron"
              >
                <HamburgerMenuSnsIcon loading="lazy" src={TwitterOrange} />
              </HamburgerMenuSnsIconLink>
              <HamburgerMenuSnsIconLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/retroriron/?hl=ja"
              >
                <HamburgerMenuSnsIcon loading="lazy" src={InstagramOrange} />
              </HamburgerMenuSnsIconLink>
              <HamburgerMenuSnsIconLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCkE8tVIvmdos9b1OqEhePlg"
              >
                <HamburgerMenuSnsIcon loading="lazy" src={YoutubeOrange} />
              </HamburgerMenuSnsIconLink>
            </HamburgerMenuSnsIconContainer>
          </HamburgerMenuSnsContainer>
          <HamburgerMenuCopyright>© 2021 retririon.</HamburgerMenuCopyright>
        </HamburgerMenuContentContainer>
      ) : (
        <HamburgerMenuContentContainer></HamburgerMenuContentContainer>
      )}
      <SnsFixedContainer location={hiddenFixedSns()}>
        <SnsFixedBorder></SnsFixedBorder>
        <SnsFixedText>our sns</SnsFixedText>
        <SnsFixedIconLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/retroriron"
        >
          <SnsFixedIconImage
            loading="lazy"
            src={TwitterOrange}
            alt="レトロリロンのTwitterアイコン"
          />
        </SnsFixedIconLink>
        <SnsFixedIconLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/retroriron/?hl=ja"
        >
          <SnsFixedIconImage
            loading="lazy"
            src={InstagramOrange}
            alt="レトロリロンのInstagramアイコン"
          />
        </SnsFixedIconLink>
        <SnsFixedIconLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UCkE8tVIvmdos9b1OqEhePlg"
        >
          <SnsFixedIconImage
            loading="lazy"
            src={YoutubeOrange}
            alt="レトロリロンのYouTubeアイコン"
          />
        </SnsFixedIconLink>
        <SnsFixedBorder></SnsFixedBorder>
      </SnsFixedContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 93px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 100;
  padding: 0 8%;
  @media screen and (min-width: 768px) {
    height: 100px;
  }
  @media screen and (min-width: 900px) {
    margin: 0;
    left: 0;
    display: block;
    width: 250px;
    height: 100vh;
  }
  @media screen and (min-width: 1150px) {
    width: 314px;
  }
`;

// HamburgerMenu

const HamburgerMenuContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

// HamburgerButtonContainer

const HamburgerButtonContainer = styled.div`
  position: relative;
  width: 32px;
  height: 18px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 27px;
  }
`;

const HamburgerButtonLine = styled.span`
  position: absolute;
  left: 0;
  width: 32px;
  height: 3px;
  background-color: #292929;
  transition: all 0.3s;
  &.line1 {
    top: 0;
    &.transform {
      transform: rotate(-25deg);
      margin-top: 7.5px;
    }
  }
  &.line2 {
    bottom: 0;
    &.transform {
      transform: rotate(25deg);
      margin-bottom: 7.5px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 4px;
    &.line1 {
      &.transform {
        transform: rotate(-25deg);
        margin-top: 11px;
      }
    }
    &.line2 {
      &.transform {
        transform: rotate(25deg);
        margin-bottom: 11px;
      }
    }
  }
`;

// HamburgerButtonText

const HamburgerButtonText = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  color: #292929;
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 12px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

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
  &.hidden {
    right: 0;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const HamburgerMenuContentTextContainer = styled.ul`
  margin: 40px 0 56px;
`;

const HamburgerMenuContentText = styled.li`
  margin-bottom: 16px;
  width: 100%;
  margin: 0 8% 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const HamburgerMenuLink = styled.a`
  text-decoration: none;
  font-family: 'Noto Sans JP', sans-serif;
  color: #292929;
  font-size: 2rem;
  font-weight: 700;
  ${(props) =>
    props.active &&
    `
        color: #F1A11B;
    `}
  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

// HamburgerMenuSnsContainer

const HamburgerMenuSnsContainer = styled.div`
  width: 100%;
  margin-left: 8%;
`;

// HamburgerMenuSnsTextContainer

const HamburgerMenuSnsTextContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 18px;
`;

const HamburgerMenuSnsText = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const HamburgerMenuSnsBorder = styled.div`
  width: 97px;
  height: 1px;
  background-color: #000;
  margin-top: 4px;
  margin-left: 16px;
`;

// HamburgerMenuSnsIconContainer

const HamburgerMenuSnsIconContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 85px;
`;

const HamburgerMenuSnsIcon = styled.img`
  width: 32px;
  height: 30px;
`;

const HamburgerMenuSnsIconLink = styled.a`
  text-decoration: none;
  margin-right: 24px;
  &:last-of-type {
    margin-right: 0;
  }
`;

// HamburgerMenuCopyright

const HamburgerMenuCopyright = styled.p`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  color: #292929;
  font-size: 1.2rem;
  font-weight: 700;
  width: 100%;
  margin-left: 8%;
`;

// ロゴ

const LogoImage = styled.img`
  cursor: pointer;
  width: 88px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 69px;
  }
  @media screen and (min-width: 900px) {
    margin: 64px auto 0;
    width: 150px;
    height: 69px;
    display: block;
  }
`;

// Menuリンク

const MenuUl = styled.ul`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    list-style: none;
    margin: 32px auto;
    width: 150px;
  }
`;

const MenuLi = styled.li`
  @media screen and (min-width: 900px) {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 2.4rem;
    margin-bottom: 16px;
    text-align: left;
    font-weight: 700;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MenuLink = styled(Link)`
  @media screen and (min-width: 900px) {
    text-decoration: none;
    color: #292929;
    &:hover {
      color: #f1a11b;
    }
    ${(props) =>
      props.active &&
      `
            color: #F1A11B;
        `}
  }
`;

// SNSリンク

const SnsContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    width: 150px;
    margin: 32px auto;
  }
`;

const SnsIcon = styled.img`
  @media screen and (min-width: 900px) {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 32px;
    box-shadow: 0px 0px 13px rgba(108, 65, 0, 0.2);
  }
`;

const SnsLink = styled.a``;

// SpFixedSNS

const SnsFixedContainer = styled.div`
  display: block;
  position: fixed;
  left: 8%;
  top: 50%;
  width: 32px;
  @media screen and (min-width: 900px) {
    display: none;
  }
  ${(props) => props.location && `display: none;`}
`;

const SnsFixedBorder = styled.div`
  height: 24px;
  width: 1px;
  background-color: #000000;
  margin: 0 auto 16px;
`;

const SnsFixedText = styled.p`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 auto 12px;
  padding-left: 2px;
`;

const SnsFixedIconLink = styled.a`
  text-decoration: none;
`;

const SnsFixedIconImage = styled.img`
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
`;
