import { createBrowserRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import Login from '../AuthComponents/Login';
import Register from '../AuthComponents/Register';
import ChildrenError from '../Components/Error/ChildrenError';
import Error from '../Components/Error/Error';
import MainHomeLayout from '../Layouts/MainHomeLayout/MainHomeLayout';
import VisaDetails from '../Components/VisaDetails/VisaDetails';
import AddVisa from '../Components/AddVisa/AddVisa';
import AllVisas from '../Components/AllVisas/Allvisas';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import UserAddedVisas from '../Components/UserAddedVisas/UserAddedVisas';
import UserApplications from '../Components/UserApplications/UserApplications';
import UpdateUserVisa from '../Components/UpdateUserAddedVisa/UpdateUserVisa';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <MainHomeLayout></MainHomeLayout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/visa-details/:id',
                element: <PrivateRoutes><VisaDetails></VisaDetails></PrivateRoutes>
            },
            {
                path: '/add-visa',
                element: <PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>
            },
            {
                path: '/all-visas',
                element: <AllVisas></AllVisas>
            },
            {
                path: '/user-added-visas',
                element: <PrivateRoutes><UserAddedVisas></UserAddedVisas></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateUserVisa></UpdateUserVisa></PrivateRoutes>
            },
            {
                path: '/user-applications',
                element: <PrivateRoutes><UserApplications></UserApplications></PrivateRoutes>
            },
            {
                path: '*',
                element: <ChildrenError></ChildrenError>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;