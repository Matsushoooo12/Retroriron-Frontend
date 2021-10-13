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
        if(content === i){
            setContent(null)
        } else{
            setContent(i);
        }
    };

    // Date

    const now = moment();

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
                                <NewsTagText>News</NewsTagText>
                            ):(
                                <NewsTagText className="hidden">News</NewsTagText>
                            )}
                            <NewsDate>{moment(item.date).format("YYYY.MM.DD")}</NewsDate>
                            <NewsButton className={content === i ? "active" : ""} src={content === i ? Minus : Plus} onClick={() => toggleAccordion(i)} />
                        </NewsItemOtherContainer>
                        <NewsContentsContainer>
                            <NewsTitle onClick={() => toggleAccordion(i)} className={content === i ? "active" : ""}>{item.title}</NewsTitle>
                            <NewsText className={content === i ? "active" : ""}>
                                {item.content}
                                <NewsImage className={item.imageVertical ? "vertical" : ""} src={process.env.REACT_APP_DEV_API_URL + item.image.url} />
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
    margin-top: 80px;
`

// NewsItemContainer

const NewsItemContainer = styled.li`
    width: 64vw;
    border-top: 1px solid #BEBEBE;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    align-items: start
`

// NewsItemOtherContainer

const NewsItemOtherContainer = styled.div`
    display: flex;
    align-items: start;
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
`

const NewsButton = styled.img`
    display: block;
    width: 14px;
    height: 14px;
    margin-top: 6px;
    margin-left: 32px;
    margin-right: 32px;
    cursor: pointer;
`

// NewsContentsContainer

const NewsContentsContainer = styled.div`
    display: block;
    width: 100%;
`

const NewsTitle = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
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
    margin-right: 16px;
    &.active{
        display: block;
    }
`

const NewsImage = styled.img`
    display: block;
    width: 200px;
    height: 100%;
    margin-top: 16px;
    &.vertical{
        width: 150px;
        height: 200px;
    }
`