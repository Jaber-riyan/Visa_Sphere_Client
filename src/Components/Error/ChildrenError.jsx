import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Authentication';
import { Helmet } from 'react-helmet';

const ChildrenError = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet><title>404 | VisaSphere</title></Helmet>
            <div className='flex justify-center items-center min-h-[50vh] flex-col gap-y-10'>
                <h3 className='font-bold text-4xl text-red-600 italic text-center animate__animated animate__shakeX'>Page Not found</h3>
                <div>
                    {user ?'': <Link to={'/login'} className="mr-3 w-full py-2 px-7 mt-4 text-white bg-gray-800 rounded-md hover:bg-gray-900">
                        Login
                    </Link>}
                    <Link to={'/'} className="w-full py-2 px-7 mt-4 text-white bg-gray-800 rounded-md hover:bg-gray-900">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChildrenError;