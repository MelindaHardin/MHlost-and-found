// Initialize Firebase
var config = {
    apiKey: "AIzaSyDDnN22h-2IbbbYcgPlYDiEhGJfV6f01-g",
    authDomain: "lofo-eac04.firebaseapp.com",
    databaseURL: "https://lofo-eac04.firebaseio.com",
    projectId: "lofo-eac04",
    storageBucket: "lofo-eac04.appspot.com",
    messagingSenderId: "675258511870"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

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

