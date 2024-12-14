import React, { useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { AuthContext } from '../../Authentication/Authentication';
import UserAddedVisasCard from './UserAddedVisasCard'
import { Helmet } from 'react-helmet';

const UserAddedVisas = () => {
    const [visas, setVisas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://visasphere.vercel.app/added-visas/${user.email}`);
            const data = await res.json();
            console.log(data);
            setVisas(data.data);
        }
        fetchData()
    }, [user.email])


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
        <div className='w-[95%] mx-auto'>
            <Helmet><title>Added Visas | VisaSphere</title></Helmet>
            <h2 className='text-4xl font-bold mb-7'>Visas</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-5'>
                {
                    visas.length > 0 ?
                        visas.map(visa => <UserAddedVisasCard visas={visas} setVisas={setVisas} visaData={visa} key={visa._id}></UserAddedVisasCard>)
                        :
                        <h2 className='text-3xl text-red-500 font-bold min-h-screen'>No Visas added yet :(</h2>
                }
            </div>
        </div>
    );
};

export default UserAddedVisas;