import logo from './logo.svg';
import './App.css';
import React from 'react'
import Event from './components/Event'
import eventSass from './styles/event.module.scss'

function App() {
  return (
    <div class={eventSass.container}>
      <Event />
    </div>
  );
}

export default App;
