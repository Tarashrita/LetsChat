const firebaseConfig = {
  apiKey: "AIzaSyBMmZdkkv5fSokKZU9HzHMStD9GkWAwMnI",
  authDomain: "letschat-b5cb2.firebaseapp.com",
  databaseURL: "https://letschat-b5cb2-default-rtdb.firebaseio.com",
  projectId: "letschat-b5cb2",
  storageBucket: "letschat-b5cb2.appspot.com",
  messagingSenderId: "971294341197",
  appId: "1:971294341197:web:50c0dc9343a26bf2f34404"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function AddUser() {

  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"});
}

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" })
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
