import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Footer from '../components/common/Footer';
// import styled from '@emotion/styled';
import Header from '../components/common/Header';
import Loading from '../components/common/Loading';
import GoodsPc from '../components/goods/GoodsPc';
import GoodsTablet from '../components/goods/GoodsTablet';
import GoodsSmartphone from '../components/goods/GoodsSmartphone';
// import Loading from '../components/common/Loading';

const Goods = () => {
  // ローディング
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>レトロリロン - Goods page</title>
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
