import { Client, Account, Databases } from 'appwrite';
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6461bbce0e0579a0451a');

export const account= new Account(client);
