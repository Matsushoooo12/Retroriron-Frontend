import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import { getNews } from '../api';
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'

const News = () => {
    // API

    const [news, setNews] = useState([])
    const handleGetNews = async () => {
        try{
            const res = await getNews();
            setNews(res.data)
            console.log(res.data)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        handleGetNews();
    }, [])

    // アコーディオン

    const [content, setContent] = useState(null)
    const toggleAccordion = (i) => {
        return () => setContent(content === i ? null : i)
    };

    // Date

    const now = moment();

    console.log(news.map((item) => process.env.REACT_APP_PRO_API_URL + item.image.url))

    // Active

    const isActive = (index) => content === index;

    return (
        <>
            {/* HEAD */}
            <Helmet>
                <title>News page</title>
                <meta name="the News page of a pop band called Retroriron." content="news page" />
            </Helmet>
            {/* HEAD */}
            {/* PC */}
            <PcNewsContainer>
                {news.map((item) => (
                    <PcNewsItemContainer key={item.id}>
                        <PcNewsItemOtherContainer>
                            <PcNewsTagText IsHidden={now.subtract(2, 'weeks') > moment(item.date)}>New</PcNewsTagText>
                            <PcNewsDate>{moment(item.date).format("YYYY.MM.DD")}</PcNewsDate>
                        </PcNewsItemOtherContainer>
                        <PcNewsMainContainer>
                            <PcNewsButton onClick={toggleAccordion(item.id)} src={content === item.id ? Minus : Plus} />
                            <PcNewsTextContainer>
                                <PcNewsTitle onClick={toggleAccordion(item.id)}>{item.title}</PcNewsTitle>
                                <PcNewsText active={isActive(item.id)}>
                                    {item.content}
                                    <PcNewsImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                                </PcNewsText>
                            </PcNewsTextContainer>
                        </PcNewsMainContainer>
                    </PcNewsItemContainer>
                ))}
            </PcNewsContainer>
            {/* PC */}
            {/* TAB */}
            <TabNewsContainer>
                {news.map((item) => (
                    <TabNewsItemContainer key={item.id}>
                        <TabNewsItemOtherContainer>
                            <TabNewsTagText IsHidden={now.subtract(2, 'weeks') > moment(item.date)}>New</TabNewsTagText>
                            <TabNewsDate>{moment(item.date).format("YYYY.MM.DD")}</TabNewsDate>
                        </TabNewsItemOtherContainer>
                        <TabNewsMainContainer>
                            <TabNewsButton onClick={toggleAccordion(item.id)} src={content === item.id ? Minus : Plus} />
                            <TabNewsTextContainer>
                                <TabNewsTitle onClick={toggleAccordion(item.id)}>{item.title}</TabNewsTitle>
                                <TabNewsText active={isActive(item.id)}>
                                    {item.content}
                                    <TabNewsImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                                </TabNewsText>
                            </TabNewsTextContainer>
                        </TabNewsMainContainer>
                    </TabNewsItemContainer>
                ))}
            </TabNewsContainer>
            {/* TAB */}
            {/* SP */}
            <SpNewsContainer>
                {news.map((item) => (
                    <SpNewsItemContainer key={item.id}>
                        <SpNewsButton onClick={toggleAccordion(item.id)} src={content === item.id ? Minus : Plus} />
                        <SpNewsMainContainer>
                            <SpNewsItemOtherContainer onClick={toggleAccordion(item.id)}>
                                <SpNewsDate>{moment(item.date).format("YYYY.MM.DD")}</SpNewsDate>
                                <SpNewsTag IsHidden={now.subtract(2, 'weeks') > moment(item.date)}>New</SpNewsTag>
                            </SpNewsItemOtherContainer>
                            <SpNewsTitle onClick={toggleAccordion(item.id)}>{item.title}</SpNewsTitle>
                            <SpNewsText active={isActive(item.id)}>
                                {item.content}
                                <SpNewsImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                            </SpNewsText>
                        </SpNewsMainContainer>
                    </SpNewsItemContainer>
                ))}
            </SpNewsContainer>
            {/* SP */}
        </>
    )
}

export default News

// PC

const PcNewsContainer = styled.ul`
    display: none;
    @media screen and (min-width: 900px){
        display: block;
        width: 100%;
        height: 100%;
        background-color: yellow;
    }
`

const PcNewsItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
`

// PC-タグ、日付

const PcNewsItemOtherContainer = styled.div`
    display: flex;
    justify-content: left;
    aling-items: flex-start;
`

const PcNewsTagText = styled.p`
    color: #F42626;
    font-weight: 900;
    font-size: 1.2rem;
    margin-right: 24px;
    margin-top: 2px;
    ${props => props.IsHidden && `color: #fff;`}
`

const PcNewsDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 3px;
`

// PC-テキスト

const PcNewsMainContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: left;
`

const PcNewsButton = styled.img`
    display: block;
    width: 14px;
    height: 14px;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 4px;
    cursor: pointer;
`

const PcNewsTextContainer = styled.div`
    display: block;
`

const PcNewsTitle = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
    line-height: 2.4rem;
`

const PcNewsText = styled.p`
    display: none;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-wrap;
    word-break: break-all;
    transition: all 0.3s;
    ${props => props.active && `display: block;`}
`

const PcNewsImage = styled.img`
    display: block;
    width: 200px;
    height: 100%;
    margin-top: 16px;
    ${props => props.vertical && `
        width: 160px;
        height: 200px;
    `}
`

// Tab

const TabNewsContainer = styled.ul`
    display: none;
    @media screen and (min-width: 768px){
        display: block;
        width: 100%;
        height: 100%;
        margin-left: 40px;
        background-color: yellow;
        margin-bottom: 24px;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
`

const TabNewsItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
`

// Tab-タグ、日付

const TabNewsItemOtherContainer = styled.div`
    display: flex;
    justify-content: left;
    aling-items: flex-start;
`

const TabNewsTagText = styled.p`
    color: #F42626;
    font-weight: 900;
    font-size: 1.2rem;
    margin-right: 24px;
    margin-top: 2px;
    ${props => props.IsHidden && `color: #fff;`}
`

const TabNewsDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 3px;
`

// Tab-テキスト

const TabNewsMainContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: left;
`

const TabNewsButton = styled.img`
    display: block;
    width: 14px;
    height: 14px;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 4px;
    cursor: pointer;
`

const TabNewsTextContainer = styled.div`
    display: block;
`

const TabNewsTitle = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
    line-height: 2.4rem;
`

const TabNewsText = styled.p`
    display: none;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-wrap;
    word-break: break-all;
    transition: all 0.3s;
    ${props => props.active && `display: block;`}
`

const TabNewsImage = styled.img`
    display: block;
    width: 200px;
    height: 100%;
    margin-top: 16px;
    ${props => props.vertical && `
        width: 160px;
        height: 200px;
    `}
`

// SP

const SpNewsContainer = styled.ul`
    display: block;
    width: 100%;
    height: 100%;
    margin-left: 20px;
    background-color: yellow;
    margin-bottom: 96px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpNewsItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
    align-items: flex-start;
`

const SpNewsButton = styled.img`
    display: block;
    width: 14px;
    height: 14px;
    cursor: pointer;
`

const SpNewsMainContainer = styled.div`
    display: block;
    margin-left: 24px;
`

const SpNewsItemOtherContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
`

const SpNewsDate = styled.p`
    font-size: 1.0rem;
    font-weight: 700;
    margin-top: 2px;
    margin-right: 8px;
`

const SpNewsTag = styled.p`
    color: #F42626;
    font-weight: 900;
    font-size: 1.2rem;
    margin-right: 24px;
    ${props => props.IsHidden && `color: #fff;`}
`

const SpNewsTitle = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
    line-height: 2.4rem;
`

const SpNewsText = styled.p`
    display: none;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-wrap;
    word-break: break-all;
    transition: all 0.3s;
    ${props => props.active && `display: block;`}
`

const SpNewsImage = styled.img`
    display: block;
    width: 160px;
    height: 100%;
    margin-top: 16px;
    ${props => props.vertical && `
        width: 128px;
        height: 160px;
    `}
`