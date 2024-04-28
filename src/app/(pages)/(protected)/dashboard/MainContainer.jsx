"use client";

import Link from 'next/link'
import { Disclosure, } from '@headlessui/react'
import useAppwrite from "@/appwrite/authContext";
import SettingsDialog from './SettingsDialog';
import { useState } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import appwriteService from '@/appwrite/auth';

function NavBar() {
    const { setIsLoggedIn, user: { university } } = useAppwrite();

    const handleLogout = async () => {
        try {
            const res = await appwriteService.logout();
            if (res) {
                localStorage.clear();
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.log('💣💣');
        }
    }

    return (
        <>
            <Disclosure as="nav" className="fixed top-0 w-full backdrop-filter backdrop-blur border-b border-gray-200 shadow">
                {({ open }) => (

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 flex items-center">
                                    <img className="h-8 w-8" src="/LOGO.svg" alt="UniSphere" />
                                    <span className="ml-3 text-xl font-semibold">UniSphere</span>
                                </div>
                            </div>

                            <div>
                                <Link href={'/contact'} className="py-2 px-3 space-x-2 rounded text-black font-semibold inline-flex items-center border-0 focus:outline-none hover:underline text-base md:mt-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                    </svg>
                                    <span className="hidden md:block">
                                        Need help?
                                    </span>
                                </Link>
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">

                                    <div className="relative ml-3">
                                        <div>
                                            <button onClick={handleLogout} className="bg-red-600 py-2 px-3 rounded text-white font-semibold inline-flex items-center border-0 focus:outline-none hover:bg-red-500 text-base mt-4 md:mt-0">
                                                LOGOUT
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                <button onClick={handleLogout} type="button" className="relative inline-flex items-center justify-center rounded-md bg-red-600 p-2 text-white hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500" aria-controls="mobile-menu" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </Disclosure>

            <header className="mt-16">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{university}</h1>
                </div>
            </header>
        </>
    )
}

export default function MainContainer({ children, name }) {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div className="min-h-full">
            <NavBar />

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-start p-2 gap-5">
                        <h1>Welcome back {name}!</h1>
                        <button onClick={() => { setDialogOpen(true) }} className="bg-indigo-600 p-2 text-white rounded-md" >
                            <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <SettingsDialog open={dialogOpen} setOpen={setDialogOpen} />

                    {children}
                </div>
            </main>

        </div >
    )
}
