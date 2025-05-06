import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
apikey: "AIzaSyB2jNawT7uC4qvDf1_wmSh5I03nR1vReGY",
authDomain: "tds2-2025-autenticar.firebaseapp.com",
projectId: "tds2-2025-autenticar",
storageBucket: "tds2-2025-autenticar.firebasestorage.app",
messagingSenderId: "510050860669",
appId: "1:510050860669:web: 051224d9ebda2482e23b14",
measurementId: "G-OVTZLK00P8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

