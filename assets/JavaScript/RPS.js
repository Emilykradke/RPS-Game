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

// When page loads, hide and show necessary parts
$("document").ready(function(){
    $("#waitingDiv2").hide();
    $("#waitingDiv1").hide();
    $("#login2").hide();
    $("#welcomeText2").hide();
    $("#directions2").hide();
})

// on click of the submit button for username
$("#add-user1").on("click", function(event) {
    
    // prevent page from reloading
    event.preventDefault();

    // grab the input from the username text and set it to the username variable
    var username1 = $("#username-1").val().trim();

    console.log(username1)

    // save username1 to firebase
    userName1.set({
        "Player1": username1
    })

    // hide player 1 login and show player 2 login 
    $("#login1").hide();
    $("#welcomeText1").show();
    $("#directions1").hide();
    $("#welcomeText2").hide();
    $("#waitingDiv1").show();
    $("#login2").show();
    $("#directions2").show();

    // populate the player 1 welcome text with the username 
    $("#name1").text(username1);

})

$("#add-user2").on("click", function(event) {
    
    // prevent page from reloading
    event.preventDefault();

    // grab the input from the username text and set it to the username variable
    var username2 = $("#username-2").val().trim();

    console.log(username2)

    // save username2 to firebase
    userName2.set({
        "Player2": username2
    })

    $("#directions2").hide();
    $("#waitingDiv1").hide();
    $("#welcomeText2").show();
    $("#login2").hide();

    // populate the player 1 welcome text with the username 
    $("#name2").text(username2);
})

// Get a snapshot of the current data


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