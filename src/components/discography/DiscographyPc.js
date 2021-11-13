import React from 'react';
import styled from '@emotion/styled';
import MvIcon from '../../images/vector-mv.png';
import SubscriptionIcon from '../../images/vector-musuic.png';

const DiscographyPc = (props) => {
  const { discographies, dateFormat, count } = props;
  return (
    <DiscographyContainer>
      {discographies.map((item) => (
        <DiscographyItemContainer key={item.id}>
          <DiscographyDate>{dateFormat(item.date)} Release</DiscographyDate>
          <DiscographyImageContainer>
            <DiscographyImage
              loading="lazy"
              src={item.image.url}
              alt={item.title}
            />
            <DiscographyTag>{item.tag}</DiscographyTag>
          </DiscographyImageContainer>
          <DiscographyTitleContainer>
            <DiscographyTitle long={count(item.title) > 20}>
              {item.title}
            </DiscographyTitle>
          </DiscographyTitleContainer>
          <DiscographyLinkContainer>
            <DiscographyLinkItemContainer
              noLink={!item.mvLink}
              rel="noopener noreferrer"
              target="_blank"
              href={item.mvLink}
            >
              <DiscographyLinkIcon
                loading="lazy"
                src={MvIcon}
                alt="MVアイコン"
              />
              <DiscographyLinkText>MVを見る</DiscographyLinkText>
            </DiscographyLinkItemContainer>
            <DiscographyLinkItemContainer
              noLink={!item.subscriptionLink}
              rel="noopener noreferrer"
              target="_blank"
              href={item.subscriptionLink}
            >
              <DiscographyLinkIcon
                loading="lazy"
                src={SubscriptionIcon}
                alt="サブスクアイコン"
              />
              <DiscographyLinkText>音楽を聴く</DiscographyLinkText>
            </DiscographyLinkItemContainer>
          </DiscographyLinkContainer>
        </DiscographyItemContainer>
      ))}
    </DiscographyContainer>
  );
};

export default DiscographyPc;

//

const DiscographyContainer = styled.div`
  display: none;
  @media screen and (min-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-bottom: 120px;
    max-width: 1200px;
  }
  @media screen and (min-width: 900px) {
    padding-bottom: 160px;
  }
`;

const DiscographyItemContainer = styled.div`
  display: block;
  // background-color: green;
  margin-left: 28px;
  margin-right: 28px;
  margin-top: 0;
  margin-bottom: 64px;
`;

const DiscographyDate = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
`;

const DiscographyImageContainer = styled.div`
  display: block;
  position: relative;
  margin-bottom: 8px;
`;

const DiscographyImage = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  position: relative;
  left: 0;
  top: 0;
`;

const DiscographyTag = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  padding: 2px 8px;
  background-color: #fff;
  box-shadow: 0px 0px 13px rgba(108, 65, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  left: 4px;
  bottom: 4px;
  display: inline-block;
`;

const DiscographyTitleContainer = styled.div`
  width: 200px;
  height: 48px;
  margin-bottom: 8px;
`;

const DiscographyTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 4.8rem;
  overflow-wrap: break-word;
  word-break: break-all;
  ${(props) =>
    props.long &&
    `
        line-height: 2.0rem;
    `}
`;

const DiscographyLinkContainer = styled.div`
  display: block;
  width: 200px;
`;

const DiscographyLinkItemContainer = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 13px rgba(108, 65, 0, 0.2);
  border-radius: 20px;
  cursor: pointer;
  height: 40px;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${(props) =>
    props.noLink &&
    `
        opacity: 0.7;
        background-color: #F0F0F0;
        cursor: default;
    `}
`;

const DiscographyLinkIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-left: 42px;
`;

const DiscographyLinkText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 42px;
`;
