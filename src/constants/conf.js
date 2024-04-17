const conf = {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    project_id: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    student_collection_id: String(process.env.NEXT_PUBLIC_APPWRITE_STUDENT_COLLECTION_ID),
    db_id: String(process.env.NEXT_PUBLIC_APPWRITE_DB_ID),
    organizers_team_id: String(process.env.NEXT_PUBLIC_APPWRITE_ORGANIZERS_TEAM_ID),
    owners_team_id: String(process.env.NEXT_PUBLIC_APPWRITE_OWNERS_TEAM_ID),
    organizers_collection_id: String(process.env.NEXT_PUBLIC_APPWRITE_ORGANIZERS_COLLECTION_ID),
}

export default conf;