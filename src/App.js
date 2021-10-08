import './App.css';
import React from 'react'
import Event from './components/Event'
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
  @media screen and (min-width: 600px) {
    background-color: green;
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    background-color: red;
    width: 200px;
    height: 200px;
  }
`

function App() {
  return (
    <Container>
      <Event />
    </Container>
  );
}

export default App;
