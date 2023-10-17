
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBYwah6ozD-pkTU0nHtSgeV0WU5BxhFk_s",
      authDomain: "kwitter-82019.firebaseapp.com",
      databaseURL: "https://kwitter-82019-default-rtdb.firebaseio.com",
      projectId: "kwitter-82019",
      storageBucket: "kwitter-82019.appspot.com",
      messagingSenderId: "844596089625",
      appId: "1:844596089625:web:f4e825902f3b2447072b88"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"addUser"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}