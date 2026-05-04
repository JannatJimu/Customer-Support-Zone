import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import InProgressCounter from './components/InProgressCounter/InProgressCounter'
import Navbar from './components/Navbar'
import ResolveCounter from './components/ResolveCounter/ResolveCounter'
import Tickets from './components/Tickets/Tickets'
import CustomerTicketCard from './components/CustomerTicketCard/CustomerTicketCard'

function App() {
  const fetchTicket = fetch('./tickets.json')
    .then(res => res.json())

  return (
    <>
      <Navbar></Navbar>
      <div className=''>

      </div>
      <div className='bg-gray-200'>
        <Banner></Banner>
        <Suspense fallback={<h3>Data is Loading</h3>}>
          <Tickets fetchTicket={fetchTicket}></Tickets>
        </Suspense>
      </div>
      <CustomerTicketCard></CustomerTicketCard>


    </>
  )
}

export default App
