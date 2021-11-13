import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { getDiscography } from '../api';
import Loading from '../components/common/Loading';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DiscographyPc from '../components/discography/DiscographyPc';
import DiscographySmartphone from '../components/discography/DiscographySmartphone';

const Discography = () => {
  // ローディング
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <Helmet>
        <title>レトロリロン - Discography page</title>
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
        <DiscographyPc discographies={discographies} />
        {/* SP */}
        <DiscographySmartphone discographies={discographies} />
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
