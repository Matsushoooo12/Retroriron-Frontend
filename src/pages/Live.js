import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet';
import moment from 'moment'
import styled from '@emotion/styled';
import Plus from '../images/open-btn.png'
import Minus from '../images/close-btn.png'
import { getLive } from '../api';
import { useForm } from 'react-hook-form';
import TicketConfirm from '../components/ticket/TicketConfirm';
import SpTicketForm from '../components/ticket/SpTicketForm';
import TwitterOrange from '../images/twitter-icon-orange.png'
import InstagramOrange from '../images/insta-icon-orange.png'
import YoutubeOrange from '../images/youtube-icon-orange.png'

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
        date: "",
        title: "",
        nameKana: "",
        email: "",
        number: "",
        description: "",
        open: false
    })

    const [spTicketDateAndTitle, setSpTicketDateAndTitle] = useState({
        date: "",
        title: ""
    })

    // handleSpTicketButton
    const handleSpTicketButtonClick = (date, title) => {
        setSpTicketDateAndTitle({
            date: date,
            title: title
        })
        setIsConfirmationVisible(true)
    }

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
                                    <PcLiveTicketButton onClick={() => setTicketValue({date: item.date, title: item.title, open: true})} active={now < moment(item.date)}>チケットをご希望の方はこちら</PcLiveTicketButton>
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
                <ModalContainer
                    className={ticketValue.open ? "open" : ""}
                >
                    <ModalBack onClick={handleClick}></ModalBack>
                    {!isConfirmationVisible ? (
                        <TicketItemContainer>
                            <TicketTitle>チケット予約フォーム</TicketTitle>
                            <TicketText>
                                ※こちらはチケットのお取り置きをするためのフォームです。<br/>
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
                                        value={ticketValue.date}
                                        readOnly
                                        {...register('date', {required: true})}
                                        dateAndTitle
                                    />
                                    <TicketDateAndTitleTextField
                                        type="text"
                                        name="title"
                                        value={ticketValue.title}
                                        readOnly
                                        {...register('title', {required: true})}
                                        dateAndTitle
                                    />
                                </TicketDateAndTitleContainer>
                                <TicketFormGroup>
                                    <TicketFormLabel htmlFor="nameKana">ナマエ
                                        <TicketFormRequiredSign>*</TicketFormRequiredSign>
                                        {errors.nameKana && <TicketFormRequiredSign>こちらは必須項目です。</TicketFormRequiredSign>}
                                    </TicketFormLabel>
                                    <TicketFormTextField
                                        name="nameKana"
                                        type="text"
                                        {...register('nameKana', {required: true})}
                                    />
                                    <TicketFormLabel htmlFor="email">メールアドレス
                                        <TicketFormRequiredSign>*</TicketFormRequiredSign>
                                        {errors.email && <TicketFormRequiredSign>こちらは必須項目です。</TicketFormRequiredSign>}
                                    </TicketFormLabel>
                                    <TicketFormTextField
                                        name="email"
                                        type="email"
                                        {...register('email', {required: true})}
                                    />
                                    <TicketFormLabel htmlFor="number">枚数
                                        <TicketFormRequiredSign>*</TicketFormRequiredSign>
                                        {errors.number && <TicketFormRequiredSign>こちらは必須項目です。</TicketFormRequiredSign>}
                                    </TicketFormLabel>
                                    <TicketFormNumber
                                        name="number"
                                        type="number"
                                        onChange={(e) => e.target.value}
                                        defaultValue="1"
                                        {...register('number', {required: true})}
                                    />
                                    <TicketFormLabel htmlFor="description">備考</TicketFormLabel>
                                    <TicketFormTextField
                                        name="description"
                                        type="text"
                                        {...register('description', {required: false})}
                                    />
                                </TicketFormGroup>
                                <TicketFormGroup className="right">
                                    <TicketFormSubmitButton type="submit" value="確認する" />
                                </TicketFormGroup>
                            </TicketFormContainer>
                        </TicketItemContainer>
                    ):(
                        <TicketConfirm
                            values={getValues()}
                            hideConfirmation={hideConfirmation}
                        />
                    )}
                </ModalContainer>
            </PcLiveContainer>
            {/* TAB */}
            {!isConfirmationVisible ? (
                <>
                    <TabLiveContainer>
                        {lives.map((item) => (
                            <TabLiveItemContainer key={item.id}>
                                <TabLiveButton cursorPointer={item.detail} onClick={toggleAccordion(item.id)} src={content === item.id && item.detail ? Minus : Plus} />
                                <TabLiveMainContainer>
                                    <TabLiveContentsContainer>
                                        <TabLiveDate cursorPointer={item.detail} onClick={toggleAccordion(item.id)}>{moment(item.date).format("YYYY.MM.DD")}</TabLiveDate>
                                        <TabLiveTitle cursorPointer={item.detail} onClick={toggleAccordion(item.id)}>{item.title}<TabLiveFinishTag finish={now > moment(item.date)}>終了</TabLiveFinishTag></TabLiveTitle><br/>
                                        <TabLiveTicketButton onClick={() => handleSpTicketButtonClick(item.date, item.title)} active={now < moment(item.date)}>チケットをご希望の方はこちら</TabLiveTicketButton>
                                        <TabLiveInfoContainer>
                                            <TabLiveInfoText>開場時間 | {moment(item.openTime).add(15, "H").format("HH:mm")}   開演時間 | {moment(item.startTime).add(15, "H").format("HH:mm")}</TabLiveInfoText>
                                            <TabLiveInfoText>場所 | {item.place}</TabLiveInfoText>
                                            <TabLiveInfoText>料金 | {item.price}</TabLiveInfoText>
                                            <TabLiveInfoText>出演者 | {item.performer}</TabLiveInfoText>
                                            <TabLiveBottomImage vertical={item.imageVertical} src={process.env.REACT_APP_PRO_API_URL + item.image.url} />
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
                    <SpLiveContainer>
                        {lives.map((item) => (
                            <SpLiveItemContainer key={item.id}>
                                <SpLiveButton onClick={toggleAccordion(item.id)} src={Plus} />
                                <SpLiveMainContainer>
                                    <SpLiveDate onClick={toggleAccordion(item.id)}>{moment(item.date).format("YYYY.MM.DD")}</SpLiveDate>
                                    <SpLiveTitle onClick={toggleAccordion(item.id)}>{item.title}</SpLiveTitle><br/>
                                    <SpLiveTicketButton onClick={() => handleSpTicketButtonClick(item.date, item.title)} active={now < moment(item.date)}>チケットをご希望の方はこちら</SpLiveTicketButton>
                                    <SpLiveFinishTag finish={now > moment(item.date)}>終了</SpLiveFinishTag>
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
                    <SnsFixedContainer>
                        <SnsFixedBorder></SnsFixedBorder>
                        <SnsFixedText>our sns</SnsFixedText>
                        <SnsFixedIconLink href="#"><SnsFixedIconImage src={TwitterOrange} /></SnsFixedIconLink>
                        <SnsFixedIconLink href="#"><SnsFixedIconImage src={InstagramOrange} /></SnsFixedIconLink>
                        <SnsFixedIconLink href="#"><SnsFixedIconImage src={YoutubeOrange} /></SnsFixedIconLink>
                        <SnsFixedBorder></SnsFixedBorder>
                    </SnsFixedContainer>
                </>
            ):(
                <SpTicketForm
                    date={spTicketDateAndTitle.date}
                    title={spTicketDateAndTitle.title}
                />
            )}
        </>
    )
}

export default Live

// PC

const PcLiveContainer = styled.ul`
    display: none;
    @media screen and (min-width: 900px){
        padding-bottom: 160px;
    }
    @media screen and (min-width: 1024px){
        display: block;
        width: 100%;
        height: 100%;
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

// PC-チケット

// ModalContainer

const ModalContainer = styled.div`
    display: none;
    @media screen and (min-width: 900px){
        width: 100%;
        &.open{
            display: block;
        }
    }
`

const ModalBack = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.7);
`

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
`

const TicketTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 24px 24px 8px;
`

const TicketText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin: 0 24px 4px;
`

const TicketCautionText = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin: 0 24px 24px;
`

// TicketFormContainer

const TicketFormContainer = styled.form`
`

// ContactFormContainer

const TicketFormLabel = styled.label`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
`

const TicketFormGroup = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 16px;
    border-top: 2px solid #BEBEBE;
    padding-top: 24px;
    &.right{
        text-align: right;
        border: none;
        padding: 0;
    }
`

const TicketFormRequiredSign = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #F42626;
    margin-left: 4px;
    margin-right: 16px;
`

// input:text

const TicketDateAndTitleContainer = styled.div`
    background-color: #F0F0F0;
    width: 90%;
    margin: 0 auto 24px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    border-radius: 6px;
`

const TicketDateAndTitleTextField = styled.input`
    border: none;
    font-size: 1.6rem;
    font-weight: 500;
    display: inline-block;
    &:first-of-type{
        width: 120px;
        padding: 0 16px;
    }
`

const TicketFormTextField = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    display: block;
    border: 1px solid #BEBEBE;
    border-radius: 7px;
    margin: 0 auto;
    width: 100%;
    margin-top: 4px;
    margin-bottom: 16px;
    &:focus{
        outline: none;
    }
`

// input:number

const TicketFormNumber = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    border: 1px solid #BEBEBE;
    padding: 8px 16px;
    border-radius: 7px;
    width: 76px;
    display: block;
    margin-top: 4px;
    margin-bottom: 16px;
    &:focus{
        outline: none;
    }
`

const TicketFormSubmitButton = styled.input`
    background-color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 8px;
`

// TAB

const TabLiveContainer = styled.ul`
    display: none;
    @media screen and (min-width: 400px){
        display: block;
        width: 100%;
        height: 100%;
        margin-left: 5%;
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
    @media screen and (min-width: 400px){
        display: none;
    }
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

const TabLiveBottomImage = styled.img`
    display: none;
    @media screen and (min-width: 400px){
        display: block;
        width: 160px;
        height: 100%;
        margin-top: 16px;
        ${props => props.vertical && `
            width: 128px;
            height: 160px;
        `}
    }
    @media screen and (min-width: 600px){
        display: none;
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
    margin-left: 5%;
    @media screen and (min-width: 400px){
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

const SpLiveFinishTag = styled.p`
    display: none;
    font-size: 1.2rem;
    font-weight: 900;
    padding: 4px 8px;
    color: #fff;
    background-color: #F42626;
    border-radius: 3px;
    margin-top: 16px;
    ${props => props.finish && `display: inline-block;`}
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
        height: 200px;
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

// SP SNS固定

const SnsFixedContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 50;
    width: 100%;
    left: -40%;
    top: 72%;
    transform: rotate(90deg);
    align-items: center;
    @media screen and (min-width: 900px){
        display: none;
    }
`

const SnsFixedBorder = styled.div`
    height: 1px;
    width: 24px;
    background-color: #000000;
`

const SnsFixedText = styled.p`
    color: #292929;
    font-size: 1.0rem;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    margin-left: 16px;
    margin-right: 16px;
    white-space: pre-wrap;
`

const SnsFixedIconLink = styled.a`
    text-decoration: none;
    margin-right: 16px;
`

const SnsFixedIconImage = styled.img`
    width: 32px;
    height: 30px;
    transform: rotate(-90deg);
`