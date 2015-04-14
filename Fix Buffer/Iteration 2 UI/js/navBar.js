


 document.write(' <nav class="navbar navbar-default navbar-fixed-top" id="navBarContainer">');
 document.write(' <div class="container"  id="condoMoaNavBar">');
 document.write('   <!-- Brand and toggle get grouped for better mobile display -->');
 document.write('  <div id="condoMoaNavBarWrapper">');
 document.write('   <div class="navbar-header"> ');
 document.write('     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> ');
 document.write('       <span class="sr-only">Toggle navigation</span>');
 document.write('     <span class="icon-bar"></span> ');
 document.write('<span class="icon-bar"></span>');
 document.write('<span class="icon-bar"></span>');
 document.write('</button>');
 document.write('   <a class="navbar-brand" id="condoMoaLogoA" href="#"><img id="condoMoaLogo" src="images/CondoMOAlogo.png"></a>');
 document.write('  </div>');
 document.write('  <!-- Collect the nav links, forms, and other content for toggling -->');
 document.write('<div class="collapse navbar-collapse" id="navBarLinks">');
 document.write('  <ul class="nav navbar-nav">');
 document.write('    <li class="active" ><a href="#" class="navigation">Home <span class="sr-only">(current)</span></a></li>');
 // document.write('   <li><a href="#" class="navigation">Add</a></li>');
 document.write('  <li><a href="#" class="navigation">Search</a></li>');
 document.write('  <li><a href="#" class="navigation">Compare</a></li> ');
 // document.write(' <li><a href="#" class="navigation">Request</a></li>');
 document.write('<li><button class="btn btn-success navbar-btn" id="signInButton" href= "#loginModal" data-toggle="modal">Sign In</button></li>');
 document.write(' </ul>');
 document.write('</div><!-- /.navbar-collapse -->');
 document.write('</div>');
 document.write('</div><!-- /.container-fluid -->');
 document.write('</nav>');
 document.write('<!-- </div> --> ');



  document.write('<div id="loginModal" class="modal">');
  document.write(' <!-- <div class="modal-header">');
   document.write(' <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>');

  document.write('</div> -->');
  document.write('<div class="modal-body">');
        
   document.write(' <iframe id="loginPopUp" src="login.html" width="500" height="450">');

   document.write(' </iframe>');
  document.write('</div>');
 document.write('<!--  <div class="modal-footer">');

 document.write(' </div> -->');
document.write('</div>');


 //check if logged in or not


$(document).ready(function(){

	$(".navigation").click(function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        console.log("print");
    });

});