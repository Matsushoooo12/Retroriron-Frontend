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

const HomeSmartphone = () => {
  return (
    <>
      <Fv src={FvImage} alt="レトロリロンのアー写" />
      <TextContainer>
        <TextBandname loading="lazy" src={BandTitle} alt="レトロリロン" />
        <TextTitle>
          ー "明日"ではなく
          <TextTitleBr />
          <TextTitleSpace>ー </TextTitleSpace>"今日"を生きる
        </TextTitle>
        <TextItem>2020年6月、東京にて結成。</TextItem>
        <TextItem>
          “今日を生きる”ありのままの気持ちを歌った歌詞、中毒性のあるソウルフルな歌声、
          バックグラウンドが異なるメンバーが織りなすジャンルレスなプレイが魅力のポップスバンド。
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
            miri <MemberNameRomaji>/ Tomono Miri</MemberNameRomaji>
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
                href="https://instagram.com/numw69?igshid=YmMyMTA2M2Y="
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

export default HomeSmartphone;

// FV

const Fv = styled.img`
  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// テキスト

const TextContainer = styled.div`
  display: block;
  width: 100%;
  padding-left: 40px;
  padding-bottom: 56px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TextBandname = styled.img`
  width: 80%;
`;

const TextTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 24px;
  line-height: 3.2rem;
`;

const TextTitleBr = styled.br`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TextTitleSpace = styled.span`
  display: inline;
  opacity: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TextItem = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

// メンバー

const MemberContainer = styled.div`
  display: block;
  width: 100%;
  padding-left: 40px;
  @media screen and (min-width: 768px) {
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
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const MemberName = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

const MemberNameRomaji = styled.span`
  display: block;
  font-size: 1.4rem;
  margin-top: 4px;
`;

const MemberText = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 16px;
`;

// Sp-メンバー-SNS

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
