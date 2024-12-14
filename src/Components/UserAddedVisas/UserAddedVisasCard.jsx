import React from "react";
import { FaGlobe, FaClock, FaMoneyBill, FaCalendar, FaPaperPlane } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const VisaCard = ({ visaData, setVisas, visas }) => {
    const { _id, countryName, countryImage, visaType, processingTime, fee, validity, applicationMethod } = visaData;
    const navigate = useNavigate();


    const handleDelete = () => {
        console.log(visaData);
        Swal.fire({
            title: "Do you want to Delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visasphere.vercel.app/added-visas/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = visas.map(visa => visa?._id != visaData?._id);
                        setVisas(remaining);
                        Swal.fire("Visa Deleted!", "", "success");
                        navigate('/all-visas');
                    })

            } else if (result.isDenied) {
                Swal.fire("Visa not Deleted yet!", "", "info");
            }
        });
    }

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

            <div className="grid grid-cols-2 gap-3">
                <Link to={`/update/${_id}`}>
                    <button

                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Update
                    </button>
                </Link>
                <Link onClick={handleDelete}>
                    <button

                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default VisaCard;
