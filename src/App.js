import './App.css';
import React from 'react'
import styled from '@emotion/styled';
import Header from './components/common/Header';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home';
import Live from './components/Live';
import News from './components/News';
import Discography from './components/Discography';
import Contact from './components/Contact';

const Container = styled.div`
  display: block;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`

const MainContainer = styled.div`
  @media screen and (min-width: 900px) {
    position: relative;
    left: 314px;
    top: 0;
  }
`

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <MainContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/news" component={News} />
              <Route exact path="/live" component={Live} />
              <Route exact path="/discography" component={Discography} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
        </MainContainer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
