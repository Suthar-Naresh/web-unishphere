import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-transparent m-4 relative bottom-0 left-0 right-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/LOGO.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">UniSphere</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0">
                        <li>
                            <Link href="/#home" className="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link href="/#features" className="hover:underline me-4 md:me-6">Features</Link>
                        </li>
                        <li>
                            <Link href="/#pricing" className="hover:underline me-4 md:me-6">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/#getting-started" className="hover:underline">Start now</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-900 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-900 sm:text-center ">© 2024 <Link href="/" className="hover:underline">UniSphere™</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
