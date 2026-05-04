import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CustomerTicketCard = ({ ticket }) => {
    if (!ticket) return null;

    const { id, title, description, customer, priority, status, createdAt } = ticket;

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">

            {/* Top Row */}
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

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">

                <div>
                    <p>#{id}</p>
                    <p className="text-red-500 font-medium">
                        {priority} PRIORITY
                    </p>
                </div>

                <div className="text-right">
                    <p>{customer}</p>
                    <p>
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CustomerTicketCard;