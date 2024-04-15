import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import appwriteService from "./auth";
import conf from "../constants/conf";
import Loading from "@/components/Loading";

const INIT_USER = {
    id: "",
    name: "",
    email: "",
    university: "",
    university_id: "",
    isOwner: false,
    isEmptyPrefs: false,
};

const INIT_STATE = {
    user: INIT_USER,
    isLoading: false,
    isLoggedIn: false,
    setIsLoading: () => { },
    setIsLoggedIn: () => { },
};

function isEmptyPrefs(objectName) {
    return (
        objectName &&
        Object.keys(objectName).length === 0 &&
        objectName.constructor === Object
    );

}

export const AppWriteContext = createContext(INIT_STATE);

export const AppwriteProvider = ({ children }) => {
    const [user, setUser] = useState(INIT_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const setSessionDetails = async () => {
        const sessionInfo = await appwriteService.getCurrentUser();

        if (sessionInfo) {

            // check if user is part of owners team
            const teams = await appwriteService.ownerInfo();
            const isOwner = teams.teams.some(({ $id }) => $id === conf.owners_team_id);

            // console.log('🧾🧾🧾🧾🧾🧾🧾', sessionInfo);
            // console.log(typeof sessionInfo.prefs);

            // if prefs are empty i.e. it is organizer who needs to complete profile
            const emptyPrefs = isEmptyPrefs(sessionInfo.prefs);

            // Set the user context using session info
            setUser({
                id: sessionInfo.$id,
                name: sessionInfo.name,
                email: sessionInfo.email,
                university: sessionInfo.prefs.university,
                university_id: sessionInfo.prefs.university_id,
                isOwner: isOwner,
                isEmptyPrefs: emptyPrefs,
                // docID
            });

        }
    }

    const checkStoredSession = async () => {
        setIsLoading(true);

        try {
            // Check if user session exists
            const sessionDetails = localStorage.getItem('cookieFallback');
            // console.log('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪', sessionDetails);

            if (sessionDetails) {
                // set the user details in ctx
                await setSessionDetails();
                setIsLoggedIn(true);

            }
        } catch (error) {
            console.error('Error reading stored session details:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkStoredSession();
    }, [isLoggedIn]);


    const value = {
        user,
        isLoggedIn,
        isLoading,
        setIsLoading,
        setIsLoggedIn,
    };

    return (
        <AppWriteContext.Provider value={value}>
            {isLoading ? <Loading /> : children}
        </AppWriteContext.Provider>
    );
}

export default function useAppwrite() {
    return useContext(AppWriteContext)
}