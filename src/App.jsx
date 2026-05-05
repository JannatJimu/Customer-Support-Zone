import { Suspense, useMemo, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets/Tickets'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer'

function App() {

  const [cart, setCart] = useState([])        // In Progress
  const [resolved, setResolved] = useState([]) // Resolved
  const [removedIds, setRemovedIds] = useState([]) // hide from list

  const fetchTicket = useMemo(() => { //useMemo- working for static data.
    return fetch('./tickets.json').then(res => res.json())
  }, [])

  return (
    <>
      <Navbar />

      <div className='bg-gray-200 min-h-screen'>
        <Banner
          inProgressCount={cart.length}
          resolvedCount={resolved.length}
        />

        <Suspense fallback={<h3 className='text-center py-10'>Loading...</h3>}>
          <Tickets
            fetchTicket={fetchTicket}
            cart={cart}
            setCart={setCart}
            resolved={resolved}
            setResolved={setResolved}
            removedIds={removedIds}
            setRemovedIds={setRemovedIds}
          />
        </Suspense>
        <Footer></Footer>

      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App