"use client";

import useAppwrite from "@/appwrite/authContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import OrganizersSection from "./OrganizersSection";
import RadientBg from "@/components/RadientBg";
import SideSheet from "./SideSheet";
import MainContainer from "./MainContainer";
import { PlusIcon } from '@heroicons/react/24/outline'

function Dashboard() {
    const { isLoggedIn, user: { name, university_id, university } } = useAppwrite();

    const { replace } = useRouter();

    const [sheetOpen, setSheetOpen] = useState(false);

    const [organizerName, setOrganizerName] = useState('');
    const [organizerEmail, setOrganizerEmail] = useState('');
    const [organizerPassword, setOrganizerPassword] = useState('');

    const [formSubmitting, setFormSubmitting] = useState(false);

    const handleAddOrganizer = async () => {

        setFormSubmitting(true);

        const res = await fetch('/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                organizerName,
                organizerEmail,
                organizerPassword,
                university_id,
                university
            })
        });

        const data = await res.json();

        if (data) {
            setOrganizerName('');
            setOrganizerEmail('');
            setOrganizerPassword('');
            alert('Organizer added successfully.')
        }

        setFormSubmitting(false);
    }

    useEffect(() => {
        if (!isLoggedIn) {
            replace('/auth');
        }
    }, [isLoggedIn]);

    return (
        <RadientBg>

            <MainContainer name={name}>
                <button onClick={() => { setSheetOpen(true) }} className="fixed text-white right-5 md:right-10 bottom-5 md:bottom-10 p-3 rounded-full bg-indigo-600" >
                    <div className="flex justify-center items-center gap-2">
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        <span className="hidden md:block">
                            Add new organizer
                        </span>
                    </div>
                </button>

                <SideSheet open={sheetOpen} setOpen={setSheetOpen} >
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
                                        onChange={e => setOrganizerName(e.target.value)}
                                        value={organizerName}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
                                        onChange={e => setOrganizerEmail(e.target.value)}
                                        value={organizerEmail}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
                                        onChange={e => setOrganizerPassword(e.target.value)}
                                        value={organizerPassword}
                                    />
                                </div>
                            </div>

                            <div className="">
                                <button disabled={formSubmitting} type='submit' onClick={handleAddOrganizer} className="disabled:cursor-not-allowed disabled:opacity-30 flex w-full gap-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    {
                                        formSubmitting
                                            ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                    }
                                    {formSubmitting ? 'Adding...' : 'Add now'}
                                </button>
                            </div>
                        </div>
                    </div>
                </SideSheet>

                <OrganizersSection depFun={handleAddOrganizer} />
            </MainContainer>

        </RadientBg>
    )
}

export default Dashboard