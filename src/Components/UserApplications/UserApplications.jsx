import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Authentication';
import UserAppliedCard from './UserAppliedCard';
import ReactLoading from 'react-loading';
import { Helmet } from 'react-helmet';

const UserApplications = () => {
    const { user } = useContext(AuthContext);
    const [userAppliedData, setUserAppliedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://visasphere.vercel.app/applied-visas/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setUserAppliedData(data.data);
            })
    }, [user.email])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <Helmet><title>Visa Applications | VisaSphere</title></Helmet>
                <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                    <ReactLoading type="spin" color="red"></ReactLoading>
                </div>
            </div>
        );
    }
    return (
        <div className='mb-7 w-[95%] mx-auto'>
            <Helmet><title>Visa Applications | VisaSphere</title></Helmet>
            <h1 className='text-4xl font-bold mb-6'>Your Visa Applications</h1>
            <div className='mb-5'>
                <form>
                    <input
                        type="text"
                        placeholder="Type here...."
                        className="input input-bordered w-full max-w-xs" />
                    <button className='px-5 rounded-lg font-bold py-3 bg-blue-400'>Search</button>
                </form>

            </div>

            {
                userAppliedData.length > 0 ?
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        {userAppliedData.map(data => <UserAppliedCard userAppliedData={userAppliedData} setUserAppliedData={setUserAppliedData} application={data} key={data?.visaId}></UserAppliedCard>)}
                    </div>
                    :
                    <h2 className='min-h-screen text-red-500 text-4xl mt-10 font-bold'>No Applied Applications :(</h2>
            }

        </div>
    );
};

export default UserApplications;