import React from 'react';
import styled from '@emotion/styled';

const TicketComplete = (props) => {
  const { values, ticket } = props;
  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    return location.reload();
  };
  return (
    <TicketItemContainer>
      <TicketTitleContainer>
        <TicketTitle>チケット予約内容の確認</TicketTitle>
        <TicketBackButton onClick={handleClick}>×</TicketBackButton>
      </TicketTitleContainer>
      <TicketText>
        ※こちらはチケットのお取り置きをするためのフォームです。
        <br />
        当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
      </TicketText>
      <TicketCompleteBlock>
        <TicketCompleteTitle>
          {ticket.date}
          <TicketCompleteTitleLeft>{ticket.title}</TicketCompleteTitleLeft>
        </TicketCompleteTitle>
        <TicketCompleteText>オナマエ｜{values.nameKana}</TicketCompleteText>
        <TicketCompleteText>メールアドレス｜{values.email}</TicketCompleteText>
        <TicketCompleteText>{values.number}</TicketCompleteText>
        <TicketCompleteText>備考：{values.description}</TicketCompleteText>
      </TicketCompleteBlock>
      <TicketText>
        ※こちらはチケットのお取り置きをするためのフォームです。
        <br />
        当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
      </TicketText>
      <TicketText>
        ※ご入力内容にお間違いがあった場合や、キャンセル等はお問い合わせフォームからご連絡してください。
      </TicketText>
    </TicketItemContainer>
  );
};

export default TicketComplete;

const TicketItemContainer = styled.div`
  width: 584px;
  height: 600px;
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

// TicketTitleContainer

const TicketTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TicketBackButton = styled.a`
  text-decoration: none;
  font-size: 3.6rem;
  cursor: pointer;
  margin-top: 8px;
  margin-right: 16px;
`;

const TicketTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 24px 24px 8px;
`;

const TicketText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 24px 24px;
`;

const TicketCompleteBlock = styled.div`
  width: 90%;
  height: 200px;
  margin: 0 auto 24px;
  background-color: #f0f0f0;
  border-radius: 6px;
`;

const TicketCompleteTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
  margin: 0 16px 24px;
  padding-top: 16px;
`;

const TicketCompleteTitleLeft = styled.span`
  margin-left: 24px;
`;

const TicketCompleteText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin: 0 16px 6px;
  &:last-of-type {
    margin-bottom: 16px;
  }
`;
