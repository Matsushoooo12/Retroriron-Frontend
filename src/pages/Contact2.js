import React, { useState } from 'react'
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import ContactConfirm from '../components/contact/ContactConfirm';

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
            {/* PC */}
            <PcContactContainer>
                <PcContactTitle>お問い合わせフォーム</PcContactTitle>
                <PcContactText>
                    レトロリロンへの出演依頼等、お気軽にお問い合わせください。<br/>
                    担当者から折り返しご連絡いたします。
                </PcContactText>
                <PcContactText caution>
                    ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
                </PcContactText>
                <PcContactFormContainer onSubmit={handleSubmit(onSubmitData)}>
                    <PcContactFormGroup>
                        <PcContactFormLabel htmlFor="name">名前
                            <PcContactFormRequiredSign>*</PcContactFormRequiredSign>
                            {errors.name && <PcContactFormRequiredSign>こちらは必須項目です。</PcContactFormRequiredSign>}
                        </PcContactFormLabel>
                        <PcContactFormTextField
                            type="text"
                            name="name"
                            {...register('name', {required: true})}
                        />
                    </PcContactFormGroup>
                    <PcContactFormGroup>
                        <PcContactFormLabel htmlFor="email">メールアドレス
                            <PcContactFormRequiredSign>*</PcContactFormRequiredSign>
                            {errors.email && <PcContactFormRequiredSign>こちらは必須項目です。</PcContactFormRequiredSign>}
                        </PcContactFormLabel>
                        <PcContactFormTextField
                            type="email"
                            name="email"
                            {...register('email', {required: true})}
                        />
                    </PcContactFormGroup>
                    <PcContactFormGroup>
                        <PcContactFormLabel htmlFor="phone">電話番号</PcContactFormLabel>
                        <PcContactFormTextField
                            type="number"
                            name="phone"
                            {...register('phone', {required: false})}
                        />
                    </PcContactFormGroup>
                    <PcContactFormGroup>
                        <PcContactFormLabel htmlFor="contact">お問い合わせ内容
                            <PcContactFormRequiredSign>*</PcContactFormRequiredSign>
                            {errors.contact && <PcContactFormRequiredSign>こちらは必須項目です。</PcContactFormRequiredSign>}
                        </PcContactFormLabel>
                        <PcContactFormTextArea
                            type="text"
                            name="contact"
                            rows="8"
                            minLength="1"
                            {...register('contact', {required: true})}
                        />
                    </PcContactFormGroup>
                    <PcContactFormSubmitButtonContainer>
                        <PcContactFormSubmitButton type="submit" value="内容を確認する" />
                    </PcContactFormSubmitButtonContainer>
                </PcContactFormContainer>
            </PcContactContainer>
            {/* Tab */}
            <TabContactContainer>
                <TabContactTitle>お問い合わせフォーム</TabContactTitle>
                <TabContactText>
                    レトロリロンへの出演依頼等、お気軽にお問い合わせください。<br/>
                    担当者から折り返しご連絡いたします。
                </TabContactText>
                <TabContactText caution>
                    ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
                </TabContactText>
                <TabContactFormContainer onSubmit={handleSubmit(onSubmitData)}>
                    <TabContactFormGroup>
                        <TabContactFormLabel htmlFor="name">名前
                            <TabContactFormRequiredSign>*</TabContactFormRequiredSign>
                            {errors.name && <TabContactFormRequiredSign>こちらは必須項目です。</TabContactFormRequiredSign>}
                        </TabContactFormLabel>
                        <TabContactFormTextField
                            type="text"
                            name="name"
                            {...register('name', {required: true})}
                        />
                    </TabContactFormGroup>
                    <TabContactFormGroup>
                        <TabContactFormLabel htmlFor="email">メールアドレス
                            <TabContactFormRequiredSign>*</TabContactFormRequiredSign>
                            {errors.email && <TabContactFormRequiredSign>こちらは必須項目です。</TabContactFormRequiredSign>}
                        </TabContactFormLabel>
                        <TabContactFormTextField
                            type="email"
                            name="email"
                            {...register('email', {required: true})}
                        />
                    </TabContactFormGroup>
                    <TabContactFormGroup>
                        <TabContactFormLabel htmlFor="phone">電話番号</TabContactFormLabel>
                        <TabContactFormTextField
                            type="number"
                            name="phone"
                            {...register('phone', {required: false})}
                        />
                    </TabContactFormGroup>
                    <TabContactFormGroup>
                        <TabContactFormLabel htmlFor="contact">お問い合わせ内容
                            <TabContactFormRequiredSign>*</TabContactFormRequiredSign>
                            {errors.contact && <TabContactFormRequiredSign>こちらは必須項目です。</TabContactFormRequiredSign>}
                        </TabContactFormLabel>
                        <TabContactFormTextArea
                            type="text"
                            name="contact"
                            rows="8"
                            minLength="1"
                            {...register('contact', {required: true})}
                        />
                    </TabContactFormGroup>
                    <TabContactFormSubmitButtonContainer>
                        <TabContactFormSubmitButton type="submit" value="内容を確認する" />
                    </TabContactFormSubmitButtonContainer>
                </TabContactFormContainer>
            </TabContactContainer>
            {/* SP */}
            <SpContactContainer>
                <SpContactTitle>お問い合わせフォーム</SpContactTitle>
                <SpContactText>
                    レトロリロンへの出演依頼等、お気軽にお問い合わせください。<br/>
                    担当者から折り返しご連絡いたします。
                </SpContactText>
                <SpContactText caution>
                    ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
                </SpContactText>
                <SpContactFormContainer onSubmit={handleSubmit(onSubmitData)}>
                    <SpContactFormGroup>
                        <SpContactFormLabel htmlFor="name">名前
                            <SpContactFormRequiredSign>*</SpContactFormRequiredSign>
                            {errors.name && <SpContactFormRequiredSign>こちらは必須項目です。</SpContactFormRequiredSign>}
                        </SpContactFormLabel>
                        <SpContactFormTextField
                            type="text"
                            name="name"
                            {...register('name', {required: true})}
                        />
                    </SpContactFormGroup>
                    <SpContactFormGroup>
                        <SpContactFormLabel htmlFor="email">メールアドレス
                            <SpContactFormRequiredSign>*</SpContactFormRequiredSign>
                            {errors.email && <SpContactFormRequiredSign>こちらは必須項目です。</SpContactFormRequiredSign>}
                        </SpContactFormLabel>
                        <SpContactFormTextField
                            type="email"
                            name="email"
                            {...register('email', {required: true})}
                        />
                    </SpContactFormGroup>
                    <SpContactFormGroup>
                        <SpContactFormLabel htmlFor="phone">電話番号</SpContactFormLabel>
                        <SpContactFormTextField
                            type="number"
                            name="phone"
                            {...register('phone', {required: false})}
                        />
                    </SpContactFormGroup>
                    <SpContactFormGroup>
                        <SpContactFormLabel htmlFor="contact">お問い合わせ内容
                            <SpContactFormRequiredSign>*</SpContactFormRequiredSign>
                            {errors.contact && <SpContactFormRequiredSign>こちらは必須項目です。</SpContactFormRequiredSign>}
                        </SpContactFormLabel>
                        <SpContactFormTextArea
                            type="text"
                            name="contact"
                            rows="8"
                            minLength="1"
                            {...register('contact', {required: true})}
                        />
                    </SpContactFormGroup>
                    <SpContactFormSubmitButtonContainer>
                        <SpContactFormSubmitButton type="submit" value="内容を確認する" />
                    </SpContactFormSubmitButtonContainer>
                </SpContactFormContainer>
            </SpContactContainer>
        </>
    )
}

export default Contact

// PC

const PcContactContainer = styled.div`
    display: none;
    @media screen and (min-width: 1024px){
        display: block;
        margin: 0 auto;
        height: 100%;
        width: 600px;
        padding-bottom: 160px;
    }
`

const PcContactTitle = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    padding-bottom: 16px;
`

const PcContactText = styled.p`
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
`

// PC-FormContainer

const PcContactFormContainer = styled.form`
    width: 560px;
    height: 100%;
    margin: 0 auto;
`

const PcContactFormGroup = styled.div`
    display: block;
    margin-bottom: 16px;
`

const PcContactFormLabel = styled.label`
    font-size: 1.6rem;
    font-weight: 700;
`

const PcContactFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

const PcContactFormTextField = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
`

const PcContactFormTextArea = styled.textarea`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    resize: none;
    background-color: #fff;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
`

const PcContactFormSubmitButtonContainer = styled.div`
    display: block;
    text-align: right;
`

const PcContactFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
`

// TAB

const TabContactContainer = styled.div`
    display: none;
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
        display: none;
    }
`

const TabContactTitle = styled.h1`
    font-weight: 700;
    font-size: 2.0rem;
    padding-bottom: 16px;
`

const TabContactText = styled.p`
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
`

// Tab-FormContainer

const TabContactFormContainer = styled.form`
    width: 90%;
    height: 100%;
    margin: 0 auto;
`

const TabContactFormGroup = styled.div`
    display: block;
    margin-bottom: 16px;
`

const TabContactFormLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 700;
`

const TabContactFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

const TabContactFormTextField = styled.input`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
`

const TabContactFormTextArea = styled.textarea`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    resize: none;
    background-color: #fff;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
`

const TabContactFormSubmitButtonContainer = styled.div`
    display: block;
    text-align: right;
`

const TabContactFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
`

// SP

const SpContactContainer = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto 72px;
    height: 100%;
    @media screen and (min-width: 600px){
        display: none;
    }
`

const SpContactTitle = styled.h1`
    font-weight: 700;
    font-size: 2.0rem;
    padding-bottom: 16px;
`

const SpContactText = styled.p`
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
`

// Sp-FormContainer

const SpContactFormContainer = styled.form`
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

const SpContactFormGroup = styled.div`
    display: block;
    margin-bottom: 16px;
`

const SpContactFormLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 700;
`

const SpContactFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

const SpContactFormTextField = styled.input`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
`

const SpContactFormTextArea = styled.textarea`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    width: 100%;
    resize: none;
    background-color: #fff;
    margin-top: 8px;
    &:focus{
        outline: none;
    }
`

const SpContactFormSubmitButtonContainer = styled.div`
    display: block;
    text-align: center;
`

const SpContactFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
`