import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import styled from '@emotion/styled';
import Plus from '../images/open-btn.png';
import Minus from '../images/close-btn.png';
import { getLive } from '../api';
import { useForm } from 'react-hook-form';
import TicketConfirm from '../components/ticket/TicketConfirm';
import SpTicketForm from '../components/ticket/SpTicketForm';
import TwitterOrange from '../images/twitter-icon-orange.png';
import InstagramOrange from '../images/insta-icon-orange.png';
import YoutubeOrange from '../images/youtube-icon-orange.png';
import NilImageUrl from '../images/nil_image.JPG';
import Loading from '../components/common/Loading';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Live = () => {
  // ローディング
  const [isLoading, setIsLoading] = useState(true);

  // useForm
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  // isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  // isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
  const hideConfirmation = () => setIsConfirmationVisible(false);

  //submitボタンを押した時、入力内容確認画面を表示させる
  const onSubmitData = handleSubmit(() => {
    setIsConfirmationVisible(true);
  });

  // TicketValue
  const [ticketValue, setTicketValue] = useState({
    date: '',
    title: '',
    nameKana: '',
    email: '',
    number: '',
    description: '',
    open: false,
  });

  const [spTicketDateAndTitle, setSpTicketDateAndTitle] = useState({
    date: '',
    title: '',
  });

  // handleSpTicketButton
  const handleSpTicketButtonClick = (date, title) => {
    setSpTicketDateAndTitle({
      date: date,
      title: title,
    });
    setIsConfirmationVisible(true);
  };

  const handleClick = () => {
    setIsConfirmationVisible(false);
    setTicketValue({
      open: false,
    });
    reset();
  };

  // API

  const [lives, setLives] = useState([]);

  const handleGetLive = async () => {
    try {
      const res = await getLive();
      setLives(res.data);
    } catch (e) {
      alert(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetLive();
  }, [setLives]);

  // アコーディオン

  const [content, setContent] = useState(null);

  const toggleAccordion = (i) => {
    return () => setContent(content === i ? null : i);
  };

  // アコーディオンのtoggleボタン
  const toggleAccordionButton = (index, detail) => {
    return content === index && detail ? Minus : Plus;
  };

  const spToggleAccordionButton = (index) => {
    return content === index ? Minus : Plus;
  };

  // Date

  const now = moment();

  // Active

  const isActive = (index) => content === index;

  // dateフォーマット
  const dateFormat = (date) => {
    return moment(date).format('YYYY.MM.DD');
  };

  // 開場・開演時間
  const openAndStartTime = (time) => {
    return moment(time).add(15, 'H').format('HH:mm');
  };

  // FutureTime
  const futureTime = (date) => {
    return now < moment(date).add('days', 1);
  };

  const pastTime = (date) => {
    return now > moment(date).add('days', 1);
  };

  // 画像があるかどうか
  const notExistImage = (url) => {
    return url ? url : NilImageUrl;
  };

  // 開場・開演時間があるかどうか
  const notExistTime = (time) => {
    if (time) {
      return time;
    } else {
      return '未定';
    }
  };

  // 文字列内リンク

  const stringLink = (str) => {
    if (str) {
      const regexp_url = /https?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+/g;
      const regexp_makeLink = (url) => {
        return `<a href=${url} style="color: #F1A11B; text-decoration: underline;" target="_blank" rel="noopener noreferrer">${url}</a>`;
      };
      const replacedString = str.replace(regexp_url, regexp_makeLink);

      return <p dangerouslySetInnerHTML={{ __html: replacedString }}></p>;
    } else {
      return;
    }
  };

  // ライブ画像モーダル
  const [liveImageModal, setLiveImageModal] = useState({
    image: '',
    title: '',
    imageVertical: false,
    open: false,
  });

  const handleLiveImageModalClick = () => {
    setLiveImageModal({
      image: '',
      title: '',
      imageVertical: false,
      open: false,
    });
  };

  const noImageModal = (image) => {
    if (image) {
      return liveImageModal.open;
    } else {
      return;
    }
  };

  return (
    <>
      <Helmet>
        <title>レトロリロン - Live page</title>
        <meta
          name="the Live page of a pop band called Retroriron."
          content="live page"
        />
      </Helmet>
      <Loading isLoading={isLoading} />
      <LoadingContainer isLoading={isLoading}>
        <Header />
        {/* PC */}
        <PcLiveContainer>
          {lives.map((item) => (
            <PcLiveItemContainer key={item.id}>
              <PcLiveMainContainer>
                <PcLiveItemOtherContainer>
                  <PcLiveDate>{dateFormat(item.date)}</PcLiveDate>
                  <PcLiveButton
                    cursorPointer={item.detail}
                    onClick={toggleAccordion(item.id)}
                    src={toggleAccordionButton(item.id, item.detail)}
                    alt="accordion button"
                  />
                </PcLiveItemOtherContainer>
                <PcLiveContentsContainer>
                  <PcLiveTextContainer>
                    <PcLiveTitle
                      cursorPointer={item.detail}
                      onClick={toggleAccordion(item.id)}
                    >
                      {item.title}
                      <PcLiveFinishTag finish={pastTime(item.date)}>
                        終了
                      </PcLiveFinishTag>
                    </PcLiveTitle>
                    <br />
                    {item.ticketLink ? (
                      <PcLiveTicketButton
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.ticketLink}
                        active={futureTime(item.date)}
                      >
                        チケットをご希望の方はこちら
                      </PcLiveTicketButton>
                    ) : (
                      <PcLiveTicketButton
                        onClick={() =>
                          setTicketValue({
                            date: item.date,
                            title: item.title,
                            open: true,
                          })
                        }
                        active={futureTime(item.date)}
                      >
                        チケットをご希望の方はこちら
                      </PcLiveTicketButton>
                    )}
                    <PcLiveInfoContainer>
                      <PcLiveInfoText>
                        開場時間 |{' '}
                        {notExistTime(openAndStartTime(item.openTime))} 開演時間
                        | {notExistTime(openAndStartTime(item.startTime))}
                      </PcLiveInfoText>
                      <PcLiveInfoText>場所 | {item.venue}</PcLiveInfoText>
                      <PcLiveInfoText>料金 | {item.price}</PcLiveInfoText>
                      <PcLiveInfoText>出演者 | {item.performer}</PcLiveInfoText>
                    </PcLiveInfoContainer>
                    <PcLiveDetailText active={isActive(item.id) && item.detail}>
                      詳細情報 |<br />
                      <br />
                      {stringLink(item.detail)}
                    </PcLiveDetailText>
                  </PcLiveTextContainer>
                </PcLiveContentsContainer>
              </PcLiveMainContainer>
              <PcLiveImage
                onClick={() =>
                  setLiveImageModal({
                    title: item.title,
                    image: item.image.url,
                    open: true,
                    imageVertical: item.imageVertical,
                  })
                }
                loading="lazy"
                vertical={item.imageVertical}
                src={notExistImage(item.image.url)}
                alt={item.title}
              />
            </PcLiveItemContainer>
          ))}
          <ModalContainer open={ticketValue.open}>
            <ModalBack onClick={handleClick}></ModalBack>
            {!isConfirmationVisible ? (
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
                <form onSubmit={onSubmitData}>
                  <TicketDateAndTitleContainer>
                    <TicketDateAndTitleTextField
                      type="text"
                      name="date"
                      value={ticketValue.date}
                    />
                    <TicketDateAndTitleTextField
                      type="text"
                      name="title"
                      value={ticketValue.title}
                      title
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
                      id="nameKane"
                      type="text"
                      {...register('nameKana', {
                        required: true,
                      })}
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
                      {...register('email', {
                        required: true,
                      })}
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
                      {...register('number', {
                        required: true,
                      })}
                    />
                    <TicketFormLabel htmlFor="description">
                      備考
                    </TicketFormLabel>
                    <TicketFormTextField
                      name="description"
                      type="text"
                      id="description"
                      {...register('description', {
                        required: false,
                      })}
                    />
                  </TicketFormGroup>
                  <TicketFormGroup className="right">
                    <TicketFormSubmitButton type="submit" value="確認する" />
                  </TicketFormGroup>
                </form>
              </TicketItemContainer>
            ) : (
              <TicketConfirm
                ticket={ticketValue}
                values={getValues()}
                hideConfirmation={hideConfirmation}
              />
            )}
          </ModalContainer>
          <Footer />
        </PcLiveContainer>
        {/* TAB */}
        {!isConfirmationVisible ? (
          <>
            <TabLiveContainer>
              {lives.map((item) => (
                <TabLiveItemContainer key={item.id}>
                  <TabLiveButton
                    cursorPointer={item.detail}
                    onClick={toggleAccordion(item.id)}
                    src={toggleAccordionButton(item.id, item.detail)}
                    alt="accordion button"
                  />
                  <TabLiveMainContainer>
                    <TabLiveContentsContainer>
                      <TabLiveDate
                        cursorPointer={item.detail}
                        onClick={toggleAccordion(item.id)}
                      >
                        {dateFormat(item.date)}
                      </TabLiveDate>
                      <TabLiveTitle
                        cursorPointer={item.detail}
                        onClick={toggleAccordion(item.id)}
                      >
                        {item.title}
                        <TabLiveFinishTag finish={pastTime(item.date)}>
                          終了
                        </TabLiveFinishTag>
                      </TabLiveTitle>
                      <br />
                      {item.ticketLink ? (
                        <TabLiveTicketButton
                          rel="noopener noreferrer"
                          target="_blank"
                          href={item.ticketLink}
                          active={futureTime(item.date)}
                        >
                          チケットをご希望の方はこちら
                        </TabLiveTicketButton>
                      ) : (
                        <TabLiveTicketButton
                          onClick={() =>
                            handleSpTicketButtonClick(item.date, item.title)
                          }
                          active={futureTime(item.date)}
                        >
                          チケットをご希望の方はこちら
                        </TabLiveTicketButton>
                      )}
                      <TabLiveInfoContainer>
                        <TabLiveInfoText>
                          開場時間 |{' '}
                          {notExistTime(openAndStartTime(item.openTime))}{' '}
                          開演時間 |{' '}
                          {notExistTime(openAndStartTime(item.startTime))}
                        </TabLiveInfoText>
                        <TabLiveInfoText>場所 | {item.venue}</TabLiveInfoText>
                        <TabLiveInfoText>料金 | {item.price}</TabLiveInfoText>
                        <TabLiveInfoText>
                          出演者 | {item.performer}
                        </TabLiveInfoText>
                        <TabLiveBottomImage
                          loading="lazy"
                          vertical={item.imageVertical}
                          src={notExistImage(item.image.url)}
                          alt={item.title}
                        />
                      </TabLiveInfoContainer>
                      <TabLiveDetailText
                        active={isActive(item.id) && item.detail}
                      >
                        詳細情報 |<br />
                        {stringLink(item.detail)}
                      </TabLiveDetailText>
                    </TabLiveContentsContainer>
                    <TabLiveImage
                      onClick={() =>
                        setLiveImageModal({
                          title: item.title,
                          image: item.image.url,
                          open: true,
                          imageVertical: item.imageVertical,
                        })
                      }
                      loading="lazy"
                      vertical={item.imageVertical}
                      src={notExistImage(item.image.url)}
                      alt={item.title}
                    />
                  </TabLiveMainContainer>
                </TabLiveItemContainer>
              ))}
            </TabLiveContainer>
            <SpLiveContainer>
              {lives.map((item) => (
                <SpLiveItemContainer key={item.id}>
                  <SpLiveButton
                    onClick={toggleAccordion(item.id)}
                    src={spToggleAccordionButton(item.id)}
                    alt="accordion button"
                  />
                  <SpLiveMainContainer>
                    <SpLiveDate onClick={toggleAccordion(item.id)}>
                      {dateFormat(item.date)}
                    </SpLiveDate>
                    <SpLiveTitle onClick={toggleAccordion(item.id)}>
                      {item.title}
                    </SpLiveTitle>
                    <br />
                    {item.ticketLink ? (
                      <SpLiveTicketButton
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.ticketLink}
                        active={futureTime(item.date)}
                      >
                        チケットをご希望の方はこちら
                      </SpLiveTicketButton>
                    ) : (
                      <SpLiveTicketButton
                        onClick={() =>
                          handleSpTicketButtonClick(item.date, item.title)
                        }
                        active={futureTime(item.date)}
                      >
                        チケットをご希望の方はこちら
                      </SpLiveTicketButton>
                    )}
                    <SpLiveFinishTag finish={pastTime(item.date)}>
                      終了
                    </SpLiveFinishTag>
                    <SpLiveInfoContainer active={isActive(item.id)}>
                      <SpLiveInfoText>
                        開場時間 |{' '}
                        {notExistTime(openAndStartTime(item.openTime))} 開演時間
                        | {notExistTime(openAndStartTime(item.startTime))}
                      </SpLiveInfoText>
                      <SpLiveInfoText>場所 | {item.venue}</SpLiveInfoText>
                      <SpLiveInfoText>料金 | {item.price}</SpLiveInfoText>
                      <SpLiveInfoText>出演者 | {item.performer}</SpLiveInfoText>
                      <SpLiveImage
                        onClick={() =>
                          setLiveImageModal({
                            title: item.title,
                            image: item.image.url,
                            open: true,
                            imageVertical: item.imageVertical,
                          })
                        }
                        loading="lazy"
                        vertical={item.imageVertical}
                        src={notExistImage(item.image.url)}
                        alt={item.title}
                      />
                      <SpLiveDetailText active={item.detail}>
                        詳細情報 |<br />
                        {stringLink(item.detail)}
                      </SpLiveDetailText>
                    </SpLiveInfoContainer>
                  </SpLiveMainContainer>
                </SpLiveItemContainer>
              ))}
            </SpLiveContainer>
            <SnsFixedContainer hidden={isConfirmationVisible}>
              <SnsFixedBorder></SnsFixedBorder>
              <SnsFixedText>our sns</SnsFixedText>
              <SnsFixedIconLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/retroriron"
              >
                <SnsFixedIconImage
                  loading="lazy"
                  src={TwitterOrange}
                  alt="レトロリロンのTwitter"
                />
              </SnsFixedIconLink>
              <SnsFixedIconLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/retroriron/?hl=ja"
              >
                <SnsFixedIconImage
                  loading="lazy"
                  src={InstagramOrange}
                  alt="レトロリロンのInstagram"
                />
              </SnsFixedIconLink>
              <SnsFixedIconLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCkE8tVIvmdos9b1OqEhePlg"
              >
                <SnsFixedIconImage
                  loading="lazy"
                  src={YoutubeOrange}
                  alt="レトロリロンのYouTube"
                />
              </SnsFixedIconLink>
              <SnsFixedBorder></SnsFixedBorder>
            </SnsFixedContainer>
          </>
        ) : (
          <SpTicketForm
            date={spTicketDateAndTitle.date}
            title={spTicketDateAndTitle.title}
          />
        )}
        <LiveImageModalContainer open={noImageModal(liveImageModal.image)}>
          <LiveImageModalBack onClick={handleLiveImageModalClick}>
            <LiveImageModalItem
              vertical={liveImageModal.imageVertical}
              src={liveImageModal.image}
              alt={liveImageModal.title}
            />
          </LiveImageModalBack>
        </LiveImageModalContainer>
      </LoadingContainer>
    </>
  );
};

export default Live;

// PC

const PcLiveContainer = styled.ul`
  display: none;
  @media screen and (min-width: 900px) {
    padding-bottom: 160px;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 1200px;
  }
`;

const PcLiveItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
`;

const PcLiveMainContainer = styled.div`
  display: flex;
`;

const PcLiveItemOtherContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
`;

const PcLiveDate = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 32px;
`;

const PcLiveButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: default;
  margin-right: 24px;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const PcLiveContentsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PcLiveTextContainer = styled.div`
  display: block;
`;

const PcLiveTitle = styled.a`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.2rem;
  cursor: default;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const PcLiveInfoContainer = styled.div`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const PcLiveInfoText = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const PcLiveTicketButton = styled.a`
  display: none;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background-color: #f1a01a;
  padding: 10px 16px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 16px;
  ${(props) => props.active && `display: inline-block;`}
`;

const PcLiveImage = styled.img`
  display: block;
  width: 200px;
  height: 100%;
  cursor: pointer;
  ${(props) =>
    props.vertical &&
    `
        width: 160px;
        height: 200px;
    `}
`;

const PcLiveDetailText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 4px;
  white-space: pre-wrap;
  margin-top: 16px;
  display: none;
  word-break: break-all;
  ${(props) => props.active && `display: block;`}
`;

const PcLiveFinishTag = styled.p`
  display: none;
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  background-color: #f42626;
  border-radius: 3px;
  margin-left: 16px;
  ${(props) => props.finish && `display: inline-block;`}
`;

// PC-チケット

// ModalContainer

const ModalContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    width: 100%;
    ${(props) => props.open && `display: block;`}
  }
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.7);
`;

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

// ContactFormContainer

const TicketFormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
`;

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
  &:first-of-type {
    width: 120px;
    padding: 0 16px;
  }
  ${(props) => props.title && `width: 100%`}
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
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;
`;

// TAB

const TabLiveContainer = styled.ul`
  display: none;
  @media screen and (min-width: 400px) {
    display: block;
    width: 100%;
    height: 100%;
    margin-left: 5%;
  }
  @media screen and (min-width: 900px) {
    margin-left: 0;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const TabLiveItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
`;

const TabLiveButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: default;
  margin-right: 24px;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const TabLiveMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const TabLiveContentsContainer = styled.div`
  display: block;
`;

const TabLiveDate = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 8px;
  cursor: default;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const TabLiveTitle = styled.a`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  cursor: default;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const TabLiveTicketButton = styled.a`
  display: none;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background-color: #f1a01a;
  padding: 10px 16px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 16px;
  ${(props) => props.active && `display: inline-block;`}
`;

const TabLiveFinishTag = styled.p`
  display: none;
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  background-color: #f42626;
  border-radius: 3px;
  margin-top: 16px;
  margin-left: 16px;
  ${(props) => props.finish && `display: inline-block;`}
`;

const TabLiveImage = styled.img`
  @media screen and (min-width: 400px) {
    display: none;
  }
  @media screen and (min-width: 600px) {
    cursor: pointer;
    display: block;
    width: 160px;
    height: 100%;
    ${(props) =>
      props.vertical &&
      `
            width: 128px;
            height: 160px;
        `}
  }
  @media screen and (min-width: 680px) {
    display: block;
    width: 200px;
    ${(props) =>
      props.vertical &&
      `
            width: 160px;
            height: 200px;
        `}
  }
`;

const TabLiveBottomImage = styled.img`
  display: none;
  @media screen and (min-width: 400px) {
    display: block;
    width: 160px;
    height: 100%;
    margin-top: 16px;
    ${(props) =>
      props.vertical &&
      `
            width: 128px;
            height: 160px;
        `}
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const TabLiveInfoContainer = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
`;

const TabLiveInfoText = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 4px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const TabLiveDetailText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 4px;
  white-space: pre-wrap;
  margin-top: 16px;
  display: none;
  word-break: break-all;
  ${(props) => props.active && `display: block;`}
`;

// SP

const SpLiveContainer = styled.ul`
  display: block;
  width: 240px;
  height: 100%;
  margin-left: 5%;
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 400px) {
    display: none;
  }
`;

const SpLiveItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
`;

const SpLiveButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-right: 24px;
`;

const SpLiveMainContainer = styled.div`
  display: block;
`;

const SpLiveDate = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
  cursor: pointer;
`;

const SpLiveTitle = styled.a`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
  cursor: pointer;
  margin-bottom: 16px;
`;

const SpLiveTicketButton = styled.a`
  display: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background-color: #f1a01a;
  padding: 10px 16px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 16px;
  ${(props) => props.active && `display: inline-block;`}
`;

const SpLiveFinishTag = styled.p`
  display: none;
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  background-color: #f42626;
  border-radius: 3px;
  margin-top: 16px;
  ${(props) => props.finish && `display: inline-block;`}
`;

const SpLiveInfoContainer = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  display: none;
  ${(props) => props.active && `display: block;`}
`;

const SpLiveInfoText = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 4px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SpLiveImage = styled.img`
  display: block;
  width: 160px;
  height: 100%;
  margin-top: 16px;
  cursor: pointer;
  ${(props) =>
    props.vertical &&
    `
        width: 128px;
        height: 200px;
    `}
`;

const SpLiveDetailText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 4px;
  white-space: pre-wrap;
  margin-top: 16px;
  display: none;
  word-break: break-all;
  ${(props) => props.active && `display: block;`}
`;

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
  @media screen and (min-width: 900px) {
    display: none;
  }
  ${(props) => props.hidden && `display: none;`}
`;

const SnsFixedBorder = styled.div`
  height: 1px;
  width: 24px;
  background-color: #000000;
`;

const SnsFixedText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 16px;
  margin-right: 16px;
  white-space: pre-wrap;
`;

const SnsFixedIconLink = styled.a`
  text-decoration: none;
  margin-right: 16px;
`;

const SnsFixedIconImage = styled.img`
  width: 32px;
  height: 30px;
  transform: rotate(-90deg);
`;

// ライブ画像モーダル

const LiveImageModalContainer = styled.div`
  display: none;
  ${(props) =>
    props.open &&
    `
        display: block;
        width: 100%;
    `}
`;

const LiveImageModalBack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LiveImageModalItem = styled.img`
  width: 50%;
  background-color: #fff;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  display: block;
  ${(props) =>
    props.vertical &&
    `
        width: 30%;
    `}
`;

// ローディング
const LoadingContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;
