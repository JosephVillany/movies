const { initializeApp } = require("firebase/app");
const {getStorage}= require("firebase/storage")
const firebaseConfig = {
  apiKey: "AIzaSyBQO0hmdDDE6kklf1npNGrJ4fQIk2Larfo",
  authDomain: "multer-project-2cd54.firebaseapp.com",
  projectId: "multer-project-2cd54",
  storageBucket: "multer-project-2cd54.appspot.com",
  messagingSenderId: "756706653442",
  appId: "1:756706653442:web:893ff4531ce27b1e2e3e1b",
  measurementId: "G-6SZ7S5YBCL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)

module.exports = { storage }