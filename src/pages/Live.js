import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import { getLive } from '../api';
import { useForm } from 'react-hook-form';
import ChicketConfirm from './ChicketConfirm';

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

    // ChicketValue
    const [chicketValue, setChicketValue] = useState({
        dateAndTitle: "",
        nameKana: "",
        email: "",
        number: "",
        description: "",
        open: false
    })

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

    console.log(chicketValue.open)

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
                                    <LiveChicketButton onClick={() => setChicketValue({dateAndTitle: item.date + "    " + item.title, open: true})}>チケットをご希望の方はこちら</LiveChicketButton>
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
                    className={chicketValue.open ? "open" : ""}
                >
                    <ModalBack onClick={() => setChicketValue({open: false})}></ModalBack>
                    {!isConfirmationVisible ? (
                        <ChicketItemContainer>
                            <ChicketTitle>チケット予約フォーム</ChicketTitle>
                            <ChicketText>
                                ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                                当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
                            </ChicketText>
                            <ChicketCautionText>
                                ※下記のライブのお申し込みでお間違いないかご確認ください。
                            </ChicketCautionText>
                            <ChicketFormContainer onSubmit={handleSubmit(onSubmitData)}>
                                <ChicketFormTextField
                                    className="date_and_title"
                                    type="text"
                                    name="dateAndTitle"
                                    value={chicketValue.dateAndTitle}
                                    readOnly
                                    {...register('dateAndTitle', {required: true})}
                                />
                                <ChicketFormGroup>
                                    <ChicketFormLabel htmlFor="nameKana">ナマエ
                                        <ChicketFormRequiredSign>*</ChicketFormRequiredSign>
                                        {errors.nameKana && <ChicketFormRequiredSign>こちらは必須項目です。</ChicketFormRequiredSign>}
                                    </ChicketFormLabel>
                                    <ChicketFormTextField
                                        name="nameKana"
                                        type="text"
                                        {...register('nameKana', {required: true})}
                                    />
                                    <ChicketFormLabel htmlFor="email">メールアドレス
                                        <ChicketFormRequiredSign>*</ChicketFormRequiredSign>
                                        {errors.email && <ChicketFormRequiredSign>こちらは必須項目です。</ChicketFormRequiredSign>}
                                    </ChicketFormLabel>
                                    <ChicketFormTextField
                                        name="email"
                                        type="email"
                                        {...register('email', {required: true})}
                                    />
                                    <ChicketFormLabel htmlFor="number">枚数
                                        <ChicketFormRequiredSign>*</ChicketFormRequiredSign>
                                        {errors.number && <ChicketFormRequiredSign>こちらは必須項目です。</ChicketFormRequiredSign>}
                                    </ChicketFormLabel>
                                    <ChicketFormNumber
                                        name="number"
                                        type="number"
                                        onChange={(e) => e.target.value}
                                        defaultValue="1"
                                        {...register('number', {required: true})}
                                    />
                                    <ChicketFormLabel htmlFor="description">備考</ChicketFormLabel>
                                    <ChicketFormTextField
                                        name="description"
                                        type="text"
                                        {...register('description', {required: false})}
                                    />
                                </ChicketFormGroup>
                                <ChicketFormGroup className="right">
                                    <ChicketFormSubmitButton type="submit" value="確認する" />
                                </ChicketFormGroup>
                            </ChicketFormContainer>
                        </ChicketItemContainer>
                    ):(
                        <ChicketConfirm
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
    background-color: rgba(0, 0, 0, 0.7)
`

// ChicketFormContainer

const ChicketItemContainer = styled.div`
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

const ChicketTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 24px 24px 8px;
`

const ChicketText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 0 24px 4px;
`

const ChicketCautionText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin: 0 24px 24px;
`

// ChicketFormContainer

const ChicketFormContainer = styled.form`
`

// ContactFormContainer

const ChicketFormLabel = styled.label`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
`

const ChicketFormGroup = styled.div`
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

const ChicketFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

// input:text

const ChicketFormTextField = styled.input`
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

const ChicketFormNumber = styled.input`
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

const ChicketFormSubmitButton = styled.input`
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