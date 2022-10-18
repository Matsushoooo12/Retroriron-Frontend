import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import moment from 'moment';
import styled from '@emotion/styled';
import ReactGA from 'react-ga4';
import { getNews } from '../api';
import Plus from '../images/open-btn.png';
import Minus from '../images/close-btn.png';
import Header from '../components/common/Header';
import Loading from '../components/common/Loading';
import Footer from '../components/common/Footer';
import NewsPc from '../components/news/NewsPc';
import NewsTablet from '../components/news/NewsTablet';
import NewsSmartphone from '../components/news/NewsSmartphone';
import { useLocation } from 'react-router-dom';

const News = () => {
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

  // API

  const [news, setNews] = useState([]);
  const handleGetNews = async () => {
    try {
      const res = await getNews();
      await setNews(res.data);
    } catch (e) {
      alert(e);
    }
    await setIsLoading(false);
  };

  useEffect(async () => {
    await handleGetNews();
  }, []);

  // アコーディオン

  const [content, setContent] = useState(null);
  const toggleAccordion = (i) => {
    return () => setContent(content === i ? null : i);
  };

  // アコーディオンのtoggleボタン
  const toggleAccordionButton = (index) => {
    return content === index ? Minus : Plus;
  };

  // Active

  const isActive = (index) => content === index;

  // dateフォーマット
  const dateFormat = (date) => {
    return moment(date).format('YYYY.MM.DD');
  };

  // 文字列内リンク

  const stringLink = (str) => {
    const regexp_url = /https?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+/g;
    const regexp_makeLink = (url) => {
      return `<a href=${url} style="color: #F1A11B; text-decoration: underline;" target="_blank" rel="noopener noreferrer">${url}</a>`;
    };
    const replacedString = str.replace(regexp_url, regexp_makeLink);

    return <p dangerouslySetInnerHTML={{ __html: replacedString }}></p>;
  };

  return (
    <>
      {/* HEAD */}
      <Helmet>
        <title>News page / レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
            音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトのNewsページ。
            日頃のバンド活動や、個々のメンバーの活動についてのニュースを配信しています。
          "
        />
        <meta name="thumbnail" content={FVImage} />
      </Helmet>
      {/* HEAD */}
      <Loading isLoading={isLoading} />
      <LoadingContainer isLoading={isLoading}>
        <Header />
        {/* PC */}
        <NewsPc
          news={news}
          dateFormat={dateFormat}
          toggleAccordion={toggleAccordion}
          toggleAccordionButton={toggleAccordionButton}
          isActive={isActive}
          stringLink={stringLink}
        />
        {/* PC */}
        {/* Tablet */}
        <NewsTablet
          news={news}
          dateFormat={dateFormat}
          toggleAccordion={toggleAccordion}
          toggleAccordionButton={toggleAccordionButton}
          isActive={isActive}
          stringLink={stringLink}
        />
        {/* Tablet */}
        {/* Smartphone */}
        <NewsSmartphone
          news={news}
          dateFormat={dateFormat}
          toggleAccordion={toggleAccordion}
          toggleAccordionButton={toggleAccordionButton}
          isActive={isActive}
          stringLink={stringLink}
        />
        {/* Smartphone */}
        <Footer />
      </LoadingContainer>
    </>
  );
};

export default News;

// ローディング
const LoadingContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;
