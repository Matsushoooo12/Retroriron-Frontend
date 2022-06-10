import React, { useState } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga4';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import ContactConfirm from '../components/contact/ContactConfirm';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  // useForm
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const location = useLocation();

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(`${process.env.GAID}`);
    ReactGA.send({
      hitType: 'pageview',
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname,
    });
  }, [location]);

  // isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  // isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
  const hideConfirmation = () => setIsConfirmationVisible(false);

  //submitボタンを押した時、入力内容確認画面を表示させる
  const onSubmitData = () => {
    setIsConfirmationVisible(true);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Contact page / レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
          レトロリロン / OFFICIAL SITE 音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトのContactページ。
            レトロリロンへのお問い合わせはこちらからどうぞ。
          "
        />
      </Helmet>
      <Header />
      {!isConfirmationVisible ? (
        <ContactContainer>
          <ContactTitle>お問い合わせフォーム</ContactTitle>
          <ContactText>
            レトロリロンへの出演依頼等、お気軽にお問い合わせください。
            <br />
            担当者から折り返しご連絡いたします。
          </ContactText>
          <ContactText caution>
            ※取得した個人情報は、お問い合わせへの円滑な対応を目的としその他の目的では使用しませんのでご安心ください。
          </ContactText>
          <ContactFormContainer onSubmit={handleSubmit(onSubmitData)}>
            <ContactFormGroup>
              <ContactFormLabel htmlFor="name">
                お名前
                <ContactFormRequiredSign>*</ContactFormRequiredSign>
                {errors.name && (
                  <ContactFormRequiredSign>
                    こちらは必須項目です。
                  </ContactFormRequiredSign>
                )}
              </ContactFormLabel>
              <ContactFormTextField
                type="text"
                id="name"
                name="name"
                {...register('name', { required: true })}
              />
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactFormLabel htmlFor="email">
                メールアドレス
                <ContactFormRequiredSign>*</ContactFormRequiredSign>
                {errors.email && (
                  <ContactFormRequiredSign>
                    こちらは必須項目です。
                  </ContactFormRequiredSign>
                )}
              </ContactFormLabel>
              <ContactFormTextField
                type="email"
                name="email"
                id="email"
                {...register('email', { required: true })}
              />
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactFormLabel htmlFor="phone">電話番号</ContactFormLabel>
              <ContactFormTextField
                type="text"
                name="phone"
                id="phone"
                {...register('phone', { required: false })}
              />
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactFormLabel htmlFor="contact">
                お問い合わせ内容
                <ContactFormRequiredSign>*</ContactFormRequiredSign>
                {errors.contact && (
                  <ContactFormRequiredSign>
                    こちらは必須項目です。
                  </ContactFormRequiredSign>
                )}
              </ContactFormLabel>
              <ContactFormTextArea
                type="text"
                name="contact"
                id="contact"
                rows="8"
                minLength="1"
                maxLength="500"
                {...register('contact', { required: true })}
              />
            </ContactFormGroup>
            <ContactFormSubmitButtonContainer>
              <ContactFormSubmitButton type="submit" value="内容を確認する" />
            </ContactFormSubmitButtonContainer>
          </ContactFormContainer>
        </ContactContainer>
      ) : (
        <ContactConfirm
          values={getValues()}
          hideConfirmation={hideConfirmation}
        />
      )}
      <Footer />
    </>
  );
};

export default Contact;

// ContactContainer

const ContactContainer = styled.div`
  display: block;
  width: 240px;
  margin: 0 auto 72px;
  height: 100%;
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    display: block;
    width: 100%;
    margin: 0 auto 72px;
    height: 100%;
  }
  @media screen and (min-width: 900px) {
    padding-bottom: 160px;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    padding-bottom: 160px;
    max-width: 1200px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

const ContactTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 16px;
  @media screen and (min-width: 600px) {
    font-weight: 700;
    font-size: 2rem;
    padding-bottom: 16px;
  }
  @media screen and (min-width: 1024px) {
    font-weight: 700;
    font-size: 2.4rem;
    padding-bottom: 16px;
  }
`;

const ContactText = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding-bottom: 16px;
  ${(props) =>
    props.caution &&
    `
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.6rem;
    `}
  border-bottom: 1px solid #BEBEBE;
  &:first-of-type {
    border-bottom: 0;
  }
  &:last-of-type {
    margin-bottom: 28px;
  }
  @media screen and (min-width: 600px) {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding-bottom: 16px;
    ${(props) =>
      props.caution &&
      `
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1.6rem;
        `}
    border-bottom: 1px solid #BEBEBE;
    &:first-of-type {
      border-bottom: 0;
    }
    &:last-of-type {
      margin-bottom: 28px;
    }
  }
  @media screen and (min-width: 1024px) {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding-bottom: 16px;
    ${(props) =>
      props.caution &&
      `
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 2.4rem;
        `}
    border-bottom: 1px solid #BEBEBE;
    &:first-of-type {
      border-bottom: 0;
    }
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`;

// FormContainer

const ContactFormContainer = styled.form`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
`;

const ContactFormGroup = styled.div`
  display: block;
  margin-bottom: 16px;
  @media screen and (min-width: 600px) {
    display: block;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    margin-bottom: 16px;
  }
`;

const ContactFormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
    font-weight: 700;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

const ContactFormRequiredSign = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f42626;
  margin-left: 4px;
  margin-right: 16px;
  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
    font-weight: 700;
    color: #f42626;
    margin-left: 4px;
    margin-right: 16px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
    font-weight: 700;
    color: #f42626;
    margin-left: 4px;
    margin-right: 16px;
  }
`;

const ContactFormTextField = styled.input`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 8px 16px;
  display: block;
  border: 1px solid #bebebe;
  border-radius: 7px;
  width: 100%;
  background-color: #fff;
  margin-top: 8px;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #bebebe;
    border-radius: 7px;
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #bebebe;
    border-radius: 7px;
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    &:focus {
      outline: none;
    }
  }
`;

const ContactFormTextArea = styled.textarea`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 8px 16px;
  display: block;
  border: 1px solid #bebebe;
  border-radius: 7px;
  width: 100%;
  resize: none;
  background-color: #fff;
  margin-top: 8px;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #bebebe;
    border-radius: 7px;
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 8px 16px;
    display: block;
    border: 1px solid #bebebe;
    border-radius: 7px;
    width: 100%;
    resize: none;
    background-color: #fff;
    margin-top: 8px;
    &:focus {
      outline: none;
    }
  }
`;

const ContactFormSubmitButtonContainer = styled.div`
  display: block;
  text-align: center;
  @media screen and (min-width: 600px) {
    display: block;
    text-align: right;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    text-align: right;
  }
`;

const ContactFormSubmitButton = styled.input`
  background-color: #f1a11b;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 16px;
  @media screen and (min-width: 600px) {
    background-color: #f1a11b;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
  }
  @media screen and (min-width: 1024px) {
    background-color: #f1a11b;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 16px;
  }
`;
