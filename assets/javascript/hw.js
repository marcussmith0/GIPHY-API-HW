

var listOfCharacters = ["Goku", "Luffy", "Lisa Simpson", "Huey Freeman", "Batman", "Superman", "Space Ghost"];

var stateOfGif = "still";



$(document).ready(function(){

      makeTheButtons();

      $("#add-character").on("click", function(event) {
       
        event.preventDefault();

       
        var character = $("#character-input").val().trim();
        
        listOfCharacters.push(character);

        console.log(listOfCharacters);

        makeTheButtons();

        
      });    

      function makeTheButtons () {

      	$("#the-buttons-area").empty();


      	for(i = 0; i < listOfCharacters.length; i++) {

      		var c = $("<button>");


      		c.addClass("character");
      		c.attr("data-person", listOfCharacters[i]);
      		c.text(listOfCharacters[i]);
      		console.log(listOfCharacters[i]);

      		$("#the-buttons-area").append(c);


          $("button.character").on("click", function() {


          var whoIs = $(this).attr("data-person");

          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + whoIs + "&api_key=dc6zaTOxFJmzC&limit=25";

          $.ajax({

            url: queryURL,
            method: "GET"

          })

          .done(function(response) {

            console.log("YOUSHOULDSEETHISIFITWORKEDRIGHT!!!");

            var yourStuff = response.data;
            console.log(yourStuff);


            for(i = 0; i < yourStuff.length; i++) {

              var rating = yourStuff[i].rating.toUpperCase();

              var p = $("<p>").text("Rating: " + rating).css("font-weight", "bold");


              var newImg = $("<img>");

              var pauseImg = yourStuff[i].images.fixed_height_still.url;
              var playImg = yourStuff[i].images.fixed_height.url;

              newImg.attr("src", pauseImg);
              newImg.attr("data-still", pauseImg);
              newImg.attr("data-animate", playImg);
              newImg.attr("data-state", stateOfGif);
              

 
              newImg


              var newImgDiv = $("<div>");

              newImgDiv.addClass("pull-left");


              newImgDiv.append(p);
              newImgDiv.append(newImg);

              $("#the-gifs-area").prepend(newImgDiv); 

          }

          }); 

      });


          $(".gifs").click(function() {

          console.log("YOUCLICKEDTHEIMG!!!!!!!ODHAIUSDVIAFNVIQEN");

          var state = $(this).attr("data-state");

          if (state === "still") {

            console.log("THISSHOULDSHOWIFYOUSUCCESSFULLYPLAYEDIT");

            $(this).attr("data-state", "animated");

            $(this).attr("src", $(this).attr("data-animate"));
            
          }

          else {

            console.log("THISDHOULDWHOIFYOUSUCCESSFULLYPAUSEDIT");

            $(this).attr("data-state", "still");

            $(this).attr("src", $(this).attr("data-still"));


            }



      });




          $(document).on("click", "img", function() {

          console.log("YOUCLICKEDTHEIMG!!!!!!!ODHAIUSDVIAFNVIQEN");

          var state = $(this).attr("data-state");

          if (state === "still") {

            console.log("THISSHOULDSHOWIFYOUSUCCESSFULLYPLAYEDIT");

            $(this).attr("data-state", "animated");

            $(this).attr("src", $(this).attr("data-animate"));
            
          }

          else {

            console.log("THISDHOULDWHOIFYOUSUCCESSFULLYPAUSEDIT");

            $(this).attr("data-state", "still");

            $(this).attr("src", $(this).attr("data-still"));


            }



      });














      	}

      }

    

});


