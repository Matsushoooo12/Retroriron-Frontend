import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import SpTicketConfirm from './SpTicketConfirm';
import { useHistory } from 'react-router-dom';

const SpTicketForm = () => {
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

    // useHistory

    const history = useHistory();

    const backLivePage = () => {
        history.push("/live")
    }

    return (
        <>
            <Helmet>
                <title>Live Ticket page</title>
                <meta name="the Live ticket page of a pop band called Retroriron." content="live ticket page" />
            </Helmet>
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
                        <TicketFormGroup submitButton>
                            <TicketFormSubmitButton back type="button" value="キャンセル" onClick={backLivePage} />
                            <TicketFormSubmitButton type="submit" value="確認する" />
                        </TicketFormGroup>
                    </TicketFormContainer>
                </TicketItemContainer>
            ):(
                <SpTicketConfirm
                    values={getValues()}
                    hideConfirmation={hideConfirmation}
                />
            )}
        </>
    )
}

export default SpTicketForm

// TicketFormContainer

const TicketItemContainer = styled.div`
    background-color: #fff;
`

const TicketTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 8px;
`

const TicketText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 8px;
`

const TicketCautionText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin-bottom: 24px;
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
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: 16px;
    border-top: 2px solid #BEBEBE;
    padding-top: 24px;
    ${props => props.submitButton && `
        display: flex;
        justify-content: center;
        border: none;
        padding-top: 0;
    `}
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
    width: 100%;
    margin-top: 4px;
    margin-bottom: 16px;
    &:focus{
        outline: none;
    }
    &.date_and_title{
        background-color: #F0F0F0;
        margin-bottom: 24px;
        width: 100%;
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
    width: 76px;
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
    margin-left: 12px;
    ${props => props.back && `
        border: 2px solid #F1A11B;
        color: #F1A11B;
        background-color: #fff;
        margin-right: 12px;
    `}
`