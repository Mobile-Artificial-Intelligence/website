// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyDuj3iW2uEmkbIyjboZQXLkOrYtZEoZ50M',
    appId: '1:721822016477:web:dbae67d9e033a5b0b78c34',
    messagingSenderId: '721822016477',
    projectId: 'mobile-ai-distribution',
    authDomain: 'mobile-ai-distribution.firebaseapp.com',
    storageBucket: 'mobile-ai-distribution.firebasestorage.app',
    measurementId: 'G-GH549YPLKN',
};

const app = initializeApp(firebaseConfig);

// Only enable analytics if supported (e.g., won't work on server or incognito mode)
isSupported().then((yes) => {
  if (yes) {
    getAnalytics(app);
  }
});

export default app;
