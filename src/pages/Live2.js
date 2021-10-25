import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import { getLive } from '../api';
import { useForm } from 'react-hook-form';
import TicketConfirm from '../components/ticket/TicketConfirm';

const Live = () => {
    // useForm
    const { register, formState: { errors }, getValues, handleSubmit } = useForm();

    // isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    // isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

    //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
    const hideConfirmation = () => setIsConfirmationVisible(false)

    //submitボタンを押した時、入力内容確認画面を表示させる
    const onSubmitData = () => setIsConfirmationVisible(true)

    // TicketValue
    const [ticketValue, setTicketValue] = useState({
        dateAndTitle: "",
        nameKana: "",
        email: "",
        number: "",
        description: "",
        open: false
    })

    const handleClick = () => {
        setTicketValue({open: false})
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    // API

    const [lives, setLives] = useState([])

    const handleGetLive = async () => {
        try{
            const res = await getLive();
            setLives(res.data)
            console.log(res.data)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        handleGetLive();
    }, [])

    // アコーディオン

    const [content, setContent] = useState(null)

    const toggleAccordion = (i) => {
        return () => setContent(content === i ? null : i)
    };

    // Date

    const now = moment();

    console.log(ticketValue.open)

    // Active

    const isActive = (index) => content === index;

    return (
        <>
            <Helmet>
                <title>Live page</title>
                <meta name="the Live page of a pop band called Retroriron." content="live page" />
            </Helmet>
            {/* PC */}
            <PcLiveContainer>
                {lives.map((item) => (
                    <PcLiveItemContainer key={item.id}>
                        <PcLiveMainContainer>
                            <PcLiveItemOtherContainer>
                                <PcLiveDate>{moment(item.date).format("YYYY.MM.DD")}</PcLiveDate>
                                <PcLiveButton cursorPointer={item.detail} onClick={toggleAccordion(item.id)} src={content === item.id && item.detail ? Minus : Plus} />
                            </PcLiveItemOtherContainer>
                            <PcLiveContentsContainer>
                                <PcLiveTextContainer>
                                    <PcLiveTitle cursorPointer={item.detail} onClick={toggleAccordion(item.id)}>{item.title}<PcLiveFinishTag finish={now > moment(item.date)}>終了</PcLiveFinishTag></PcLiveTitle><br/>
                                    <PcLiveTicketButton active={now < moment(item.date)}>チケットをご希望の方はこちら</PcLiveTicketButton>
                                    <PcLiveInfoContainer>
                                        <PcLiveInfoText>開場時間 | {moment(item.openTime).add(15, "H").format("HH:mm")}   開演時間 | {moment(item.startTime).add(15, "H").format("HH:mm")}</PcLiveInfoText>
                                        <PcLiveInfoText>場所 | {item.place}</PcLiveInfoText>
                                        <PcLiveInfoText>料金 | {item.price}</PcLiveInfoText>
                                        <PcLiveInfoText>出演者 | {item.performer}</PcLiveInfoText>
                                    </PcLiveInfoContainer>
                                    <PcLiveDetailText active={isActive(item.id) && item.detail}>
                                        詳細情報 |<br/><br/>
                                        {item.detail}
                                    </PcLiveDetailText>
                                </PcLiveTextContainer>
                            </PcLiveContentsContainer>
                        </PcLiveMainContainer>
                        <PcLiveImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                    </PcLiveItemContainer>
                ))}
            </PcLiveContainer>
            {/* TAB */}
            <TabLiveContainer>
                {lives.map((item) => (
                    <TabLiveItemContainer>
                        <TabLiveButton cursorPointer={item.detail} onClick={toggleAccordion(item.id)} src={content === item.id && item.detail ? Minus : Plus} />
                        <TabLiveMainContainer>
                            <TabLiveContentsContainer>
                                <TabLiveDate cursorPointer={item.detail} onClick={toggleAccordion(item.id)}>{moment(item.date).format("YYYY.MM.DD")}</TabLiveDate>
                                <TabLiveTitle cursorPointer={item.detail} onClick={toggleAccordion(item.id)}>{item.title}<TabLiveFinishTag finish={now > moment(item.date)}>終了</TabLiveFinishTag></TabLiveTitle><br/>
                                <TabLiveTicketButton active={now < moment(item.date)}>チケットをご希望の方はこちら</TabLiveTicketButton>
                                <TabLiveInfoContainer>
                                    <TabLiveInfoText>開場時間 | {moment(item.openTime).add(15, "H").format("HH:mm")}   開演時間 | {moment(item.startTime).add(15, "H").format("HH:mm")}</TabLiveInfoText>
                                    <TabLiveInfoText>場所 | {item.place}</TabLiveInfoText>
                                    <TabLiveInfoText>料金 | {item.price}</TabLiveInfoText>
                                    <TabLiveInfoText>出演者 | {item.performer}</TabLiveInfoText>
                                </TabLiveInfoContainer>
                                <TabLiveDetailText active={isActive(item.id) && item.detail}>
                                    詳細情報 |<br/>
                                    {item.detail}
                                </TabLiveDetailText>
                            </TabLiveContentsContainer>
                            <TabLiveImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                        </TabLiveMainContainer>
                    </TabLiveItemContainer>
                ))}
            </TabLiveContainer>
            {/* SP */}
            <SpLiveContainer>
                {lives.map((item) => (
                    <SpLiveItemContainer key={item.id}>
                        <SpLiveButton onClick={toggleAccordion(item.id)} src={Plus} />
                        <SpLiveMainContainer>
                            <SpLiveDate onClick={toggleAccordion(item.id)}>{moment(item.date).format("YYYY.MM.DD")}</SpLiveDate>
                            <SpLiveTitle onClick={toggleAccordion(item.id)}>{item.title}</SpLiveTitle><br/>
                            <SpLiveTicketButton active={now < moment(item.date)}>チケットをご希望の方はこちら</SpLiveTicketButton>
                            <SpLiveInfoContainer active={isActive(item.id)}>
                                <SpLiveInfoText>開場時間 | {moment(item.openTime).add(15, "H").format("HH:mm")}   開演時間 | {moment(item.startTime).add(15, "H").format("HH:mm")}</SpLiveInfoText>
                                <SpLiveInfoText>場所 | {item.place}</SpLiveInfoText>
                                <SpLiveInfoText>料金 | {item.price}</SpLiveInfoText>
                                <SpLiveInfoText>出演者 | {item.performer}</SpLiveInfoText>
                                <SpLiveImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
                                <SpLiveDetailText active={item.detail}>
                                    詳細情報 |<br/>
                                    {item.detail}
                                </SpLiveDetailText>
                            </SpLiveInfoContainer>
                        </SpLiveMainContainer>
                    </SpLiveItemContainer>
                ))}
            </SpLiveContainer>
        </>
    )
}

export default Live

// PC

const PcLiveContainer = styled.ul`
    display: none;
    @media screen and (min-width: 1024px){
        display: block;
        width: 100%;
        height: 100%;
        background-color: yellow;
        padding-bottom: 160px;
    }
`

const PcLiveItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
`

const PcLiveMainContainer = styled.div`
    display: flex;
`

const PcLiveItemOtherContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 8px;
`

const PcLiveDate = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 32px;
`

const PcLiveButton = styled.img`
    width: 14px;
    height: 14px;
    cursor: default;
    margin-right: 24px;
    ${props => props.cursorPointer && `cursor: pointer;`}
`

const PcLiveContentsContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

const PcLiveTextContainer = styled.div`
    display: block;
`

const PcLiveTitle = styled.a`
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 3.2rem;
    cursor: default;
    ${props => props.cursorPointer && `cursor: pointer;`}
`

const PcLiveInfoContainer = styled.div`
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
`

const PcLiveInfoText = styled.p`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 8px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

const PcLiveTicketButton = styled.a`
    display: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    background-color: #F1A01A;
    padding: 10px 16px;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 16px;
    ${props => props.active && `display: inline-block;`}
`

const PcLiveImage = styled.img`
    display: block;
    width: 200px;
    height: 100%;
    ${props => props.vertical && `
        width: 160px;
        height: 200px;
    `}
`

const PcLiveDetailText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
    margin-top: 16px;
    display: none;
    word-break: break-all;
    ${props => props.active && `display: block;`}
`

const PcLiveFinishTag = styled.p`
    display: none;
    font-size: 1.2rem;
    font-weight: 900;
    padding: 0 8px;
    color: #fff;
    background-color: #F42626;
    border-radius: 3px;
    margin-left: 16px;
    ${props => props.finish && `display: inline-block;`}
`

// TAB

const TabLiveContainer = styled.ul`
    display: none;
    @media screen and (min-width: 600px){
        display: block;
        width: 100%;
        height: 100%;
        background-color: yellow;
        margin-left: 40px;
    }
    @media screen and (min-width: 900px){
        margin-left: 0;
    }
    @media screen and (min-width: 1024px){
        display: none;
    }
`

const TabLiveItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
    align-items: flex-start;
`

const TabLiveButton = styled.img`
    width: 14px;
    height: 14px;
    cursor: default;
    margin-right: 24px;
    ${props => props.cursorPointer && `cursor: pointer;`}
`

const TabLiveMainContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`

const TabLiveContentsContainer = styled.div`
    display: block;
`

const TabLiveDate = styled.p`
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 8px;
    cursor: default;
    ${props => props.cursorPointer && `cursor: pointer;`}
`

const TabLiveTitle = styled.a`
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 2.4rem;
    cursor: default;
    ${props => props.cursorPointer && `cursor: pointer;`}
`

const TabLiveTicketButton = styled.a`
    display: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    background-color: #F1A01A;
    padding: 10px 16px;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 16px;
    ${props => props.active && `display: inline-block;`}
`

const TabLiveFinishTag = styled.p`
    display: none;
    font-size: 1.2rem;
    font-weight: 900;
    padding: 4px 8px;
    color: #fff;
    background-color: #F42626;
    border-radius: 3px;
    margin-top: 16px;
    margin-left: 16px;
    ${props => props.finish && `display: inline-block;`}
`

const TabLiveImage = styled.img`
    @media screen and (min-width: 600px){
        display: block;
        width: 160px;
        height: 100%;
        ${props => props.vertical && `
            width: 128px;
            height: 160px;
        `}
    }
    @media screen and (min-width: 680px){
        display: block;
        width: 200px;
        ${props => props.vertical && `
            width: 160px;
            height: 200px;
        `}
    }
`

const TabLiveInfoContainer = styled.div`
    margin-bottom: 16px;
    margin-top: 16px;
`

const TabLiveInfoText = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-bottom: 4px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

const TabLiveDetailText = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
    margin-top: 16px;
    display: none;
    word-break: break-all;
    ${props => props.active && `display: block;`}
`

// SP

const SpLiveContainer = styled.ul`
    display: block;
    width: 100%;
    height: 100%;
    background-color: yellow;
    margin-left: 20px;
    @media screen and (min-width: 600px){
        display: none;
    }
`

const SpLiveItemContainer = styled.li`
    border-top: 1px solid #BEBEBE;
    padding: 16px 0;
    display: flex;
    align-items: flex-start;
`

const SpLiveButton = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-right: 24px;
`

const SpLiveMainContainer = styled.div`
    display: block;
`

const SpLiveDate = styled.p`
    font-weight: 700;
    font-size: 1.0rem;
    margin-bottom: 8px;
    cursor: pointer;
`

const SpLiveTitle = styled.a`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.4rem;
    cursor: pointer;
    margin-bottom: 16px;
`

const SpLiveTicketButton = styled.a`
    display: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background-color: #F1A01A;
    padding: 10px 16px;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 16px;
    ${props => props.active && `display: inline-block;`}
`

const SpLiveInfoContainer = styled.div`
    margin-bottom: 16px;
    margin-top: 16px;
    display: none;
    ${props => props.active && `display: block;`}
`

const SpLiveInfoText = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-bottom: 4px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

const SpLiveImage = styled.img`
    display: block;
    width: 160px;
    height: 100%;
    margin-top: 16px;
    ${props => props.vertical && `
        width: 128px;
        height: 160px;
    `}
`

const SpLiveDetailText = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin-bottom: 4px;
    white-space: pre-wrap;
    margin-top: 16px;
    display: none;
    word-break: break-all;
    ${props => props.active && `display: block;`}
`