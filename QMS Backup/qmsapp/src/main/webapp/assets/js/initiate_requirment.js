var unSelected;
var empSelect;
var empArray = [];
$(document).ready(function () {
    $('.addDepart').on('click', function () {
        $('.mainDiv').append(`<div class="form-group row adddept">
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Department:</label>
                    <select name="select_dept" class="form-control" required style="width:130px;">
                        <option value="" hidden >Choose a Dept</option>
                        <option value="AK">Alaska</option>
                        <option value="HI">Hawaii</option>
                        <option value="CA">California</option>
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="WY">Wyoming</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="KY">Kentucky</option>
                    </select>
            </div>
        </div>  
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Mail To:</label>
                <div class="multiselect-native-select" style="width: 130px;">
                    <select class="form-control multiselect selectAssignee" multiple="multiple" data-fouc required name="selectTag_depart">
                        <option value="op201">ABC</option>
                        <option value="op202">XYZ</option>
                        <option value="op203">PQR</option>
                        <option value="op204">TQR</option>
                        <option value="op205">NPC</option>
                        <option value="op206">Dahi</option>
                        <option value="op207">Fox</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Mail Cc:</label>
                <div class="multiselect-native-select" style="width: 130px;">
                    <select class="form-control multiselect selectAssignee" multiple="multiple" data-fouc required name="selectTag_depart">
                        <option value="op201">ABC</option>
                        <option value="op202">XYZ</option>
                        <option value="op203">PQR</option>
                        <option value="op204">TQR</option>
                        <option value="op205">NPC</option>
                        <option value="op206">Dahi</option>
                        <option value="op207">Fox</option>
                    </select>
                  </div>
              </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label col-lg-6">Mail Bcc:</label>
                <div class="multiselect-native-select" style="width: 130px;">
                    <select class="form-control multiselect selectAssignee" multiple="multiple" data-fouc required name="selectTag_depart">
                        <option value="op201">ABC</option>
                        <option value="op202">XYZ</option>
                        <option value="op203">PQR</option>
                        <option value="op204">TQR</option>
                        <option value="op205">NPC</option>
                        <option value="op206">Dahi</option>
                        <option value="op207">Fox</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group row">
                <label class="col-form-label">Due Date:</label>
                    <input type="text" class="form-control daterange-single" value="03/18/2013">
            </div>
        </div>
        <div class="col-lg-2 text-center mt-2">
            <i class="icon-close2 icon-1x  closeRow"></i>
        </div>
    </div>`);
    $('.daterange-single').daterangepicker({ 
        singleDatePicker: true
        
    });
    $('.selectAssignee').multiselect();
    });

    $(document).on('click', '.closeRow', function () {
        $(this).closest('.adddept').remove();
    });

    $('.addMail').on('click', function () {

        var randomNO = Math.floor((Math.random() * 100) + 1);
        $('.mainMail').append(`<div class="newMail"><hr/> <div class="row">
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
												<div class="col-lg-12">
													<input type="file" class="form-control h-auto">
												</div>
											</div>
          <div class="form-group row">
            <div class="form-check form-check-inline">
                <label class="form-check-label">
                    <div class="uniform-checker"><span><input type="checkbox" class="form-input-styled checkinput" data-fouc=""></span></div>
                    Mark as Irrelevant Mail
                </label>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
            <textarea name="editor-full" id="editor-full${randomNO}" rows="3" cols="3"></textarea>
        </div>
        <div class="col-lg-1 text-center">
           <i class="icon-close2 closeMail" style="font-size:22px"></i>
        </div>
    </div></div>`);
    CKEDITOR.replace('editor-full'+randomNO, {
        height: 200
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
    $(document).on('click', '.closeMail', function () {
        $(this).closest('.newMail').remove();
    });
   
     $(document).on('click','.checkinput', function(){
        // $(this).parent().addClass('checked');
        if (!($(this).parent().hasClass('checked'))) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });
  //   $(document).on('click', '.makeirrelevantM1', function () {
  //     $(this).closest('.newMail').remove();
  // });

    $("#textBox").hide();
    $("#newFlag").hide();
    $("#textBox2").hide();
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
      $('#select_themeQuery').change(function () {
        if ( $(this).val() == 'Others')
        {
          $("#textBox2").show();
        }
        else
        {
          $("#textBox2").hide();
        }
      });

      $('#selectTo_mail').on('change', function(){
        unSelected= [];
        empSelect = 1;
        var xs;
        $('#selectTo_mail option').not(':selected').each(function(k,v){
          // console.log( v.value);
          var n = v.value;
          unSelected.push(n);
          
        });
        console.log(unSelected);
        if(empSelect == 1) {
          $('#selectTo_mail > option:selected').each(function(k,v) {
            var v = $(this).text();
            if(empArray.length==0) {
              empArray.push(v);
            } 
            
            else {
              if(!empArray.includes(v)) {
                empArray.push(v);
              }
            }
            
          });
          console.log(empArray);
        }
        for(var i = 0; i < unSelected.length; i++){
          if(empArray.includes(unSelected[i])){
             $('.'+unSelected[i]).remove();
             var index = empArray.indexOf(unSelected[i]);
             if (index > -1) {
               empArray.splice(index, 1);
             }
          }
       }
         empSelect = 0;
      });
      $(".closemodal").click(function(){
        $("#previewChanges_modal").modal('hide');
        $("#submitChanges_modal").modal('hide');
    });

});
