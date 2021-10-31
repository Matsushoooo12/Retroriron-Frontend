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

    // アコーディオンのtoggleボタン
    const toggleAccordionButton = (index) => {
        return content === (index) ? Minus : Plus;
    }

    // Date

    const now = moment();

    console.log(news.map((item) => process.env.REACT_APP_PRO_API_URL + item.image.url))

    // Active

    const isActive = (index) => content === index;

    console.log(now.subtract(2, 'weeks'))

    // 日にちが２週間前より古いか
    const newTagHidden = (date) => {
        return now.subtract(2, 'weeks') > moment(date)
    }

    // dateフォーマット
    const dateFormat = (date) => {
        return moment(date).format("YYYY.MM.DD")
    }

    
    // const autoLink = (str) => {
    //     var regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;
    //     var regexp_makeLink = function(all, url, h, href) {
    //         return '<a target="_blank" rel="noopener noreferrer" href="h' + href + '">' + url + '</a>';
    //     }
     
    //     return str.replace(regexp_url, regexp_makeLink);
    // }

    return (
        <>
            {/* HEAD */}
            <Helmet>
                <title>レトロリロン - News page</title>
                <meta name="the News page of a pop band called Retroriron." content="news page" />
            </Helmet>
            {/* HEAD */}
            {/* PC */}
            <NewsContainer>
                {news.map((item) => (
                    <NewsItemContainer key={item.id}>
                        {/* PC */}
                        <PcNewsItemOtherContainer>
                            <PcNewsTagText IsHidden={newTagHidden(item.date)}>New</PcNewsTagText>
                            <PcNewsDate>{dateFormat(item.date)}</PcNewsDate>
                        </PcNewsItemOtherContainer>
                        <PcNewsMainContainer>
                            <PcNewsButton onClick={toggleAccordion(item.id)} src={toggleAccordionButton(item.id)} alt="Toggle button" />
                            <PcNewsTextContainer>
                                <PcNewsTitle onClick={toggleAccordion(item.id)}>{item.title}</PcNewsTitle>
                                <PcNewsText active={isActive(item.id)}>
                                    {item.content}
                                    <PcNewsImage loading="lazy" vertical={item.imageVertical} src={item.image.url} alt={item.title} />
                                </PcNewsText>
                            </PcNewsTextContainer>
                        </PcNewsMainContainer>
                        {/* TAB */}
                        <TabNewsItemOtherContainer>
                            <TabNewsTagText IsHidden={now.subtract(2, 'weeks') > moment(item.date)}>New</TabNewsTagText>
                            <TabNewsDate>{dateFormat(item.date)}</TabNewsDate>
                        </TabNewsItemOtherContainer>
                        <TabNewsMainContainer>
                            <TabNewsButton onClick={toggleAccordion(item.id)} src={toggleAccordionButton(item.id)} alt="Toggle button" />
                            <TabNewsTextContainer>
                                <TabNewsTitle onClick={toggleAccordion(item.id)}>{item.title}</TabNewsTitle>
                                <TabNewsText active={isActive(item.id)}>
                                    {item.content}
                                    <TabNewsImage loading="lazy" vertical={item.imageVertical} src={item.image.url} alt={item.title} />
                                </TabNewsText>
                            </TabNewsTextContainer>
                        </TabNewsMainContainer>
                        {/* SP */}
                        <SpNewsButton onClick={toggleAccordion(item.id)} src={toggleAccordionButton(item.id)} alt="Toggle button" />
                        <SpNewsMainContainer>
                            <SpNewsItemOtherContainer onClick={toggleAccordion(item.id)}>
                                <SpNewsDate>{dateFormat(item.date)}</SpNewsDate>
                                <SpNewsTag IsHidden={now.subtract(2, 'weeks') > moment(item.date)}>New</SpNewsTag>
                            </SpNewsItemOtherContainer>
                            <SpNewsTitle onClick={toggleAccordion(item.id)}>{item.title}</SpNewsTitle>
                            <SpNewsText active={isActive(item.id)}>
                                {item.content}
                                <SpNewsImage loading="lazy" vertical={item.imageVertical} src={item.image.url} alt={item.title} />
                            </SpNewsText>
                        </SpNewsMainContainer>
                    </NewsItemContainer>
                ))}
            </NewsContainer>
        </>
    )
}

export default News

const NewsContainer = styled.ul`
    display: block;
    width: 240px;
    height: 100%;
    margin-left: 5%;
    margin-bottom: 96px;
    @media screen and (min-width: 300px){
        width: 100%;
    }
    @media screen and (min-width: 768px){
        display: block;
        width: 100%;
        height: 100%;
        margin-bottom: 24px;
    }
    @media screen and (min-width: 900px){
        display: block;
        width: 100%;
        height: 100%;
        padding-bottom: 160px;
        margin-left: 0;
    }
`

const NewsItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
    align-items: flex-start;
    @media screen and (min-width: 768px){
        border-top: 1px solid #BEBEBE;
        padding: 16px 0;
        display: flex;
    }
    @media screen and (min-width: 900px){
        border-top: 1px solid #BEBEBE;
        padding: 16px 0;
        display: flex;
    }
`

// PC

// PC-タグ、日付

const PcNewsItemOtherContainer = styled.div`
    display: none;
    @media screen and (min-width: 900px){
        display: flex;
        justify-content: left;
        aling-items: flex-start;
    }
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
    display:  none;
    @media screen and (min-width: 900px){
        display: flex;
        align-items: flex-start;
        justify-content: left;
}
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

// Tab-タグ、日付

const TabNewsItemOtherContainer = styled.div`
    display: none;
    @media screen and (min-width: 768px){
        display: flex;
        justify-content: left;
        aling-items: flex-start;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
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
    display: none;
    @media screen and (min-width: 768px){
        display: flex;
        align-items: flex-start;
        justify-content: left;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
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

const SpNewsButton = styled.img`
    display: block;
    width: 14px;
    height: 14px;
    cursor: pointer;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpNewsMainContainer = styled.div`
    display: block;
    margin-left: 24px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpNewsItemOtherContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
    cursor: pointer;
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