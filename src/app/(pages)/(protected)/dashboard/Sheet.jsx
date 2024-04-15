import { useState } from "react"

export default function Sheet({ children }) {
    const [showSheet, setShowSheet] = useState(false);

    const toggleSheet = () => {
        console.log(showSheet);
        setShowSheet(pv => !pv);
    }

    if (!showSheet) {
        return (
            <div className="transition ease-in-out fixed m-1 right-0 bottom-0 top-16 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full">
                <button onClick={toggleSheet}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className="overflow-y-scroll no-scrollbar transition ease-in-out fixed right-0 bottom-0 top-16 w-11/12 md:w-1/2 rounded-l-md bg-white shadow-xl p-5">
            <div className="">
                <button onClick={toggleSheet}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            {children}
        </div>
    )
}
