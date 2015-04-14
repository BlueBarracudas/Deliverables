if ( window.addEventListener ) {  
	  	var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];  
	  	window.addEventListener("keydown", function(e) {  
	    if ( e.keyCode == konami[state] ) state++;  
	    else state = 0;  
	    if ( state == 10 ) {
	    	var x = document.getElementById('snoop');
	    	x.style.display = "block";
	    } 
	    }, true);  
	}
	
	$(document).ready(function () {
    $(".nav .navigation").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
	});