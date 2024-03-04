import React from 'react'
import {NavBar, Brand, CTA} from './components';
import { Footer, Blog, Possibility, Features, Header } from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Route index element={<App />}/>
        <NavBar />
        <Header />

      </div>
      <Brand />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default App
