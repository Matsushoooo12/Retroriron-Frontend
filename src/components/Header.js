import React from 'react'
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'

const Container = styled.div`
    width: 100%;
    height: 500px;
    background-color: black;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    @media screen and (min-width: 1024px) {
        width: 314px;
        background-color: orange;
        position: fixed;
        left: 0;
        top: 0;
        display: block;
    } 
`



const Header = () => {
    return (
        <Container>
        </Container>
    )
}

export default Header
