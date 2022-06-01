import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Loading from '../components/common/Loading';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomePc from '../components/home/HomePc';
import HomeTablet from '../components/home/HomeTablet';
import HomeSmartphone from '../components/home/HomeSmartphone';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>レトロリロン</title>
        <meta
          name="description"
          content="
          2020年6月にシンガーソングライター として活動していだ涼音’を中心に東京にて結成。
          各メンバーの多種多様な音楽性によって生まれるジャンルレスなサウンド、
          ｀今｀を必死に生きようとする等身大の歌詞が心に響く、注目のポップスバンド。
          "
        />
        <link rel="canonical" href="https://retroriron.com" />
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
