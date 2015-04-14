    var numOfJobItems = 1;
    var numOfDetailsPopup = 1;
    function details_enter() {
        document.getElementById('popup-details').style.display='block';
        document.getElementById('fade').style.display='block';
    }
    function details_exit() {
        document.getElementById('popup-details').style.display='none';
        document.getElementById('fade').style.display='none';
    }
    
    function edit_enter() {
        document.getElementById('popup-edit').style.display='block';
        document.getElementById('fade').style.display='block';
    }
    
    function edit_exit() {
        document.getElementById('popup-edit').style.display='none';
        document.getElementById('fade').style.display='none';
        edit_popup_reset();
    }
    
    function popup_add_detail_form() {
        numOfDetailsPopup++;
        var $newdetail = $('<input type="text" class="form-control" id="job-details' + numOfDetailsPopup + '">');
        $('#add_another_detail_btn').before($('<span class="error-msg">Error Message</span>'));
        $('#add_another_detail_btn').before($newdetail);
        var removebtn = document.createElement('button');
        removebtn.setAttribute('class','btn-link');
        removebtn.innerHTML = "Remove Detail";
        removebtn.onclick = function() {
            numOfDetailsPopup--;
            $(this).prev().remove();
            $(this).prev().remove();
            $(this).remove();
        }
        $('#add_another_detail_btn').before(removebtn);
    }
    
    function edit_popup_reset() {
        if(numOfDetailsPopup > 1) {
            for(i = numOfDetailsPopup; i > 1; i--) {
                $('#add_another_detail_btn').prev().remove();
                $('#add_another_detail_btn').prev().remove();
                $('#add_another_detail_btn').prev().remove();
            }
            numOfDetailsPopup = 1;
        }
        
    }
    
    function add_job_item() {
            numOfJobItems++;
            var $newitem = $('<li class="list-group-item job-item" id="job-item' + numOfJobItems + '"></li>');
            var $newdiv = $('<div class="row"></div>');
            var $newcol1 = $('<div class="col-md-1 checkbox"></div>');
            $newcol1.append($('<label><input type="checkbox" value="selected"></label>'));
            var $newcol2 = $('<div class="col-md-3"></div>');
            var $newjobpostion = $('<p class="job-position">job.Detail</p>');
            $newcol2.append($newjobpostion);
            var $newcol3 = $('<div class="col-md-3"></div>');
            var $newlist = $('<ul></ul>');
            var $newlistitem = $('<li>job.Detail</li>');
            $newlist.append($newlistitem);
            $newcol3.append($newlist);
            var $newbtn = $('<button type="button" class="btn-link see-more-btn" onclick="details_enter()">See More</button>');
            $newcol3.append($newbtn);
            var $newcol4 = $('<div class="col-md-3 col-md-offset-2"></div>');
            var $newbtngroup = $('<div class="btn-group"></div>');
            var $editbtn = $('<button type="button" class="btn" onclick="edit_enter()">Edit</button>');
            var $deletebtn = $('<button type="button" class="btn delete-btn" onclick="delete_job_item(this)">Delete</button>');
            $deletebtn.click(delete_job_item);
            $newbtngroup.append($editbtn);
            $newbtngroup.append($deletebtn);
            $newcol4.append($newbtngroup);
            $newdiv.append($newcol1);
            $newdiv.append($newcol2);
            $newdiv.append($newcol3);
            $newdiv.append($newcol4);
            $newitem.append($newdiv);
            $('#job-list-group').append($newitem); 
    }
    
    function delete_job_item(el) {
        numOfJobItems--;
        $(el).parents('.job-item').remove();
        reset_id();
        check_list();
    }
    
    function delete_selected() {
        if(numOfJobItems > 0) {
           var temp = numOfJobItems;
            for(i = 1; i <= temp; i++) {
                if($('#job-item' + i + ' input').is(':checked')) {
                    $('#job-item' + i).remove();
                    numOfJobItems--;
                }
            } 
        }
        reset_id();
        check_list();
    }
    
    function delete_all() {
        $('.job-item').remove();
        numOfJobItems = 0;
        check_list();
    }
    
    function reset_id() {
        if(numOfJobItems > 0) {
            $('.job-item:first').attr('id','job-item1');
            if(numOfJobItems > 1) {
                for(i = 2; i <= numOfJobItems; i++) {
                    $('#job-item' + (i-1)).next().attr('id','job-item' + i);
                }
            }
        }
    }
    
    function check_list() {
        if(numOfJobItems == 0) {
            $('#job-list-group').append($('<span class="empty-span">No Jobs Posted</span>"'));
        }
        else {
            $('.empty-span').remove();
        }
    }