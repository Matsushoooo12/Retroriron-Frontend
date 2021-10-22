import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import { getLive } from '../api';
import { useForm } from 'react-hook-form';
import TicketConfirm from '../components/ticket/TicketConfirm';

const Live = () => {
    // useForm
    const { register, formState: { errors }, getValues, handleSubmit } = useForm();

    // isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    // isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

    //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
    const hideConfirmation = () => setIsConfirmationVisible(false)

    //submitボタンを押した時、入力内容確認画面を表示させる
    const onSubmitData = () => setIsConfirmationVisible(true)

    // TicketValue
    const [ticketValue, setTicketValue] = useState({
        dateAndTitle: "",
        nameKana: "",
        email: "",
        number: "",
        description: "",
        open: false
    })

    const handleClick = () => {
        setTicketValue({open: false})
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

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
        return () => setContent(content === i ? null : i)
    };

    // Date

    const now = moment();

    console.log(ticketValue.open)

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
                            <SpLiveTitleContainer>
                                <SpLiveDate className={content === i ? "active" : ""} onClick={toggleAccordion(i)}>{moment(item.date).format("YYYY.MM.DD")}</SpLiveDate>
                                <SpLiveTitle className={content === i ? "active" : ""} onClick={toggleAccordion(i)}>{item.title}</SpLiveTitle>
                                {now < moment(item.date) ? (
                                    <LiveTicketButton className="sp" onClick={() => setTicketValue({dateAndTitle: item.date + "    " + item.title, open: true})}>チケットをご希望の方はこちら</LiveTicketButton>
                                ):(
                                    <LiveFinish className="finish sp">終了</LiveFinish>
                                )}
                                <SpLiveContentsContainer className={content === i ? "active" : ""}>
                                    <LiveTextContainer className="sp">
                                        <LiveText>開場時間 | {moment(item.openTime).add(15, "H").format("HH:mm")}   開演時間 | {moment(item.startTime).add(15, "H").format("HH:mm")}</LiveText>
                                        <LiveText>場所 | {item.place}</LiveText>
                                        <LiveText>料金 | {item.price}</LiveText>
                                        <LiveText>出演者 | {item.performer}</LiveText>
                                    </LiveTextContainer>
                                    <LiveImage className={item.imageVertical ? "vertical sp" : "sp"} src={process.env.REACT_APP_DEV_API_URL + item.image.url} />
                                </SpLiveContentsContainer>
                            </SpLiveTitleContainer>
                            <SpLiveButton className={content === i ? "active" : ""} src={content === i ? Minus : Plus} onClick={toggleAccordion(i)} />
                            {item.detail ? (
                                <LiveButton className={content === i ? "active" : ""} src={content === i ? Minus : Plus} onClick={toggleAccordion(i)} />
                            ):(
                                <LiveButton className="cursor-default" src={Plus} />
                            )}
                            <LiveContentsContainer>
                                <LiveDate className="tab">{moment(item.date).format("YYYY.MM.DD")}</LiveDate>
                                <LiveTitleContainer>
                                    {item.detail ? (
                                        <LiveTitle className={content === i ? "active" : ""} onClick={toggleAccordion(i)}>{item.title}</LiveTitle>
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
                                    <LiveTicketButton className="tab" onClick={() => setTicketValue({dateAndTitle: item.date + "    " + item.title, open: true})}>チケットをご希望の方はこちら</LiveTicketButton>
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
                <ModalContainer
                    className={ticketValue.open ? "open" : ""}
                >
                    <ModalBack onClick={handleClick}></ModalBack>
                    {!isConfirmationVisible ? (
                        <TicketItemContainer>
                            <TicketTitle>チケット予約フォーム</TicketTitle>
                            <TicketText>
                                ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                                当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
                            </TicketText>
                            <TicketCautionText>
                                ※下記のライブのお申し込みでお間違いないかご確認ください。
                            </TicketCautionText>
                            <TicketFormContainer onSubmit={handleSubmit(onSubmitData)}>
                                <TicketFormTextField
                                    className="date_and_title"
                                    type="text"
                                    name="dateAndTitle"
                                    value={ticketValue.dateAndTitle}
                                    readOnly
                                    {...register('dateAndTitle', {required: true})}
                                />
                                <TicketFormGroup>
                                    <TicketFormLabel htmlFor="nameKana">ナマエ
                                        <TicketFormRequiredSign>*</TicketFormRequiredSign>
                                        {errors.nameKana && <TicketFormRequiredSign>こちらは必須項目です。</TicketFormRequiredSign>}
                                    </TicketFormLabel>
                                    <TicketFormTextField
                                        name="nameKana"
                                        type="text"
                                        {...register('nameKana', {required: true})}
                                    />
                                    <TicketFormLabel htmlFor="email">メールアドレス
                                        <TicketFormRequiredSign>*</TicketFormRequiredSign>
                                        {errors.email && <TicketFormRequiredSign>こちらは必須項目です。</TicketFormRequiredSign>}
                                    </TicketFormLabel>
                                    <TicketFormTextField
                                        name="email"
                                        type="email"
                                        {...register('email', {required: true})}
                                    />
                                    <TicketFormLabel htmlFor="number">枚数
                                        <TicketFormRequiredSign>*</TicketFormRequiredSign>
                                        {errors.number && <TicketFormRequiredSign>こちらは必須項目です。</TicketFormRequiredSign>}
                                    </TicketFormLabel>
                                    <TicketFormNumber
                                        name="number"
                                        type="number"
                                        onChange={(e) => e.target.value}
                                        defaultValue="1"
                                        {...register('number', {required: true})}
                                    />
                                    <TicketFormLabel htmlFor="description">備考</TicketFormLabel>
                                    <TicketFormTextField
                                        name="description"
                                        type="text"
                                        {...register('description', {required: false})}
                                    />
                                </TicketFormGroup>
                                <TicketFormGroup className="right">
                                    <TicketFormSubmitButton type="submit" value="確認する" />
                                </TicketFormGroup>
                            </TicketFormContainer>
                        </TicketItemContainer>
                    ):(
                        <TicketConfirm
                            values={getValues()}
                            hideConfirmation={hideConfirmation}
                        />
                    )}
                </ModalContainer>
            </LiveContainer>
        </>
    )
}

export default Live

//  > 1000 >

// LiveContainer

const LiveContainer = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    @media screen and (min-width: 900px){
        margin-top: 80px;
    }
`

// LiveItemContainer

const LiveItemContainer = styled.li`
    width: 70vw;
    border-top: 1px solid #BEBEBE;
    margin-left: 64px;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 768px){
        margin: 0 auto;
        width: 64vw;
    }
    @media screen and (min-width: 900px){
        padding: 24px 0;
        width: 64vw;
    }
`

// LiveInfoContainer

const LiveInfoContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    @media screen and (min-width: 768px){
        flex-direction: initial;
    }
`

const LiveImage = styled.img`
    display: none;
    &.sp{
        display: block;
        width: 160px;
    }
    &.vertical{
        width: 128px;
        height: 160px;
    }
    @media screen and (min-width: 768px){
        display: block;
        width: 200px;
        height: 100%;
        margin-left: 24px;
        &.vertical{
            width: 160px;
            height: 200px;
        }
    }
`

const LiveDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-top: 6px;
    margin-left: 24px;
    display: none;
    &.tab{
        display: block;
        margin-left: 0;
        margin-bottom: 4px;
    }
    @media screen and (min-width: 900px){
        &.tab{
            display: none;
        }
        margin-right: 24px;
        display: block;
    }
`

const LiveButton = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-top: 2px;
    &.cursor-default{
        cursor: default;
    }
    display: none;
    @media screen and (min-width: 768px){
        display: block;
        margin-right: 14px;
        margin-top: 8px;
    }
`

// SP dateAndTitleContainer

const SpLiveTitleContainer = styled.div`
    display: block;
    margin-left: 24px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpLiveTitle = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
    &.cursor-default{
        cursor: default;
    }
    @media screen and (min-width: 900px){
        font-size: 2.0rem;
    }
`

const SpLiveDate = styled.p`
    font-size: 1.0rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 4px;
    cursor: pointer;
`

const SpLiveButton = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-top: 2px;
    &.cursor-default{
        cursor: default;
    }
    display: block;
    @media screen and (min-width: 768px){
        display: none;
    }
`

// SpLiveDetailContainer

const SpLiveContentsContainer = styled.div`
    height: 100%;
    display: none;
    margin-top: 16px;
    &.active{
        display: block;
    }
`

// LiveContentsContainer

const LiveContentsContainer = styled.div`
    display: none;
    @media screen and (min-width: 768px){
        display: block;
        width: 240px;
    }
    @media screen and (min-width: 900px){
        display: block;
        width: 100%;
    }
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
    word-break: break-all;
    &.cursor-default{
        cursor: default;
    }
    display: none;
    @media screen and (min-width: 768px){
        display: block;
    }
`

const LiveTextContainer = styled.div`
    display: none;
    margin-bottom: 16px;
    &.sp{
        display: block;
    }
    @media screen and (min-width: 768px){
        margin-top: 8px;
        display: block;
    }
`

const LiveText = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
    @media screen and (min-width: 768px){
        font-size: 1.6rem;
        font-weight: 700;
    }
`

// LiveTicketButton

const LiveTicketButton = styled.a`
    display: none;
    &.sp{
        display: inline-block;
        font-size: 1.0rem;
        font-weight: 700;
        font-family: 'Noto Sans JP', sans-serif;
        color: #fff;
        background-color: #F1A01A;
        padding: 8px 16px;
        border-radius: 7px;
        cursor: pointer;
        margin-top: 16px;
    }
    @media screen and (min-width: 321px){
        font-size: 1.2rem;
    }
    @media screen and (min-width: 768px){
        display: block;
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 700;
        font-family: 'Noto Sans JP', sans-serif;
        color: #fff;
        background-color: #F1A01A;
        padding: 10px 16px;
        border-radius: 7px;
        cursor: pointer;
        &.tab{
            display: block;
            width: 200px;
            font-size: 1.2rem;
        }
    }
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
    word-break: break-all;
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
    &.sp{
        margin-top: 16px;
        margin-left: 0;
        width: 40px;
        height: 24px;
    }
    @media screen and (min-width: 768px){
        width: 50px;
        height: 24px;
        margin-left: 0;
    }
`

// ModalContainer

const ModalContainer = styled.div`
    width: 100%;
    display: none;
    &.open{
        display: block;
    }
`

const ModalBack = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.7);
`

// TicketFormContainer

const TicketItemContainer = styled.div`
    width: 584px;
    height: 695px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 250;
    background-color: #fff;
    border-radius: 24px;
`

const TicketTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 24px 24px 8px;
`

const TicketText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 0 24px 4px;
`

const TicketCautionText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin: 0 24px 24px;
`

// TicketFormContainer

const TicketFormContainer = styled.form`
`

// ContactFormContainer

const TicketFormLabel = styled.label`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
`

const TicketFormGroup = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 16px;
    border-top: 2px solid #BEBEBE;
    padding-top: 24px;
    &.right{
        text-align: right;
        border: none;
        padding: 0;
    }
`

const TicketFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

// input:text

const TicketFormTextField = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    margin: 0 auto;
    width: 93.5%;
    margin-top: 4px;
    margin-bottom: 16px;
    &:focus{
        outline: none;
    }
    &.date_and_title{
        background-color: #F0F0F0;
        margin-bottom: 24px;
        width: 85%;
        margin-top: 0;
    }
`

// input:number

const TicketFormNumber = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    border: 1px solid #BEBEBE;
    padding: 8px 16px;
    border-radius: 7px;
    width: 50px;
    display: block;
    margin-top: 4px;
    margin-bottom: 16px;
    &:focus{
        outline: none;
    }
`

const TicketFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 8px;
`