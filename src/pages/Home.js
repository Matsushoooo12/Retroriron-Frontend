import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import FvFrame from '../images/main-visual-frame.png'
import FvImage from '../images/retroriron.jpeg'
import BandTitle from '../images/title.png'
import NumaImage from '../images/numa.png'
import NagayamaImage from '../images/nagayama.png'
import SuzuneImage from '../images/suzune.png'
import MiriImage from '../images/miri.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
                <meta name="the Home page of a pop band called Retroriron." content="home page" />
            </Helmet>
            <HomeContainer>
                <FvContainer>
                    <FvImageBlock src={FvImage} />
                </FvContainer>
                <BandIntroduceContainer>
                    <BandTitleBlock src={BandTitle} />
                    <BandTextBlock>
                        <BandTextH1>
                            ー  "明日"ではなく"今日"を生きよう 
                        </BandTextH1>
                        <BandTextPBlock>
                            <BandTextP>
                                2020年6月1日に結成。
                                音楽大学出身の個性豊かな4人組バンド。
                            </BandTextP>
                            <BandTextP>
                                4人の多彩な音楽性によって紡がれるジャンルレスなサウンドは人々の心を震わせ、
                                ”明日”ではなく”今日”を生きようという力強い歌詞は生きる希望を与える。
                            </BandTextP>
                            <BandTextP>
                                2021年にはオフィスオーガスタが新人発掘・開発のために立ち上げたプロジェクト"CANVAS vol.1"にも出演した、
                                今注目のポップスバンド。
                            </BandTextP>
                        </BandTextPBlock>
                    </BandTextBlock>
                </BandIntroduceContainer>
                <BandMemberContainer>
                    <MemberItemContainer>
                        <MemberImage src={SuzuneImage} />
                        <MemberTextContainer>
                            <MemberTitleContainer>
                                <MemberInstrument>Ag. Vo.</MemberInstrument>
                                <MemberName>涼音 <MemberNameRomaji>/ Suzune</MemberNameRomaji></MemberName>
                                <MemberText>
                                    1997年10月31日生まれ。<br/>
                                    千葉県出身。
                                </MemberText>
                                <MemberSnsContainer>
                                    <SnsLink href="#"><SnsIcon src={Twitter} /></SnsLink>
                                    <SnsLink href="#"><SnsIcon src={Instagram} /></SnsLink>
                                </MemberSnsContainer>
                            </MemberTitleContainer>
                        </MemberTextContainer>
                    </MemberItemContainer>
                    <MemberItemContainer>
                        <MemberImage src={NagayamaImage} />
                        <MemberTextContainer>
                            <MemberTitleContainer>
                                <MemberInstrument>Dr.</MemberInstrument>
                                <MemberName>永山タイキ <MemberNameRomaji>/ Nagayama Taiki</MemberNameRomaji></MemberName>
                                <MemberText>
                                    1997年5月20日生まれ。<br/>
                                    大分県出身。
                                </MemberText>
                                <MemberSnsContainer>
                                    <SnsLink href="#"><SnsIcon src={Twitter} /></SnsLink>
                                    <SnsLink href="#"><SnsIcon src={Instagram} /></SnsLink>
                                </MemberSnsContainer>
                            </MemberTitleContainer>
                        </MemberTextContainer>
                    </MemberItemContainer>
                    <MemberItemContainer>
                        <MemberImage src={MiriImage} />
                        <MemberTextContainer>
                            <MemberTitleContainer>
                                <MemberInstrument>Key.</MemberInstrument>
                                <MemberName>Miri</MemberName>
                                <MemberText>
                                    1997年10月31日生まれ。<br/>
                                    千葉県出身。
                                </MemberText>
                                <MemberSnsContainer>
                                    <SnsLink href="#"><SnsIcon src={Twitter} /></SnsLink>
                                    <SnsLink href="#"><SnsIcon src={Instagram} /></SnsLink>
                                </MemberSnsContainer>
                            </MemberTitleContainer>
                        </MemberTextContainer>
                    </MemberItemContainer>
                    <MemberItemContainer>
                        <MemberImage src={NumaImage} />
                        <MemberTextContainer>
                            <MemberTitleContainer>
                                <MemberInstrument>Ba.</MemberInstrument>
                                <MemberName>Numa</MemberName>
                                <MemberText>
                                    1997年8月8日生まれ。<br/>
                                    広島県出身。
                                </MemberText>
                                <MemberSnsContainer>
                                    <SnsLink href="#"><SnsIcon src={Twitter} /></SnsLink>
                                    <SnsLink href="#"><SnsIcon src={Instagram} /></SnsLink>
                                </MemberSnsContainer>
                            </MemberTitleContainer>
                        </MemberTextContainer>
                    </MemberItemContainer>
                </BandMemberContainer>
                <CopyRight>© 2021 retririon.</CopyRight>
            </HomeContainer>
        </>
    )
}

export default Home

// HomeContainer

const HomeContainer = styled.div`
    @media screen and (min-width: 1200px){
        margin-left: 40px;
    }
`

// Fv

const FvContainer = styled.div`
    text-align: center;
    background-image: url(${FvFrame});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 80vw;
    height: 54vw;
    position: relative;
    margin: 125px auto 0;
    @media screen and (min-width: 768px){
        margin: 132px auto 0;
    }
    @media screen and (min-width: 900px){
        background-image: url(${FvFrame});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 61vw;
        height: 41vw;
        margin-top: 72px;
        position: relative;
    }
`

const FvImageBlock = styled.img`
    width: 86%;
    height: 86%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`

// BandIntroduce

const BandIntroduceContainer = styled.div`
    width: 100%;
    margin: 40px 0;
    @media screen and (min-width: 768px){
        width: 550px;
        margin-left: 32px;
        margin: 64px auto;
    }
    @media screen and (min-width: 900px){
        margin: 68px 0 0;
    }
`

const BandTitleBlock = styled.img`
    width: 75%;
    margin-left: 80px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px){
        margin: 0;
        width: 100%;
        margin-bottom: 32px;
    }
`

const BandTextBlock = styled.div`
    width: 100%;
`

const BandTextH1 = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    margin-left: 80px;
    margin-right: 24px;
`

const BandTextPBlock = styled.div`
    margin-top: 32px;
    @media screen and (min-width: 768px){
        margin-top: 64px;
    }
`

const BandTextP = styled.p`

    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
    color: #292929;
    margin-left: 80px;
    margin-right: 24px;
    margin-bottom: 24px;
    &:last-of-type{
        margin-bottom: 56px;
    }
    @media screen and (min-width: 768px){
        margin: 0 0 32px;
    }
`

// BandMemberContainer

const BandMemberContainer = styled.div`
    text-align: center;
    width: 60%;
    margin: auto;
    text-align: left;
    @media screen and (min-width: 1000px){
        text-align: left;
        margin-top: 152px;
    }
`

const MemberItemContainer = styled.div`
    margin-bottom: 56px;
    @media screen and (min-width: 1000px){
        display: flex;
    }
`

const MemberImage = styled.img`
    width: 100%;
    margin-bottom: 16px;
    @media screen and (min-width: 768px){
        width: 360px;
        height: 250px;
    }
    @media screen and (min-width: 1000px){
        margin: 0;
    }
`

const MemberTextContainer = styled.div`
`

const MemberTitleContainer = styled.div`
    @media screen and (min-width: 1000px){
        margin-left: 32px;
    }
`

const MemberInstrument = styled.p`
    color: #F1A11B;
    font-size: 1.2rem;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    margin-bottom: 4px;
    @media screen and (min-width: 900px){
        margin-bottom: 0;
    }
`

const MemberName = styled.h1`
    color: #292929;
    font-size: 2.4rem;
    font-family: 'Noto Sans JP', sans-serif;
`

const MemberNameRomaji = styled.span`
    color: #292929;
    font-size: 1.6rem;
    font-family: 'Noto Sans JP', sans-serif;
    display: block;
    margin-top: 4px;
    @media screen and (min-width: 900px){
        display: inline-block;
        margin-top: 0;
    }
`

const MemberText = styled.p`
    color: #292929;
    font-size: 1.6rem;
    font-family: 'Noto Sans JP', sans-serif;
    margin-top: 12px;
    @media screen and (min-width: 900px){
        margin-top: 24px;
    }
`

const MemberSnsContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: start;
    @media screen and (min-width: 1000px){
        margin-top: 24px;
    }
    @media screen and (min-width: 1000px){
        justify-content: left;
    }
`

const SnsIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const SnsLink = styled.a`
    &:first-of-type{
        margin-right: 16px;
    }
`

const CopyRight = styled.p`
    color: #292929;
    font-size: 1.2rem;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 32px 0;
    text-align: center;
    @media screen and (min-width: 900px){
        margin: 184px 0 32px;
    }
`