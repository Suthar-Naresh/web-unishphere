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

        users.get()

        users.updatePassword()
        return new Response(JSON.stringify(new_organizer));

    } catch (error) {
        console.log('POST EERRRRORROORORO!!', error);
        return NextResponse.json({
            message: 'error',
            error
        })
    }
}