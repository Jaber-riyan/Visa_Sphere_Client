import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16 p-6 lg:p-16 bg-white">
            {/* Left Content */}
            <div className="animate__animated animate__fadeInLeft max-w-lg">
                <div className="text-[1rem] text-blue-500 font-bold mb-4 px-3 py-2 bg-blue-100 inline-block">
                    REGISTERED MIGRATION AGENT
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    World Wide Visa & Recruitment Services
                </h1>
                <p className="text-gray-600 mb-6">
                    Secure your World Wide Visa. Superior client service, from start to
                    approval.
                </p>
                <div className="flex gap-4">
                    <Link
                        to="/all-visas"
                        className="btn bg-[#0071bc] border-none rounded-[4px] hover:bg-[#1b1464] btn-primary text-white animate-pulse scale-110 transition-transform"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/learn-more"
                        className="btn bg-[#1b1464] border-none rounded-[4px] hover:bg-[#0071bc] text-white btn-secondary hover:shadow-lg"
                    >
                        Learn More
                    </Link>
                </div>
                <div className="mt-6 space-y-4">
                    <img className='w-56' src="https://i.ibb.co.com/JdHpxFw/620111d2c957b77b1afcf64a-Clients-Images.png" alt="" />
                    <p className="text-gray-600">
                        With <span className="font-bold">15+ years</span> of experience and{' '}
                        <span className="font-bold">1,500+</span> applications, we ensure
                        success.
                    </p>
                </div>
            </div>

            {/* Right Image */}
            <div className="animate__animated animate__fadeInRight mt-10 lg:mt-0">
                <div className="relative">
                    <img
                        className="w-full max-w-sm lg:max-w-md mx-auto rounded-lg shadow-lg"
                        src="https://i.ibb.co.com/1nLp56K/62240a9265ddb477e2586b83-Aussie-Passport-min-p-500.jpg"
                        alt="Australian Passport"
                    />
                    <div className="absolute bottom-6 md:-left-20 left-20 border-2 border-blue-900 bg-white p-4 rounded-lg shadow-lg animate-pulse scale-110 transition-transform">
                        <div>

                        </div>
                        <div>
                            <p className="text-xl font-bold text-blue-600">99.2%</p>
                            <p className="text-sm text-gray-600">Application Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
