import React from 'react';
import Banner from '../../Components/Banner/Banner';
import VisaService from '../../Components/VisaService/VisaService';
import FrequentlyAsk from '../../Components/FrequentlyAsk/FrequentlyAsk';
import VisaCard from '../../Components/VisaCard/VisaCard';
import LatestVisas from '../../Components/LatestVisas/LatestVisas';

const MainHomeLayout = () => {
    return (
        <div>
            <section className='md:w-[80%] mx-auto w-[95%]'>
                <Banner></Banner>
            </section>
            <section className='bg-green-50 p-3'>
                <section className='mb-7 md:w-[80%] mx-auto w-[95%]'>
                    <LatestVisas></LatestVisas>
                </section>
            </section>
            <section className='bg-blue-50 py-12 px-6 lg:px-16'>
                <VisaService></VisaService>
            </section>
            <section className='py-16 px-6 lg:px-16 bg-gray-50'>
                <FrequentlyAsk></FrequentlyAsk>
            </section>
        </div>
    );
};

export default MainHomeLayout;