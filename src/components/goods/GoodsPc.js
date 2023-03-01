import React from 'react';
import styled from '@emotion/styled';
// import GoodsImagePC from '../../images/goods-image-pc.webp';
import GoodsImageV2 from '../../images/goods-image.webp';

const GoodsPc = () => {
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

export default GoodsPc;

const GoodsImage = styled.img`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    width: 60%;
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

const GoodsLink = styled.a`
  color: blue;
`;
