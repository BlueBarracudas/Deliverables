function acceptOnClick(el) {
    var index = $(el).attr('id').replace( /^\D+/g, '');
    $('#reject' + index).replaceWith($('<input type="button" class="btn btn-default btn-fill " id="cancel' + index + '" name="cancel"' + index +'"  value="Cancel"/>'));
    $(el).replaceWith($('<input type="button" class="btn btn-default btn-fill" id="reschedule' + index + '" name="reschedule' + index + '" value="Reschedule"  data-toggle="modal" data-target="#reschedule-popup"/>'));
}