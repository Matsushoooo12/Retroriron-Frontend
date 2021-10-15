import React from 'react'
import styled from '@emotion/styled';
import Minus from '../images/close-btn.png'

const ChicketComplete = ({values}) => {
    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        return location.reload()
    }
    return (
        <ChicketItemContainer>
            <ChicketTitleContainer>
                <ChicketTitle>チケット予約内容の確認</ChicketTitle>
                <ChicketBackButton onClick={handleClick}>×</ChicketBackButton>
            </ChicketTitleContainer>
            <ChicketText>
                ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
            </ChicketText>
            <ChicketCompleteBlock>
                <ChicketCompleteTitle>{values.dateAndTitle}</ChicketCompleteTitle>
                <ChicketCompleteText>
                    ナマエ｜{values.nameKana}
                </ChicketCompleteText>
                <ChicketCompleteText>
                    メールアドレス｜{values.email}
                </ChicketCompleteText>
                <ChicketCompleteText>
                    {values.number}
                </ChicketCompleteText>
                <ChicketCompleteText>
                    備考：{values.description}
                </ChicketCompleteText>
            </ChicketCompleteBlock>
            <ChicketText>
                ※こちらはチケットのお取り置きをするためのフォームです。<br/>
                当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
            </ChicketText>
            <ChicketText>
                ※ご入力内容にお間違いがあった場合や、キャンセル等はお問い合わせフォームからご連絡してください。
            </ChicketText>
        </ChicketItemContainer>
    )
}

export default ChicketComplete

const ChicketItemContainer = styled.div`
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
`

// ChicketTitleContainer

const ChicketTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChicketBackButton = styled.a`
    text-decoration: none;
    font-size: 3.6rem;
    cursor: pointer;
    margin-top: 8px;
    margin-right: 16px;
`

const ChicketTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 24px 24px 8px;
`

const ChicketText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 0 24px 24px;
`

const ChicketCompleteBlock = styled.div`
    width: 90%;
    height: 200px;
    margin: 0 auto 24px;
    background-color: #F0F0F0;
    border-radius: 6px;
`

const ChicketCompleteTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin: 0 16px 24px;
    padding-top: 16px;
`

const ChicketCompleteText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin: 0 16px 6px;
    &:last-of-type{
        margin-bottom: 16px;
    }
`