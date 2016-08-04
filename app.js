$(document).ready(function(){

  // Counter to track how many times New Spy has been clicked.
  var spyCount = 0;

  // New Spy button event listener and handler.
  $('#button').click(function() {

  	// Increment the spyCount counter.
  	spyCount++;

    // Append a new spy div to the DOM.
  	$('#ctn').append('<div class="spy"><p>' + spyCount + '</p><button class="btn-right">Change</button><button class="btn-right">Delete</button></div>');

  	// Store the default color yellow to the newly appended div's data.
  	$('#ctn').children().last().data("color", "yellow")
  });

  // Change and Delete button event listener and handler.  
  $('#ctn').on("click", ".btn-right", function() {

  	// Check if the delete button has been pressed.
    if($(this).text() == "Delete") {
      // The delete button has been pressed so delete the buttons parent of the spy div.
  	  $(this).parent().remove();
  	  return;
  	}

    // Check what color is set if red change to yellow and vice versa.
  	if($(this).parent().data("color") == "yellow") {
      $(this).parent().css("background-color", "red");
      $(this).parent().data("color", "red");
  	} else {
  	  $(this).parent().css("background-color", "yellow");
  	  $(this).parent().data("color", "yellow");
  	}
  	return;
  });
});