import React, { useEffect, useState } from 'react';
import VisaCard from '../VisaCard/VisaCard';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const LatestVisas = () => {
    const [latestVisas, setLatestVisas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://visasphere.vercel.app/latest-visas');
            const data = await res.json();
            console.log(data);
            setLatestVisas(data.result);
        }
        fetchData()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                    <ReactLoading type="spin" color="red"></ReactLoading>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className='text-4xl font-bold mb-7'>Latest Visas</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    latestVisas.length > 0 ?
                        latestVisas.map(latestVisa => <VisaCard latestVisa={latestVisa} key={latestVisa._id}></VisaCard>)
                        :
                        <h2 className='text-3xl text-red-500 font-bold'>No Latest Visas :(</h2>
                }
            </div>
            <Link
                to="/all-visas"
                className="btn bg-[#1b1464] border-none rounded-[4px] hover:bg-[#0071bc] text-white btn-secondary hover:shadow-lg mt-9 animate-pulse scale-115 transition-transform"
            >
                See All Visas
            </Link>
        </div>
    );
};

export default LatestVisas;