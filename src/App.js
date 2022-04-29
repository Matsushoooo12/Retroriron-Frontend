import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import Live from './pages/Live';
// import News from './pages/News';
// import Discography from './pages/Discography';
// import Contact from './pages/Contact';
import './components/common/reset.css';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <MainAllContainer>
        <MainItemContainer>
          <MainItem>
            <Switch>
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/news" component={News} />
              <Route exact path="/live" component={Live} />
              <Route exact path="/discography" component={Discography} />
              <Route exact path="/contact" component={Contact} /> */}
              <Route exact path="*" component={Page404} />
            </Switch>
          </MainItem>
        </MainItemContainer>
      </MainAllContainer>
    </BrowserRouter>
  );
}

export default App;

const MainAllContainer = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  color: #292929;
  padding-top: 117px;
  @media screen and (min-width: 768px) {
    padding-top: 124px;
  }
  @media screen and (min-width: 900px) {
    padding-top: 0;
    position: absolute;
    right: 0;
    width: calc(100% - 250px);
  }
  @media screen and (min-width: 1150px) {
    width: calc(100% - 314px);
  }
`;

const MainItemContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const MainItem = styled.div`
  @media screen and (min-width: 900px) {
    margin-top: 64px;
  }
`;
