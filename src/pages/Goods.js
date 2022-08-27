import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Footer from '../components/common/Footer';
import ReactGA from 'react-ga4';
import Header from '../components/common/Header';
import Loading from '../components/common/Loading';
import GoodsPc from '../components/goods/GoodsPc';
import GoodsTablet from '../components/goods/GoodsTablet';
import GoodsSmartphone from '../components/goods/GoodsSmartphone';
// import Loading from '../components/common/Loading';
import { useLocation } from 'react-router-dom';

const Goods = () => {
  // ローディング
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
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
      <Helmet>
        <title>Goods page / レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
            音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトのGoodsページ。
            レトロリロンのオリジナルグッズを掲載しています。
            ライブ会場で主に取り扱っているので、足を運んでお求めください。
          "
        />
      </Helmet>
      {/* <Loading isLoading={false} />
      <LoadingContainer isLoading={false}> */}
      <Loading isLoading={isLoading} />
      <LoadingContainer isLoading={isLoading}>
        <Header />
        {/* image-v3 */}
        {/* PC */}
        <GoodsPc />
        <Footer />
        {/* PC */}
        {/* TAB */}
        <GoodsTablet />
        {/* TAB */}
        {/* Sp */}
        <GoodsSmartphone />
        {/* Sp */}
      </LoadingContainer>
      {/* </LoadingContainer> */}
    </>
  );
};

const LoadingContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

export default Goods;
