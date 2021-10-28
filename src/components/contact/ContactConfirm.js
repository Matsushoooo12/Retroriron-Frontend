import React, { useState } from 'react'
import styled from '@emotion/styled';
import { createContact } from '../../api';
import ContactComplete from './ContactComplete';

const ContactConfirm2 = (props) => {
    const {values, hideConfirmation} = props

    const value = ({
        name: values.name,
        email: values.email,
        phone: values.phone,
        content: values.contact
    })

    // isCompleteVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    // isCompleteVisibleの初期値はfalseで入力内容確認画面は非表示に
    const [isCompleteVisible, setIsCompleteVisible] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await createContact(value);
            console.log(res)
            setIsCompleteVisible(true)
        } catch(e){
            console.log(e)
        }
    }

    console.log(isCompleteVisible)
    return (
        <>
            {!isCompleteVisible ? (
                // PC
                <ContactContainer>
                    <ContactTitle>お問い合わせ内容の確認</ContactTitle>
                    <ContactText>
                        レトロリロンへの出演依頼等、お気軽にお問い合わせください。<br/>
                        担当者から折り返しご連絡いたします。
                    </ContactText>
                    <ContactText caution>
                        ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
                    </ContactText>
                    <ContactFormContainer>
                        <ContactFormGroup>
                            <ContactFormLabel htmlFor="name">名前
                                <ContactFormRequiredSign>*</ContactFormRequiredSign>
                            </ContactFormLabel>
                            <ContactFormTextField
                                disabled
                                value={values.name}
                                type="text"
                                name="name"
                            />
                        </ContactFormGroup>
                        <ContactFormGroup>
                            <ContactFormLabel htmlFor="email">メールアドレス
                                <ContactFormRequiredSign>*</ContactFormRequiredSign>
                            </ContactFormLabel>
                            <ContactFormTextField
                                disabled
                                value={values.email}
                                type="email"
                                name="email"
                            />
                        </ContactFormGroup>
                        <ContactFormGroup>
                            <ContactFormLabel htmlFor="phone">電話番号</ContactFormLabel>
                            <ContactFormTextField
                                disabled
                                type="number"
                                name="phone"
                                value={values.phone}
                            />
                        </ContactFormGroup>
                        <ContactFormGroup>
                            <ContactFormLabel htmlFor="contact">お問い合わせ内容
                                <ContactFormRequiredSign>*</ContactFormRequiredSign>
                            </ContactFormLabel>
                            <ContactFormTextArea
                                disabled
                                value={values.contact}
                                type="text"
                                name="contact"
                                rows="8"
                                minLength="1"
                                maxLength="500"
                            />
                        </ContactFormGroup>
                        <ContactFormSubmitButtonContainer>
                            <ContactFormSubmitButton back type="button" value="戻る" onClick={hideConfirmation} />
                            <ContactFormSubmitButton type="submit" value="送信する" onClick={(e) => handleSubmit(e)} />
                        </ContactFormSubmitButtonContainer>
                    </ContactFormContainer>
                </ContactContainer>
            ):(
                <ContactComplete
                    values={values}
                />
            )}
        </>
    )
}

export default ContactConfirm2

// ContactContainer

const ContactContainer = styled.div`
    display: block;
    width: 240px;
    margin: 0 auto 72px;
    height: 100%;
    @media screen and (min-width: 300px){
        width: 100%;
    }
    @media screen and (min-width: 600px){
        display: block;
        width: 80%;
        margin: 0 auto 72px;
        height: 100%;
    }
    @media screen and (min-width: 900px){
        padding-bottom: 160px;
    }
    @media screen and (min-width: 1024px){
        display: block;
        margin: 0 auto;
        height: 100%;
        width: 600px;
        padding-bottom: 160px;
    }
`

const ContactTitle = styled.h1`
    font-weight: 700;
    font-size: 2.0rem;
    padding-bottom: 16px;
    @media screen and (min-width: 600px){
        font-weight: 700;
        font-size: 2.0rem;
        padding-bottom: 16px;
    }
    @media screen and (min-width: 1024px){
        font-weight: 700;
        font-size: 2.4rem;
        padding-bottom: 16px;
    }
`

const ContactText = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding-bottom: 16px;
    ${props => props.caution && `
        font-weight: 700;
        font-size: 1.0rem;
        line-height: 1.6rem;
    `}
    border-bottom: 1px solid #BEBEBE;
    &:first-of-type{
        border-bottom: 0;
    }
    &:last-of-type{
        margin-bottom: 28px;
    }
    @media screen and (min-width: 600px){
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        padding-bottom: 16px;
        ${props => props.caution && `
            font-weight: 700;
            font-size: 1.0rem;
            line-height: 1.6rem;
        `}
        border-bottom: 1px solid #BEBEBE;
        &:first-of-type{
            border-bottom: 0;
        }
        &:last-of-type{
            margin-bottom: 28px;
        }
    }
    @media screen and (min-width: 1024px){
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding-bottom: 16px;
        ${props => props.caution && `
            font-weight: 700;
            font-size: 1.1rem;
            line-height: 2.4rem;
        `}
        border-bottom: 1px solid #BEBEBE;
        &:first-of-type{
            border-bottom: 0;
        }
        &:last-of-type{
            margin-bottom: 40px;
        }
    }
`

// FormContainer

const ContactFormContainer = styled.form`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media screen and (min-width: 600px){
        width: 90%;
        height: 100%;
        margin: 0 auto;
    }
    @media screen and (min-width: 1024px){
        width: 560px;
        height: 100%;
        margin: 0 auto;
    }
`

const ContactFormGroup = styled.div`
    display: block;
    margin-bottom: 16px;
    @media screen and (min-width: 600px){
        display: block;
        margin-bottom: 16px;
    }
    @media screen and (min-width: 1024px){
        display: block;
        margin-bottom: 16px;
    }
`

const ContactFormLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 700;
    @media screen and (min-width: 600px){
        font-size: 1.4rem;
        font-weight: 700;
    }
    @media screen and (min-width: 1024px){
        font-size: 1.6rem;
        font-weight: 700;
    }
`

const ContactFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
    @media screen and (min-width: 600px){
        font-size: 1.2rem;
        font-weight: 700;
        color: #F42626;
        margin-left: 4px;
        margin-right: 16px;
    }
    @media screen and (min-width: 1024px){
        font-size: 1.2rem;
        font-weight: 700;
        color: #F42626;
        margin-left: 4px;
        margin-right: 16px;
    }
`

const ContactFormTextField = styled.input`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    background-color: #F0F0F0;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
    @media screen and (min-width: 600px){
        font-size: 1.4rem;
        font-weight: 500;
        padding: 8px 16px;
        display: block;
        border: 1px solid #BEBEBE;
        border-radius: 7px;
        width: 100%;
        background-color: #F0F0F0;
        margin-top: 8px;
        &:focus{
            outline: none;
        }
    }
    @media screen and (min-width: 1024px){
        font-size: 1.6rem;
        font-weight: 500;
        padding: 8px 16px;
        display: block;
        border: 1px solid #BEBEBE;
        border-radius: 7px;
        width: 100%;
        background-color: #F0F0F0;
        margin-top: 8px;
        &:focus{
            outline: none;
        }
    }
`

const ContactFormTextArea = styled.textarea`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    resize: none;
    background-color: #F0F0F0;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
    @media screen and (min-width: 600px){
        font-size: 1.4rem;
        font-weight: 500;
        padding: 8px 16px;
        display: block;
        border: 1px solid #BEBEBE;
        border-radius: 7px;
        width: 100%;
        background-color: #F0F0F0;
        margin-top: 8px;
        &:focus{
            outline: none;
        }
    }
    @media screen and (min-width: 1024px){
        font-size: 1.6rem;
        font-weight: 500;
        padding: 8px 16px;
        display: block;
        border: 1px solid #BEBEBE;
        border-radius: 7px;
        width: 100%;
        resize: none;
        background-color: #F0F0F0;
        margin-top: 8px;
        &:focus{
            outline: none;
        }
    }
`

const ContactFormSubmitButtonContainer = styled.div`
    display: block;
    text-align: center;
    @media screen and (min-width: 600px){
        display: block;
        text-align: right;
    }
    @media screen and (min-width: 1024px){
        display: block;
        text-align: right;
    }
`

const ContactFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
    ${props => props.back && `
        background-color: #fff;
        border: 2px solid #F1A11B;
        color: #F1A11B;
        padding: 6px 16px;
        margin-right: 16px;
    `}
    @media screen and (min-width: 600px){
        background-color: #F1A11B;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 8px 16px;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 16px;
        ${props => props.back && `
            background-color: #BEBEBE;
            margin-right: 16px;
        `}
    }
    @media screen and (min-width: 1024px){
        background-color: #F1A11B;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 8px 16px;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 16px;
        ${props => props.back && `
            background-color: #BEBEBE;
            margin-right: 16px;
        `}
    }
`