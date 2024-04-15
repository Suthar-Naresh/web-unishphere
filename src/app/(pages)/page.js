"use client";

import useAppwrite from '@/appwrite/authContext'
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import RadientBg from '@/components/RadientBg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function LandingPage() {
  const { isLoggedIn } = useAppwrite();
  const { replace } = useRouter();



  useEffect(() => {
    if (isLoggedIn) {
      replace('/dashboard');
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className="bg-white">

        <Header linkText='Log in' linkUrl='/auth' />

        <div className="relative isolate px-6 lg:px-8">

          <RadientBg>

            <div className="mx-auto max-w-2xl py-32 sm:py-48" id='home'>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Empowering University Students Everywhere</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  UniSphere connects you to events and resources from multiple universities.
                  Access university announcements, event calendars, and club activities all in one place.
                  Stay informed and engaged across campuses with UniSphere!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>

            <Features />
            <Pricing />
            <Footer />
          </RadientBg>

        </div>
      </div>

    </div>
  )
}
