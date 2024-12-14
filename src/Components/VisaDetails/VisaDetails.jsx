import React, { useState, useEffect, useContext } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import { AuthContext } from "../../Authentication/Authentication";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";

const VisaDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams();
    const [visa, setVisa] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://visasphere.vercel.app/visas/${param.id}`)
            .then((res) => res.json())
            .then((data) => {
                setVisa(data.data);
            });
    }, [param.id]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);


    const handleApply = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = event.target;
        const applierEmail = formData.email.value;
        const firstName = formData.firstName.value;
        const lastName = formData.lastName.value;
        const appliedDate = formData.appliedDate.value;
        const fee = formData.fee.value;
        const appliedData = { applierEmail, firstName, lastName, appliedDate, fee, visaId: visa._id, appliedVisa: visa }
        console.log(appliedData);
        fetch('https://visasphere.vercel.app/applied-visas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Visa Applying Successfully",
                    icon: 'success'
                })
                navigate('/user-applications');
            })
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Helmet><title>Visa Details | VisaSphere</title></Helmet>
                <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                    <ReactLoading type="spin" color="red"></ReactLoading>
                </div>
            </div>
        );
    }

    return (
        <div className="animate__animated animate__fadeIn min-h-screen p-6 bg-gray-50 flex flex-col items-center">
            <Helmet><title>Visa Details | VisaSphere</title></Helmet>
            <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                <FaInfoCircle className="mr-2" /> Visa Details
            </h1>

            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                {/* Country Image */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-4">Country: {visa.countryName}</label>
                    <img
                        src={visa.countryImage}
                        alt={`${visa.countryName} flag`}
                        className="md:h-72 h-52 w-full object-cover rounded-lg border"
                    />

                </div>

                {/* Visa Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Visa Type</label>
                    <p className="text-gray-800">{visa.visaType}</p>
                </div>

                {/* Processing Time */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Processing Time
                    </label>
                    <p className="text-gray-800">{visa.processingTime}</p>
                </div>

                {/* Required Documents */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Required Documents
                    </label>
                    <ul className="list-disc pl-5 text-gray-800">
                        {visa.requiredDocuments.map((doc, index) => (
                            <li key={index}>{doc}</li>
                        ))}
                    </ul>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <p className="text-gray-800">{visa.description}</p>
                </div>

                {/* Age Restriction */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Age Restriction
                    </label>
                    <p className="text-gray-800">{visa.ageRestriction} years</p>
                </div>

                {/* Fee */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Fee</label>
                    <p className="text-gray-800">${visa.fee}</p>
                </div>

                {/* Validity */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Validity</label>
                    <p className="text-gray-800">{visa.validity}</p>
                </div>

                {/* Application Method */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Application Method
                    </label>
                    <p className="text-gray-800">{visa.applicationMethod}</p>
                </div>

                {/* Apply Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleApply}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition transform hover:scale-105 animate__animated animate__pulse"
                    >
                        Apply for the Visa
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 pt-10 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-blue-600">Apply for Visa</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                ✖
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue={user.email}
                                    disabled
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="appliedDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Applied Date
                                </label>
                                <input
                                    type="text"
                                    id="appliedDate"
                                    name="appliedDate"
                                    defaultValue={new Date().toLocaleDateString()}
                                    disabled
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fee" className="block text-sm font-medium text-gray-700 mb-1">
                                    Fee
                                </label>
                                <input
                                    type="number"
                                    id="fee"
                                    name="fee"
                                    defaultValue={visa.fee}
                                    disabled
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default VisaDetails;
