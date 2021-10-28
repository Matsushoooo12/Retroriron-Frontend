import React from 'react'
import styled from '@emotion/styled';

const SpTicketComplete = ({values}) => {
    return (
        <TicketItemContainer>
            <TicketTitleContainer>
                <TicketTitle>チケット予約完了</TicketTitle>
            </TicketTitleContainer>
            <TicketText>
                ありがとうございます。<br/>
                下記の内容でチケットのお取置きが完了しました。<br/>
                当日お会いできることを楽しみにしています。
            </TicketText>
            <TicketCompleteBlock>
                <TicketCompleteTitle>{values.date}<br/>{values.title}</TicketCompleteTitle>
                <TicketCompleteText>
                    ナマエ<br/>{values.nameKana}
                </TicketCompleteText>
                <TicketCompleteText>
                    メールアドレス<br/>{values.email}
                </TicketCompleteText>
                <TicketCompleteText>
                    {values.number}枚
                </TicketCompleteText>
                <TicketCompleteText>
                    備考<br/>{values.description}
                </TicketCompleteText>
            </TicketCompleteBlock>
            <TicketText>
                ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
            </TicketText>
            <TicketText>
                ※ご入力内容にお間違いがあった場合や、キャンセル等はお問い合わせフォームからご連絡してください。
            </TicketText>
            <TicketBackButtonContainer>
                <TicketBackButton href="/live">戻る</TicketBackButton>
            </TicketBackButtonContainer>
        </TicketItemContainer>
    )
}

export default SpTicketComplete

const TicketItemContainer = styled.div`
    width: 100%;
    margin: auto;
    background-color: #fff;
    border-radius: 24px;
    padding-bottom: 116px;
`

// TicketTitleContainer

const TicketTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const TicketBackButtonContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: center;
`

const TicketBackButton = styled.a`
    text-decoration: none;
    font-size: 1.6rem;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #F1A11B;
    color: #F1A11B;
    padding: 6px 16px;
    border-radius: 6px;
    display: inline-block;
`

const TicketTitle = styled.h1`
    font-size: 2.0rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-bottom: 8px;
`

const TicketText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 8px;
    &:last-of-type{
        margin-bottom: 32px;
    }
`

const TicketCompleteBlock = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 24px;

`

const TicketCompleteTitle = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 24px;
`

const TicketCompleteText = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 8px;
    &:last-of-type{
        margin-bottom: 0;
    }
`