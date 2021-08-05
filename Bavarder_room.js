var firebaseConfig = {
    apiKey: "AIzaSyDho0kYC5tYRpwnqMamLuUYisBYqGXhtvI",
    authDomain: "bavarder-adyot2011.firebaseapp.com",
    projectId: "bavarder-adyot2011",
    storageBucket: "bavarder-adyot2011.appspot.com",
    messagingSenderId: "402741395409",
    appId: "1:402741395409:web:d16b399cf349e55796aaf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout()
{
    window.location= "index.html";
}

function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room"
      });
  }

  function addName()
  {
      user_name = localStorage.getItem("user_name");
      document.getElementById("name").innerHTML = "<h2>Hi " + user_name + " please enter a room name" +"</h2>";
  }