import React from 'react'
import styled from '@emotion/styled';
import Header from './components/common/Header2';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home2';
import Live from './pages/Live2';
import News from './pages/News2';
import Discography from './pages/Discography2';
import Contact from './pages/Contact2';
import './components/common/reset.css'
import Footer from './components/common/Footer';

function App() {
  return (
        <BrowserRouter>
            <Header />
            <MainAllContainer>
                <MainItemContainer>
                    <MainItem>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/live" component={Live} />
                            <Route exact path="/discography" component={Discography} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </MainItem>
                </MainItemContainer>
                <Footer />
            </MainAllContainer>
        </BrowserRouter>
  );
}

export default App;

const MainAllContainer = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    color: #292929;
    padding-top: 117px;
    @media screen and (min-width: 768px){
        padding-top: 124px;
    }
    @media screen and (min-width: 900px){
        padding-top: 0;
        position: absolute;
        right: 0;
        background-color: blue;
        width: calc(100% - 250px);
        overflow-y: scroll;
    }
    @media screen and (min-width: 1150px){
        width: calc(100% - 314px);
    }
`

const MainItemContainer = styled.div`
    width: 80%;
    height: 100%;
    background-color: red;
    margin: 0 auto;
`

const MainItem = styled.div`
    @media screen and (min-width: 900px){
        margin-top: 64px;
    }
`