import React, { useState } from 'react'
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Retroriron from '../images/retroriron.jpeg'
const News = () => {

    const [content, setContent] = useState(null)
    const toggleAccordion = (i) => {
        if(content === i){
            setContent(null)
        }
        setContent(i);
    };

    const data = [
        {title: "1【2nd digital Single Life配信決定】", text: "1レトロリロン公開２曲目となる2nd digital SingleLifeが１０月中旬に配信決定!公開されると各種サブスクリプションにてご視聴いただけます。", date: "2021.9.21", image: `${Retroriron}`},
        {title: "2【2nd digital Single Life配信決定】", text: "2レトロリロン公開２曲目となる2nd digital SingleLifeが１０月中旬に配信決定!公開されると各種サブスクリプションにてご視聴いただけます。", tag: "New", date: "2021.9.21"},
        {title: "3【2nd digital Single Life配信決定】", text: "3レトロリロン公開２曲目となる2nd digital SingleLifeが１０月中旬に配信決定!公開されると各種サブスクリプションにてご視聴いただけます。", tag: "New", date: "2021.9.21"}
    ]

    console.log(content)
    return (
        <>
            <Helmet>
                <title>News page</title>
                <meta name="the News page of a pop band called Retroriron." content="news page" />
            </Helmet>
            <NewsContainer className="container">
                {data.map((item, i) => (
                    <NewsItemContainer key={i}>
                        <NewsItemOtherContainer>
                            <NewsTagContainer className={item.tag ? "" : "hidden"}>
                                <NewsTagText>{item.tag}</NewsTagText>
                            </NewsTagContainer>
                            <NewsDate>{item.date}</NewsDate>
                        </NewsItemOtherContainer>
                        <NewsContentsContainer>
                            <NewsTitle className={content === i ? "active" : ""} onClick={() => toggleAccordion(i)}>{item.title}</NewsTitle>
                            <NewsTextContainer className={content === i ? "active" : ""}>
                                <NewsText>
                                    {item.text}
                                </NewsText>
                                {item.image ? (
                                    <NewsImage src={item.image} />
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
    width: 60vw;
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

const NewsTagContainer = styled.div`
    width: 40px;
    height: 24px;
    border-radius: 3px;
    background-color: #F42626;
    position: relative;
    margin-right: 16px;
    &.hidden{
        background-color: #fff;
        z-index: 10;
    }
`

const NewsTagText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 900;
    font-family: 'Noto Sans JP', sans-serif;
`

// NewsDate

const NewsDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-top: 3px;
`

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
    margin-left: 32px;
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
    margin-left: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
`

const NewsImage = styled.img`
    width: 300px;
    display: block;
    margin-left: 16px;
`