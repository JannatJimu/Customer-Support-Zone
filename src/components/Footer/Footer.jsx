import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-green-300  text-gray-300 pt-12">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">

                <div>
                    <h2 className="text-black text-lg font-semibold mb-3">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-800">
                        CS — Ticket System helps businesses manage support tickets efficiently, improving response time and user experience.
                    </p>
                </div>

                <div>
                    <h3 className="text-black font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm text-black">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Our Mission</li>
                        <li className="hover:text-white cursor-pointer">Contact Sales</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-black font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm text-black">
                        <li className="hover:text-white cursor-pointer">Products & Services</li>
                        <li className="hover:text-white cursor-pointer">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer">Download Apps</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-black font-semibold mb-3">Information</h3>
                    <ul className="space-y-2 text-sm mb-5 text-black">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-black font-semibold mb-3">Social Links</h3>
                    <ul className="space-y-2 text-sm text-black">
                        <li>🐦 @CS — Ticket System</li>
                        <li>💼 @CS — Ticket System</li>
                        <li>📘 @CS — Ticket System</li>
                        <li>📩 support@cst.com</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-green-800 py-4 text-center text-sm text-gray-900">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;