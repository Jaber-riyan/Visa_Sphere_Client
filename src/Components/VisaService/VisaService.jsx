import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaUserCheck, FaHandsHelping, FaSync, FaSearch, FaCheckCircle } from 'react-icons/fa';

const VisaService = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between md:w-[80%] mx-auto w-[95%]">
            {/* Left Image */}
            <div className="animate__animated animate__fadeInLeft max-w-sm lg:max-w-md">
                <img
                    className="w-full rounded-lg"
                    src="https://i.ibb.co/B2PKHJ8/620771eb511bf00361f88212-Mark-Croped-to-size-p-500.png"
                    alt="Service Provider"
                />
            </div>

            {/* Right Content */}
            <div className="mt-10 lg:mt-0 lg:ml-12 animate__animated animate__fadeInRight max-w-lg">
                <h2 className="text-lg text-blue-500 font-semibold">
                    Knowledge is key. Exceptional service is vital.
                </h2>
                <p className="text-gray-700 mt-4 mb-6">
                    Give your Australian visa or citizenship application the best chance of success.
                    Try the Visa3i service difference.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <FaComments className="text-blue-500 text-2xl" />
                        <p className="text-gray-600">Clear in Communication</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaSync className="text-blue-500 text-2xl" />
                        <p className="text-gray-600">Consistent</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaHandsHelping className="text-blue-500 text-2xl" />
                        <p className="text-gray-600">Approachable</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaSearch className="text-blue-500 text-2xl" />
                        <p className="text-gray-600">Up-to-date</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaUserCheck className="text-blue-500 text-2xl" />
                        <p className="text-gray-600">Skilled & Experienced</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-blue-500 text-2xl" />
                        <p className="text-gray-600">Accurate & Detailed</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link
                        to="/learn-more"
                        className="btn bg-[#1b1464] border-none rounded-[4px] hover:bg-[#0071bc] text-white btn-secondary hover:shadow-lg"
                    >
                        How We Can Help?
                    </Link>
                    <Link
                        to="/learn-more"
                        className="btn bg-white text-black border-2 border-[#1b1464] rounded-[4px] hover:bg-[#1b1464] hover:text-white hover:border-[#1b1464] btn-secondary hover:shadow-lg"
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VisaService;
