// import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadImageAsync(uri) {
  console.log("uploading image--");

  const blob = await fetch(uri)
    .then((response) => {
      if (!response.ok) {
        throw new TypeError("Network request failed");
      }
      return response.blob();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const fileRef = ref(getStorage(), "images/" + new Date().getTime());
  console.log("photo uploaded successfully");
  const result = await uploadBytes(fileRef, blob);

  blob.close();

  return await getDownloadURL(fileRef);
}
