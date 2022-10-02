import React, { useState } from 'react';
import styled from '@emotion/styled';
import { createTicket } from '../../api';
import TicketComplete from './TicketComplete';
import { TicketFormLabel } from '../../components/ticket/TicketFormLabel';

const TicketConfirm = (props) => {
  const { ticket, hideConfirmation } = props;

  // isCompleteVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  // isCompleteVisibleの初期値はfalseで入力内容確認画面は非表示に
  const [isCompleteVisible, setIsCompleteVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      await createTicket(ticket);
      setIsCompleteVisible(true);
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
                value={ticket.date}
                disabled
              />
              <TicketDateAndTitleTextField
                type="text"
                value={ticket.title}
                disabled
              />
            </TicketDateAndTitleContainer>
            <TicketFormGroup>
              <TicketFormLabel title="オナマエ" htmlFor="nameKana" />
              <TicketFormTextField
                name="nameKana"
                type="text"
                id="nameKana"
                value={ticket.nameKana}
                disabled
                className="disabled"
              />
              <TicketFormLabel title="メールアドレス" htmlFor="email" />
              <TicketFormTextField
                name="email"
                type="email"
                id="email"
                value={ticket.email}
                disabled
                className="disabled"
              />

              <TicketFormLabel title="枚数" htmlFor="number" />
              <TicketFormNumber
                name="number"
                type="number"
                id="number"
                value={ticket.number}
                disabled
                className="disabled"
              />

              <TicketFormLabel title="備考" htmlFor="description" />
              <TicketFormTextField
                name="description"
                type="text"
                id="description"
                value={ticket.description}
                disabled
                className="disabled"
              />
            </TicketFormGroup>
            <TicketFormGroup className="right">
              <TicketFormSubmitButton
                type="button"
                className="back"
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
        <TicketComplete values={ticket} ticket={ticket} />
      )}
    </>
  );
};

export default TicketConfirm;

// TicketFormContainer

const TicketItemContainer = styled.div`
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
`;

const TicketTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 24px 24px 8px;
`;

const TicketText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 24px 4px;
`;

const TicketCautionText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #f42626;
  margin: 0 24px 24px;
`;

// TicketFormContainer

const TicketFormContainer = styled.form``;

const TicketFormGroup = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 16px;
  border-top: 2px solid #bebebe;
  padding-top: 24px;
  &.right {
    text-align: right;
    border: none;
    padding: 0;
  }
`;

const TicketDateAndTitleContainer = styled.div`
  background-color: #f0f0f0;
  width: 90%;
  margin: 0 auto 24px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  border-radius: 6px;
`;

const TicketDateAndTitleTextField = styled.input`
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  display: inline-block;
  width: 100%;
  height: 100%;
  &:first-of-type {
    width: 120px;
    padding: 0 16px;
  }
`;

const TicketFormTextField = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  color: #292929;
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
  &.date_and_title {
    margin-bottom: 24px;
    width: 90%;
    margin-top: 0;
  }
`;

// input:number

const TicketFormNumber = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid #bebebe;
  padding: 8px 16px;
  border-radius: 7px;
  width: 80px;
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
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 24px;
  &.back {
    background-color: #bebebe;
  }
`;
