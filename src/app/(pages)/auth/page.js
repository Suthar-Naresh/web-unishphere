"use client";

import appwriteService from "@/appwrite/auth";
import useAppwrite from "@/appwrite/authContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RadientBg from "@/components/RadientBg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AuthPage() {
    const { setIsLoggedIn, isLoggedIn } = useAppwrite();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { replace } = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            replace('/dashboard');
        }
    }, [isLoggedIn]);

    const handleLogin = async () => {
        try {
            const res = await appwriteService.login(email, password);
            if (res) {
                setIsLoggedIn(true);
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Header linkText='Back to home' linkUrl='/' />

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <RadientBg>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                                <h1 className="title-font font-medium text-3xl text-gray-900">
                                    Welcome Back to UniSphere!
                                </h1>
                                <p className="leading-relaxed mt-4 text-justify">
                                    Unlock a World of Opportunities
                                    <br />
                                    UniSphere is your gateway to seamless access to university events, resources, and community engagement.
                                    Join thousands of students from around the world who trust UniSphere to stay connected and informed.
                                    Whether you're looking for campus events, or opportunities to connect with fellow students, we've got you covered.
                                    <br />
                                    Log in now to start exploring!
                                </p>
                            </div>
                            <div className="lg:w-2/6 md:w-1/2 bg-gray-50 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button onClick={handleLogin} className="text-white font-semibold bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded text-sm shadow-sm">Login</button>
                                <p className="text-xs text-gray-500 mt-3">University admin login.</p>
                            </div>
                        </div>
                    </section>
                </RadientBg>
            </div>

            <Footer/>
        </div>
    )
}

export default AuthPage