import React, { useState } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import { getNews } from '../api';
import { useEffect } from 'react/cjs/react.development';
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
        }
        setContent(i);
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
                        </NewsItemOtherContainer>
                        <NewsContentsContainer>
                            <NewsTitle className={content === i ? "active" : ""} onClick={() => toggleAccordion(i)}>【 {item.title} 】</NewsTitle>
                            <NewsTextContainer className={content === i ? "active" : ""}>
                                <NewsText>
                                    {item.content}
                                </NewsText>
                                {item.image ? (
                                    <NewsImage className={item.image_vertical ? "vertical" : ""} src={process.env.REACT_APP_DEV_API_URL + item.image.url} />
                                ):(
                                    <></>
                                )}
                            </NewsTextContainer>
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

// NewsContentsContainer

const NewsContentsContainer = styled.div`
    display: block;
    cursor: pointer;
    width: 100%;
`

const NewsTitle = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
    margin-left: 32px;
    &::before{
        content: "+";
        margin-right: 16px;
    }
    &.active::before{
        content: "- ";
        margin-right: 16px;
    }
`

const NewsTextContainer = styled.div`
    display: none;
    &.active{
        display: block;
    }
`

const NewsText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-wrap;
    margin-right: 16px;
    margin-left: 32px;
`

const NewsImage = styled.img`
    display: block;
    width: 300px;
    height: 100%;
    margin-left: 32px;
    &.vertical{
        height: 300px;
        width: 200px;
    }
`