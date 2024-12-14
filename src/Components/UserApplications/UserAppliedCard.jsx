import React, { useContext, useEffect, useState } from "react";
import { FaGlobe, FaPassport, FaHourglassHalf, FaMoneyBillWave, FaCalendarAlt, FaUser, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../../Authentication/Authentication";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const UserAppliedCard = ({ application, setUserAppliedData, userAppliedData }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(application);


    const handleCancel = () => {
        Swal.fire({
            title: "Do you want to Delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visasphere.vercel.app/applied-visas/${application.visaId}/${user.email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = userAppliedData.map(applicationData => applicationData.visaId !== application.visaId);
                        setUserAppliedData(remaining);
                        Swal.fire("Applied Application Deleted!", "", "success");
                        navigate('/all-visas')
                    })
                
            } else if (result.isDenied) {
                Swal.fire("Applied Application not Deleted yet!", "", "info");
            }
        });
    }


    return (
        <div className="animate__animated animate__fadeIn animate__slower bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {/* Country */}
            <div className="flex items-center mb-4">
                <FaGlobe className="text-blue-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">Country: {application?.appliedVisa?.countryName}</p>
            </div>

            {/* Country Image */}
            <div className="mb-4">
                <img
                    src={application?.appliedVisa?.countryImage}
                    alt={application?.appliedVisa?.countryName}
                    className="rounded-lg shadow-md w-full h-40 object-cover"
                />
            </div>

            {/* Visa Type */}
            <div className="flex items-center mb-4">
                <FaPassport className="text-green-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">Visa Type: {application?.appliedVisa?.visaType}</p>
            </div>

            {/* Processing Time */}
            <div className="flex items-center mb-4">
                <FaHourglassHalf className="text-yellow-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">
                    Processing Time: {application?.appliedVisa?.processingTime}
                </p>
            </div>

            {/* Fee */}
            <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-red-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">Fee: ${application?.appliedVisa?.fee}</p>
            </div>

            {/* Validity */}
            <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-purple-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">Validity: {application?.appliedVisa?.validity}</p>
            </div>

            {/* Application Method */}
            <div className="flex items-center mb-4">
                <FaEnvelope className="text-pink-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">
                    Application Method: {application?.applicationMethod}
                </p>
            </div>

            {/* Applied Date */}
            <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-indigo-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">Applied Date: {application?.appliedDate}</p>
            </div>

            {/* Applicant's Name */}
            <div className="flex items-center mb-4">
                <FaUser className="text-orange-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">
                    Applicant: {`${application?.firstName} ${application?.lastName}`}
                </p>
            </div>

            {/* Applicant's Email */}
            <div className="flex items-center mb-4">
                <FaEnvelope className="text-teal-600 mr-3" size={20} />
                <p className="text-gray-700 text-lg font-semibold">Email: {application?.applierEmail}</p>
            </div>

            {/* Cancel Button */}
            <div className="flex justify-center mt-6">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-110 w-full"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default UserAppliedCard;
