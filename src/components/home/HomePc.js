import React from 'react';
import styled from '@emotion/styled';
import FvImage from '../../images/retroriron-main-v2.webp';
import BandTitle from '../../images/title.webp';
import NumaImage from '../../images/numa.webp';
import NagayamaImage from '../../images/taiki.webp';
import SuzuneImage from '../../images/suzune.webp';
import MiriImage from '../../images/miri.webp';
import Twitter from '../../images/twitter-icon-orange.png';
import Instagram from '../../images/insta-icon-orange.png';

const HomePc = () => {
  return (
    <>
      <Fv src={FvImage} alt="レトロリロンのアー写" />
      <TextContainer>
        <TextBandname loading="lazy" src={BandTitle} alt="レトロリロン" />
        <TextTitle>ー "明日"ではなく"今日"を生きよう </TextTitle>
        <TextItem>
          2020年6月にシンガーソングライター
          として活動していた涼音を中心に東京にて結成。
        </TextItem>
        <TextItem>
          各メンバーの多種多様な音楽性によって生まれるジャンルレスなサウンド、
          <br />
          "今"を必死に生きようとする等身大の歌詞が心に響く、注目のポップスバンド。
        </TextItem>
      </TextContainer>
      <MemberContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={SuzuneImage} alt="涼音" />
          <MemberTextContainer>
            <MemberInstrument>Ag. Vo.</MemberInstrument>
            <MemberName>
              涼音 <MemberNameRomaji>/ Suzune</MemberNameRomaji>
            </MemberName>
            <MemberText>
              1997年10月31日生まれ。
              <br />
              千葉県出身。
            </MemberText>
            <MemberSnsContainer>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/suzune_ssw"
              >
                <SnsIcon loading="lazy" src={Twitter} alt="涼音のTwitter" />
              </SnsLink>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/suzune_ssw/?hl=ja"
              >
                <SnsIcon loading="lazy" src={Instagram} alt="涼音のInstagram" />
              </SnsLink>
            </MemberSnsContainer>
          </MemberTextContainer>
        </MemberItemContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={MiriImage} alt="Miri" />
          <MemberTextContainer>
            <MemberInstrument>Key.</MemberInstrument>
            <MemberName>
              miri <MemberNameRomaji>/ Tomono Miri</MemberNameRomaji>
            </MemberName>
            <MemberText>
              1997年8月31日生まれ。
              <br />
              東京都出身。
            </MemberText>
            <MemberSnsContainer>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mirinomoto"
              >
                <SnsIcon loading="lazy" src={Twitter} alt="MiriのTwitter" />
              </SnsLink>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/miri_tomono/?hl=ja"
              >
                <SnsIcon loading="lazy" src={Instagram} alt="MiriのInstagram" />
              </SnsLink>
            </MemberSnsContainer>
          </MemberTextContainer>
        </MemberItemContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={NumaImage} alt="飯沼一暁" />
          <MemberTextContainer>
            <MemberInstrument>Ba.</MemberInstrument>
            <MemberName>
              飯沼一暁 <MemberNameRomaji>/ Iinuma Kazuaki</MemberNameRomaji>
            </MemberName>
            <MemberText>
              1997年8月8日生まれ。
              <br />
              広島県出身。
            </MemberText>
            <MemberSnsContainer>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/numw69"
              >
                <SnsIcon loading="lazy" src={Twitter} alt="飯沼一暁のTwitter" />
              </SnsLink>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/numw69/?hl=ja"
              >
                <SnsIcon
                  loading="lazy"
                  src={Instagram}
                  alt="飯沼一暁のInstagram"
                />
              </SnsLink>
            </MemberSnsContainer>
          </MemberTextContainer>
        </MemberItemContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={NagayamaImage} alt="永山タイキ" />
          <MemberTextContainer>
            <MemberInstrument>Dr.</MemberInstrument>
            <MemberName>
              永山タイキ <MemberNameRomaji>/ Nagayama Taiki</MemberNameRomaji>
            </MemberName>
            <MemberText>
              1997年5月20日生まれ。
              <br />
              大分県出身。
            </MemberText>
            <MemberSnsContainer>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/drums_taiki"
              >
                <SnsIcon
                  loading="lazy"
                  src={Twitter}
                  alt="永山タイキのTwitter"
                />
              </SnsLink>
              <SnsLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/taikidrummer/?hl=ja"
              >
                <SnsIcon
                  loading="lazy"
                  src={Instagram}
                  alt="永山タイキのInstagram"
                />
              </SnsLink>
            </MemberSnsContainer>
          </MemberTextContainer>
        </MemberItemContainer>
      </MemberContainer>
    </>
  );
};

export default HomePc;

// FV

const Fv = styled.img`
  display: none;
  @media screen and (min-width: 900px) {
    max-width: 1000px;
    width: 100%;
    display: block;
    margin-bottom: 64px;
  }
`;

// テキスト

const TextContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    width: 80%;
    display: block;
    margin-bottom: 152px;
  }
`;

const TextBandname = styled.img`
  width: 80%;
  max-width: 700px;
`;

const TextTitle = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 32px;
`;

const TextItem = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

// メンバー

const MemberContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    width: 100%;
    height: 100%;
    display: block;
    margin-bottom: 152px;
  }
`;

const MemberItemContainer = styled.div`
  display: flex;
  height: 250px;
  margin-bottom: 64px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const MemberImage = styled.img`
  width: 360px;
  height: 250px;
`;

// メンバ-テキスト

const MemberTextContainer = styled.div`
  height: 250px;
  margin-left: 32px;
`;

const MemberInstrument = styled.p`
  color: #f1a11b;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const MemberName = styled.h1`
  font-size: 2.4rem;
`;

const MemberNameRomaji = styled.span`
  display: block;
  font-size: 1.6rem;
  margin-top: 4px;
  @media screen and (min-width: 1025px) {
    display: inline-block;
  }
`;

const MemberText = styled.p`
  font-size: 1.6rem;
  margin-top: 24px;
  line-height: 2.4rem;
`;

// -メンバ-SNS

const MemberSnsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: left;
`;

const SnsIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 13px rgba(108, 65, 0, 0.2);
`;

const SnsLink = styled.a`
  &:first-of-type {
    margin-right: 16px;
  }
`;
