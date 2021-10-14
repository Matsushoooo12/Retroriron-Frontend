import React, { useState } from 'react'
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import ContactConfirm from './ContactConfirm';

const Contact = () => {
    // useForm
    const { register, formState: { errors }, getValues, handleSubmit } = useForm();

    // isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    // isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

    //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
    const hideConfirmation = () => setIsConfirmationVisible(false)

    //submitボタンを押した時、入力内容確認画面を表示させる
    const onSubmitData = () => setIsConfirmationVisible(true)

    return (
        <>
            <Helmet>
                <title>Contact page</title>
                <meta name="the Contact page of a pop band called Retroriron." content="contact page" />
            </Helmet>
                <ContactContainer>
                    {!isConfirmationVisible ? (
                        <>
                            <ContactTextContainer>
                                <ContactTitle>お問い合わせフォーム</ContactTitle>
                                <ContactText>
                                    レトロリロンへの出演依頼等、お気軽にお問い合わせください。<br/>
                                    担当者から折り返しご連絡いたします。
                                </ContactText>
                                <ContactTextCaution>
                                    ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
                                </ContactTextCaution>
                            </ContactTextContainer>
                            <ContactFormContainer onSubmit={handleSubmit(onSubmitData)}>
                                <ContactFormGroup>
                                    <ContactFormLabel htmlFor="name">名前
                                        <ContactFormRequiredSign>*</ContactFormRequiredSign>
                                        {errors.name && <ContactFormRequiredSign>こちらは必須項目です。</ContactFormRequiredSign>}
                                    </ContactFormLabel>
                                    <ContactFormTextField
                                        type="text"
                                        name="name"
                                        {...register('name', {required: true})}
                                    />
                                </ContactFormGroup>
                                <ContactFormGroup>
                                    <ContactFormLabel htmlFor="email">メールアドレス
                                        <ContactFormRequiredSign>*</ContactFormRequiredSign>
                                        {errors.email && <ContactFormRequiredSign>こちらは必須項目です。</ContactFormRequiredSign>}
                                    </ContactFormLabel>
                                    <ContactFormTextField
                                        type="email"
                                        name="email"
                                        {...register('email', {required: true})}
                                    />
                                </ContactFormGroup>
                                <ContactFormGroup>
                                    <ContactFormLabel htmlFor="phone">電話番号</ContactFormLabel>
                                    <ContactFormTextField
                                        type="number"
                                        name="phone"
                                        {...register('phone', {required: false})}
                                    />
                                </ContactFormGroup>
                                <ContactFormGroup>
                                    <ContactFormLabel htmlFor="contact">お問い合わせ内容
                                        <ContactFormRequiredSign>*</ContactFormRequiredSign>
                                        {errors.contact && <ContactFormRequiredSign>こちらは必須項目です。</ContactFormRequiredSign>}
                                    </ContactFormLabel>
                                    <ContactFormTextArea
                                        type="text"
                                        name="contact"
                                        {...register('contact', {required: true})}
                                        rows="8"
                                        minLength="1"
                                        maxLength="500"
                                    />
                                </ContactFormGroup>
                                <ContactFormGroup className="right">
                                    <ContactFormSubmitButton type="submit" value="内容を確認する" />
                                </ContactFormGroup>
                            </ContactFormContainer>
                        </>
                    ):(
                        <ContactConfirm
                            values={getValues()}
                            hideConfirmation={hideConfirmation}
                        />
                    )}
                </ContactContainer>
        </>
    )
}

export default Contact

// ContactContainer

const ContactContainer = styled.div`
    margin-top: 64px;
    width: 85%;
    @media screen and (min-width: 1260px){
        margin-left: 150px;
    }
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
    cursor: pointer;
`