import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const CustomerTicketCard = ({
    ticket,
    handleInprogressCart,
    handleComplete,
    isInCart
}) => {

    if (!ticket) return null

    const { id, title, description, customer, priority, status, createdAt } = ticket

    return (
        <div
            className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition
            ${isInCart ? "border-2 border-yellow-400" : ""}`}
        >

            {/* TOP */}
            <div className="flex justify-between items-start">

                <h3 className="font-semibold text-gray-800 text-sm">
                    {title}
                </h3>

                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 flex items-center gap-1">
                    <FontAwesomeIcon icon={faCircle} className="text-[8px]" />
                    {status}
                </span>

            </div>

            <p className="text-xs text-gray-500 mt-2">
                {description}
            </p>

            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">

                <div>
                    <p>#{id}</p>
                    <p className="text-red-500 font-medium">
                        {priority} PRIORITY
                    </p>
                </div>

                <div className="text-right">
                    <p>{customer}</p>
                    <p>{new Date(createdAt).toLocaleDateString()}</p>
                </div>

            </div>

            <div className="flex gap-2 mt-4">

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleInprogressCart(ticket)
                    }}
                    disabled={isInCart}
                    className={`text-xs px-3 py-1 rounded text-white
                    ${isInCart ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
                >
                    {isInCart ? "In Progress" : "Add"}
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleComplete(ticket)
                    }}
                    className="text-xs px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                >
                    Complete
                </button>

            </div>

        </div>
    )
}

export default CustomerTicketCard