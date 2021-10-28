import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import FvFrame from '../images/main_visual.webp'
import BandTitle from '../images/title.webp'
import NumaImage from '../images/numa.webp'
import NagayamaImage from '../images/nagayama.webp'
import SuzuneImage from '../images/suzune.webp'
import MiriImage from '../images/miri.webp'
import Twitter from '../images/twitter-logo.png'
import Instagram from '../images/insta-logo.png'

const Home = () => {
    return (
        <>
            {/* Head */}
            <Helmet>
                <title>Home page</title>
                <meta name="the Home page of a pop band called Retroriron." content="home page" />
            </Helmet>
            {/* Head */}
            {/* PC */}
            <PcFv src={FvFrame} alt="レトロリロンのアー写" />
            <PcTextContainer>
                <PcTextBandname loading="lazy" src={BandTitle} alt="レトロリロン" />
                <PcTextTitle>ー  "明日"ではなく"今日"を生きよう </PcTextTitle>
                <PcTextItem>
                    2020年6月1日に結成。<br/>
                    音楽大学出身の個性豊かな4人組バンド。
                </PcTextItem>
                <PcTextItem>
                    4人の多彩な音楽性によって紡がれるジャンルレスなサウンドは人々の心を震わせ、<br/>
                    ”明日”ではなく”今日”を生きようという力強い歌詞は生きる希望を与える。
                </PcTextItem>
                <PcTextItem>
                    2021年にはオフィスオーガスタが新人発掘・開発のために立ち上げたプロジェクト"CANVAS vol.1"にも出演した、今注目のポップスバンド。
                </PcTextItem>
            </PcTextContainer>
            <PcMemberContainer>
                <PcMemberItemContainer>
                    <PcMemberImage loading="lazy" src={SuzuneImage} alt="涼音" />
                    <PcMemberTextContainer>
                        <PcMemberInstrument>Ag. Vo.</PcMemberInstrument>
                        <PcMemberName>涼音 <PcMemberNameRomaji>/ Suzune</PcMemberNameRomaji></PcMemberName>
                        <PcMemberText>
                            1997年10月31日生まれ。<br/>
                            千葉県出身。
                        </PcMemberText>
                        <PcMemberSnsContainer>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Twitter} alt="涼音のTwitter" /></PcSnsLink>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Instagram} alt="涼音のInstagram" /></PcSnsLink>
                        </PcMemberSnsContainer>
                    </PcMemberTextContainer>
                </PcMemberItemContainer>
                <PcMemberItemContainer>
                    <PcMemberImage loading="lazy" src={NagayamaImage} alt="永山タイキ" />
                    <PcMemberTextContainer>
                        <PcMemberInstrument>Dr.</PcMemberInstrument>
                        <PcMemberName>永山タイキ <PcMemberNameRomaji>/ Nagayama Taiki</PcMemberNameRomaji></PcMemberName>
                        <PcMemberText>
                            1997年5月20日生まれ。<br/>
                            大分県出身。
                        </PcMemberText>
                        <PcMemberSnsContainer>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Twitter} alt="永山タイキのTwitter" /></PcSnsLink>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Instagram} alt="永山タイキのInstagram" /></PcSnsLink>
                        </PcMemberSnsContainer>
                    </PcMemberTextContainer>
                </PcMemberItemContainer>
                <PcMemberItemContainer>
                    <PcMemberImage loading="lazy" src={MiriImage} alt="友野美里" />
                    <PcMemberTextContainer>
                        <PcMemberInstrument>Key.</PcMemberInstrument>
                        <PcMemberName>友野美里 <PcMemberNameRomaji>/ Tomono Miri</PcMemberNameRomaji></PcMemberName>
                        <PcMemberText>
                            1997年８月31日生まれ。<br/>
                            大分県出身。
                        </PcMemberText>
                        <PcMemberSnsContainer>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Twitter} alt="友野美里のTwitter" /></PcSnsLink>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Instagram} alt="友野美里のInstagram" /></PcSnsLink>
                        </PcMemberSnsContainer>
                    </PcMemberTextContainer>
                </PcMemberItemContainer>
                <PcMemberItemContainer>
                    <PcMemberImage loading="lazy" src={NumaImage} alt="飯沼一暁" />
                    <PcMemberTextContainer>
                        <PcMemberInstrument>Ba.</PcMemberInstrument>
                        <PcMemberName>飯沼一暁 <PcMemberNameRomaji>/ Inuma Kazuaki</PcMemberNameRomaji></PcMemberName>
                        <PcMemberText>
                            1997年8月8日生まれ。<br/>
                            広島県出身。
                        </PcMemberText>
                        <PcMemberSnsContainer>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Twitter} alt="飯沼一暁のTwitter" /></PcSnsLink>
                            <PcSnsLink rel="noopener noreferrer" target="_blank" href="#"><PcSnsIcon loading="lazy" src={Instagram} alt="飯沼一暁のInstagram" /></PcSnsLink>
                        </PcMemberSnsContainer>
                    </PcMemberTextContainer>
                </PcMemberItemContainer>
            </PcMemberContainer>
            {/* PC */}
            {/* TAB */}
            <TabFv src={FvFrame} alt="レトロリロンのアー写" />
            <TabTextContainer>
                <TabTextBandname loading="lazy" src={BandTitle} alt="レトロリロン" />
                <TabTextTitle>ー  "明日"ではなく"今日"を生きよう</TabTextTitle>
                <TabTextItem>
                    2020年6月1日に結成。<br/>
                    音楽大学出身の個性豊かな4人組バンド。
                </TabTextItem>
                <TabTextItem>
                    4人の多彩な音楽性によって紡がれるジャンルレスなサウンドは人々の心を震わせ、<br/>
                    ”明日”ではなく”今日”を生きようという力強い歌詞は生きる希望を与える。
                </TabTextItem>
                <TabTextItem>
                    2021年にはオフィスオーガスタが新人発掘・開発のために立ち上げたプロジェクト"CANVAS vol.1"にも出演した、今注目のポップスバンド。
                </TabTextItem>
            </TabTextContainer>
            <TabMemberContainer>
                <TabMemberItemContainer>
                    <TabMemberImage loading="lazy" src={SuzuneImage} alt="涼音" />
                    <TabMemberInstrument>Ag. Vo.</TabMemberInstrument>
                    <TabMemberName>涼音 <TabMemberNameRomaji>/ Suzune</TabMemberNameRomaji></TabMemberName>
                    <TabMemberText>
                        1997年10月31日生まれ。<br/>
                        千葉県出身。
                    </TabMemberText>
                    <TabMemberSnsContainer>
                        <TabMemberSnsContainer>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Twitter} alt="涼音のTwitter" /></TabSnsLink>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Instagram} alt="涼音のInstagram" /></TabSnsLink>
                        </TabMemberSnsContainer>
                    </TabMemberSnsContainer>
                </TabMemberItemContainer>
                <TabMemberItemContainer>
                    <TabMemberImage loading="lazy" src={NagayamaImage} alt="永山タイキ" />
                    <TabMemberInstrument>Dr.</TabMemberInstrument>
                    <TabMemberName>永山タイキ <TabMemberNameRomaji>/ Nagayama Taiki</TabMemberNameRomaji></TabMemberName>
                    <TabMemberText>
                        1997年5月20日生まれ。<br/>
                        大分県出身。
                    </TabMemberText>
                    <TabMemberSnsContainer>
                        <TabMemberSnsContainer>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Twitter} alt="永山タイキのTwitter" /></TabSnsLink>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Instagram} alt="永山タイキのInstagram" /></TabSnsLink>
                        </TabMemberSnsContainer>
                    </TabMemberSnsContainer>
                </TabMemberItemContainer>
                <TabMemberItemContainer>
                    <TabMemberImage loading="lazy" src={MiriImage} alt="友野美里" />
                    <TabMemberInstrument>Key.</TabMemberInstrument>
                    <TabMemberName>友野美里 <TabMemberNameRomaji>/ Tomono Miri</TabMemberNameRomaji></TabMemberName>
                    <TabMemberText>
                        1997年10月31日生まれ。<br/>
                        千葉県出身。
                    </TabMemberText>
                    <TabMemberSnsContainer>
                        <TabMemberSnsContainer>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Twitter} alt="友野美里のTwitter" /></TabSnsLink>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Instagram} alt="友野美里のInstagram" /></TabSnsLink>
                        </TabMemberSnsContainer>
                    </TabMemberSnsContainer>
                </TabMemberItemContainer>
                <TabMemberItemContainer>
                    <TabMemberImage loading="lazy" src={NumaImage} alt="飯沼一暁" />
                    <TabMemberInstrument>Ag. Vo.</TabMemberInstrument>
                    <TabMemberName>飯沼一暁 <TabMemberNameRomaji>/ Inuma Kazuaki</TabMemberNameRomaji></TabMemberName>
                    <TabMemberText>
                        1997年8月8日生まれ。<br/>
                        広島県出身。
                    </TabMemberText>
                    <TabMemberSnsContainer>
                        <TabMemberSnsContainer>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Twitter} alt="飯沼一暁のTwitter" /></TabSnsLink>
                            <TabSnsLink rel="noopener noreferrer" target="_blank" href="#"><TabSnsIcon loading="lazy" src={Instagram} alt="飯沼一暁のInstagram" /></TabSnsLink>
                        </TabMemberSnsContainer>
                    </TabMemberSnsContainer>
                </TabMemberItemContainer>
            </TabMemberContainer>
            {/* TAB */}
            {/* Sp */}
            <SpFv src={FvFrame} alt="レトロリロンのアー写" />
            <SpTextContainer>
                <SpTextBandname loading="lazy" src={BandTitle} alt="レトロリロン" />
                <SpTextTitle>ー  "明日"ではなく<SpTextTitleBr/><SpTextTitleSpace>　 </SpTextTitleSpace>"今日"を生きよう</SpTextTitle>
                <SpTextItem>
                    2020年6月1日に結成。<br/>
                    音楽大学出身の個性豊かな4人組バンド。
                </SpTextItem>
                <SpTextItem>
                    4人の多彩な音楽性によって紡がれるジャンルレスなサウンドは人々の心を震わせ、<br/>
                    ”明日”ではなく”今日”を生きようという力強い歌詞は生きる希望を与える。
                </SpTextItem>
                <SpTextItem>
                    2021年にはオフィスオーガスタが新人発掘・開発のために立ち上げたプロジェクト"CANVAS vol.1"にも出演した、今注目のポップスバンド。
                </SpTextItem>
            </SpTextContainer>
            <SpMemberContainer>
                <SpMemberItemContainer>
                    <SpMemberImage loading="lazy" src={SuzuneImage} alt="涼音" />
                    <SpMemberInstrument>Ag. Vo.</SpMemberInstrument>
                    <SpMemberName>涼音 <SpMemberNameRomaji>/ Suzune</SpMemberNameRomaji></SpMemberName>
                    <SpMemberText>
                        1997年10月31日生まれ。<br/>
                        千葉県出身。
                    </SpMemberText>
                    <SpMemberSnsContainer>
                        <SpMemberSnsContainer>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Twitter} alt="涼音のTwitter" /></SpSnsLink>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Instagram} alt="涼音のInstagram" /></SpSnsLink>
                        </SpMemberSnsContainer>
                    </SpMemberSnsContainer>
                </SpMemberItemContainer>
                <SpMemberItemContainer>
                    <SpMemberImage loading="lazy" src={NagayamaImage} alt="永山タイキ" />
                    <SpMemberInstrument>Dr.</SpMemberInstrument>
                    <SpMemberName>永山タイキ <SpMemberNameRomaji>/ Nagayama Taiki</SpMemberNameRomaji></SpMemberName>
                    <SpMemberText>
                        1997年5月20日生まれ。<br/>
                        大分県出身。
                    </SpMemberText>
                    <SpMemberSnsContainer>
                        <SpMemberSnsContainer>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Twitter} alt="永山タイキのTwitter" /></SpSnsLink>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Instagram} alt="永山タイキのInstagram" /></SpSnsLink>
                        </SpMemberSnsContainer>
                    </SpMemberSnsContainer>
                </SpMemberItemContainer>
                <SpMemberItemContainer>
                    <SpMemberImage loading="lazy" src={MiriImage} alt="友野美里" />
                    <SpMemberInstrument>Key.</SpMemberInstrument>
                    <SpMemberName>友野美里 <SpMemberNameRomaji>/ Tomono Miri</SpMemberNameRomaji></SpMemberName>
                    <SpMemberText>
                        1997年10月31日生まれ。<br/>
                        千葉県出身。
                    </SpMemberText>
                    <SpMemberSnsContainer>
                        <SpMemberSnsContainer>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Twitter} alt="友野美里のTwitter" /></SpSnsLink>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Instagram} alt="友野美里のInstagram" /></SpSnsLink>
                        </SpMemberSnsContainer>
                    </SpMemberSnsContainer>
                </SpMemberItemContainer>
                <SpMemberItemContainer>
                    <SpMemberImage loading="lazy" src={NumaImage} alt="飯沼一暁" />
                    <SpMemberInstrument>Ba.</SpMemberInstrument>
                    <SpMemberName>飯沼一暁 <SpMemberNameRomaji>/ Inuma Kazuaki</SpMemberNameRomaji></SpMemberName>
                    <SpMemberText>
                        1997年8月8日生まれ。<br/>
                        広島県出身。
                    </SpMemberText>
                    <SpMemberSnsContainer>
                        <SpMemberSnsContainer>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Twitter} alt="飯沼一暁のTwitter" /></SpSnsLink>
                            <SpSnsLink rel="noopener noreferrer" target="_blank" href="#"><SpSnsIcon loading="lazy" src={Instagram} alt="飯沼一暁のInstagram" /></SpSnsLink>
                        </SpMemberSnsContainer>
                    </SpMemberSnsContainer>
                </SpMemberItemContainer>
            </SpMemberContainer>
            {/* Sp */}
        </>
    )
}

export default Home

// PC

// PC-FV

const PcFv = styled.img`
    display: none;
    @media screen and (min-width: 900px){
        width: 100%;
        display: block;
        margin-bottom: 64px;
    }
`

// PC-テキスト

const PcTextContainer = styled.div`
    display: none;
    @media screen and (min-width: 900px){
        width: 80%;
        display: block;
        margin-bottom: 152px;
    }
`

const PcTextBandname = styled.img`
    width: 80%;
`

const PcTextTitle = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 32px;
`

const PcTextItem = styled.p`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 24px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

// PC-メンバー

const PcMemberContainer = styled.div`
    display: none;
    @media screen and (min-width: 900px){
        width: 100%;
        height: 100%;
        display: block;
        margin-bottom: 152px;
    }
`

const PcMemberItemContainer = styled.div`
    display: flex;
    height: 250px;
    margin-bottom: 64px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

const PcMemberImage = styled.img`
    width: 360px;
    height: 250px;
`

// PC-メンバ-テキスト

const PcMemberTextContainer = styled.div`
    height: 250px;
    margin-left: 32px;
`

const PcMemberInstrument = styled.p`
    color: #F1A11B;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 8px;
`

const PcMemberName = styled.h1`
    font-size: 2.4rem;
`

const PcMemberNameRomaji = styled.span`
    display: block;
    font-size: 1.6rem;
    margin-top: 4px;
    @media screen and (min-width: 1025px){
        display: inline-block;
    }
`

const PcMemberText = styled.p`
    font-size: 1.6rem;
    margin-top: 24px;
    line-height: 2.4rem;
`

// PC-メンバ-SNS

const PcMemberSnsContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: left;
`

const PcSnsIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const PcSnsLink = styled.a`
    &:first-of-type{
        margin-right: 16px;
    }
`

// TAB

// TAB-FV

const TabFv = styled.img`
    display: none;
    @media screen and (min-width: 768px){
        display: block;
        width: 100%;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
`

// TAB-テキスト

const TabTextContainer = styled.div`
    display: none;
    @media screen and (min-width: 768px){
        display: block;
        width: 100%;
        padding-left: 40px;
        padding-bottom: 56px;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
`

const TabTextBandname = styled.img`
    width: 80%;
`

const TabTextTitle = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 24px;
`

const TabTextItem = styled.p`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 24px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

// TAB-メンバー

const TabMemberContainer = styled.div`
    display: none;
    @media screen and (min-width: 768px){
        display: block;
        width: 100%;
        padding-left: 40px;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
`

const TabMemberItemContainer = styled.div`
    display: block;
    margin-bottom: 56px;
    width: 70%;
    &:last-of-type{
        margin-bottom: 72px;
    }
`

const TabMemberImage = styled.img`
    width: 100%;
    margin-bottom: 16px;
`

const TabMemberInstrument = styled.div`
    color: #F1A11B;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 8px;
`

const TabMemberName = styled.h1`
    font-size: 3.2rem;
    margin-bottom: 16px;
`

const TabMemberNameRomaji = styled.span`
    display: inline-block;
    font-size: 2.0rem;
    margin-top: 4px;
`

const TabMemberText = styled.p`
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 16px;
`

// TAB-メンバー-SNS

const TabMemberSnsContainer = styled.div`
    display: flex;
    justify-content: left;
`

const TabSnsIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const TabSnsLink = styled.a`
    &:first-of-type{
        margin-right: 16px;
    }
`

// Sp

// Sp-FV

const SpFv = styled.img`
    display: block;
    width: 100%;
    @media screen and (min-width: 768px){
        display: none;
    }
`

// Sp-テキスト

const SpTextContainer = styled.div`
    display: block;
    width: 100%;
    padding-left: 40px;
    padding-bottom: 56px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpTextBandname = styled.img`
    width: 80%;
`

const SpTextTitle = styled.h1`
    font-weight: 700;
    font-size: 2.0rem;
    margin-bottom: 24px;
    line-height: 3.2rem;
`

const SpTextTitleBr = styled.br`
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpTextTitleSpace = styled.span`
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpTextItem = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-bottom: 24px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

// Sp-メンバー

const SpMemberContainer = styled.div`
    display: block;
    width: 100%;
    padding-left: 40px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const SpMemberItemContainer = styled.div`
    display: block;
    margin-bottom: 56px;
    width: 70%;
    &:last-of-type{
        margin-bottom: 72px;
    }
`

const SpMemberImage = styled.img`
    width: 100%;
    margin-bottom: 16px;
`

const SpMemberInstrument = styled.div`
    color: #F1A11B;
    font-size: 1.0rem;
    font-weight: 700;
    margin-bottom: 8px;
`

const SpMemberName = styled.h1`
    font-size: 2.0rem;
    margin-bottom: 16px;
`

const SpMemberNameRomaji = styled.span`
    display: block;
    font-size: 1.4rem;
    margin-top: 4px;
`

const SpMemberText = styled.p`
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 16px;
`

// Sp-メンバー-SNS

const SpMemberSnsContainer = styled.div`
    display: flex;
    justify-content: left;
`

const SpSnsIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const SpSnsLink = styled.a`
    &:first-of-type{
        margin-right: 16px;
    }
`