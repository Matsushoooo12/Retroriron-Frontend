import React, { useState } from 'react'
import styled from '@emotion/styled';
import { createTicket } from '../../api';
import TicketComplete from './TicketComplete';

const TicketConfirm = (props) => {
    const {values, hideConfirmation} = props

    const value = ({
        dateAndTitle: values.dateAndTitle,
        nameKana: values.nameKana,
        email: values.email,
        number: values.number,
        description: values.description
    })

    // isCompleteVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    // isCompleteVisibleの初期値はfalseで入力内容確認画面は非表示に
    const [isCompleteVisible, setIsCompleteVisible] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await createTicket(value);
            console.log(res)
            setIsCompleteVisible(true)
        } catch(e){
            console.log(e)
        }
    }



    return (
        <>
            {!isCompleteVisible ? (
                <TicketItemContainer>
                    <TicketTitle>チケット予約内容の確認</TicketTitle>
                    <TicketText>
                        ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                        当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
                    </TicketText>
                    <TicketCautionText>
                        ※下記のライブのお申し込みでお間違いないかご確認ください。
                    </TicketCautionText>
                    <TicketFormContainer>
                        <TicketFormTextField
                            className="date_and_title"
                            type="text"
                            value={value.dateAndTitle}
                            disabled
                        />
                        <TicketFormGroup>
                            <TicketFormLabel htmlFor="nameKana">ナマエ
                                <TicketFormRequiredSign>*</TicketFormRequiredSign>
                            </TicketFormLabel>
                            <TicketFormTextField
                                name="nameKana"
                                type="text"
                                value={value.nameKana}
                                disabled
                                className="disabled"
                            />
                            <TicketFormLabel htmlFor="email">メールアドレス
                                <TicketFormRequiredSign>*</TicketFormRequiredSign>
                            </TicketFormLabel>
                            <TicketFormTextField
                                name="email"
                                type="email"
                                value={value.email}
                                disabled
                                className="disabled"
                            />
                            <TicketFormLabel htmlFor="number">枚数
                                <TicketFormRequiredSign>*</TicketFormRequiredSign>
                            </TicketFormLabel>
                            <TicketFormNumber
                                name="number"
                                type="number"
                                value={value.number}
                                disabled
                                className="disabled"
                            />
                            <TicketFormLabel htmlFor="description">備考</TicketFormLabel>
                            <TicketFormTextField
                                name="description"
                                type="text"
                                value={value.description}
                                disabled
                                className="disabled"
                            />
                        </TicketFormGroup>
                        <TicketFormGroup className="right">
                            <TicketFormSubmitButton type="button" className="back" value="戻る" onClick={hideConfirmation} />
                            <TicketFormSubmitButton type="submit" value="予約する" onClick={(e) => handleSubmit(e)} />
                        </TicketFormGroup>
                    </TicketFormContainer>
                </TicketItemContainer>
            ):(
                <TicketComplete
                    values={values}
                />
            )}
        </>
    )
}

export default TicketConfirm

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
    width: 100%;
    margin-top: 4px;
    margin-bottom: 16px;
    &:focus{
        outline: none;
    }
    &.date_and_title{
        background-color: #F0F0F0;
        margin-bottom: 24px;
        width: 90%;
        margin-top: 0;
    }
    &.disabled{
        background-color: #F0F0F0;
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
    margin-left: 24px;
    &.back{
        background-color: #BEBEBE;
    }
`