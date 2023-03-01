import React from 'react';
import styled from '@emotion/styled';
import GoodsImageV2 from '../../images/goods-image.webp';

const GoodsTablet = () => {
  return (
    <>
      <GoodsImage src={GoodsImageV2} alt="goods画像" />
      <AttentionText>
        ※ライブ会場でお買い上げいただけます。オンラインショップは
        <GoodsLink
          target="_blank"
          href="https://retroriron.theshop.jp/"
          rel="noreferrer"
        >
          こちら
        </GoodsLink>
        から。
      </AttentionText>
    </>
  );
};

export default GoodsTablet;

const GoodsImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    padding-left: 40px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const AttentionText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: 13px;
    margin-top: 16px;
    color: #292929;
    padding-left: 40px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const GoodsLink = styled.a`
  color: blue;
`;
