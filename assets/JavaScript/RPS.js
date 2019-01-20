// Initialize Firebase
var config = {
    apiKey: "AIzaSyA03TXhgpCHzOwdb4HZIbG82at7tF-dVSI",
    authDomain: "rps-chat-app.firebaseapp.com",
    databaseURL: "https://rps-chat-app.firebaseio.com",
    projectId: "rps-chat-app",
    storageBucket: "rps-chat-app.appspot.com",
    messagingSenderId: "533787682252"
  };

  firebase.initializeApp(config);

// reference our firebase database
var database = firebase.database();


// create reference for the chatroom database
var chatroom = database.ref("/RPSchatroom");
var userName1 = database.ref("/Username1");
var userName2 = database.ref("/Username2");
var connections = database.ref("/Connections");
var RPS = database.ref("/RockPaperScissors"); 

// initial values
var username1;
var username2;

// on click of the submit button for username
$("#add-user").on("click", function(event) {
    
    // prevent page from reloading
    event.preventDefault();

    // grab the input from the username text and set it to the username variable
    username1 = $("#username").val().trim();
    username2 = $("#username").val().trim();


    userName1.on("value", function(snapshot) {
        if(snapshot.child("Player1").exists()){
            userName2.set({
                "Player2": username2
            })
            console.log(username2)
        } else {
             userName1.set({
                 "Player1": username1
             })
             console.log(username1);
        }
        
    })

    console.log(username1);

})

// Get a snapshot of the current data
userName1.child("Player1").on("value", function (snapshot) {
    $("player1").text(snapshot.val());
})

userName2.child("Player2").on("value", function (snapshot) {
    $("player2").text(snapshot.val());
})

// // when the login button is clicked: 
// $("#add-user").on("click", function(event) {
//     event.preventDefault();

//     // grab the value of the username from the username input text
//     username = $("#username").val().trim();
//     console.log(username)

//     if(snapshot.child("Username1").exists()) {
//         username2 = snapshot.val().username;
//         console.log(username2);

//         database.ref("/Username2").set({
//             Player2: username2
//         })

//     } else {
//         // grab the value of the username from the username input text
//         username1 = snapshot.val().username
//         console.log(username)

//         // set the username value in the database
//         database.ref("/Username1").set({
//             Player1: username1
//         })
//     }

// $("#send").click(function() {
//     event.preventDefault();

//     var username = $("#username")
//     var message = $("#chat-input").val();
//     var time = new Date().toLocaleTimeString();

//     chatroom.ref().push({
//         Username: username,
//         Message: message,
//         Time: time
//     })
// })