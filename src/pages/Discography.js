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

    // dateフォーマット
    const dateFormat = (date) => {
        return moment(date).format("YYYY.MM.DD")
    }

    // 全角２文字・半角１文字
    const count = (str) => {
    
        let len = 0;
        
        for (let i = 0; i < str.length; i++) {
            (str[i].match(/[ -~]/)) ? len += 1 : len += 2;
        }
        
        return len;
    }

    return (
        <>
            <Helmet>
                <title>レトロリロン - Discography page</title>
                <meta name="the Discography page of a pop band called Retroriron." content="discography page" />
            </Helmet>
            {/* PC */}
            <PcDiscographyContainer>
                {discographies.map((item) => (
                    <PcDiscographyItemContainer key={item.id}>
                        <PcDiscographyDate>{dateFormat(item.date)} Release</PcDiscographyDate>
                        <PcDiscographyImageContainer>
                            <PcDiscographyImage loading="lazy" src={item.image.url} alt={item.title} />
                            <PcDiscographyTag>{item.tag}</PcDiscographyTag>
                        </PcDiscographyImageContainer>
                        <PcDiscographyTitleContainer>
                            <PcDiscographyTitle long={count(item.title) > 20}>{item.title}</PcDiscographyTitle>
                        </PcDiscographyTitleContainer>
                        <PcDiscographyLinkContainer>
                            <PcDiscographyLinkItemContainer noLink={!item.mvLink} rel="noopener noreferrer" target="_blank" href={item.mvLink}>
                                <PcDiscographyLinkIcon loading="lazy" src={MvIcon} alt="MVアイコン" />
                                <PcDiscographyLinkText>MVを見る</PcDiscographyLinkText>
                            </PcDiscographyLinkItemContainer>
                            <PcDiscographyLinkItemContainer noLink={!item.subscriptionLink} rel="noopener noreferrer" target="_blank" href={item.subscriptionLink}>
                                <PcDiscographyLinkIcon loading="lazy" src={SubscriptionIcon} alt="サブスクアイコン" />
                                <PcDiscographyLinkText>音楽を聴く</PcDiscographyLinkText>
                            </PcDiscographyLinkItemContainer>
                        </PcDiscographyLinkContainer>
                    </PcDiscographyItemContainer>
                ))}
            </PcDiscographyContainer>
            {/* SP */}
            <SpDiscographyContainer>
                {discographies.map((item) => (
                    <SpDiscographyItemContainer key={item.id}>
                        <SpDiscographyDate>{dateFormat(item.date)} Release</SpDiscographyDate>
                        <SpDiscographyTitleContainer>
                            <SpDiscographyTitle long={count(item.title) > 26}>{item.title}</SpDiscographyTitle>
                        </SpDiscographyTitleContainer>
                        <SpDiscographyItemContentContainer>
                            <SpDiscographyImageContainer>
                                <SpDiscographyImage loading="lazy" src={item.image.url} alt={item.title} />
                                <SpDiscographyTag>{item.tag}</SpDiscographyTag>
                            </SpDiscographyImageContainer>
                            <SpDiscographyLinkContainer>
                                <SpDiscographyLinkItemContainer noLink={!item.mvLink} rel="noopener noreferrer" target="_blank" href={item.mvLink}>
                                    <SpDiscographyLinkIcon loading="lazy" src={MvIcon} alt="MVアイコン" />
                                    <SpDiscographyLinkText>MVを見る</SpDiscographyLinkText>
                                </SpDiscographyLinkItemContainer>
                                <SpDiscographyLinkItemContainer noLink={!item.subscriptionLink} rel="noopener noreferrer" target="_blank" href={item.subscriptionLink}>
                                    <SpDiscographyLinkIcon loading="lazy" src={SubscriptionIcon} alt="サブスクアイコン" />
                                    <SpDiscographyLinkText>音楽を聴く</SpDiscographyLinkText>
                                </SpDiscographyLinkItemContainer>
                            </SpDiscographyLinkContainer>
                        </SpDiscographyItemContentContainer>
                    </SpDiscographyItemContainer>
                ))}
            </SpDiscographyContainer>
        </>
    )
}

export default Discography

// PC

const PcDiscographyContainer = styled.div`
    display: none;
    @media screen and (min-width: 500px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        padding-bottom: 120px;
    }
    @media screen and (min-width: 900px){
        padding-bottom: 160px;
    }
`

const PcDiscographyItemContainer = styled.div`
    display: block;
    // background-color: green;
    margin-left: 28px;
    margin-right: 28px;
    margin-top: 0;
    margin-bottom: 64px;
`

const PcDiscographyDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 4px;
`

const PcDiscographyImageContainer = styled.div`
    display: block;
    position: relative;
    margin-bottom: 8px;
`

const PcDiscographyImage = styled.img`
    width: 200px;
    height: 200px;
    display: block;
    position: relative;
    left: 0;
    top: 0;
`

const PcDiscographyTag = styled.p`
    font-size: 1.2rem;
    font-weight: 900;
    padding: 2px 8px;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: absolute;
    left: 4px;
    bottom: 4px;
    display: inline-block;
`

const PcDiscographyTitleContainer = styled.div`
    width: 200px;
    height: 48px;
    margin-bottom: 8px;
`

const PcDiscographyTitle = styled.h1`
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 4.8rem;
    overflow-wrap:  break-word;
    word-break: break-all;
    ${props => props.long && `
        line-height: 2.0rem;
    `}
`

const PcDiscographyLinkContainer = styled.div`
    display: block;
    width: 200px;
`

const PcDiscographyLinkItemContainer = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    cursor: pointer;
    height: 40px;
    margin-bottom: 16px;
    &:last-of-type{
        margin-bottom: 0;
    }
    ${props => props.noLink && `
        opacity: 0.7;
        background-color: #F0F0F0;
        cursor: default;
    `}
`

const PcDiscographyLinkIcon = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 42px;
`

const PcDiscographyLinkText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 42px;
`

// SP

const SpDiscographyContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    margin-bottom: 42px;
    margin-left: 5%;
    @media screen and (min-width: 500px){
        display: none;
    }
`

const SpDiscographyItemContainer = styled.div`
    display: block;
    width: 280px;
    margin: 0 auto 48px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

const SpDiscographyDate = styled.p`
    font-weight: 700;
    font-size: 1.0rem;
`

const SpDiscographyTitleContainer = styled.div`
    display: block;
    height: 48px;
`

const SpDiscographyTitle = styled.h1`
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 4.8rem;
    ${props => props.long && `
        line-height: 2.0rem;
    `}
`

const SpDiscographyItemContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const SpDiscographyImageContainer = styled.div`
    display: block;
    position: relative;
`

const SpDiscographyImage = styled.img`
    width: 120px;
    height: 120px;
    display: block;
    position: relative;
    left: 0;
    top: 0;
`

const SpDiscographyTag = styled.p`
    font-size: 1.0rem;
    font-weight: 700;
    padding: 2px 8px;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: absolute;
    left: 2px;
    bottom: 2px;
    display: inline-block;
`

const SpDiscographyLinkContainer = styled.div`
    display: block;
    width: 153px;
`

const SpDiscographyLinkItemContainer = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    cursor: pointer;
    height: 40px;
    margin-bottom: 16px;
    &:last-of-type{
        margin-bottom: 0;
    }
    ${props => props.noLink && `
        opacity: 0.7;
        background-color: #F0F0F0;
        cursor: default;
    `}
`

const SpDiscographyLinkIcon = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 24px;
`

const SpDiscographyLinkText = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    margin-right: 24px;
`