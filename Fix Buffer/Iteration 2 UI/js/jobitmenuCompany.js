var    navBar = '<nav class="navbar navbar-fixed-top navbar-custom">'+
	  	'<div class="container">'+
		 '   <div class="navbar-header">'+
		  '  	<a class="navbar-brand" href="#"><img alt="JobIT" src="images/logo.png" height="26px" width="76px;"></a>'+
		   ' </div>'+
		    '<div>'+
		     ' <ul class="nav nav-tabs navbar-nav">'+
		      '  <li id="home" class="active"><a href="#">Home</a></li>'+
		       ' <li id="profile"><a href="#companyProfile" data-toggle="tab">Company Profile</a></li>'+
		        '<li id="appointments"><a href="#CompanyViewListofAppointments" data-toggle="tab">Appointments</a></li> '+
                '<li id="JobListings"><a href="#CompanyViewListings" data-toggle="tab">Job Listings</a></li> '+
		      '</ul>'+
		      '<ul class="nav navbar-nav navbar-right">'+
		      	'<li class="dropdown">'+
	          	'	<a id="dropdownComponent" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-bell"></span> <span class="badge">10</span> </a>'+
		         ' 	<ul class="dropdown-menu" id="notifications" role="menu">'+
			      '      <div class="list-group scrollable-menu">'+
					'	  <a href="#" class="list-group-item">Microsoft Inc. has messaged you. <div class="timestamp" align="right">12:47pm</div></a>'+
					'	  <a href="#" class="list-group-item">Snoop Dogg says: "Smoke weed everyday" <div class="timestamp" align="right">4:20am</div></a>'+
					'	  <a href="#" class="list-group-item">Porta ac consectetur ac <div class="timestamp" align="right">12:47pm</div></a>'+
					'	  <a href="#" class="list-group-item">Vestibulum at eros <div class="timestamp" align="right">12:47pm</div></a>'+
					'	  <a href="#" class="list-group-item">Microsoft Inc. has messaged you. <div class="timestamp" align="right">12:47pm</div></a>'+
					'	  <a href="#" class="list-group-item">Snoop Dogg says: "Smoke weed everyday" <div class="timestamp" align="right">4:20am</div></a>'+
					'	  <a href="#" class="list-group-item">Porta ac consectetur ac <div class="timestamp" align="right">12:47pm</div></a>'+
					'	  <a href="#" class="list-group-item">Vestibulum at eros <div class="timestamp" align="right">12:47pm</div></a>'+
					'	</div>'+
					'	<a id="notif" href="#companynotif" data-toggle="tab"><center>Notification Settings</center></a>'+
	        		'</ul>'+
			        '<li class="dropdown">'+
	          		'<a id="dropdownComponent" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Company Name  <span class="caret"></span></a>'+
		          	'<ul class="dropdown-menu" role="menu">'+
		            '<li id="settings"><a href="#">Account Settings</a></li>'+
		            '<li><a href="#">Sign Out</a></li>'+
	        		'</ul>'+
	          	'</ul>'+
		    '</div>'+
		    
	  '	</div>'+
	'</nav>';
	// <div class="tab-content">
	// 	<div class= "content tab-pane" id="companyregister">
	// 		<object type="text/html" data="adminRegisterCompany.html" ></object>
	// 	</div>
	// 	<div class= "content tab-pane" id="adminregister">
	// 		<object type="text/html" data="adminRegistration.html" ></object>
	// 	</div>
	// </div>';
			          
		       

document.write(navBar);

$(document).ready(function () {
    $(".nav .navigation").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
	});

