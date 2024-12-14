import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 animate__animated animate__fadeInUp">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                {/* Logo and About */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-4">VisaSphere</h2>
                    <p>
                        We are a full-service Visa & Citizenship migration
                        agency. It's our mission to secure your Visa. Enjoy
                        superior client service, from start to approval.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">Services</h3>
                    <ul>
                        <li><Link to="/employer-sponsored">Employer-Sponsored</Link></li>
                        <li><Link to="/family">Family</Link></li>
                        <li><Link to="/business-investor">Business & Investor</Link></li>
                        <li><Link to="/aat-review">AAT Review</Link></li>
                        <li><Link to="/citizenship">Australian Citizenship</Link></li>
                        <li><Link to="/complex-matters">Complex Matters</Link></li>
                    </ul>
                </div>

                {/* Pages */}
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">Pages</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li className="flex items-center">
                            <Link to="/visa-jobs">Visa Jobs</Link>
                            <span className="bg-yellow-400 text-black text-xs font-bold ml-2 px-2 py-1 rounded">
                                Hiring!
                            </span>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
                    <p className="flex items-center mb-2">
                        <FaEnvelope className="mr-2" /> mwalsh@visasphere.com
                    </p>
                    <p className="flex items-center mb-2">
                        <FaPhoneAlt className="mr-2" /> +61 406 875 494
                    </p>
                    <p className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" /> 303/ 198 Harbour Esplanade,
                        Docklands VIC 3008
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
                <p>Copyright ©{new Date().getFullYear()} VisaSphere. All Rights Reserved.</p>
                <p>
                    Website Master{" "}
                    <Link
                        to="https://www.facebook.com/jaberriyanyan"
                        className="text-blue-400 hover:text-blue-500 transition-colors"
                    >
                        Jaber Ahmed Riyan
                    </Link>
                </p>
            </div>

        </footer>
    );
};

export default Footer;
