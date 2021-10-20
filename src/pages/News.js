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

    return (
        <>
            <Helmet>
                <title>News page</title>
                <meta name="the News page of a pop band called Retroriron." content="news page" />
            </Helmet>
            <NewsContainer className="container">
                {news.map((item, i) => (
                    <NewsItemContainer key={i}>
                        <NewsItemOtherContainer>
                            {now.subtract(2, 'weeks') < moment(item.date) ? (
                                <NewsTagText>New</NewsTagText>
                            ):(
                                <NewsTagText className="hidden">New</NewsTagText>
                            )}
                            <NewsDate>{moment(item.date).format("YYYY.MM.DD")}</NewsDate>
                            <NewsButton className={content === i ? "active" : ""} src={content === i ? Minus : Plus} onClick={toggleAccordion(i)} />
                        </NewsItemOtherContainer>
                        <NewsContentsContainer>
                            <NewsTitle onClick={toggleAccordion(i)} className={content === i ? "active" : ""}>{item.title}</NewsTitle>
                            <NewsText className={content === i ? "active" : ""}>
                                {item.content}
                                <NewsImage className={item.imageVertical ? "vertical" : ""} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                            </NewsText>
                        </NewsContentsContainer>
                    </NewsItemContainer>
                ))}
            </NewsContainer>
        </>
    )
}

export default News

// NewsContainer

const NewsContainer = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    @media screen and (min-width: 900px){
        margin-top: 80px;
    }
`

// NewsItemContainer

const NewsItemContainer = styled.li`
    width: 70vw;
    border-top: 1px solid #BEBEBE;
    margin-left: 64px;
    padding: 16px 0;
    display: block;
    @media screen and (min-width: 768px){
        margin: 0 auto;
    }
    @media screen and (min-width: 900px){
        width: 64vw;
        display: flex;
        padding: 24px 0;
        align-items: flex-start;
    }
`

// NewsItemOtherContainer

const NewsItemOtherContainer = styled.div`
    align-items: flex-start;
    justify-content: left;
    flex-direction: row-reverse;
    margin-bottom: 4px;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flexbox;
    display: -moz-flexbox;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    -js-display: flex;
    display: flex;
    @media screen and (min-width: 900px){
        flex-direction: initial;
        margin-bottom: 0;
    }
`

// NewsTag

const NewsTagText = styled.p`
    color: #F42626;
    font-weight: 900;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.2rem;
    margin-right: 24px;
    margin-top: 2px;
    &.hidden{
        color: #fff;
    }
`

// NewsDate

const NewsDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-top: 3px;
    margin-left: 24px;
    margin-right: 8px;
    @media screen and (min-width: 900px){
        margin-left: 0;
        margin-right: 0;
    }
`

const NewsButton = styled.img`
    display: block;
    width: 14px;
    height: 14px;
    margin-top: 4px;
    cursor: pointer;
    @media screen and (min-width: 900px){
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 6px;
    }
`

// NewsContentsContainer

const NewsContentsContainer = styled.div`
    display: block;
    width: 100%;
    padding-left: 38px;
    @media screen and (min-width: 900px){
        padding-left: 0;
    }
`

const NewsTitle = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
    line-height: 2.4rem;
`

const NewsText = styled.p`
    display: none;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-wrap;
    word-break: break-all;
    transition: all 0.3s;
    &.active{
        display: block;
    }
    @media screen and (min-width: 900px){
        margin-right: 16px;
    }
`

const NewsImage = styled.img`
    display: block;
    width: 160px;
    height: 100%;
    margin-top: 16px;
    &.vertical{
        width: 128px;
        height: 160px;
    }
    @media screen and (min-width: 768px){
        width: 200px;
        &.vertical{
            width: 160px;
            height: 200px;
        }
    }
`