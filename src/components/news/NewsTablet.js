import React from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

const NewsTablet = (props) => {
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

  // 日にちが3日前より古いか
  const newTagHidden = (date) => {
    return dayjs(date).format() < now.subtract(3, 'd').format();
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
            <p style={{ fontSize: '24px', textAlign: 'center' }}>
              わくわくする情報をご準備しています。
            </p>
          </div>
        )}
      </>
      {news.map((item) => (
        <NewsItemContainer key={item.id}>
          <NewsItemOtherContainer>
            <NewsTagText IsHidden={newTagHidden(item.date)}>New</NewsTagText>
            <NewsDate>{dateFormat(item.date)}</NewsDate>
          </NewsItemOtherContainer>
          <NewsMainContainer>
            <NewsButton
              onClick={toggleAccordion(item.id)}
              src={toggleAccordionButton(item.id)}
              alt="Toggle button"
            />
            <NewsTextContainer>
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
                {item.id === 35 && (
                  <YoutubeMovie
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/goxNZmaPxHU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></YoutubeMovie>
                )}
              </NewsText>
            </NewsTextContainer>
          </NewsMainContainer>
        </NewsItemContainer>
      ))}
    </NewsContainer>
  );
};

export default NewsTablet;

const NewsContainer = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const NewsItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
`;

//

// -タグ、日付

const NewsItemOtherContainer = styled.div`
  display: flex;
  justify-content: left;
  aling-items: flex-start;
`;

const NewsTagText = styled.p`
  color: #f42626;
  font-weight: 900;
  font-size: 1.2rem;
  margin-right: 24px;
  margin-top: 2px;
  ${(props) => props.IsHidden && `color: #fff;`}
`;

const NewsDate = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 3px;
`;

// -テキスト

const NewsMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
`;

const NewsButton = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 4px;
  cursor: pointer;
`;

const NewsTextContainer = styled.div`
  display: block;
`;

const NewsTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  line-height: 2.4rem;
`;

const NewsText = styled.p`
  display: none;
  font-size: 1.6rem;
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
  width: 200px;
  height: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  ${(props) =>
    props.vertical &&
    `
        width: 160px;
    `}
  ${(props) =>
    props.displayNone &&
    `
      display: none;
    `}
`;

const YoutubeMovie = styled.iframe``;
