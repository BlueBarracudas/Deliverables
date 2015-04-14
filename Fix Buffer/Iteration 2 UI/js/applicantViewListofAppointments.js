
    var numOfAppointments = 1;
    function details_enter(){
        document.getElementById('details-popup').style.display='block';
        document.getElementById('fade').style.display='block';
    }
    function details_exit(){
        document.getElementById('details-popup').style.display='none';
        document.getElementById('fade').style.display='none';
    }
    function reschedule_enter() {
        document.getElementById('reschedule-popup').style.display='block';
        document.getElementById('fade').style.display='block';
    }
    function reschedule_exit() {
        document.getElementById('reschedule-popup').style.display='none';
        document.getElementById('fade').style.display='none';
    }
    
    function add_new_list_item() {
        numOfAppointments++;
        var $newitem = $('<li class="list-group-item appointment-item" id="appoinment' + numOfAppointments + '"></li>');
        var $newdiv = $('<div class="row"></div>');
        var $newcol1 = $('<div class="col-md-1 checkbox"></div>');
        var $newcheckbox = $('<label><input type="checkbox" value="selected"></label>');
        $newcol1.append($newcheckbox);
        var $newcol2 = $('<div class="col-md-2  appointment-details"></div>');
        var $newimg = $(' <p class="company-name">{{company.applyingFor}}</p>');
        $newcol2.append($newimg);
        var $newcol3 = $('<div class="col-md-2 appointment-details"></div>');
        var $newname = $('<p class="postion-name">{{postion.name}}</p>');
        $newcol3.append($newname);
        var $newcol4 = $('<div class="col-md-2 appointment-details"></div>');
        var $newtime = $('<p class="appointment-time">{{appointment.Time}}</p>');
        $newcol4.append($newtime);
        var $newcol5 = $('<div class="col-md-2 appointment-details"></div>');
        var $newmsg = $('<p class="appointment-message">{{appointment.Message}}</p>');
        var $newseebtn = $('<button class="btn-link" onclick="details_enter()">See More</button>');
        $newcol5.append($newmsg);
        $newcol5.append($newseebtn);
        var $newcol6 = $('<div class="col-md-3"></div>');
        var $newbtngroup = $('<div class="btn-group appointment-btns"></div>');
        var $newreschedbtn = $('<button type="button" class="btn btn-xs" onclick="reschedule_enter()">Reschedule</button>');
        var $newcancelbtn = $('<button type="button" class="btn btn-xs" onclick="delete_list_item(this)">Cancel</button>');
        $newbtngroup.append($newreschedbtn);
        $newbtngroup.append($newcancelbtn);
        $newcol6.append($newbtngroup);
        $newdiv.append($newcol1);
        $newdiv.append($newcol2);
        $newdiv.append($newcol3);
        $newdiv.append($newcol4);
        $newdiv.append($newcol5);
        $newdiv.append($newcol6);
        $newitem.append($newdiv);
        $('#appointment-list-group').append($newitem);
    }
    
    function delete_list_item(el) {
        numOfAppointments--;
        $(el).parents('.appointment-item').remove();
        reset_id();
        check_list();
    }
    
    function delete_selected() {
        if(numOfAppointments > 0) {
            var temp = numOfAppointments;
            for(i = 0; i < temp; i++) {
                if($('#appointment' + i + ' input').is(':checked')) {
                    $('#appointment' + i).remove();
                    numOfAppointments--;
                }
            }
        }
        reset_id();
        check_list();
    }
    
    function delete_all() {
        $('.appointment-item').remove();
        numOfAppointments = 0;
        check_list();
    }
    
    function reset_id() {
        if(numOfAppointments > 0) {
            $('.appointment-item:first').attr('id','appointment1');
            if(numOfAppointments > 1) {
                for(i = 2; i <= numOfAppointments; i++) {
                    $('#appointment' + (i-1)).next().attr('id','appointment' + i);
                }
            }
        }
    }
    
    function check_list() {
        if(numOfAppointments == 0) {
            $('#appointment-list-group').append($('<span class="empty-span">No Appointments</span>"'));
        }
        else {
            $('.empty-span').remove();
        }
    }