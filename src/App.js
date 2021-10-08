import './App.css';
import React from 'react'
import styled from '@emotion/styled';
import Header from './components/Header';

const Container = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const MainContainer = styled.div`
  @media screen and (min-width: 1024px) {
    position: relative;
    left: 314px;
    top: 0;
  }
`

function App() {
  return (
    <Container>
      <Header />
      <MainContainer>
      </MainContainer>
    </Container>
  );
}

export default App;
