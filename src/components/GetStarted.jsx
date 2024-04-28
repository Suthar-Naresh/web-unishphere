import { ChatBubbleLeftRightIcon, CheckBadgeIcon, UserCircleIcon } from '@heroicons/react/24/outline'

function Steps({ icon, step, content }) {
    return (
        <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                {icon}
            </div>
            <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{step}</h2>
                <p className="leading-relaxed text-sm text-justify">{content}</p>
            </div>
        </div>
    )
}

export default function GetStarted() {
    const steps = [
        {
            icon: <ChatBubbleLeftRightIcon className='w-5 h-5' />,
            step: 'STEP 1',
            content: 'Reach out to us via our website or contact details provided to express your interest in joining UniSphere. Our dedicated team is here to assist you every step of the way and answer any questions you may have about our platform.'
        },
        {
            icon: <CheckBadgeIcon className='w-5 h-5' />,
            step: 'STEP 2',
            content: 'Once you\'ve contacted us, our team will guide you through the verification process to ensure your eligibility for accessing the app. This may involve verifying your university enrollment status or other relevant details.',
        },
        {
            icon: <UserCircleIcon className='w-5 h-5' />,
            step: 'STEP 3',
            content: 'After successful verification, your account will be created on UniSphere. Simply follow the easy steps to set up your profile and gain access to all the features and resources our platform has to offer.',
        }
    ];

    return (
        <section className="text-gray-600 body-font" id="getting-started">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Get started</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Ready to get started? Dive into the world of UniSphere today and experience seamless access to university events, resources, and community engagement. Join thousands of students already enjoying the benefits of our platform and unlock a world of opportunities with just a few clicks. Get started now and elevate your university experience!</p>
                    </div>

                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

                        {
                            steps.map(({ icon, step, content }, idx) => (
                                <Steps key={idx} content={content} icon={icon} step={step} />
                            ))
                        }

                        <div className="flex relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                <p className="leading-relaxed text-sm text-justify">
                                    Congratulations! You're now ready to start using UniSphere. Explore university events, access resources, and engage with your campus community with just a few clicks or taps. Get started today and make the most of your university experience!
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="/getting_started.jpg" alt="step" />
                </div>
            </div>
        </section>
    )
}
