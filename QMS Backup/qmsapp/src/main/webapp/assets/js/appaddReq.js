$(document).ready(function () {

    var maxLength = 300;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
    
    $('.addDepart').on('click', function () {
        $('.mainDiv').append(`<div class="row adddept ml-2">
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Department:</label>
                <select name="select_dept" class="form-control" required style="width:130px;">
                <option value="" hidden>Select Dept</option>
                <option value="AK">Department 1</option>
                <option value="HI">Department 2</option>
                <option value="CA">Department 3</option>
                <option value="AZ">Department 4</option>
                <option value="CO">Department 5</option>
                <option value="WY">Department 5</option>
                <option value="AL">Department 6</option>
                <option value="AR">Department 7</option>
                <option value="KY">Department 8</option>
            </select>
                </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Mail To:</label>
                <div class="multiselect-native-select" style="width: 130px;">
                    <select class="form-control multiselect mailtoselect" multiple="multiple" data-fouc name="selectTo_assignee">
                        <option value="op1">ABC</option>
                        <option value="op2">XYZ</option>
                        <option value="op3">PQR</option>
                        <option value="op4">TQR</option>
                        <option value="op5">NPC</option>
                        <option value="op6">Dahi</option>
                        <option value="op7">Fox</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Mail Cc:</label>
                <div class="multiselect-native-select" style="width: 130px;">
                    <select class="form-control multiselect mailtoselect" multiple="multiple" data-fouc name="selectTo_assignee">
                        <option value="op1">ABC</option>
                        <option value="op2">XYZ</option>
                        <option value="op3">PQR</option>
                        <option value="op4">TQR</option>
                        <option value="op5">NPC</option>
                        <option value="op6">Dahi</option>
                        <option value="op7">Fox</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Mail Bcc:</label>
                <div class="multiselect-native-select" style="width: 130px;">
                    <select class="form-control multiselect mailtoselect" multiple="multiple" data-fouc name="selectTo_assignee">
                        <option value="op1">ABC</option>
                        <option value="op2">XYZ</option>
                        <option value="op3">PQR</option>
                        <option value="op4">TQR</option>
                        <option value="op5">NPC</option>
                        <option value="op6">Dahi</option>
                        <option value="op7">Fox</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Due Date:</label>
                    <input type="text" class="form-control daterange-single" value="03/18/2013">
            </div>
        </div>
        <div class="col-lg-1 text-center  mt-2">
        <i class="icon-close2 icon-1x closeRow"></i>
        </div>
    </div>`);
    $('.daterange-single').daterangepicker({ 
        singleDatePicker: true
    });
    $('.mailtoselect').multiselect();
    });

    $(document).on('click', '.closeRow', function () {
        $(this).closest('.adddept').remove();
    });

    $('.addMail').on('click', function () {

        var randomNO = Math.floor((Math.random() * 100) + 1);
        $('.mainMail').append(`<div class="newMail"><hr/> <div class="row ">
        <div class="col-lg-3">
            <div class="form-group row">
                <label class="col-form-label col-lg-3">Mail To:</label>
                <div class="col-lg-9">
                    <select class="form-control multiselect mailSelect" multiple="multiple" data-fouc required name="selectTag_depart">
                        <option value="op101">ABC</option>
                        <option value="op102">XYZ</option>
                        <option value="op103">PQR</option>
                        <option value="op104">TQR</option>
                        <option value="op105">NPC</option>
                        <option value="op106">Dahi</option>
                        <option value="op107">Fox</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label col-lg-3">Flag</label>
                    <div class="col-lg-9">
                        <select name="select_flag" class="form-control" required id="select_flag1">
                            <option value="">Select Flag</option>
                            <option value="Confidential">Confidential</option>
                            <option value="Internal">Internal</option>
                            <option value="Critical">Critical</option>
                            <option value="Important">Important</option>
                            <option value="Needs Attention">Needs Attention</option>
                            <option value="OTHERS">OTHERS</option>
                        </select>
                        <div class="form-group" id="newFlag1" style="padding-top: 5px; display: none;">
                            <input type="text" name="" class="form-control" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-lg-12 pl-0">
                        <input type="file" class="form-control h-auto">
                    </div>
                </div>
                <div class="">
                <label class="d-block font-weight-semibold">Add attachment from requlator</label>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <div class="uniform-checker"><span><input type="radio" class="form-check-input-styled yesOn" name="radio-inline-left" data-fouc></span></div>
                        Yes
                    </label>
                </div>

                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <div class="uniform-checker"><span><input type="radio" class="form-check-input-styled noOn" name="radio-inline-left" data-fouc=""></span></div>
                        No
                    </label>
                </div>
            </div>
            <div class="attachmentDropdownnew">
                    <select name="select_dept" class="form-control" required style="width:140px;">
                        <option value="" hidden>Select Attachment</option>
                        <option value="AK">test.pdf</option>
                        <option value="HI">test.excel</option>
                        <option value="CA">text.doc</option>
                        <option value="AZ">text.pdf</option>
                        <option value="CO">txt.png</option>
                        <option value="WY">txt.jpg</option>
                        <!-- <option value="AL">Department 6</option>
                        <option value="AR">Department 7</option>
                        <option value="KY">Department 8</option> -->
                    </select>
                </div>

                <div class="form-group row">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <div class="uniform-checker"><span><input type="checkbox" class="form-input-styled" data-fouc=""></span></div>
                            Mark as Irrelevant Mail
                        </label>
                    </div>
                </div>
        </div>
        <div class="col-lg-8">
            <textarea name="editor-full" id="editor-full${randomNO}" rows="3" cols="3">
                Ut auctor velit sed consectetur rhoncus. Nunc dictum facilisis felis nec facilisis. Integer nec justo vitae orci cursus fermentum. Fusce semper, mi non tempus congue, velit leo efficitur quam, laoreet venenatis libero felis et lacus. Pellentesque mattis hendrerit nisi gravida hendrerit. Mauris sagittis tincidunt scelerisque. Vivamus lectus erat, dictum et magna quis, iaculis finibus nisl. Aliquam quis ante odio. Etiam tincidunt tellus tristique turpis tincidunt, eget condimentum urna rutrum. Donec maximus consequat dolor, sit amet condimentum ipsum gravida ac. Etiam posuere tellus mauris, et dignissim nisl rutrum quis. 
                Mauris tincidunt ante sed velit maximus, vel tincidunt leo imperdiet.
            </textarea>
        </div>
        <div class="col-lg-1 text-center">
           <i class="icon-close2 closeMail" style="font-size:22px"></i>
        </div>
    </div></div>`);
    CKEDITOR.replace('editor-full'+randomNO, {
        height: 200
    });
    $('.attachmentDropdownnew').hide();
    $(document).on('click', '.yesOn', function () {
        if (($(this).parents('span').hasClass('checked'))) {
            $('.attachmentDropdownnew').show();
        }
    });
    $(document).on('click', '.noOn', function () {
        if (($(this).parents('span').hasClass('checked'))) {
            $('.attachmentDropdownnew').hide();
        }
    });

    $('.mailSelect').multiselect();
    
    $("#newFlag1").hide();
    $('#select_flag1').change(function () {
        if ( $(this).val() == 'OTHERS')
        {
          $("#newFlag1").css('display','block');
        }
        else
        {
          $("#newFlag1").css('display','none');
        }
      });
    });
    $(document).on('click', 'input', function(){
        // $(this).parent().addClass('checked');
        if (!($(this).parent().hasClass('checked'))) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });
    $(document).on('click', '.closeMail', function () {
        $(this).closest('.newMail').remove();
    });

    
    $("#fill_category").hide();
    $("#newFlag").hide();
    $("#textBox1").hide();
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
    $('#select_category').change(function () {
        if ( $(this).val() == 'OTHERS')
        {
          $("#fill_category").show();
        }
        else
        {
          $("#fill_category").hide();
        }
      });
      $('#select_themeQuery').change(function () {
        if ( $(this).val() == 'themeQuery')
        {
          $("#textBox1").show();
        }
        else
        {
          $("#textBox1").hide();
        }
      });
    // document.getElementById('attachFile').onclick = function() {
    //     document.getElementById('myFile').click();
    // };
    // 

    // $(document).on('click', '.attachFile', function () {
    //     console.log('asyhdfsy1')
    //     $(this).next('.myFile').click();
    // });
    
    // $(document).on('change','input[type=file]',function (e) {
    //     console.log('asyhdfsy2');
    //     $(this).next('.customfileupload').html($(this).val());
    // });
    $('.attachmentDropdown').hide();
    $(document).on('click', '.onyes', function () {
        if (($(this).parents('span').hasClass('checked'))) {
            $('.attachmentDropdown').show();
        }
    });
    $(document).on('click', '.onno', function () {
        if (($(this).parents('span').hasClass('checked'))) {
            $('.attachmentDropdown').hide();
        }
    });
    $(".closemodal").click(function(){
        $("#previewChanges_modal").modal('hide');
        $("#submitChanges_modal").modal('hide');
    });
});