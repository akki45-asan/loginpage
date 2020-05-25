$(document).ready(function () {
    $("#textBox").hide();
    $("#textBox1").hide();
    $("#newFlag").hide();
    $('#select_category').change(function () {
      if ( $(this).val() == 'OTHERS')
      {
        $("#textBox").show();
      }
      else
      {
        $("#textBox").hide();
      }
    });
    $('#select_themeQuery').change(function () {
      if ( $(this).val() == 'Others')
      {
        $("#textBox1").show();
      }
      else
      {
        $("#textBox1").hide();
      }
    });
    $('#select_flag').change(function () {
      if ( $(this).val() == 'OTHERS')
      {
        $("#newFlag").show();
      }
      else
      {
        $("#newFlag").hide();
      }
    });
    $(".closemodal").click(function(){
        $("#previewChanges_modal").modal('hide');
        $("#submitChanges_modal").modal('hide');
    });

});
