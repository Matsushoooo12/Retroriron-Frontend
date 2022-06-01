import React, { useState } from 'react';
import styled from '@emotion/styled';
import { createTicket } from '../../api';
import SpTicketComplete from './SpTicketComplete';

const SpTicketConfirm = (props) => {
  const { values, hideConfirmation } = props;

  const value = {
    date: values.date,
    title: values.title,
    nameKana: values.nameKana,
    email: values.email,
    number: values.number,
    description: values.description,
  };

  // isCompleteVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  // isCompleteVisibleの初期値はfalseで入力内容確認画面は非表示に
  const [isCompleteVisible, setIsCompleteVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const res = await createTicket(value);
      console.log(res);
      setIsCompleteVisible(true);
      window.scroll({ top: 0, behavior: 'smooth' });
    } catch (e) {
      alert(e);
    }
    setIsSubmit(false);
  };

  return (
    <>
      {!isCompleteVisible ? (
        <TicketItemContainer>
          <TicketTitle>チケット予約内容の確認</TicketTitle>
          <TicketText>
            ※こちらはチケットのお取り置きをするためのフォームです。
            <br />
            当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
          </TicketText>
          <TicketCautionText>
            ※下記のライブのお申し込みでお間違いないかご確認ください。
          </TicketCautionText>
          <TicketFormContainer>
            <TicketDateAndTitleContainer>
              <TicketDateAndTitleTextField
                type="text"
                value={value.date}
                disabled
              />
              <TicketDateAndTitleTextField
                type="text"
                value={value.title}
                disabled
              />
            </TicketDateAndTitleContainer>
            <TicketFormGroup>
              <TicketFormLabel htmlFor="nameKana">
                オナマエ
                <TicketFormRequiredSign>*</TicketFormRequiredSign>
              </TicketFormLabel>
              <TicketFormTextField
                name="nameKana"
                type="text"
                id="nameKana"
                value={value.nameKana}
                disabled
                className="disabled"
              />
              <TicketFormLabel htmlFor="email">
                メールアドレス
                <TicketFormRequiredSign>*</TicketFormRequiredSign>
              </TicketFormLabel>
              <TicketFormTextField
                name="email"
                type="email"
                id="email"
                value={value.email}
                disabled
                className="disabled"
              />
              <TicketFormLabel htmlFor="number">
                枚数
                <TicketFormRequiredSign>*</TicketFormRequiredSign>
              </TicketFormLabel>
              <TicketFormNumber
                name="number"
                type="number"
                id="number"
                value={value.number}
                disabled
                className="disabled"
              />
              <TicketFormLabel htmlFor="description">備考</TicketFormLabel>
              <TicketFormTextField
                name="description"
                type="text"
                id="description"
                value={value.description}
                disabled
                className="disabled"
              />
            </TicketFormGroup>
            <TicketFormGroup submitButton>
              <TicketFormSubmitButton
                back
                type="button"
                value="戻る"
                onClick={hideConfirmation}
              />
              <TicketFormSubmitButton
                type="submit"
                value="予約する"
                disabled={isSubmit ? true : false}
                onClick={(e) => handleSubmit(e)}
              />
            </TicketFormGroup>
          </TicketFormContainer>
        </TicketItemContainer>
      ) : (
        <SpTicketComplete values={values} />
      )}
    </>
  );
};

export default SpTicketConfirm;

// TicketFormContainer

const TicketItemContainer = styled.div`
  background-color: #fff;
  display: block;
  padding-bottom: 116px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const TicketTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const TicketText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 8px;
`;

const TicketCautionText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: #f42626;
  margin-bottom: 24px;
`;

// TicketFormContainer

const TicketFormContainer = styled.form``;

// ContactFormContainer

const TicketFormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
`;

const TicketFormGroup = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  border-top: 2px solid #bebebe;
  padding-top: 24px;
  ${(props) =>
    props.submitButton &&
    `
        display: flex;
        justify-content: center;
        border: none;
        padding-top: 0;
    `}
`;

const TicketFormRequiredSign = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f42626;
  margin-left: 4px;
  margin-right: 16px;
`;

// input:text

const TicketDateAndTitleContainer = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  margin: 0 auto 24px;
  height: 100%;
  display: block;
  border-radius: 6px;
  padding: 16px;
`;

const TicketDateAndTitleTextField = styled.input`
  border: none;
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
  width: 100%;
  height: 100%;
`;

const TicketFormTextField = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 8px 16px;
  display: block;
  border: 1px solid #bebebe;
  border-radius: 7px;
  margin: 0 auto;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 16px;
  background-color: #f0f0f0;
  &:focus {
    outline: none;
  }
`;

// input:number

const TicketFormNumber = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid #bebebe;
  padding: 8px 16px;
  border-radius: 7px;
  width: 76px;
  display: block;
  margin-top: 4px;
  margin-bottom: 16px;
  background-color: #f0f0f0;
  &:focus {
    outline: none;
  }
`;

const TicketFormSubmitButton = styled.input`
  background-color: #f1a11b;
  font-size: 1.6rem;
  font-weight: 700;
  color: #292929;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 12px;
  ${(props) =>
    props.back &&
    `
        background-color: #fff;
        border: 2px solid #F1A11B;
        color: #F1A11B;
        padding: 6px 16px;
    `}
`;
