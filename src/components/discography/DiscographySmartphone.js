import React from 'react';
import styled from '@emotion/styled';
import MvIcon from '../../images/vector-mv.png';
import SubscriptionIcon from '../../images/vector-musuic.png';

const DiscographySmartphone = (props) => {
  const { discographies, dateFormat, count } = props;
  return (
    <DiscographyContainer>
      {discographies.map((item) => (
        <DiscographyItemContainer key={item.id}>
          <DiscographyDate>{dateFormat(item.date)} Release</DiscographyDate>
          <DiscographyTitleContainer>
            <DiscographyTitle long={count(item.title) > 26}>
              {item.title}
            </DiscographyTitle>
          </DiscographyTitleContainer>
          <DiscographyItemContentContainer>
            <DiscographyImageContainer>
              <DiscographyImage
                loading="lazy"
                src={item.image.url}
                alt={item.title}
              />
              <DiscographyTag>{item.tag}</DiscographyTag>
            </DiscographyImageContainer>
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
          </DiscographyItemContentContainer>
        </DiscographyItemContainer>
      ))}
    </DiscographyContainer>
  );
};

export default DiscographySmartphone;

// SP

const DiscographyContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding-bottom: 96px;
  margin-left: 5%;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const DiscographyItemContainer = styled.div`
  display: block;
  width: 280px;
  margin: 0 auto 48px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const DiscographyDate = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

const DiscographyTitleContainer = styled.div`
  display: block;
  height: 48px;
`;

const DiscographyTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 4.8rem;
  ${(props) =>
    props.long &&
    `
        line-height: 2.0rem;
    `}
`;

const DiscographyItemContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const DiscographyImageContainer = styled.div`
  display: block;
  position: relative;
`;

const DiscographyImage = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  position: relative;
  left: 0;
  top: 0;
`;

const DiscographyTag = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 2px 8px;
  background-color: #fff;
  box-shadow: 0px 0px 13px rgba(108, 65, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  left: 2px;
  bottom: 2px;
  display: inline-block;
`;

const DiscographyLinkContainer = styled.div`
  display: block;
  width: 153px;
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
  margin-left: 24px;
`;

const DiscographyLinkText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-right: 24px;
`;
