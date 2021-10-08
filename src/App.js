import logo from './logo.svg';
import './App.css';
import React from 'react'
import Event from './components/Event'
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`

function App() {
  return (
    <Container>
      <Event />
    </Container>
  );
}

export default App;
