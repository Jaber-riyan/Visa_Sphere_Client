import React, { useContext, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../../Authentication/Authentication";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddVisa = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        countryImage: "",
        countryName: "",
        visaType: "Tourist Visa",
        processingTime: "",
        requiredDocuments: [],
        description: "",
        ageRestriction: "",
        fee: "",
        validity: "",
        applicationMethod: "",
        userEmail: user?.email
    });

    const visaTypes = ["Tourist Visa", "Student Visa", "Business Visa"];
    const documentsOptions = [
        "Valid passport",
        "Visa application form",
        "Recent passport-sized photograph",
        "Travel itinerary",
        "Hotel reservation",
        "Business invitation letter",
        "Company bank statement",
        "Health insurance",
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            const updatedDocuments = checked
                ? [...prevState.requiredDocuments, value]
                : prevState.requiredDocuments.filter((doc) => doc !== value);
            return { ...prevState, requiredDocuments: updatedDocuments };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Visa Added:", formData);
        setFormData({
            countryImage: "",
            countryName: "",
            visaType: "Tourist Visa",
            processingTime: "",
            requiredDocuments: [],
            description: "",
            ageRestriction: "",
            fee: "",
            validity: "",
            applicationMethod: "",
        });
        fetch('https://visasphere.vercel.app/visas', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Successfully Added Visa',
                    icon: 'success',
                    timer: 3000
                })
                navigate('/all-visas');
            })
    };

    return (
        <div className="animate__animated animate__bounceIn p-6 bg-gray-50 min-h-screen flex flex-col items-center">
            <Helmet><title>Add Visa | VisaSphere</title></Helmet>
            <h1 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <FaPlusCircle className="mr-2" /> Add Visa
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
                        defaultValue={formData.countryImage}
                        onChange={handleInputChange}
                        required
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
                        defaultValue={formData.countryName}
                        required
                        onChange={handleInputChange}
                        placeholder="Enter country name"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Visa Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Visa Type</label>
                    <select
                        name="visaType"
                        value={formData.visaType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                    >
                        {visaTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Processing Time */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Processing Time
                    </label>
                    <input
                        type="text"
                        name="processingTime"
                        defaultValue={formData.processingTime}
                        required
                        onChange={handleInputChange}
                        placeholder="Enter processing time"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Required Documents */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Required Documents
                    </label>
                    <div className="flex flex-col space-y-2">
                        {documentsOptions.map((doc, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    defaultValue={doc}
                                    checked={formData.requiredDocuments.includes(doc)}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                {doc}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        required
                        onChange={handleInputChange}
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
                        defaultValue={formData.ageRestriction}
                        onChange={handleInputChange}
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
                        defaultValue={formData.fee}
                        required
                        onChange={handleInputChange}
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
                        defaultValue={formData.validity}
                        required
                        onChange={handleInputChange}
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
                        defaultValue={formData.applicationMethod}
                        onChange={handleInputChange}
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
                    Add Visa
                </button>
            </form>
        </div>
    );
};

export default AddVisa;
