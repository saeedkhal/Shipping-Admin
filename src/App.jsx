import Nav from "./components/Nav"
import Home from "./components/Home.jsx"
import Messages from "./components/Message.jsx"
import Notification from "./components/Notification.jsx"
import Test from "./components/Test.jsx"
import {  Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <main className='lg:flex lg:border-[10px] lg:border-solid lg:border-secondary lg:rounded-[60px] overflow-hidden lg:my-10 lg:mx-5'>
        <div>
          <Nav />
        </div>
        <div className="lg:p-10 lg:max-w-[80%]">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/messages' element={<Messages />} />
            <Route exact path='/notifications' element={<Notification />} />
            <Route exact path='/test' element={<Test />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
