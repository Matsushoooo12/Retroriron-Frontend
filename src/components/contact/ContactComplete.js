import React from 'react'
import styled from '@emotion/styled';

const ContactComplete2 = ({values}) => {
    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        return location.reload();
    }
    return (
        <ContactContainer>
            <ContactTitle>お問い合わせ完了</ContactTitle>
            <ContactText>
                お問い合わせありがとうございます。<br/>
                下記の内容で、お問い合わせを受付しました。<br/>
                担当者から3営業日以内に折り返しご連絡いたしますので、しばらくお待ちください。
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
                    <ContactFormSubmitButton type="button" onClick={handleClick} value="お問い合わせに戻る" />
                </ContactFormSubmitButtonContainer>
            </ContactFormContainer>
        </ContactContainer>
    )
}

export default ContactComplete2

// ContactContainer

const ContactContainer = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto 72px;
    height: 100%;
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
    border-bottom: 1px solid #BEBEBE;
    margin-bottom: 28px;
    @media screen and (min-width: 600px){
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        padding-bottom: 16px;
        border-bottom: 1px solid #BEBEBE;
    }
    @media screen and (min-width: 1024px){
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding-bottom: 16px;
        border-bottom: 1px solid #BEBEBE;
        margin-bottom: 40px;
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
    background-color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 7px 16px;
    border: 1px solid #BEBEBE;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
    @media screen and (min-width: 600px){
        background-color: #fff;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 8px 16px;
        border: 1px solid #BEBEBE;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 16px;
    }
    @media screen and (min-width: 1024px){
        background-color: #fff;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 8px 16px;
        border: 1px solid #BEBEBE;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 16px;
    }
`