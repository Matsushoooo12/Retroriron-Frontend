import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga4';
import styled from '@emotion/styled';
import { getDiscography } from '../api';
import Loading from '../components/common/Loading';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DiscographyPc from '../components/discography/DiscographyPc';
import DiscographySmartphone from '../components/discography/DiscographySmartphone';
import { useLocation } from 'react-router-dom';

const Discography = () => {
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

  const [discographies, setDiscographies] = useState([]);

  const handleGetDiscography = async () => {
    try {
      const res = await getDiscography();
      setDiscographies(res.data);
    } catch (e) {
      alert(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetDiscography();
  }, [setDiscographies]);

  // dateフォーマット
  const dateFormat = (date) => {
    return moment(date).format('YYYY.MM.DD');
  };

  // 全角２文字・半角１文字
  const count = (str) => {
    let len = 0;

    for (let i = 0; i < str.length; i++) {
      str[i].match(/[ -~]/) ? (len += 1) : (len += 2);
    }

    return len;
  };

  return (
    <>
      <Helmet>
        <title>Discography page / レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
            音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトのDiscographyページ。
            レトロリロンの楽曲情報を配信しています。
            MVやサブスクリプションへのリンクも配置しています。
          "
        />
      </Helmet>
      <Loading isLoading={isLoading} />
      <LoadingContainer isLoading={isLoading}>
        <Header />
        {/* PC */}
        <DiscographyPc
          dateFormat={dateFormat}
          count={count}
          discographies={discographies}
        />
        {/* SP */}
        <DiscographySmartphone
          dateFormat={dateFormat}
          count={count}
          discographies={discographies}
        />
        <Footer />
      </LoadingContainer>
    </>
  );
};

export default Discography;

// ローディング
const LoadingContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;
