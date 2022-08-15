import React from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

const NewsSmartphone = (props) => {
  const {
    news,
    dateFormat,
    toggleAccordion,
    toggleAccordionButton,
    isActive,
    stringLink,
  } = props;

  // Date

  const now = dayjs();

  // 日にちが２週間前より古いか
  const newTagHidden = (date) => {
    return dayjs(date).format() < now.subtract(2, 'w').format();
  };
  return (
    <NewsContainer>
      <>
        {news.length === 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              height: '100px',
            }}
          >
            <p style={{ fontSize: '16px', textAlign: 'center' }}>
              わくわくする情報をご準備しています。
            </p>
          </div>
        )}
      </>
      {news.map((item) => (
        <NewsItemContainer key={item.id}>
          <NewsButton
            onClick={toggleAccordion(item.id)}
            src={toggleAccordionButton(item.id)}
            alt="Toggle button"
          />
          <NewsMainContainer>
            <NewsItemOtherContainer onClick={toggleAccordion(item.id)}>
              <NewsDate>{dateFormat(item.date)}</NewsDate>
              <NewsTag IsHidden={newTagHidden(item.date)}>New</NewsTag>
            </NewsItemOtherContainer>
            <NewsTitle onClick={toggleAccordion(item.id)}>
              {item.title}
            </NewsTitle>
            <NewsText active={isActive(item.id)}>
              {stringLink(item.content)}
              <NewsImage
                loading="lazy"
                vertical={item.imageVertical}
                src={item.image.url}
                alt={item.title}
                displayNone={!item.image.url}
              />
            </NewsText>
          </NewsMainContainer>
        </NewsItemContainer>
      ))}
    </NewsContainer>
  );
};

export default NewsSmartphone;

const NewsContainer = styled.ul`
  display: block;
  width: 240px;
  height: 100%;
  margin-left: 5%;
  margin-bottom: 96px;
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NewsItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
`;

const NewsButton = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const NewsMainContainer = styled.div`
  display: block;
  margin-left: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NewsItemOtherContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  cursor: pointer;
`;

const NewsDate = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2px;
  margin-right: 8px;
`;

const NewsTag = styled.p`
  color: #f42626;
  font-weight: 900;
  font-size: 1.2rem;
  margin-right: 24px;
  ${(props) => props.IsHidden && `color: #fff;`}
`;

const NewsTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  line-height: 2.4rem;
`;

const NewsText = styled.p`
  display: none;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-top: 16px;
  margin-bottom: 16px;
  white-space: pre-wrap;
  word-break: break-all;
  transition: all 0.3s;
  ${(props) => props.active && `display: block;`}
`;

const NewsImage = styled.img`
  display: block;
  width: 160px;
  height: 100%;
  margin-top: 16px;
  ${(props) =>
    props.vertical &&
    `
      width: 128px;
    `}
  ${(props) =>
    props.displayNone &&
    `
      display: none;
    `}
`;
