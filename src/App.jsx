import './App.css'
import Chat from './Components/Chats/Chat'
import Loading from './Components/Loading/Loading'
import Mainpage from './Components/MainPage/Mainpage'

function App() {

  return (
    <main>
      <Loading/>
      <Mainpage/>
      <Chat/>
    </main>
  )
}

export default App
