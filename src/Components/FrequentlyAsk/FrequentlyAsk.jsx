import React from 'react';

const FrequentlyAsk = () => {
    const faqs = [
        {
            question: 'Do you guarantee a successful visa or citizenship application?',
            answer: `As Registered Migration Agents, we are bound by the 
      Code of Conduct, which prohibits any representative from giving 100% guarantees of success. 
      With this in mind, we are upfront and clear about your chances of success, and will never 
      give a false impression regarding your suitability for a visa.`,
        },
        {
            question: 'Are your fees fixed or hourly?',
            answer: `We strongly believe in providing as much certainty to your application process as possible, 
      so we charge at a fixed rate. You'll never receive any nasty fee surprises part way through the process.`,
        },
        {
            question: 'Are consultation sessions only in-person, or do you have remote options?',
            answer: `We offer consultation sessions to suit your own personal needs, whether that be face-to-face 
      at our Docklands office, or through a range of remote means, such as phone, Zoom, or other messaging services.`,
        },
        {
            question: 'What do I get with a consultation?',
            answer: `The consultation session is an opportunity for you to receive a full written assessment outlining 
      the best strategy for you to achieve your immigration goals. You’ll also get to know a little more about us, 
      and understand our approach. There is no pressure to engage us after a consultation; you may even feel 
      confident to DIY your own application.`,
        },
    ];

    return (
        <div className="md:w-[80%] mx-auto w-[95%]">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10">
                Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentlyAsk;
