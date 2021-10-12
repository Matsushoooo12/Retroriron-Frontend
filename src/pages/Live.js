import React from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Retroriron from '../images/retroriron.jpeg'
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import LiveVertical from '../images/live.jpeg'

const Live = () => {
    return (
        <>
            <Helmet>
                <title>Live page</title>
                <meta name="the Live page of a pop band called Retroriron." content="live page" />
            </Helmet>
            <LiveContainer>
                <LiveItemContainer>
                    <LiveInfoContainer>
                        <LiveDate>2021.08.24</LiveDate>
                        <LiveButton src={Plus} />
                        <LiveContentsContainer>
                            <LiveTitleContainer>
                                <LiveTitle>testtesttesttest</LiveTitle>
                                <LiveFinish>終了</LiveFinish>
                            </LiveTitleContainer>
                            <LiveTextContainer>
                                <LiveText>テストテストテスト</LiveText>
                                <LiveText>テストテストテスト</LiveText>
                                <LiveText>テストテストテスト</LiveText>
                            </LiveTextContainer>
                            <LiveChicketButton>チケットをご希望の方はこちら</LiveChicketButton>
                            <LiveDetailText>
                                詳細情報 |<br/><br/>
                                あああああああああああああああ<br/>
                                いいいいいいいいいいいいいいいいいいいいい<br/>
                                ううううううううう
                            </LiveDetailText>
                        </LiveContentsContainer>
                    </LiveInfoContainer>
                    <LiveImage src={Retroriron} />
                </LiveItemContainer>
                <LiveItemContainer>
                    <LiveInfoContainer>
                        <LiveDate>2021.08.24</LiveDate>
                        <LiveButton src={Plus} />
                        <LiveContentsContainer>
                            <LiveTitleContainer>
                                <LiveTitle>testtesttesttest</LiveTitle>
                                <LiveFinish>終了</LiveFinish>
                            </LiveTitleContainer>
                            <LiveTextContainer>
                                <LiveText>テストテストテスト</LiveText>
                                <LiveText>テストテストテスト</LiveText>
                                <LiveText>テストテストテスト</LiveText>
                            </LiveTextContainer>
                            <LiveChicketButton>チケットをご希望の方はこちら</LiveChicketButton>
                        </LiveContentsContainer>
                    </LiveInfoContainer>
                    <LiveImage className="vertical" src={LiveVertical} />
                </LiveItemContainer>
                <LiveItemContainer>
                    <LiveInfoContainer>
                        <LiveDate>2021.08.24</LiveDate>
                        <LiveButton src={Plus} />
                        <LiveContentsContainer>
                            <LiveTitleContainer>
                                <LiveTitle>testtesttesttest</LiveTitle>
                                <LiveFinish className="finish">終了</LiveFinish>
                            </LiveTitleContainer>
                            <LiveTextContainer>
                                <LiveText>テストテストテスト</LiveText>
                                <LiveText>テストテストテスト</LiveText>
                                <LiveText>テストテストテスト</LiveText>
                            </LiveTextContainer>
                            <LiveChicketButton>チケットをご希望の方はこちら</LiveChicketButton>
                        </LiveContentsContainer>
                    </LiveInfoContainer>
                    <LiveImage src={Retroriron} />
                </LiveItemContainer>
            </LiveContainer>
        </>
    )
}

export default Live

// LiveContainer

const LiveContainer = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 80px;
`

// LiveItemContainer

const LiveItemContainer = styled.li`
    width: 64vw;
    border-top: 1px solid #BEBEBE;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
`

// LiveInfoContainer

const LiveInfoContainer = styled.div`
    display: flex;
`

const LiveImage = styled.img`
    display: block;
    width: 200px;
    height: 100%;
    &.vertical{
        width: 160px;
        height: 200px;
    }
`

const LiveDate = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-top: 6px;
    margin-right: 24px;
`

const LiveButton = styled.img`
    width: 14px;
    height: 14px;
    margin-top: 8px;
    margin-right: 14px;
`

// LiveContentsContainer

const LiveContentsContainer = styled.div`
`

// LiveTitleContainer

const LiveTitleContainer = styled.div`
    display: flex;
`

const LiveTitle = styled.a`
    font-size: 2.0rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    cursor: pointer;
`

const LiveTextContainer = styled.div`
    margin-top: 8px;
    margin-bottom: 16px;
`

const LiveText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
`

// LiveChicketButton

const LiveChicketButton = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #fff;
    background-color: #F1A01A;
    padding: 10px 16px;
    border-radius: 7px;
    cursor: pointer;
`

// LiveDetailText

const LiveDetailText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
    margin-top: 16px;
    // display: none;
`

// LiveFinish

const LiveFinish =  styled.div`
    // display: none;
    opacity: 0;
    &.finish{
        // disoplay: block;
        opacity: 1;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 900;
        font-family: 'Noto Sans JP', sans-serif;
        background-color: #F42626;
        padding: 3px 8px;
        border-radius: 3px;
        margin-left: 16px;
    }
`