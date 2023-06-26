import Nav from "./components/SharedComponents/Nav"
import Home from "./pages/Home.jsx"
import Messages from "./pages/Message.jsx"
import Notification from "./pages/Notification.jsx"
import Test from "./pages/Test.jsx"
import {  Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <main className='lg:flex lg:border-[10px] lg:border-solid lg:border-secondary lg:rounded-[60px] overflow-hidden lg:my-10 lg:mx-5'>
        <div>
          <Nav />
        </div>
        <div className="lg:p-10 lg:max-w-[70%] mr-auto">
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
