import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import SpTicketConfirm from './SpTicketConfirm';

const SpTicketForm = (props) => {
  const { date, title } = props;

  // useForm
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  // isCompleteVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  // isCompleteVisibleの初期値はfalseで入力内容確認画面は非表示に
  const [isConfirmVisible, setisConfirmVisible] = useState(false);

  //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
  const hideConfirmation = () => setisConfirmVisible(false);

  //submitボタンを押した時、入力内容確認画面を表示させる
  const onSubmitData = () => {
    setisConfirmVisible(true);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!isConfirmVisible ? (
        <TicketItemContainer>
          <TicketTitle>チケット予約フォーム</TicketTitle>
          <TicketText>
            ※こちらはチケットのお取り置きをするためのフォームです。
            <br />
            当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
          </TicketText>
          <TicketCautionText>
            ※下記のライブのお申し込みでお間違いないかご確認ください。
          </TicketCautionText>
          <TicketFormContainer onSubmit={handleSubmit(onSubmitData)}>
            <TicketDateAndTitleContainer>
              <TicketDateAndTitleTextField
                type="text"
                name="date"
                value={date}
                readOnly
                {...register('date', { required: true })}
              />
              <TicketDateAndTitleTextField
                type="text"
                name="title"
                value={title}
                readOnly
                {...register('title', { required: true })}
              />
            </TicketDateAndTitleContainer>
            <TicketFormGroup>
              <TicketFormLabel htmlFor="nameKana">
                ナマエ
                <TicketFormRequiredSign>*</TicketFormRequiredSign>
                {errors.nameKana && (
                  <TicketFormRequiredSign>
                    こちらは必須項目です。
                  </TicketFormRequiredSign>
                )}
              </TicketFormLabel>
              <TicketFormTextField
                name="nameKana"
                type="text"
                id="nameKana"
                {...register('nameKana', { required: true })}
              />
              <TicketFormLabel htmlFor="email">
                メールアドレス
                <TicketFormRequiredSign>*</TicketFormRequiredSign>
                {errors.email && (
                  <TicketFormRequiredSign>
                    こちらは必須項目です。
                  </TicketFormRequiredSign>
                )}
              </TicketFormLabel>
              <TicketFormTextField
                name="email"
                type="email"
                id="email"
                {...register('email', { required: true })}
              />
              <TicketFormLabel htmlFor="number">
                枚数
                <TicketFormRequiredSign>*</TicketFormRequiredSign>
                {errors.number && (
                  <TicketFormRequiredSign>
                    こちらは必須項目です。
                  </TicketFormRequiredSign>
                )}
              </TicketFormLabel>
              <TicketFormNumber
                name="number"
                type="number"
                id="number"
                onChange={(e) => e.target.value}
                defaultValue="1"
                {...register('number', { required: true })}
              />
              <TicketFormLabel htmlFor="description">備考</TicketFormLabel>
              <TicketFormTextField
                name="description"
                type="text"
                id="description"
                {...register('description', { required: false })}
              />
            </TicketFormGroup>
            <TicketFormGroup submitButton>
              <TicketFormBackButton href="/live">
                キャンセル
              </TicketFormBackButton>
              <TicketFormSubmitButton type="submit" value="確認する" />
            </TicketFormGroup>
          </TicketFormContainer>
        </TicketItemContainer>
      ) : (
        <SpTicketConfirm
          values={getValues()}
          hideConfirmation={hideConfirmation}
        />
      )}
    </>
  );
};

export default SpTicketForm;

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
  &:focus {
    outline: none;
  }
  &.date_and_title {
    background-color: #f0f0f0;
    margin-bottom: 24px;
    width: 100%;
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
  width: 76px;
  display: block;
  margin-top: 4px;
  margin-bottom: 16px;
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
`;

const TicketFormBackButton = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 6px 16px;
  border: 2px solid #f1a11b;
  color: #f1a11b;
  background-color: #fff;
  margin-right: 12px;
  cursor: pointer;
  margin-top: 8px;
  border-radius: 6px;
`;
