import React, { use } from 'react'
import CustomerTicketCard from '../CustomerTicketCard/CustomerTicketCard'
import { toast } from 'react-toastify'

const Tickets = ({
    fetchTicket,
    cart,
    setCart,
    resolved,
    setResolved
}) => {

    const tickets = use(fetchTicket)

    const handleInprogressCart = (ticket) => {

        if (cart.find(i => i.id === ticket.id)) {
            toast.warning("Already in progress!")
            return
        }

        setCart(prev => [...prev, ticket])
        toast.success("Added to In-Progress ✅")
    }

    // complete task
    const handleComplete = (ticket) => {

        // remove from cart
        setCart(prev => prev.filter(i => i.id !== ticket.id))

        // add to resolved
        setResolved(prev => [...prev, ticket])

        toast.info("Moved to Resolved 🎉")
    }

    return (
        <div className="max-w-[1280px] mx-auto px-4 mt-8 pb-8">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2">

                    <h2 className="text-lg font-semibold mb-4 text-green-700">
                        Customer Tickets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {
                            tickets
                                // REMOVE resolved tickets from left
                                .filter(t => !resolved.some(r => r.id === t.id))
                                .map(ticket => (
                                    <CustomerTicketCard
                                        key={ticket.id}
                                        ticket={ticket}
                                        handleInprogressCart={handleInprogressCart}
                                        handleComplete={handleComplete}
                                        isInCart={cart.some(c => c.id === ticket.id)}
                                    />
                                ))
                        }

                    </div>
                </div>

                {/* Right side*/}
                <div className="space-y-4">
                    <h3 className='text-lg font-semibold mb-4 text-purple-700'>Task Status</h3>

                    {/* IN Progress */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        
                        <h3 className="font-semibold text-gray-700 mb-3">
                            In Progress ({cart.length})
                        </h3>

                        {
                            cart.length === 0 ? (
                                <p className="text-sm text-gray-400">
                                    No tasks in progress.
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {cart.map(item => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border rounded-md p-2 hover:bg-gray-50 transition"
                                        >
                                            <p className="text-sm text-gray-700">
                                                {item.title}
                                            </p>

                                            <button
                                                onClick={() => handleComplete(item)}
                                                className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                                            >
                                                Complete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>

                    {/* RESOLVED */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-gray-700 mb-3">
                            Resolved ({resolved.length})
                        </h3>

                        {
                            resolved.length === 0 ? (
                                <p className="text-sm text-gray-400">
                                    No resolved tasks yet.
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {resolved.map(item => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border rounded-md p-2 bg-green-50"
                                        >
                                            <p className="text-sm text-gray-700 line-through">
                                                {item.title}
                                            </p>

                                            <span className="text-xs text-green-600 font-medium">
                                                Done
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tickets