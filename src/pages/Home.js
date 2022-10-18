import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import styled from '@emotion/styled';
import Loading from '../components/common/Loading';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomePc from '../components/home/HomePc';
import HomeTablet from '../components/home/HomeTablet';
import HomeSmartphone from '../components/home/HomeSmartphone';
import { useLocation } from 'react-router-dom';
import FVImage from '../images/retroriron-main.webp';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(`${process.env.GAID}`);
    ReactGA.send({
      hitType: 'pageview',
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname,
    });
  }, [location]);

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
            2020年6月にシンガーソングライター として活動していた涼音を中心に東京にて結成。
            各メンバーの多種多様な音楽性によって生まれるジャンルレスなサウンド、
            ｀今｀を必死に生きようとする等身大の歌詞が心に響く、注目のポップスバンド。
          "
        />
        <meta name="thumbnail" content={FVImage} />
      </Helmet>
      {/* Head */}
      <Loading isLoading={isLoading} />
      <LoadingContainer isLoading={isLoading}>
        <Header />
        {/* PC */}
        <HomePc />
        <Footer />
        {/* PC */}
        {/* TAB */}
        <HomeTablet />
        {/* TAB */}
        {/* Sp */}
        <HomeSmartphone />
        {/* Sp */}
      </LoadingContainer>
    </>
  );
};

export default Home;

// ローディング
const LoadingContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;
