import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import MvIcon from '../images/vector-mv.png'
import SubscriptionIcon from '../images/vector-musuic.png'
import { getDiscography } from '../api';

const Discography = () => {

    // API

    const [discographies, setDiscographies] = useState([])

    const handleGetDiscography = async () => {
        try{
            const res = await getDiscography();
            setDiscographies(res.data)
            console.log(res.data)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        handleGetDiscography();
    }, [])

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                <title>Discography page</title>
                <meta name="the Discography page of a pop band called Retroriron." content="discography page" />
            </Helmet>
            <DiscographyContainer>
                <DiscographyItemContainer>
                    {discographies.map((item, i) => (
                        <DiscographyInfoContainer key={i}>
                            <DiscographyDate>{moment(item.date).format("YYYY.MM.DD.")} Release</DiscographyDate>
                            <DiscographyTitleContainer className="sp">
                                <DiscographyTitle className={item.title.length > 18 ? "long" : ""}>{item.title}</DiscographyTitle>
                            </DiscographyTitleContainer>
                            {/* Sp */}
                            <DiscographySpFlex>
                                <DiscographyImageContainer className="sp">
                                    <DiscographyImage src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                                    <DiscographyImageTag>{item.tag}</DiscographyImageTag>
                                </DiscographyImageContainer>
                                <DiscographyLinkContainer className="sp">
                                    <DiscographyLinkItemContainer className={item.mvLink ? "" : "hidden"} target="_blank" href={item.mvLink}>
                                        <DiscographyLinkIcon src={MvIcon} />
                                        <DiscographyLinkText>MVを見る</DiscographyLinkText>
                                    </DiscographyLinkItemContainer>
                                    <DiscographyLinkItemContainer className={item.subscriptionLink ? "" : "hidden"} target="_blank" href={item.subscriptionLink}>
                                        <DiscographyLinkIcon src={SubscriptionIcon} />
                                        <DiscographyLinkText>音楽を聴く</DiscographyLinkText>
                                    </DiscographyLinkItemContainer>
                                </DiscographyLinkContainer>
                            </DiscographySpFlex>
                            {/* Sp */}
                            <DiscographyImageContainer>
                                <DiscographyImage src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                                <DiscographyImageTag>{item.tag}</DiscographyImageTag>
                            </DiscographyImageContainer>
                            <DiscographyTitleContainer>
                                <DiscographyTitle className={item.title.length > 18 ? "long" : ""}>{item.title}</DiscographyTitle>
                            </DiscographyTitleContainer>
                            <DiscographyLinkContainer>
                                <DiscographyLinkItemContainer className={item.mvLink ? "" : "hidden"} target="_blank" href={item.mvLink}>
                                    <DiscographyLinkIcon src={MvIcon} />
                                    <DiscographyLinkText>MVを見る</DiscographyLinkText>
                                </DiscographyLinkItemContainer>
                                <DiscographyLinkItemContainer className={item.subscriptionLink ? "" : "hidden"} target="_blank" href={item.subscriptionLink}>
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
    z-index: 1;
    margin-top: 100px;
    @media screen and (min-width: 768px){
        margin-top: 110px;
    }
    @media screen and (min-width: 900px){
        margin-top: 80px;
    }
`

// DiscographyItemContainer

const DiscographyItemContainer = styled.div`
    width: 80%;
    margin-left: 60px;
    @media screen and (min-width: 768px){
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 0;
    }
    @media screen and (min-width: 1024px){
        width: 74vw;
    }
    @media screen and (min-width: 1150px){
        width: 72vw;
    }
    @media screen and (min-width: 1515px){
        width: 65vw;
    }
`

// DiscographyInfoContainer

const DiscographyInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 32px;
    @media screen and (min-width: 768px){
        width: 200px;
        margin-right: 23px;
        margin-left: 23px;
        margin-bottom: 48px;
    }
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
    display: none;
    &.sp{
        display: block;
        width: 120px;
        height: 120px;
        position: relative;
    }
    @media screen and (min-width: 768px){
        display: block;
        position: relative;
        width: 200px;
        height: 200px;
        &.sp{
            display: none;
        }
    }
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
    display: none;
    &.sp{
        display: block;
        width: 100%;
        margin: 0 auto;
        height: 48px;
    }
    @media screen and (min-width: 768px){
        height: 48px;
        width: 100%;
        margin-bottom: 8px;
        display: block;
        &.sp{
            display: none;
        }
    }
`

const DiscographyTitle = styled.h1`
    font-size: 2.0rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    overflow-wrap:  break-word;
    word-break: break-all;
    height: 100%;
    line-height: 48px;
    padding-top: 7px;
    &.long{
        font-size: 1.6rem;
        padding-top: 0;
        line-height: 2.0rem;
        padding-top: 7px;
    }
    @media screen and (min-width: 768px){
        line-height: 4.0rem;
    }
`

// DiscographyLinkContainer

const DiscographyLinkContainer = styled.div`
    width: 60%;
    display: none;
    &.sp{
        display: block;
    }
    @media screen and (min-width: 768px){
        display: block;
        width: 100%;
        &.sp{
            display: none;
        }
    }
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
    width: 153px;
    height: 40px;
    cursor: pointer;
    margin-left: 8px;
    &.hidden{
        opacity: 0.6;
        cursor: default;
    }
    &:last-of-type{
        margin-top: 10px;
    }
    @media screen and (min-width: 768px){
        margin-bottom: 16px;
        margin-left: 0;
        width: 100%;
    }
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

// DiscographyTabFlex

const DiscographySpFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media screen and (min-width: 768px){
        display: none;
    }
`