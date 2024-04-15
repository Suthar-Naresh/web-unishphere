import { useState } from "react"

export default function SideSheet() {
    const [showSheet, setShowSheet] = useState(true);

    const toggleSheet = () => {
        console.log(showSheet);
        setShowSheet(pv => !pv);
    }

    return (
        <div className="relative z-100 bg-red-600" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 overflow-hidden transition-opacity ease-in-out duration-500">
                <div className="absolute inset-0 overflow-hidden">

                    <div className="pointer-events-none fixed top-16  inset-y-0 right-0 flex max-w-full pl-10">
                        <div className={`pointer-events-auto relative w-screen max-w-md`}>

                            <div className="absolute left-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                <button onClick={toggleSheet} type="button" className="bg-cyan-500 relative rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black">
                                    <span className="absolute -inset-2.5"></span>
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex h-full flex-col rounded-tl-md overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    HEHEHE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


