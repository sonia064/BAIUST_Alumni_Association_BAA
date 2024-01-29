import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './component/About'
import Header from './component/Header'
import RegistrationForm from './component/RegistrationForm'
import Contact from './component/Contact'
import BAIUSTASWF from './component/BAIUSTASWF'
import Benefits from './component/Benefits'
import LifeTimeMember from './component/LifeTimeMember'
import GeneralMemberForm from './component/GeneralMemberForm'
import Inven from './component/Inven'
import Events from './component/Events'
import EventDetails from './component/EventDetails'
import EventDetails1 from './component/EventDetails1'
import EventDetails2 from './component/EventDetails2'
import EventDetails3 from './component/EventDetails3'
import EventDetails4 from './component/EventDetails4'
import EventDetails5 from './component/EventDetails5'
import EventDetails6 from './component/EventDetails6'

// import EventModal from './component/EventModal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* 
      <h1>Sonia</h1>
      <About></About>
      <Inven></Inven> */}

      <Header></Header>
      <RegistrationForm></RegistrationForm>
      <Contact></Contact>
      <BAIUSTASWF></BAIUSTASWF>
      <Benefits></Benefits>
      <LifeTimeMember></LifeTimeMember>
      <GeneralMemberForm></GeneralMemberForm>
      <Events></Events>
      <EventDetails></EventDetails>
      <EventDetails1></EventDetails1>
      <EventDetails2></EventDetails2>
      <EventDetails3></EventDetails3>
      <EventDetails4></EventDetails4>
      <EventDetails5></EventDetails5>
      <EventDetails6></EventDetails6>
      {/* <EventModal></EventModal> */}
      
    </>
  )
}

export default App
