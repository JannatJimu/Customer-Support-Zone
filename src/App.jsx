import './App.css'
import Banner from './components/Banner/Banner'
import InProgressCounter from './components/InProgressCounter/InProgressCounter'
import Navbar from './components/Navbar'
import ResolveCounter from './components/ResolveCounter/ResolveCounter'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gray-200'>
 <Banner></Banner>
      </div>

    </>
  )
}

export default App
