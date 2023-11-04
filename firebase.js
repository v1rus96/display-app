import { initializeApp, getApps } from "firebase/app";
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBydKMIVcHA34TCiTemHuiCgxZIOy0fCI4",
    authDomain: "digitaldisplay-d56b4.firebaseapp.com",
    projectId: "digitaldisplay-d56b4",
    storageBucket: "digitaldisplay-d56b4.appspot.com",
    messagingSenderId: "849369236217",
    appId: "1:849369236217:web:88c179807805af5c8e1828",
    measurementId: "G-LHWNQCZFY2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = firebase.database();
const storage = firebase.storage();

export { app };

// Fetch cards from Firebase Storage
export const fetchCards = async () => {
    const cardsRef = storage.ref('cards');
    const cards = [];
    const snapshot = await cardsRef.listAll();
    for (let item of snapshot.items) {
      const url = await item.getDownloadURL();
      cards.push({
        id: item.name,
        title: item.name, // Assuming the title is the same as the filename for simplicity
        imageURL: url,
      });
    }
    return cards;
  };
  
  // Get the currently selected card from Firebase Realtime Database
  export const getSelectedCard = async () => {
    const snapshot = await db.ref('selectedCard').once('value');
    return snapshot.val();
  };
  
  // Update the selected card in Firebase Realtime Database
  export const updateSelectedCard = async (cardId) => {
    await db.ref('selectedCard').set(cardId);
  };

  