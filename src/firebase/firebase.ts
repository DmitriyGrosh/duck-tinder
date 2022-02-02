import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDsndjh5ptprZ2nPqruvZnIEOc55ln8vQo',
  authDomain: 'duck-tinder.firebaseapp.com',
  projectId: 'duck-tinder',
  storageBucket: 'duck-tinder.appspot.com',
  messagingSenderId: '304653397606',
  appId: '1:304653397606:web:6641dde6c77ad662c407a7',
  measurementId: 'G-F4FW67SNZ2',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
