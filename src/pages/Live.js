import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import { getLive } from '../api';
// import * as moment from 'moment-timezone';

const Live = () => {

    // API

    const [lives, setLives] = useState([])

    const handleGetLive = async () => {
        try{
            const res = await getLive();
            setLives(res.data)
            console.log(res.data)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        handleGetLive();
    }, [])

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

    return (
        <>
            <Helmet>
                <title>Live page</title>
                <meta name="the Live page of a pop band called Retroriron." content="live page" />
            </Helmet>
            <LiveContainer>
                {lives.map((item, i) => (
                    <LiveItemContainer key={i}>
                        <LiveInfoContainer>
                            <LiveDate>{moment(item.date).format("YYYY.MM.DD")}</LiveDate>
                            {item.detail ? (
                                <LiveButton className={content === i ? "active" : ""} src={content === i ? Minus : Plus} onClick={() => toggleAccordion(i)} />
                            ):(
                                <LiveButton className="cursor-default" src={Plus} />
                            )}
                            <LiveContentsContainer>
                                <LiveTitleContainer>
                                    {item.detail ? (
                                        <LiveTitle className={content === i ? "active" : ""} onClick={() => toggleAccordion(i)}>{item.title}</LiveTitle>
                                    ):(
                                        <LiveTitle className="cursor-default">{item.title}</LiveTitle>
                                    )}
                                    {now < moment(item.date) ? (
                                        <LiveFinish>終了</LiveFinish>
                                    ):(
                                        <LiveFinish className="finish">終了</LiveFinish>
                                    )}
                                </LiveTitleContainer>
                                <LiveTextContainer>
                                    <LiveText>開場時間 | {moment(item.openTime).add(15, "H").format("HH:mm")}   開演時間 | {moment(item.startTime).add(15, "H").format("HH:mm")}</LiveText>
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
                        <LiveImage className={item.imageVertical ? "vertical" : ""} src={process.env.REACT_APP_DEV_API_URL + item.image.url} />
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
    cursor: pointer;
    &.cursor-default{
        cursor: default;
    }
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
    &.cursor-default{
        cursor: default;
    }
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