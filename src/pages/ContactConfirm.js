import React, { useState } from 'react'
import styled from '@emotion/styled';
import { createContact } from '../api';
import ContactComplete from './ContactComplete';

const ContactConfirm = (props) => {
    const {values, hideConfirmation} = props

    const [value, setValue] = useState({
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
        // <ContactContainer>
        <>
            {!isCompleteVisible ? (
                <>
                <ContactTextContainer>
                    <ContactTitle>お問い合わせ内容の確認</ContactTitle>
                    <ContactText>
                        レトロリロンへの出演依頼等、お気軽にお問い合わせください。<br/>
                        担当者から折り返しご連絡いたします。
                    </ContactText>
                    <ContactTextCaution>
                        ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
                    </ContactTextCaution>
                </ContactTextContainer>
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
                    <ContactFormGroup className="right">
                        <ContactFormSubmitButton type="button" className="back" value="戻る" onClick={hideConfirmation} />
                        <ContactFormSubmitButton type="submit" value="送信する" onClick={(e) => handleSubmit(e)} />
                    </ContactFormGroup>
                </ContactFormContainer>
                </>
            ):(
                <ContactComplete
                    values={values}
                />
            )}
        </>
    )
}

export default ContactConfirm

// ContactContainer

const ContactContainer = styled.div`
    margin-top: 64px;
    width: 100%;
`

// ContactTextContainer

const ContactTextContainer = styled.div`
    border-bottom: 1px solid #BEBEBE;
    width: 100%;
    margin-bottom: 72px;
`

const ContactTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 16px;
`

const ContactText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
`

const ContactTextCaution = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 1.6rem;
`

// ContactFormContainer

const ContactFormContainer = styled.form`
    margin-left: 16px;
`

const ContactFormLabel = styled.label`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
`

const ContactFormGroup = styled.div`
    width: 80%;
    margin-bottom: 16px;
    &.right{
        text-align: right;
    }
`

const ContactFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

// input:text

const ContactFormTextField = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    margin-top: 8px;
    width: 93.5%;
    background-color: #F0F0F0;
    &:focus{
        outline: none;
    }
`

// textarea

const ContactFormTextArea = styled.textarea`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    margin-top: 8px;
    width: 93.5%;
    resize: none;
    background-color: #F0F0F0;
    &:focus{
        outline: none;
    }
`

const ContactFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    margin-top: 16px;
    margin-bottom: 24px;
    margin-left: 24px;
    cursor: pointer;
    &.back{
        background-color: #BEBEBE;
    }
`
