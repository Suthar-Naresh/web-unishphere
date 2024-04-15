import { useState } from "react";
import Link from 'next/link'

export default function Header({ linkText, linkUrl }) {
    const [showDialog, setShowDialog] = useState(false);

    const dismissDialog = () => {
        setShowDialog(false);
    }

    const openDialog = () => {
        setShowDialog(true);
    }

    const linksArray = [
        {
            href: '/#home',
            text: 'Home'
        },
        {
            href: '/#features',
            text: 'Features'
        },
        {
            href: '/#pricing',
            text: 'Pricing'
        },
        {
            href: '/#',
            text: 'Company'
        }
    ];

    return (
        <header className={`bg-white sticky inset-x-0 top-0 z-50 lg:backdrop-filter lg:bg-transparent lg:backdrop-blur-md border-b border-gray-200 shadow-sm`}>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">UniSphere</span>
                        <div className="flex gap-3 justify-center items-baseline">
                        <img className="h-10 w-auto" src="/LOGO.svg" alt="" />
                        <img className="h-8 w-auto" src="/UniSphere.svg" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={openDialog} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        linksArray.map(({ href, text }, idx) => (
                            <Link key={idx} href={href} className="text-sm font-semibold leading-6 text-gray-900">{text}</Link>
                        ))
                    }
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href={linkUrl} className="text-sm font-semibold leading-6 text-gray-900">{linkText} <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>

            <div className={`${showDialog ? 'lg:hidden' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">UniSphere</span>
                            <img className="h-10 w-auto" src="/LOGO.svg" alt="" />
                        </Link>
                        <button onClick={dismissDialog} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    linksArray.map(({ href, text }, idx) => (
                                        <Link key={idx} href={href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{text}</Link>
                                    ))
                                }
                            </div>
                            <div className="py-6">
                                <Link href={linkUrl} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{linkText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
