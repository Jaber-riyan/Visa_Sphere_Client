import React, { useContext, useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../../Authentication/Authentication";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactLoading from 'react-loading';

const UpdateUserVisa = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const param = useParams();
    const [formData, setFormData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://visasphere.vercel.app/added-visa/${param.id}`)
            .then(res => res.json())
            .then(data => {
                const fetchData = data.data;
                setFormData(fetchData);
            })
    }, [param.id])


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        const countryImage = formData?.countryImage?.value;
        const countryName = formData?.countryName?.value;
        const visaType = formData?.visaType?.value;
        const processingTime = formData?.processingTime?.value;
        const description = formData?.description?.value;
        const ageRestriction = formData?.ageRestriction?.value;
        const fee = formData?.fee?.value;
        const validity = formData?.validity?.value;
        const applicationMethod = formData?.applicationMethod?.value;
        const updatedData = { countryImage, countryName, visaType, processingTime, description, ageRestriction, fee, validity, applicationMethod };
        console.log(updatedData);
        fetch(`https://visasphere.vercel.app/update-visa/${param.id}`, {
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Successfully Updated Visa',
                    icon: 'success',
                    timer: 3000
                })
                navigate('/user-added-visas');
            })
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Helmet><title>Update Visa | VisaSphere</title></Helmet>
                <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                    <ReactLoading type="spin" color="red" />
                </div>
            </div>
        );
    }

    return (
        <div className="animate__animated animate__bounceIn p-6 bg-gray-50 min-h-screen flex flex-col items-center">
            <Helmet><title>Update Visa | VisaSphere</title></Helmet>
            <h1 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <FaPlusCircle className="mr-2" /> Update Visa
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
            >
                {/* Country Image */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Country Image (URL)
                    </label>
                    <input
                        type="text"
                        name="countryImage"
                        defaultValue={formData?.countryImage}
                        placeholder="Enter image URL"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Country Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Country Name</label>
                    <input
                        type="text"
                        name="countryName"
                        defaultValue={formData?.countryName}
                        required
                        placeholder="Enter country name"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Visa Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Visa Type</label>
                    <input
                        name="visaType"
                        defaultValue={formData?.visaType}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                    >
                    </input>
                </div>

                {/* Processing Time */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Processing Time
                    </label>
                    <input
                        type="text"
                        name="processingTime"
                        defaultValue={formData?.processingTime}
                        required
                        placeholder="Enter processing time"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData?.description}
                        required
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Age Restriction */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Age Restriction
                    </label>
                    <input
                        type="text"
                        name="ageRestriction"
                        defaultValue={formData?.ageRestriction}
                        required
                        placeholder="Enter age restriction"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Fee */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Fee</label>
                    <input
                        type="number"
                        name="fee"
                        defaultValue={formData?.fee}
                        required
                        placeholder="Enter fee"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Validity */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Validity</label>
                    <input
                        type="text"
                        name="validity"
                        defaultValue={formData?.validity}
                        required
                        placeholder="Enter validity period"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Application Method */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Application Method
                    </label>
                    <input
                        type="text"
                        name="applicationMethod"
                        defaultValue={formData?.applicationMethod}
                        required
                        placeholder="Enter application method"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                >
                    Update Visa
                </button>
            </form>
        </div>
    );
};

export default UpdateUserVisa;
