import React from 'react'
import styled from '@emotion/styled';
import Header from './components/common/Header';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home';
import Live from './pages/Live';
import News from './pages/News';
import Discography from './pages/Discography';
import Contact from './pages/Contact';
import Event from './components/Event'
import ContactConfirm from './pages/ContactConfirm';
import ContactComplete from './pages/ContactComplete';

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
              <Route exact path="/event" component={Event} />
            </Switch>
        </MainContainer>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: block;
  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`

const MainContainer = styled.div`
  @media screen and (min-width: 900px) {
    position: relative;
    left: 250px;
    top: 0;
  }
  @media screen and (min-width: 1150px){
    left: 314px;
  }
`