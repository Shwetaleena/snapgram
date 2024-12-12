import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL || "https://cloud.appwrite.io/v1",
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || "6752b2a70024cfd19815",
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || "6755a82c001a342bea12",
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID ,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID || "6755a8b10034e7f654c7",
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};
export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
