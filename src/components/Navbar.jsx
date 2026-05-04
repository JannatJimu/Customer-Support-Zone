import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-base-100  sticky top-0 z-50 mb-4 md:mb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="navbar py-3">
                    <div className="flex-1 flex items-center">

                        {/* Mobile Menu Button */}
                        <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className="h-5 w-5" 
                                     fill="none" 
                                     viewBox="0 0 24 24" 
                                     stroke="currentColor">
                                    <path strokeLinecap="round" 
                                          strokeLinejoin="round" 
                                          strokeWidth="2" 
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>

                            {/* Dropdown Menu */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>Changelog</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Download</a></li>
                                <li><a>Contact</a></li>
                                <li>
                                    <button className="mt-2 w-full text-white rounded-md 
                                    bg-gradient-to-r from-purple-500 to-indigo-500 px-3 py-2">
                                        + New Ticket
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Logo */}
                        <a className="ml-2 font-bold text-xl text-gray-800 cursor-pointer">
                            CS <span className="text-purple-600">Ticket System</span>
                        </a>
                    </div>

                    {/* 🔹 Desktop Menu */}
                    <div className="hidden lg:flex items-center">
                        <ul className="flex gap-5 font-medium text-gray-600">
                            <li className="cursor-pointer hover:text-purple-600 transition">Home</li>
                            <li className="cursor-pointer hover:text-purple-600 transition">FAQ</li>
                            <li className="cursor-pointer hover:text-purple-600 transition">Changelog</li>
                            <li className="cursor-pointer hover:text-purple-600 transition">Blog</li>
                            <li className="cursor-pointer hover:text-purple-600 transition">Download</li>
                            <li className="cursor-pointer hover:text-purple-600 transition">Contact</li>
                        </ul>
                        <button className="ml-4 px-4 py-2 rounded-md font-semibold text-white 
                        bg-gradient-to-r from-purple-500 to-indigo-500 
                        hover:from-purple-600 hover:to-indigo-600 transition">
                            + New Ticket
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;