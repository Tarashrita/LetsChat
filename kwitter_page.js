var firebaseConfig = {
    apiKey: "AIzaSyBMmZdkkv5fSokKZU9HzHMStD9GkWAwMnI",
    authDomain: "letschat-b5cb2.firebaseapp.com",
    databaseURL: "https://letschat-b5cb2-default-rtdb.firebaseio.com",
    projectId: "letschat-b5cb2",
    storageBucket: "letschat-b5cb2.appspot.com",
    messagingSenderId: "971294341197",
    appId: "1:971294341197:web:50c0dc9343a26bf2f34404"
  };

  firebase.initializeApp(firebaseConfig);

var room_name
var user_name

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function Send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function UpdateLike(message_id)
{
    console.log("clicked on like button-"+message_id);
    button_id=message_id;
    likes-document.getElementById(button_id).value;
    updated_likes=Number (likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          Like:updated_likes
    });
}