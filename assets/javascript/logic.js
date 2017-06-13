$(document).ready(function(){
	 // Initialize Firebase. Key is below:
  var config = {
    apiKey: "AIzaSyCFBj4p7t7mMVxlx3_e5T2diR949ElslFY",
    authDomain: "train-scheduler-398a9.firebaseapp.com",
    databaseURL: "https://train-scheduler-398a9.firebaseio.com",
    projectId: "train-scheduler-398a9",
    storageBucket: "train-scheduler-398a9.appspot.com",
    messagingSenderId: "928548019760"

   };

  firebase.initializeApp(config);

  var database = firebase.database();

  
   // Initial Values
    var trainName = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";
  

   // On-click function when adding new train info using the "submit button"
    $("#add-train-btn").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

    
      // This will retrieve info from inputs that user has entered

      var trainName = $("#trainName").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrain = $("#firstTrain").val().trim();
      var frequency = $("#frequency").val().trim();

      // This is object that will hold new train information for database
     var newTrain = {
        trainName: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
      };

    //pushes information about new train into the database
     database.ref().push(newTrain);


     // this step logs inputs to the console
      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.firstTrain);
      console.log(newTrain.frequency);

    

    // Firebase listener function that will load inputs into database
    database.ref().on("value", function(snapshot) {

      var snapval = snapshot.val();

      $("#well-section").append.snapshot.val(trainName);
      $("#well-section").append(destination);
      $("#well-section").append(firstTrain);
      $("#well-section").append(frequency);

 // Change the HTML in results area to reflect input submissions
      $("#trainName").html(snapshot.val().name);
      $("#destination").html(snapshot.val().email);
      $("#firstTrain").html(snapshot.val().age);
      $("#frequency").html(snapshot.val().comment);



     // Handle the errors
    }), function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    };
  });

});


