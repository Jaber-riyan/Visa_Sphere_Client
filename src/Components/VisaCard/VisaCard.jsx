import React from "react";
import { FaGlobe, FaClock, FaMoneyBill, FaCalendar, FaPaperPlane } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const VisaCard = ({ latestVisa }) => {
    const { _id, countryName, countryImage, visaType, processingTime, fee, validity, applicationMethod } = latestVisa;

    return (
        <div
            className="bg-white shadow-lg rounded-lg p-6 transition-transform animate__animated animate__fadeIn hover:scale-105"
        >
            {/* Country Image and Name */}
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={countryImage}
                    alt={countryName}
                    className="w-12 h-12 rounded-full border-2 object-cover border-gray-300"
                />
                <h2 className="text-xl font-bold">{countryName}</h2>
            </div>

            {/* Visa Type */}
            <div className="flex items-center gap-2 text-gray-700 mb-2">
                <FaGlobe className="text-blue-500" />
                <span className="font-medium">Visa Type:</span> <span>{visaType}</span>
            </div>

            {/* Processing Time */}
            <div className="flex items-center gap-2 text-gray-700 mb-2">
                <FaClock className="text-green-500" />
                <span className="font-medium">Processing Time:</span> <span>{processingTime}</span>
            </div>

            {/* Fee */}
            <div className="flex items-center gap-2 text-gray-700 mb-2">
                <FaMoneyBill className="text-yellow-500" />
                <span className="font-medium">Fee:</span> <span>${fee}</span>
            </div>

            {/* Validity */}
            <div className="flex items-center gap-2 text-gray-700 mb-2">
                <FaCalendar className="text-red-500" />
                <span className="font-medium">Validity:</span> <span>{validity}</span>
            </div>

            {/* Application Method */}
            <div className="flex items-center gap-2 text-gray-700 mb-4">
                <FaPaperPlane className="text-purple-500" />
                <span className="font-medium">Application Method:</span>{" "}
                <span>{applicationMethod}</span>
            </div>

            {/* See Details Button */}

            <Link to={`/visa-details/${_id}`}>
                <button

                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    See Details
                </button>
            </Link>


        </div>
    );
};

export default VisaCard;
