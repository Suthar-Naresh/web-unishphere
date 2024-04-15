"use client";

import { AppwriteProvider } from "@/appwrite/authContext";

export default function PageLayout({ children }) {
    return <AppwriteProvider>{children}</AppwriteProvider>;
}
