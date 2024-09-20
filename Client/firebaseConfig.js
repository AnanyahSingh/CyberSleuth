import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

//comment

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
  const result = await uploadBytes(fileRef, blob);

  // blob.close();

  return await getDownloadURL(fileRef);
}
