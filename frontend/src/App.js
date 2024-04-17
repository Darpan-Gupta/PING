import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import HomePage from './Pages/HomePage'
import ChatPage from './Pages/ChatPage'
import './App.css';
function App() {
  return (
    <div className='main-div'>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div >


  )
}

export default App