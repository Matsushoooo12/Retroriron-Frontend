import React from 'react';
import styled from '@emotion/styled';
import GoodsImageV2 from '../../images/goods-image.webp';

const GoodsSmartphone = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <GoodsImage src={GoodsImageV2} alt="goods画像" />
        <AttentionText>
          ※ライブ会場でお買い上げいただけます。 オンラインショップ準備中です。
        </AttentionText>
      </div>
    </>
  );
};

export default GoodsSmartphone;

const GoodsImage = styled.img`
  display: block;
  width: 80%;
  margin: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const AttentionText = styled.p`
  display: block;
  font-size: 12px;
  margin-top: 16px;
  color: #292929;
  width: 80%;
  margin: 16px auto 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
