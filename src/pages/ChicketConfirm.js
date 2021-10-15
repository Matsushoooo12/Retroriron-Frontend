import React, { useState } from 'react'
import styled from '@emotion/styled';
import { createChicket } from '../api';
import ChicketComplete from './ChicketComplete';

const ChicketConfirm = (props) => {
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
            const res = await createChicket(value);
            console.log(res)
            setIsCompleteVisible(true)
        } catch(e){
            console.log(e)
        }
    }



    return (
        <>
            {!isCompleteVisible ? (
                <ChicketItemContainer>
                    <ChicketTitle>チケット予約内容の確認</ChicketTitle>
                    <ChicketText>
                        ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                        当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
                    </ChicketText>
                    <ChicketCautionText>
                        ※下記のライブのお申し込みでお間違いないかご確認ください。
                    </ChicketCautionText>
                    <ChicketFormContainer>
                        <ChicketFormTextField
                            className="date_and_title"
                            type="text"
                            value={value.dateAndTitle}
                            disabled
                        />
                        <ChicketFormGroup>
                            <ChicketFormLabel htmlFor="nameKana">ナマエ
                                <ChicketFormRequiredSign>*</ChicketFormRequiredSign>
                            </ChicketFormLabel>
                            <ChicketFormTextField
                                name="nameKana"
                                type="text"
                                value={value.nameKana}
                                disabled
                                className="disabled"
                            />
                            <ChicketFormLabel htmlFor="email">メールアドレス
                                <ChicketFormRequiredSign>*</ChicketFormRequiredSign>
                            </ChicketFormLabel>
                            <ChicketFormTextField
                                name="email"
                                type="email"
                                value={value.email}
                                disabled
                                className="disabled"
                            />
                            <ChicketFormLabel htmlFor="number">枚数
                                <ChicketFormRequiredSign>*</ChicketFormRequiredSign>
                            </ChicketFormLabel>
                            <ChicketFormNumber
                                name="number"
                                type="number"
                                value={value.number}
                                disabled
                                className="disabled"
                            />
                            <ChicketFormLabel htmlFor="description">備考</ChicketFormLabel>
                            <ChicketFormTextField
                                name="description"
                                type="text"
                                value={value.description}
                                disabled
                                className="disabled"
                            />
                        </ChicketFormGroup>
                        <ChicketFormGroup className="right">
                            <ChicketFormSubmitButton type="button" className="back" value="戻る" onClick={hideConfirmation} />
                            <ChicketFormSubmitButton type="submit" value="予約する" onClick={(e) => handleSubmit(e)} />
                        </ChicketFormGroup>
                    </ChicketFormContainer>
                </ChicketItemContainer>
            ):(
                <ChicketComplete
                    values={values}
                />
            )}
        </>
    )
}

export default ChicketConfirm

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
    &.disabled{
        background-color: #F0F0F0;
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
    margin-left: 24px;
    &.back{
        background-color: #BEBEBE;
    }
`