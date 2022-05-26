import React from 'react';
import { Helmet } from 'react-helmet';
// import styled from '@emotion/styled';
import Header from '../components/common/Header';
// import Loading from '../components/common/Loading';

const Goods = () => {
  // ローディング
  //   const [isLoading, setIsLoading] = useState(true);

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
      <Header />
      <div>
        <p>Goods</p>
      </div>
      {/* </LoadingContainer> */}
    </>
  );
};

// ローディング
// const LoadingContainer = styled.div`
//   display: none;
// `;

export default Goods;
