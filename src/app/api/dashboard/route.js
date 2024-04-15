import conf from "@/constants/conf"
import { Client, Databases, ID, Teams, Users } from "node-appwrite"
import { NextResponse } from 'next/server'

let client = new Client();

client
    .setEndpoint(conf.endpoint)
    .setProject(conf.project_id)
    .setKey(process.env.SERVER_API_KEYS)
    ;

let teams = new Teams(client);
let users = new Users(client);
let databases = new Databases(client);


export async function POST(request) {
    try {
        const body = await request.json();
        const { organizerEmail, organizerName, organizerPassword, university_id, university } = body;

        // create organizer in table
        const { $id } = await databases.createDocument(conf.db_id, conf.organizers_collection_id, ID.unique(), {
            name: organizerName,
            head: organizerEmail,
            university: university_id
        });

        // create organizer in auth
        const user = await users.create(ID.unique(), organizerEmail, undefined, organizerPassword, organizerName);
        await users.updatePrefs(user.$id, { university_id, university, docId: $id });

        // add organizer to team
        const new_organizer = await teams.createMembership(conf.organizers_team_id, [], organizerEmail, user.$id);
        return new Response(JSON.stringify(new_organizer));

    } catch (error) {
        console.log('POST EERRRRORROORORO!!', error);
        return NextResponse.json({
            message: 'error',
            error
        })
    }
}