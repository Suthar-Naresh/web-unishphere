"use client";

import appwriteService from "@/appwrite/auth";
import useAppwrite from "@/appwrite/authContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HomePage from "./OrganizersSection";
import RadientBg from "@/components/RadientBg";
import Link from 'next/link'
import Sheet from "./Sheet";
import MyDialog from "./SettingsDialog";
import SideSheet from "./SideSheet";


function Dashboard() {
  const { setIsLoggedIn, isLoggedIn, user: { name, isOwner, university, university_id } } = useAppwrite();

  const { replace } = useRouter();

  const [organizerName, setOrganizerName] = useState('');
  const [organizerEmail, setOrganizerEmail] = useState('');
  const [organizerPassword, setOrganizerPassword] = useState('');
  const [checkURL, setCheckURL] = useState('');

  const [handleInputURL, setHandleInputURL] = useState(checkURL);

  useEffect(() => {
    if (!isLoggedIn) {
      replace('/auth');
    }
  }, [isLoggedIn]);

  useEffect(() => { setCheckURL('https://unisphere-nu.vercel.app/api/check') }, [])


  const handleLogout = async () => {
    try {
      const res = await appwriteService.logout();
      if (res) {
        localStorage.clear();
        setIsLoggedIn(false);
      }
    } catch (error) {

    }
  }

  const handleAddOrganizer = async () => {
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

    console.log(data);

    if (true) {
      setOrganizerName('');
      setOrganizerEmail('');
      setOrganizerPassword('');
      alert('Organizer added successfully.')
    }

  }

  const updateCheckURL = async () => {
    console.log('fgetger');
  }

  return (
    <RadientBg>
      <div className="">
        <div className="min-h-full">
          <nav className="sticky z-50 top-0 left-0 right-0 backdrop-filter backdrop-blur border-b border-gray-200 shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center">
                    <img className="h-8 w-8" src="/LOGO.svg" alt="UniSphere" />
                    <span className="ml-3 text-xl font-semibold">UniSphere</span>
                  </div>
                </div>

                <div className="">
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
          </nav>

          <header className="">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{university}</h1>
            </div>
          </header>

          <MyDialog />

          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between p-2">
                <h1>Welcome back {name}!</h1>
              </div>

              {isOwner && <>
                {/* <Sheet>
                  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add new organizer</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
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
                          <button type='submit' onClick={handleAddOrganizer} className="flex w-full gap-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                            Add now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Sheet> */}
                <HomePage depFun={handleAddOrganizer} />

                <SideSheet>
                  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add new organizer</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
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
                          <button type='submit' onClick={handleAddOrganizer} className="flex w-full gap-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                            Add now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SideSheet>
              </>}

            </div>
          </main>
        </div>

      </div>
    </RadientBg>
  )
}

export default Dashboard