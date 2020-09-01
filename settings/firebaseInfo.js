// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFf7YbH5tNybqP9Sg28pbxH79JEWoRhZo",
    authDomain: "juanga-35aba.firebaseapp.com",
    databaseURL: "https://juanga-35aba.firebaseio.com",
    projectId: "juanga-35aba",
    storageBucket: "juanga-35aba.appspot.com",
    messagingSenderId: "644717448148",
    appId: "1:644717448148:web:f3e771c21803b867366441",
    measurementId: "G-M9YX5YY18R"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();