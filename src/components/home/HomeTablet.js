import React from 'react';
import styled from '@emotion/styled';
import FvImage from '../../images/retroriron-main.webp';
import BandTitle from '../../images/title.webp';
import NumaImage from '../../images/numa.webp';
import NagayamaImage from '../../images/taiki.webp';
import SuzuneImage from '../../images/suzune.webp';
import MiriImage from '../../images/miri.webp';
import Twitter from '../../images/twitter-icon-orange.png';
import Instagram from '../../images/insta-icon-orange.png';

const HomeTablet = () => {
  return (
    <>
      <Fv src={FvImage} alt="レトロリロンのアー写" />
      <TextContainer>
        <TextBandname loading="lazy" src={BandTitle} alt="レトロリロン" />
        <TextTitle>ー "明日"ではなく"今日"を生きよう</TextTitle>
        <TextItem>
          2020年6月1日に結成。
          <br />
          音楽大学出身の個性豊かな4人組バンド。
        </TextItem>
        <TextItem>
          4人の多彩な音楽性によって紡がれるジャンルレスなサウンドは人々の心を震わせ、
          <br />
          ”明日”ではなく”今日”を生きようという力強い歌詞は生きる希望を与える。
        </TextItem>
        <TextItem>
          2021年にはオフィスオーガスタが新人発掘・開発のために立ち上げたプロジェクト"CANVAS
          vol.1"にも出演した、今注目のポップスバンド。
        </TextItem>
      </TextContainer>
      <MemberContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={SuzuneImage} alt="涼音" />
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
          </MemberSnsContainer>
        </MemberItemContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={MiriImage} alt="Miri" />
          <MemberInstrument>Key.</MemberInstrument>
          <MemberName>
            Miri <MemberNameRomaji>/ Tomono Miri</MemberNameRomaji>
          </MemberName>
          <MemberText>
            1997年8月31日生まれ。
            <br />
            東京都出身。
          </MemberText>
          <MemberSnsContainer>
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
          </MemberSnsContainer>
        </MemberItemContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={NumaImage} alt="飯沼一暁" />
          <MemberInstrument>Ag. Vo.</MemberInstrument>
          <MemberName>
            飯沼一暁 <MemberNameRomaji>/ Inuma Kazuaki</MemberNameRomaji>
          </MemberName>
          <MemberText>
            1997年8月8日生まれ。
            <br />
            広島県出身。
          </MemberText>
          <MemberSnsContainer>
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
          </MemberSnsContainer>
        </MemberItemContainer>
        <MemberItemContainer>
          <MemberImage loading="lazy" src={NagayamaImage} alt="永山タイキ" />
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
          </MemberSnsContainer>
        </MemberItemContainer>
      </MemberContainer>
    </>
  );
};

export default HomeTablet;

// FV

const Fv = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

// テキスト

const TextContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    padding-left: 40px;
    padding-bottom: 56px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const TextBandname = styled.img`
  width: 80%;
`;

const TextTitle = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 24px;
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
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    padding-left: 40px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const MemberItemContainer = styled.div`
  display: block;
  margin-bottom: 56px;
  width: 70%;
  &:last-of-type {
    margin-bottom: 72px;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;

const MemberInstrument = styled.div`
  color: #f1a11b;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const MemberName = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 16px;
`;

const MemberNameRomaji = styled.span`
  display: inline-block;
  font-size: 2rem;
  margin-top: 4px;
`;

const MemberText = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 16px;
`;

// メンバー-SNS

const MemberSnsContainer = styled.div`
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
