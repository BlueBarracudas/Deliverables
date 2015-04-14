$(document).ready(function(){

	$("#viewProfile1").click(function(){

		// $("#searchResultApplicantProfile").attr("src", "createjobposting.html"); 
        document.getElementById('details-popup').style.display='block';
        document.getElementById('fade').style.display='block';
    });

	$("#closeBtn").click(function(){

		// $("#searchResultApplicantProfile").attr("src", " "); 
        document.getElementById('details-popup').style.display='none';
        document.getElementById('fade').style.display='none';
    });

	$("#fade").click(function(){

		// $("#searchResultApplicantProfile").attr("src", " "); 
        document.getElementById('details-popup').style.display='none';
        document.getElementById('fade').style.display='none';
    });

});