import React from 'react'
import styled from '@emotion/styled';

const ContactComplete = ({values}) => {

    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        return location.reload();
    }
    return (
        <>
            <ContactTextContainer>
                <ContactTitle>お問い合わせ完了</ContactTitle>
                <ContactText>
                    お問い合わせありがとうございます。<br/>
                    下記の内容で、お問い合わせを受付しました。<br/>
                    担当者から3営業日以内に折り返しご連絡いたしますので、しばらくお待ちください。
                </ContactText>
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
                    <ContactFormSubmitButton type="button" className="back" onClick={handleClick} value="お問い合わせに戻る"/>
                </ContactFormGroup>
            </ContactFormContainer>
        </>
    )
}

export default ContactComplete

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
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    border: 1px solid #BEBEBE;
    border-radius: 6px;
    margin-top: 16px;
    margin-bottom: 24px;
    margin-left: 24px;
    cursor: pointer;
    background-color: #fff;
`