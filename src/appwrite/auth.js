import { Account, Client, Databases, ID, Query, Teams } from 'appwrite';
import conf from '../constants/conf';

class AppwriteService {
    client = new Client();
    account;
    databases;
    teams;

    constructor() {
        this.client
            .setEndpoint(conf.endpoint)
            .setProject(conf.project_id);

        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.teams = new Teams(this.client);

    }

    async login(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async addOrganizer(organizerName, organizerEmail, university_id, organizerPassword) {
        try {
            // create organizer document
            const organizer = await this.databases.createDocument(conf.db_id, conf.organizers_collection_id, ID.unique(), {
                name: organizerName,
                head: organizerEmail,
                university: university_id,
            });

            if (organizer) {
                return await this.account.create(ID.unique(), organizerEmail, organizerPassword, organizerName);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async ownerInfo() {
        try {
            return this.teams.list();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getOrganizers(university_id) {
        try {
            const data = await this.databases.listDocuments(conf.db_id, conf.organizers_collection_id)
            // this.account.updatePrefs({ university, university_id, docID: organizer.$id });
            // await this.teams.createMembership(conf.organizers_team_id, [], organizerEmail);
            return data.documents.filter(org => org.university.$id === university_id)
        } catch (error) {
            console.log('man these error!!!', error);
            throw new Error(error.message);
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;