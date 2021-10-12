import React, { useState } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Retroriron from '../images/retroriron.jpeg'
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import LiveVertical from '../images/live.jpeg'

const Live = () => {

    // アコーディオン

    const [content, setContent] = useState(null)

    const toggleAccordion = (i) => {
        if(content === i ){
            setContent(null)
        } else{
            setContent(i);
        }
    };

    // Date

    const now = moment();

    const data = [
        {title: "test1test1test1test1", date: "2021-10-24", open_time: "2014-07-16T09:00:00+09:00", start_time: "2014-07-16T09:30:00+09:00", place: "下北沢のライブハウス", price: "3000円", detail: "あああああああああ", image: `${Retroriron}`, image_vertical: false, performer: "あああああ、あああああ、あああああ、あああああ、あああああ、あああああ"},
        {title: "test2test2test2test2", date: "2021-09-24", open_time: "2014-07-16T18:00:00+09:00", start_time: "2014-07-16T18:30:00+09:00", place: "赤坂のライブハウス", price: "2500円", image: `${LiveVertical}`, image_vertical: true, performer: "いいいいい、いいいいい、いいいいい、いいいいい、いいいいい、いいいいい"},
        {title: "test3test3test3test3", date: "2021-08-24", open_time: "2014-07-16T19:00:00+09:00", start_time: "2014-07-16T19:30:00+09:00", place: "渋谷のライブハウス", price: "2600円", detail: "あああああああああ", image: `${Retroriron}`, image_vertical: false, performer: "ううううう、ううううう、ううううう、ううううう、ううううう、ううううう"},
    ]

    console.log(content)
    return (
        <>
            <Helmet>
                <title>Live page</title>
                <meta name="the Live page of a pop band called Retroriron." content="live page" />
            </Helmet>
            <LiveContainer>
                {data.map((item, i) => (
                    <LiveItemContainer key={i}>
                        <LiveInfoContainer>
                            <LiveDate>{moment(item.date).format("YYYY.MM.DD")}</LiveDate>
                            {item.detail ? (
                                <LiveButton className={content === i ? "active" : ""} src={content === i ? Minus : Plus} onClick={() => toggleAccordion(i)} />
                            ):(
                                <LiveButton src={Plus} />
                            )}
                            <LiveContentsContainer>
                                <LiveTitleContainer>
                                    {item.detail ? (
                                        <LiveTitle className={content === i ? "active" : ""} onClick={() => toggleAccordion(i)}>{item.title}</LiveTitle>
                                    ):(
                                        <LiveTitle>{item.title}</LiveTitle>
                                    )}
                                    {now < moment(item.date) ? (
                                        <LiveFinish>終了</LiveFinish>
                                    ):(
                                        <LiveFinish className="finish">終了</LiveFinish>
                                    )}
                                </LiveTitleContainer>
                                <LiveTextContainer>
                                    <LiveText>開場時間 | {moment(item.open_time).format("HH:mm")}   開演時間 | {moment(item.start_time).format("HH:mm")}</LiveText>
                                    <LiveText>場所 | {item.place}</LiveText>
                                    <LiveText>料金 | {item.price}</LiveText>
                                    <LiveText>出演者 | {item.performer}</LiveText>
                                </LiveTextContainer>
                                {now < moment(item.date) ? (
                                    <LiveChicketButton>チケットをご希望の方はこちら</LiveChicketButton>
                                ):(
                                    <></>
                                )}
                                <LiveDetailText className={content === i ? "active" : ""}>
                                    詳細情報 |<br/><br/>
                                    {item.detail}
                                </LiveDetailText>
                            </LiveContentsContainer>
                        </LiveInfoContainer>
                        <LiveImage className={item.image_vertical ? "vertical" : ""} src={item.image} />
                    </LiveItemContainer>
                ))}
            </LiveContainer>
        </>
    )
}

export default Live

// LiveContainer

const LiveContainer = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 80px;
`

// LiveItemContainer

const LiveItemContainer = styled.li`
    width: 64vw;
    border-top: 1px solid #BEBEBE;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
`

// LiveInfoContainer

const LiveInfoContainer = styled.div`
    display: flex;
`

const LiveImage = styled.img`
    display: block;
    width: 200px;
    height: 100%;
    margin-left: 24px;
    &.vertical{
        width: 160px;
        height: 200px;
    }
`

const LiveDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-top: 6px;
    margin-right: 24px;
`

const LiveButton = styled.img`
    width: 14px;
    height: 14px;
    margin-top: 8px;
    margin-right: 14px;
`

// LiveContentsContainer

const LiveContentsContainer = styled.div`
`

// LiveTitleContainer

const LiveTitleContainer = styled.div`
    display: flex;
`

const LiveTitle = styled.a`
    font-size: 2.0rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
`

const LiveTextContainer = styled.div`
    margin-top: 8px;
    margin-bottom: 16px;
`

const LiveText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
`

// LiveChicketButton

const LiveChicketButton = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #fff;
    background-color: #F1A01A;
    padding: 10px 16px;
    border-radius: 7px;
    cursor: pointer;
`

// LiveDetailText

const LiveDetailText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
    margin-top: 16px;
    display: none;
    &.active{
        display: block;
    }
`

// LiveFinish

const LiveFinish =  styled.div`
    opacity: 0;
    &.finish{
        opacity: 1;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 900;
        font-family: 'Noto Sans JP', sans-serif;
        background-color: #F42626;
        padding: 3px 8px;
        border-radius: 3px;
        margin-left: 16px;
    }
`