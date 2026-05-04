import React, { use } from 'react';
import CustomerTicketCard from '../CustomerTicketCard/CustomerTicketCard';

const Tickets = ({ fetchTicket }) => {
    const tickets = use(fetchTicket);

    return (
        <div className="max-w-[1280px] mx-auto px-4 mt-8 pb-8">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2">
                    <h2 className="text-lg font-semibold mb-4">
                        Customer Tickets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            tickets.map(ticket => (
                                <CustomerTicketCard
                                    key={ticket.id}
                                    ticket={ticket}   
                                />
                            ))
                        }
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <h2 className="text-lg font-semibold">
                        Task Status
                    </h2>

                    <p className="text-sm text-gray-500 mb-4">
                        Select a ticket to add to Task Status
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-gray-700">
                            Resolved Task
                        </h3>

                        <p className="text-sm text-gray-400 mt-2">
                            No resolved tasks yet.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tickets;