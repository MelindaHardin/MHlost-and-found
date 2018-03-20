// Initialize Firebase
var config = {
    apiKey: "AIzaSyACOH-c1yCW2ZzJY0YE1ustDgZFMlzahCw",
    authDomain: "lofo-e6dae.firebaseapp.com",
    databaseURL: "https://lofo-e6dae.firebaseio.com",
    projectId: "lofo-e6dae",
    storageBucket: "",
    messagingSenderId: "523681262794"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  queryURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtFRgVzWWws1qJtMur1dJG3DkhvAgqXxA=initMap"
   
function initMap(){

    
}
// ============================================= USER AUTHENTICATION ==============================================
var email="";
var password= "";


// ============================================= CURRENT TIME LOGGED TO FIREBASE (MOMENT.JS) =======================
var currentTime="";
var time="";

// ============================================= ITEMS LOST LOGGED TO FIREBASE =====================================
var item="";

// ============================================= IMAGE UPLOADED TO FIREBASE (??) ====================================
var itemImage="";

// ============================================= CURRENT LOCATION MAPPED (GOOGLE MAP API) ============================
var currentLocation="";


// ============================================= ENTERED ADDRESS MAPPED (GOOGLE MAP API)===============================
var addressLocation="";




$("#ig-icon").on("click",function(){
    alert("This was clicked.");
});

