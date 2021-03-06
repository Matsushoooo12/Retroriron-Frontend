import React from 'react';
import styled from '@emotion/styled';
import GoodsImageTablet from '../../images/goods-image-pc.webp';

const GoodsTablet = () => {
  return (
    <>
      <GoodsImage src={GoodsImageTablet} alt="goods画像" />
      <AttentionText>※ライブ会場でのみお買い上げいただけます。</AttentionText>
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
