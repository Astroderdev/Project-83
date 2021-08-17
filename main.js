
var color = document.getElementById("clr").value;
var width_of_line = document.getElementById("wid").value;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

//basic variables

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");

    // canvas and ctx variables
    
    var width= screen.width;

    var new_width = screen.width - 70;
    var new_height = screen.height - 300;

    // length variables

    // variables ended
    
            if(width < 992)
            {
                canvas.width = new_width;
                canvas.height = new_height;
                document.body.style.overflow = "hidden";
                
            }

            // responsive query


            // drawing functions started

            // touch functions started

            canvas.addEventListener("touchstart", my_touchstart);  // to add a eventlistener of touchstart

            function my_touchstart(e){
                  console.log("my_touchstart"); // checking function in console

                  last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; //storing user last finger/touch position in x 
                  last_position_of_y = e.touches[0].clientY - canvas.offsetTop; //storing user last finger/touch position in y
            }
          
            canvas.addEventListener("touchmove", my_touchmove);  // to add a eventlistener of touchmove

            function my_touchmove(e)
            {
                console.log("my_touchmove"); // checking function in console

                current_position_of_x = e.touches[0].clientX - canvas.offsetLeft; //storing user current finger/touch position in x 
                current_position_of_y = e.touches[0].clientY - canvas.offsetTop; //storing user current finger/touch position in x 

                ctx.beginPath(); // starting drawing
                ctx.strokeStyle = color; // setting line color
                ctx.lineWidth = width_of_line; // setting line width

                ctx.moveTo(last_position_of_x,  last_position_of_y); // setting point start
                ctx.lineTo(current_position_of_x, current_position_of_y); // setting point to
                ctx.stroke(); // draw

                last_position_of_x = current_position_of_x; // setting last to current to join all lines of x
                last_position_of_y = current_position_of_y; // setting last to current to join all lines of y
            }

//Touch functions ended 

// Mouse functions Started

	    canvas.addEventListener("mousedown", mymouse_down); // to add a eventlistener of mousedown

          function mymouse_down(e){ 
          color = document.getElementById("clr").value; //getting the color value
          width_of_line = document.getElementById("wid").value; //getting width of line value
          mouseEvent = "mousedown"; // the mouse event is mouse down here
          console.log("mouse down") // checking the function

         }
         // mouse down function

         canvas.addEventListener("mouseup", mymouse_up);  // to add a eventlistener of mouseup

         function mymouse_up(e){
            mouseEvent = "mouseup";  // the mouse event is mouse up here
            console.log("mouse up"); // checking the function in console
         }

         // mouse up function
     
         canvas.addEventListener("mouseleave", mymouse_leave);  // to add a eventlistener of mouseleave

         function mymouse_leave(e){
            mouseEvent = "mouseleave"; // the mouse event is mouse leave here
            console.log("mouse left"); // checking the function in console
         }

         // mouse leave function

        canvas.addEventListener("mousemove", mymouse_move); // to add a eventlistener of mousemove

        function mymouse_move(e){
        var current_mouse_x = e.clientX - canvas.offsetLeft; // storing user mouse position in x
        var current_mouse_y = e.clientY - canvas.offsetTop; // storing user mouse position in y

        if(mouseEvent == "mousedown"){ // if mouse event is mouse down then the following query should execute else not
            ctx.beginPath(); // starting drawing
            ctx.strokeStyle = color; // setting line color
            ctx.lineWidth = width_of_line; // setting line width

            ctx.moveTo( last_position_of_x,  last_position_of_y); // setting point start
            ctx.lineTo(current_mouse_x, current_mouse_y); // setting point to

            ctx.stroke();  // drawing
        }

        last_position_of_x = current_mouse_x; // setting last to current to join all lines of x
        last_position_of_y = current_mouse_y; // setting last to current to join all lines of y
    }

    // mousemove function

            function clearArea() { 
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // making a rectangle from 0, 0 to the canvas's width, canvas's height to clear all
            }

            // clearArea function

            // End of JS
            // command executed
            // Finishing

            //----------------------------------------------------------------------------------------------x------------------------------------------------------------------------------------------------