function PriceCard({ tier, price, tierIncludes = [], popular = false }) {
    return (
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className={`h-full p-6 rounded-lg border-2 ${popular ? 'border-indigo-500' : 'border-gray-300'} flex flex-col relative overflow-hidden`}>
                {
                    price === 0
                        ? <><h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1></>
                        : <>
                            {popular && <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>}
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{tier}</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹{price}</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1></>
                }

                {tierIncludes.map((feature, idx) => (
                    <p key={idx} className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>{feature}
                    </p>
                ))}

                {/* <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </span>{tierIncludes.at(-1)}
                </p> */}

                <button className={`flex items-center mt-auto text-white ${popular ? 'bg-indigo-500' : 'bg-gray-400'} border-0 py-2 px-4 w-full focus:outline-none hover:${popular ? 'bg-indigo-600' : 'bg-gray-500'} rounded`}>Subscribe
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of any other application like this.</p>
            </div>
        </div>
    );
}

export default function Pricing() {
    return (
        <section className="text-gray-600 body-font overflow-hidden" id="pricing">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                </div>
                <div className="flex flex-wrap -m-4">

                    <PriceCard
                        price={0}
                        tier={'FREE'}
                        tierIncludes={["Valid for 20 days", "50 students", "Single organizer", "1 event"]}
                    />

                    <PriceCard
                        price={299}
                        tier={'BASIC'}
                        tierIncludes={["Valid for 28 days", "200 students", "5 Organizers", "5 event per organizer"]}
                    />

                    <PriceCard
                        price={499}
                        tier={'STANDARD'}
                        tierIncludes={["Valid for 28 days", "1000 students", "20 Organizers", "10 event per organizer"]}
                    />

                    <PriceCard
                        popular={true}
                        price={999}
                        tier={'PREMIUM'}
                        tierIncludes={["Valid for 28 days", "2000 students", "50 Organizers", "20 event per organizer"]}
                    />
                </div>
            </div>
        </section>
    )
}

