/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
// $(document).ready(function() {
//     $('#example').DataTable( {
//         "scrollX": true
//     } );
// } );
$(document).ready(function(){
    $("#business").hide();
    $('#selectbox2').change(function () {
      if ( $(this).val() == 'Issue_Tracker')
      {
        $("#business").show();
      }
      else
      {
        $("#business").hide();
      }
    });
    windowWidth = $(window).width(); 
    if ($(window).width() > 1698) {
      $('#DataTables_Table_0').removeClass('table-responsive');
   }
});