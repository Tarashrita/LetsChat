
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBMmZdkkv5fSokKZU9HzHMStD9GkWAwMnI",
    authDomain: "letschat-b5cb2.firebaseapp.com",
    projectId: "letschat-b5cb2",
    storageBucket: "letschat-b5cb2.appspot.com",
    messagingSenderId: "971294341197",
    appId: "1:971294341197:web:50c0dc9343a26bf2f34404"
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();