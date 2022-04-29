import React, { useEffect, useState } from 'react';
// import Helmet from 'react-helmet';
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
      {/* <Helmet>
        <title>レトロリロン</title>
        <meta
          name="description"
          content="
            音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイト。
            4人の多彩な音楽性によって紡がれるジャンルレスなサウンドは人々の心を震わせ、
            ”明日”ではなく”今日”を生きようという力強い歌詞は生きる希望を与える。
          "
        />
      </Helmet> */}
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
