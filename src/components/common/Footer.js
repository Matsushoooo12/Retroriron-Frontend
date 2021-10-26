import React from 'react'
import styled from '@emotion/styled';

const Footer = () => {
    return (
        <PcFooterContainer>
            <FooterCopyright>© 2021 retririon.</FooterCopyright>
        </PcFooterContainer>
    )
}

export default Footer

// PC

const PcFooterContainer = styled.div`
    display: none;
    @media screen and (min-width: 900px){
        display: block;
        width: calc(100% - 250px);
        height: 88px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        right: 0;
    }
    @media screen and (min-width: 1150px){
        width: calc(100% - 314px);
    }
`

const FooterCopyright = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    line-height: 8.8rem;
`