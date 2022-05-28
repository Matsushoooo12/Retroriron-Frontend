import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TicketFormLabel } from '../../components/ticket/TicketFormLabel';
import TicketConfirm from '../../components/ticket/TicketConfirm';
import { useForm } from 'react-hook-form';

const LivePc = (props) => {
  const {
    lives,
    dateFormat,
    toggleAccordion,
    toggleAccordionButton,
    pastTime,
    futureTime,
    notExistTime,
    openAndStartTime,
    isActive,
    stringLink,
    notExistImage,
    setLiveImageModal,
  } = props;

  // useForm
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
  const hideConfirmation = () => setIsConfirmationVisible(false);

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  //submitボタンを押した時、入力内容確認画面を表示させる
  const onSubmitData = () => {
    setIsConfirmationVisible(true);
    console.log(isConfirmationVisible);
  };

  // TicketValue
  const [ticketValue, setTicketValue] = useState({
    date: '',
    title: '',
    nameKana: '',
    email: '',
    number: '',
    description: '',
    open: false,
  });

  const handleClick = () => {
    setIsConfirmationVisible(false);
    setTicketValue({
      open: false,
    });
    reset();
  };
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
          <LiveMainContainer>
            <LiveItemOtherContainer>
              <LiveDate>{dateFormat(item.date)}</LiveDate>
              <LiveButton
                cursorPointer={item.detail}
                onClick={toggleAccordion(item.id)}
                src={toggleAccordionButton(item.id, item.detail)}
                alt="accordion button"
              />
            </LiveItemOtherContainer>
            <LiveContentsContainer>
              <LiveTextContainer>
                <LiveTitle
                  cursorPointer={item.detail}
                  onClick={toggleAccordion(item.id)}
                >
                  {item.title}
                  <LiveFinishTag finish={pastTime(item.date)}>
                    終了
                  </LiveFinishTag>
                </LiveTitle>
                <br />
                {item.ticketLink ? (
                  <LiveTicketButton
                    rel="noopener noreferrer"
                    target="_blank"
                    href={item.ticketLink}
                    active={futureTime(item.date)}
                  >
                    チケットをご希望の方はこちら
                  </LiveTicketButton>
                ) : (
                  <LiveTicketButton
                    onClick={() =>
                      setTicketValue({
                        date: item.date,
                        title: item.title,
                        open: true,
                      })
                    }
                    active={futureTime(item.date)}
                  >
                    チケットをご希望の方はこちら
                  </LiveTicketButton>
                )}
                <LiveInfoContainer>
                  <LiveInfoText>
                    開場時間 | {notExistTime(openAndStartTime(item.openTime))}{' '}
                    開演時間 | {notExistTime(openAndStartTime(item.startTime))}
                  </LiveInfoText>
                  <LiveInfoText>場所 | {item.venue}</LiveInfoText>
                  <LiveInfoText>料金 | {item.price}</LiveInfoText>
                  <LiveInfoText>出演者 | {item.performer}</LiveInfoText>
                </LiveInfoContainer>
                <LiveDetailText active={isActive(item.id) && item.detail}>
                  詳細情報 |<br />
                  <br />
                  {stringLink(item.detail)}
                </LiveDetailText>
              </LiveTextContainer>
            </LiveContentsContainer>
          </LiveMainContainer>
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
        </LiveItemContainer>
      ))}
      <ModalContainer open={ticketValue.open}>
        <ModalBack onClick={handleClick}></ModalBack>
        {!isConfirmationVisible ? (
          <TicketItemContainer>
            <TicketTitle>チケット予約フォーム</TicketTitle>
            <TicketText>
              ※こちらはチケットのお取り置きをするためのフォームです。
              <br />
              当日は会場受付で担当者にお名前をお伝えの上、お支払いをお願いいたします。
            </TicketText>
            <TicketCautionText>
              ※下記のライブのお申し込みでお間違いないかご確認ください。
            </TicketCautionText>
            <TicketFormContainer onSubmit={handleSubmit(onSubmitData)}>
              <TicketDateAndTitleContainer>
                <TicketDateAndTitleTextField
                  type="text"
                  name="date"
                  value={ticketValue.date}
                  readOnly
                />
                <TicketDateAndTitleTextField
                  type="text"
                  name="title"
                  value={ticketValue.title}
                  readOnly
                />
              </TicketDateAndTitleContainer>
              <TicketFormGroup>
                <TicketFormLabel
                  title="ナマエ"
                  htmlFor="nameKana"
                  errors={errors.nameKana}
                  required
                />
                <TicketFormTextField
                  name="nameKana"
                  id="nameKane"
                  type="text"
                  {...register('nameKana', {
                    required: true,
                  })}
                />

                <TicketFormLabel
                  title="メールアドレス"
                  htmlFor="email"
                  errors={errors.email}
                  required
                />
                <TicketFormTextField
                  name="email"
                  type="email"
                  id="email"
                  {...register('email', {
                    required: true,
                  })}
                />

                <TicketFormLabel
                  title="枚数"
                  htmlFor="number"
                  errors={errors.number}
                  required
                />

                <TicketFormNumber
                  name="number"
                  type="number"
                  id="number"
                  onChange={(e) => e.target.value}
                  defaultValue="1"
                  {...register('number', {
                    required: true,
                  })}
                />
                <TicketFormLabel title="備考" htmlFor="description" />

                <TicketFormTextField
                  name="description"
                  type="text"
                  id="description"
                  {...register('description', {
                    required: false,
                  })}
                />
              </TicketFormGroup>
              <TicketFormGroup className="right">
                <TicketFormSubmitButton type="submit" value="確認する" />
              </TicketFormGroup>
            </TicketFormContainer>
          </TicketItemContainer>
        ) : (
          <TicketConfirm
            ticket={{
              date: ticketValue.date,
              title: ticketValue.title,
              ...getValues(),
            }}
            hideConfirmation={hideConfirmation}
          />
        )}
      </ModalContainer>
    </LiveContainer>
  );
};

export default LivePc;

// PC

const LiveContainer = styled.ul`
  display: none;
  @media screen and (min-width: 900px) {
    padding-bottom: 160px;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 1200px;
  }
`;

const LiveItemContainer = styled.li`
  border-top: 1px solid #bebebe;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
`;

const LiveMainContainer = styled.div`
  display: flex;
`;

const LiveItemOtherContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
`;

const LiveDate = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 32px;
`;

const LiveButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: default;
  margin-right: 24px;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const LiveContentsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const LiveTextContainer = styled.div`
  display: block;
`;

const LiveTitle = styled.a`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.2rem;
  cursor: default;
  ${(props) => props.cursorPointer && `cursor: pointer;`}
`;

const LiveInfoContainer = styled.div`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const LiveInfoText = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LiveTicketButton = styled.a`
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

const LiveImage = styled.img`
  display: block;
  width: 200px;
  height: 100%;
  cursor: pointer;
  ${(props) =>
    props.vertical &&
    `
        width: 160px;
    `}
`;

const LiveDetailText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 4px;
  white-space: pre-wrap;
  margin-top: 16px;
  display: none;
  word-break: break-all;
  ${(props) => props.active && `display: block;`}
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
  margin-left: 16px;
  ${(props) => props.finish && `display: inline-block;`}
`;

// PC-チケット

// ModalContainer

const ModalContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    width: 100%;
    ${(props) => props.open && `display: block;`}
  }
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.7);
`;

// TicketFormContainer

const TicketItemContainer = styled.div`
  width: 584px;
  height: 695px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: 250;
  background-color: #fff;
  border-radius: 24px;
`;

const TicketTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 24px 24px 8px;
`;

const TicketText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 24px 4px;
`;

const TicketCautionText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #f42626;
  margin: 0 24px 24px;
`;

// TicketFormContainer

const TicketFormContainer = styled.form``;

// ContactFormContainer

const TicketFormGroup = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 16px;
  border-top: 2px solid #bebebe;
  padding-top: 24px;
  &.right {
    text-align: right;
    border: none;
    padding: 0;
  }
`;

// input:text

const TicketDateAndTitleContainer = styled.div`
  background-color: #f0f0f0;
  width: 90%;
  margin: 0 auto 24px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  border-radius: 6px;
`;

const TicketDateAndTitleTextField = styled.input`
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  display: inline-block;
  width: 100%;
  height: 100%;
  &:first-of-type {
    width: 120px;
    padding: 0 16px;
  }
`;

const TicketFormTextField = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 8px 16px;
  display: block;
  border: 1px solid #bebebe;
  border-radius: 7px;
  margin: 0 auto;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;

// input:number

const TicketFormNumber = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid #bebebe;
  padding: 8px 16px;
  border-radius: 7px;
  width: 76px;
  display: block;
  margin-top: 4px;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;

const TicketFormSubmitButton = styled.input`
  background-color: #f1a11b;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;
`;
