import React from 'react';
import styled from '@emotion/styled';
// import GoodsImagePC from '../../images/goods-image-pc.webp';
import GoodsImageV2 from '../../images/goods-image-v2.webp';

const GoodsPc = () => {
  return (
    <>
      <GoodsImage src={GoodsImageV2} alt="goods画像" />
      <AttentionText>※ライブ会場でのみお買い上げいただけます。</AttentionText>
    </>
  );
};

export default GoodsPc;

const GoodsImage = styled.img`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    width: 80%;
  }
`;

const AttentionText = styled.p`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    font-size: 14px;
    margin-top: 16px;
    color: #292929;
  }
`;
