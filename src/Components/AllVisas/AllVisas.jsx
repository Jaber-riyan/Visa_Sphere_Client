import React, { useEffect, useState } from 'react';
import VisaCard from '../VisaCard/VisaCard';
import ReactLoading from 'react-loading';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllVisas = () => {
    const [visas, setVisas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visaTypes, setVisaTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://visasphere.vercel.app/visas');
            const data = await res.json();
            setVisas(data.result);

            const resVisa = await fetch('https://visasphere.vercel.app/visa-types');
            const visaData = await resVisa.json();
            setVisaTypes(visaData.data);
        };
        fetchData();
    }, []);

    const sortBy = async (visaType) => {
        if (visaType === "All") {
            const res = await fetch('https://visasphere.vercel.app/visas');
            const data = await res.json();
            setVisas(data.result);
        } else {
            const res = await fetch('https://visasphere.vercel.app/visas');
            const data = await res.json();
            const filteredData = data.result.filter(visa => visa.visaType === visaType);
            setVisas(filteredData);
        }
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
                <Helmet><title>All Visas | VisaSphere</title></Helmet>
                <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                    <ReactLoading type="spin" color="red" />
                </div>
            </div>
        );
    }

    return (
        <div className="w-[95%] mx-auto">
            <Helmet><title>All Visas | VisaSphere</title></Helmet>
            <div className="dropdown dropdown-bottom mb-4">
                <div tabIndex={0} role="button" className="btn m-1 font-bold text-[1rem]">
                    Visa Type Based Filter
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => sortBy("All")} className="text-[1rem] font-semibold">
                        <Link>All</Link>
                    </li>
                    {visaTypes && visaTypes.map(visaType => (
                        <li
                            key={visaType?._id}
                            onClick={() => sortBy(visaType?.visaType)}
                            className="text-[1rem] font-semibold"
                        >
                            <Link>{visaType?.visaType}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <h2 className="text-4xl font-bold mb-7">Visas</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                {visas.length > 0 ? (
                    visas.map(latestVisa => (
                        <VisaCard latestVisa={latestVisa} key={latestVisa._id} />
                    ))
                ) : (
                    <h2 className="text-3xl text-red-500 font-bold min-h-screen">No Visas :(</h2>
                )}
            </div>
        </div>
    );
};

export default AllVisas;
