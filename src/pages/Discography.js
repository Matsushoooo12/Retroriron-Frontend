import React from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Life from '../images/life.JPG';
import MvIcon from '../images/vector-mv.png'
import SubscriptionIcon from '../images/vector-musuic.png'

const Discography = () => {

    const data = [
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Life", date: "2021-07-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "https://linkco.re/5g7epSR5", tag: "album"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
        {title: "Mo-so", date: "2021-09-21", image: `${Life}`, MvLink: "#", SubscriptionLink: "#", tag: "Single"},
    ]
    return (
        <>
            <Helmet>
                <title>Discography page</title>
                <meta name="the Discography page of a pop band called Retroriron." content="discography page" />
            </Helmet>
            <DiscographyContainer>
                <DiscographyItemContainer>
                    {data.map((item, i) => (
                        <DiscographyInfoContainer key={i}>
                            <DiscographyDate>{moment(item.date).format("YYYY.MM.DD.")} Release</DiscographyDate>
                            <DiscographyImageContainer>
                                <DiscographyImage src={item.image} />
                                <DiscographyImageTag>{item.tag}</DiscographyImageTag>
                            </DiscographyImageContainer>
                            <DiscographyTitleContainer>
                                <DiscographyTitle>{item.title}</DiscographyTitle>
                            </DiscographyTitleContainer>
                            <DiscographyLinkContainer>
                                <DiscographyLinkItemContainer target="_blank" href={item.MvLink}>
                                    <DiscographyLinkIcon src={MvIcon} />
                                    <DiscographyLinkText>MVを見る</DiscographyLinkText>
                                </DiscographyLinkItemContainer>
                                <DiscographyLinkItemContainer target="_blank" href={item.SubscriptionLink}>
                                    <DiscographyLinkIcon src={SubscriptionIcon} />
                                    <DiscographyLinkText>音楽を聴く</DiscographyLinkText>
                                </DiscographyLinkItemContainer>
                            </DiscographyLinkContainer>
                        </DiscographyInfoContainer>
                    ))}
                </DiscographyItemContainer>
            </DiscographyContainer>
        </>
    )
}

export default Discography

// DiscographyContainer

const DiscographyContainer = styled.div`
    margin-top: 32px;
`

// DiscographyItemContainer

const DiscographyItemContainer = styled.div`
    width: 65vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (min-width: 1350px){
        width: 72vw;
    }
    @media screen and (min-width: 1515px){
        width: 65vw;
    }
`

// DiscographyInfoContainer

const DiscographyInfoContainer = styled.div`
    width: 200px;
    height: 100%;
    margin-right: 23px;
    margin-left: 23px;
    margin-bottom: 48px;
`

const DiscographyDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 4px;
`

// DiscographyImageContainer

const DiscographyImageContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    margin-bottom: 8px;
`

const DiscographyImage = styled.img`
    width: 100%;
    height: 100%;
`

const DiscographyImageTag = styled.p`
    font-size: 1.2rem;
    font-weight: 900;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 2px 8px;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: absolute;
    left: 4px;
    bottom: 4px;
`

// DiscographyTitleContainer

const DiscographyTitleContainer = styled.div`
    height: 48px;
    width: 100%;
    margin-bottom: 8px;
`

const DiscographyTitle = styled.h1`
    font-size: 2.0rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding-top: 7px;
    &.long{
        font-size: 1.6rem;
        padding-top: 0;
    }
`

// DiscographyLinkContainer

const DiscographyLinkContainer = styled.div`
    width: 100%;
`

const DiscographyLinkItemContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    cursor: pointer;
`

const DiscographyLinkIcon = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
`

const DiscographyLinkText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-left: 8px;
`