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
        <title>レトロリロン - Live page</title>
        <meta
          name="description"
          content="
        音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトのLiveページ。
        レトロリロンのライブ活動の情報を配信しています。
        下北沢を拠点に精力的にライブ活動を行っています。
        取り置き予約やチケット予約も承っています。
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
