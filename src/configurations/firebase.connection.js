// Import the functions you need from the SDKs you need
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { config } from "dotenv";

config()

initializeApp({
  credential: applicationDefault(),
})

export const db = getFirestore()





