import React from 'react'
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const ContactConfirm = (props) => {
    const {values, hideConfirmation} = props

    // useForm
    const { register, formState: { errors }, getValues, reset, handleSubmit } = useForm();
    return (
        // <ContactContainer>
            <ContactFormContainer>
                <ContactFormGroup>
                    <ContactFormLabel htmlFor="name">名前
                        <ContactFormRequiredSign>*</ContactFormRequiredSign>
                        {errors.name && <ContactFormRequiredSign>こちらは必須項目です。</ContactFormRequiredSign>}
                    </ContactFormLabel>
                    <ContactFormTextField
                        disabled="true"
                        value={values.name}
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
                        disabled="true"
                        value={values.email}
                        type="email"
                        name="email"
                        {...register('email', {required: true})}
                    />
                </ContactFormGroup>
                <ContactFormGroup>
                    <ContactFormLabel htmlFor="phone">電話番号</ContactFormLabel>
                    <ContactFormTextField
                        disabled="true"
                        type="number"
                        name="phone"
                        {...register('phone', {required: false})}
                        value={values.phone}
                    />
                </ContactFormGroup>
                <ContactFormGroup>
                    <ContactFormLabel htmlFor="contact">お問い合わせ内容
                        <ContactFormRequiredSign>*</ContactFormRequiredSign>
                        {errors.contact && <ContactFormRequiredSign>こちらは必須項目です。</ContactFormRequiredSign>}
                    </ContactFormLabel>
                    <ContactFormTextArea
                        disabled="true"
                        value={values.contact}
                        type="text"
                        name="contact"
                        {...register('contact', {required: true})}
                        rows="8"
                        minLength="1"
                        maxLength="500"
                    />
                </ContactFormGroup>
                <ContactFormGroup className="right">
                    <ContactFormSubmitButton type="button" className="back" value="戻る" onClick={hideConfirmation} />
                    <ContactFormSubmitButton type="submit" value="内容を確認する" />
                </ContactFormGroup>
            </ContactFormContainer>
        // </ContactContainer>
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
