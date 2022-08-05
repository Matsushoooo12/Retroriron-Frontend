import React from 'react';
import styled from '@emotion/styled';

const LiveTablet = (props) => {
  const {
    lives,
    toggleAccordion,
    toggleAccordionButton,
    dateFormat,
    pastTime,
    futureTime,
    handleSpTicketButtonClick,
    notExistTime,
    openAndStartTime,
    notExistImage,
    isActive,
    stringLink,
    setLiveImageModal,
  } = props;
  return (
    <LiveContainer>
      <>
        {lives.length === 0 && (
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
      {lives.map((item) => (
        <LiveItemContainer key={item.id}>
          <LiveButton
            cursorPointer={item.detail}
            onClick={toggleAccordion(item.id)}
            src={toggleAccordionButton(item.id, item.detail)}
            alt="accordion button"
          />
          <LiveMainContainer>
            <LiveContentsContainer>
              <LiveDate
                cursorPointer={item.detail}
                onClick={toggleAccordion(item.id)}
              >
                {dateFormat(item.date)}
              </LiveDate>
              <LiveTitle
                cursorPointer={item.detail}
                onClick={toggleAccordion(item.id)}
              >
                {item.title}
                <LiveFinishTag finish={pastTime(item.date)}>終了</LiveFinishTag>
              </LiveTitle>
              <br />
              {item.ticketLink ? (
                <LiveTicketAButton
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.ticketLink}
                  active={futureTime(item.date)}
                >
                  チケットをご希望の方はこちら
                </LiveTicketAButton>
              ) : (
                <LiveTicketDivButton
                  onClick={() =>
                    handleSpTicketButtonClick(item.date, item.title)
                  }
                  active={futureTime(item.date)}
                >
                  チケットをご希望の方はこちら
                </LiveTicketDivButton>
              )}
              <LiveInfoContainer>
                <LiveInfoText>
                  開場時間 |{' '}
                  {item.openTime
                    ? notExistTime(openAndStartTime(item.openTime))
                    : '未定'}{' '}
                  開演時間 |{' '}
                  {item.startTime
                    ? notExistTime(openAndStartTime(item.startTime))
                    : '未定'}
                </LiveInfoText>
                <LiveInfoText>場所 | {item.venue}</LiveInfoText>
                <LiveInfoText>料金 | {item.price}</LiveInfoText>
                <LiveInfoText>出演者 | {item.performer}</LiveInfoText>
                <LiveBottomImage
                  loading="lazy"
                  vertical={item.imageVertical}
                  src={notExistImage(item.image.url)}
                  alt={item.title}
                />
              </LiveInfoContainer>
              <LiveDetailText active={isActive(item.id) && item.detail}>
                詳細情報 |<br />
                {stringLink(item.detail)}
              </LiveDetailText>
            </LiveContentsContainer>
            <LiveImage
              onClick={() =>
                setLiveImageModal({
                  title: item.title,
                  image: item.image.url,
                  open: true,
                  imageVertical: item.imageVertical,
                })
              }
              loading="lazy"
              vertical={item.imageVertical}
              src={notExistImage(item.image.url)}
              alt={item.title}
            />
          </LiveMainContainer>
        </LiveItemContainer>
      ))}
    </LiveContainer>
  );
};

export default LiveTablet;

const LiveContainer = styled.ul`
  display: none;
  @media screen and (min-width: 400px) {
    display: block;
    width: 100%;
    height: 100%;
    margin-left: 5%;
  }
  @media screen and (min-width: 900px) {
    margin-left: 0;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const LiveItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
`;

const LiveButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: default;
  margin-right: 24px;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const LiveMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const LiveContentsContainer = styled.div`
  display: block;
`;

const LiveDate = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 8px;
  cursor: default;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const LiveTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  cursor: default;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const LiveTicketAButton = styled.a`
  display: none;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background-color: #f1a01a;
  padding: 10px 16px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 16px;
  ${(props) => props.active && `display: inline-block;`}
`;

const LiveTicketDivButton = styled.div`
  display: none;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background-color: #f1a01a;
  padding: 10px 16px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 16px;
  ${(props) => props.active && `display: inline-block;`}
`;

const LiveFinishTag = styled.p`
  display: none;
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  background-color: #f42626;
  border-radius: 3px;
  margin-top: 16px;
  margin-left: 16px;
  ${(props) => props.finish && `display: inline-block;`}
`;

const LiveImage = styled.img`
  @media screen and (min-width: 400px) {
    display: none;
  }
  @media screen and (min-width: 600px) {
    cursor: pointer;
    display: block;
    width: 160px;
    height: 100%;
    ${(props) =>
      props.vertical &&
      `
            width: 128px;
        `}
  }
  @media screen and (min-width: 680px) {
    display: block;
    width: 200px;
    ${(props) =>
      props.vertical &&
      `
            width: 160px;
        `}
  }
`;

const LiveBottomImage = styled.img`
  display: none;
  @media screen and (min-width: 400px) {
    display: block;
    width: 160px;
    height: 100%;
    margin-top: 16px;
    ${(props) =>
      props.vertical &&
      `
            width: 128px;
            height: 160px;
        `}
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const LiveInfoContainer = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
`;

const LiveInfoText = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 4px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LiveDetailText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 4px;
  white-space: pre-wrap;
  margin-top: 16px;
  display: none;
  word-break: break-all;
  ${(props) => props.active && `display: block;`}
`;
