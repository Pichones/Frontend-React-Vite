import './App.css'
import RoutesIndex from './routes'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App () {
  return (
    <div className='app'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <RoutesIndex />
      </div>
    </div>

  )
}

export default App
