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
        width: 100%;
        height: 88px;
        background-color: skyblue;
    }
`

const FooterCopyright = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    line-height: 8.8rem;
`