import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <PcFooterContainer>
      <FooterCopyright>© 2022 retririon.</FooterCopyright>
    </PcFooterContainer>
  );
};

export default Footer;

// PC

const PcFooterContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    width: 100%;
    max-width: 1200px;
    height: 88px;
    background-color: #fff;
  }
`;

const FooterCopyright = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  line-height: 8.8rem;
`;
