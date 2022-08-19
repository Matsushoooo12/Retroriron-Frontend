import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import styled from '@emotion/styled';
import ReactGA from 'react-ga4';
import Plus from '../images/open-btn.png';
import Minus from '../images/close-btn.png';
import { getLive } from '../api';
import SpTicketForm from '../components/ticket/SpTicketForm';
import TwitterOrange from '../images/twitter-icon-orange.png';
import InstagramOrange from '../images/insta-icon-orange.png';
import YoutubeOrange from '../images/youtube-icon-orange.png';
import NilImageUrl from '../images/nil_image.JPG';
import Loading from '../components/common/Loading';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LivePc from '../components/live/LivePc';
import LiveTablet from '../components/live/LiveTablet';
import LiveSmartphone from '../components/live/LiveSmartphone';
import { useLocation } from 'react-router-dom';

const Live = () => {
  // ローディング
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(`${process.env.GAID}`);
    ReactGA.send({
      hitType: 'pageview',
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname,
    });
  }, [location]);

  // isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  // isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

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

  // API

  const [lives, setLives] = useState([]);

  // Date

  const now = moment();

  // FutureTime
  const futureTime = (date) => {
    return now < moment(date).add(1, 'days');
  };

  const handleGetLive = async () => {
    try {
      const res = await getLive();
      const data = res.data;
      let featureLives = data.filter(
        (d) => moment(now).format('YYYY-MM-DD') < d.date
      );
      featureLives.sort(function (x, y) {
        let firstDate = new Date(x.date),
          secondDate = new Date(y.date);
        if (firstDate < secondDate) return -1;
        if (firstDate > secondDate) return 1;
        return 0;
      });
      let pastLives = data.filter(
        (d) => moment(now).format('YYYY-MM-DD') > d.date
      );
      pastLives.sort(function (x, y) {
        let firstDate = new Date(x.date),
          secondDate = new Date(y.date);
        if (firstDate > secondDate) return -1;
        if (firstDate < secondDate) return 1;
        return 0;
      });
      const newArray = featureLives.concat(pastLives);
      setLives(newArray);
    } catch (e) {
      alert(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetLive();
  }, []);

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

  const pastTime = (date) => {
    return now > moment(date).add(1, 'days');
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
        <title>Live page / レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
            音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトのLive Scheduleページ。
            レトロリロンのライブ活動の情報を配信しています。
            下北沢を拠点に精力的にライブ活動を行っています。
            取り置き予約やチケット予約も承っています。
          "
        />
      </Helmet>
      <Loading isLoading={isLoading} />
      <LoadingContainer isLoading={isLoading}>
        <Header />
        {/* PC */}
        <LivePc
          lives={lives}
          dateFormat={dateFormat}
          toggleAccordion={toggleAccordion}
          toggleAccordionButton={toggleAccordionButton}
          pastTime={pastTime}
          futureTime={futureTime}
          notExistTime={notExistTime}
          openAndStartTime={openAndStartTime}
          isActive={isActive}
          stringLink={stringLink}
          notExistImage={notExistImage}
          setLiveImageModal={setLiveImageModal}
        />
        {/* TAB */}
        {!isConfirmationVisible ? (
          <>
            <LiveTablet
              lives={lives}
              dateFormat={dateFormat}
              toggleAccordion={toggleAccordion}
              toggleAccordionButton={toggleAccordionButton}
              handleSpTicketButtonClick={handleSpTicketButtonClick}
              pastTime={pastTime}
              futureTime={futureTime}
              notExistTime={notExistTime}
              openAndStartTime={openAndStartTime}
              isActive={isActive}
              stringLink={stringLink}
              notExistImage={notExistImage}
              setLiveImageModal={setLiveImageModal}
            />
            <LiveSmartphone
              lives={lives}
              dateFormat={dateFormat}
              toggleAccordion={toggleAccordion}
              spToggleAccordionButton={spToggleAccordionButton}
              handleSpTicketButtonClick={handleSpTicketButtonClick}
              pastTime={pastTime}
              futureTime={futureTime}
              notExistTime={notExistTime}
              openAndStartTime={openAndStartTime}
              isActive={isActive}
              stringLink={stringLink}
              notExistImage={notExistImage}
              setLiveImageModal={setLiveImageModal}
            />
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
        <Footer />
      </LoadingContainer>
    </>
  );
};

export default Live;

// SpFixedSNS

const SnsFixedContainer = styled.div`
  display: block;
  position: fixed;
  left: 8%;
  top: 50%;
  width: 32px;
  @media screen and (min-width: 900px) {
    display: none;
  }
  ${(props) => props.location && `display: none;`}
`;

const SnsFixedBorder = styled.div`
  height: 24px;
  width: 1px;
  background-color: #000000;
  margin: 0 auto 16px;
`;

const SnsFixedText = styled.p`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 auto 12px;
  padding-left: 2px;
`;

const SnsFixedIconLink = styled.a`
  text-decoration: none;
`;

const SnsFixedIconImage = styled.img`
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
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
