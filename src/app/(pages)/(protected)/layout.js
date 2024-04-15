"use client";

import useAppwrite from "@/appwrite/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({ children }) {
    const { isLoggedIn } = useAppwrite();

    const { replace } = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            replace('/auth');
        }
    }, [isLoggedIn]);

    return (children);
}
