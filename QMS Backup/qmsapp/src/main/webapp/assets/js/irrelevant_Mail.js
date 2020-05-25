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

    var $table = $('#table1');
    var mydata =
        [
         {
            "id": "1",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Chandler",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x irrelevant-mail' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-19-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Due today"

        },
        {
            "id": "2",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Joey",
            "message1": "On Tower-hill, as you go down" ,
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-19-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Responded"
        },
        {
            "id": "3",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Ross",
            "message1": "On Tower-hill, as you go down  ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-19-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Top Drivers"
        },
        {
            "id": "4",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Phoebe",
            "message1": "On Tower-hill, as you go down ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-19-11 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Responded"
        },
        {
            "id": "5",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Due today"
        },
        {
            "id": "6",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Ellen",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-01-03 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Top Drivers"
        },
        {
            "id": "7",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Due today"
        },
        {
            "id": "8",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Zoe",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-29-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Responded"
        },
        {
            "id": "9",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Responded"
        },
        {
            "id": "10",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Ellen",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Top Drivers"
        },
        {
            "id": "11",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Due today"
        },
        {
            "id": "12",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Ellen",
            "message1": "On Tower-hill, as you go down ",
            "attachmentIcon": "<a></a><i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-29-02 03:30:00",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Responded"
        },
        {
            "id": "13",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Top Drivers"
        },
        {
            "id": "14",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Received"
        },
        {
            "id": "15",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Received"
        },
        {
            "id": "16",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Received"
        },
        {
            "id": "17",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Received"
        },
        {
            "id": "18",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Overdue"
        },
        {
            "id": "19",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Overdue"
        },
        {
            "id": "20",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Overdue"
        },
        {
            "id": "21",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Indents Overdue"
        }
        ,
        {
            "id": "22",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Oldest Indents Pending"
        },
        {
            "id": "23",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Oldest Indents Pending"
        },
        {
            "id": "24",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-20-02 02:34:42",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Oldest Indents Pending"
        },
        {
            "id": "25",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Rachel",
            "message1": "On Tower-hill, as you go down  - ",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2019-25-03 11:42:35",
            "downIcon1": "<i class='icon-arrow-down15 arrow-down15-size getChildMails'>",
            "type":"Oldest Indents Pending"
        }
    ];
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+dd+'-'+mm;
    console.log(today);
        
        $('#table1').bootstrapTable({
            data: mydata
        });
        var classes = ['table', 'table-hover'];
    $('#table1').bootstrapTable('refreshOptions', {
        classes: classes.join(' '),
        paginationSuccessivelySize: 2,
        paginationPagesBySide: 1
      });


    $('[data-toggle="tooltip"]').tooltip();

    $(document).on('click',".star",function () {
        $(this).toggleClass('icon-star-empty3');
        $(this).toggleClass('icon-star-full2');
        $(this).toggleClass('starColor');
    });
    $(document).on('click','.tag',function () {
        $(this).toggleClass('icon-price-tag2');
        $(this).toggleClass('icon-price-tag3');
    });

    $(document).on('click', '.checkingBox1', function () {
        $(this).parent().toggleClass('checked');
    });

    $(document).on('click', '.checkered1', function () {
        if (!($(this).parents('span').hasClass('checked'))) {
            $('.inboxTable1 .uniform-checker input').parent().addClass('checked');
        } else {
            $('.inboxTable1 .uniform-checker input').parent().removeClass('checked');
        }
    });


    $(document).on('click','#table1 tbody tr .getChildMails', function () {

        var currRow = $(this).parents('tr');
        var currIndex = $(this).parents('tr').attr('data-index');
        var custSpace = currRow.find('td:first .hiddenDiv').css('width');

        if(custSpace) {
            custSpace = parseInt(custSpace.split('px')[0]);
            if(currRow.hasClass('childMail')) {
                custSpace += 5;
            }
        }
        else {
            custSpace = 10;
        }


    if(currRow.next('tr').attr('data-index') == currIndex + 1){ // already node open
        currRow.nextAll('tr').each(function() {
            if($(this).attr('data-index') >= currIndex + 1 && $(this).hasClass('childMail')){
                console.log('if')
                $(this).remove();
            }
            else {
                console.log('else')
                return false;
            }
        });
        $(this).toggleClass('custRotate');
    }
    else {

        $(this).toggleClass('custRotate');

    var testData =
    [
        {
            "id": "100",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Chandler",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-29-02 03:30:00",
            "count": 4
        },
        {
            "id": "101",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Chandler",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-20-02 02:34:42",
            "count": 6
        },
        // {
        //     "id": "102",
        //     // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
        //     // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
        //     "name1": "Chandler",
        //     "message1": "On Tower-hill, as you go down",
        //     "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
        //     "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
        //     "timestamp1": "2020-22-02 03:30:00",
        //     "count": 0
        // },
        {
            "id": "103",
            // "checkbox1": "<div class='uniform-checker'><span><input type='checkbox' class='form-input-styled checkingBox1' data-fouc=''></span></div>",
            // "star1": "<i class='icon-star-empty3 star icon-1x'></i>",
            "name1": "Chandler",
            "message1": "On Tower-hill, as you go down",
            "attachmentIcon": "<i class='icon-attachment icon-1x'></i>",
            "actions1": "<div class='list-icons'><i class='icon-undo2 icon-1x' data-toggle='modal' data-target='#revertToInbox_model' data-toggle='tooltip'title='Revert to Inbox' data-placement='left'></i></div>",
            "timestamp1": "2020-20-02 02:34:42",
            "count": 6
        }
    ];

    var listHtml = "";

    for(var i in testData) {
        listHtml +=
        `<tr class="childMail" data-index=${currIndex+1} style="border: 1px solid #e6e6e6;">
            <td class="custInline firstTD" style='max-width: 150px; border: none; padding: 10px 0px 0px 0px;'>
                <div class='hiddenDiv' style='width: ${custSpace}px;'></div>
                <div class='circle'></div>
                <div class='line ${(testData[i].count) > 0 ? "" : "custHide" }'></div>
                <div> <div><i class='icon-arrow-down15 arrow-down15-size arrow-down15-position getChildMails ${(testData[i].count) > 0 ? "" : "custHide" }'></i></div></div>
            </td>
            <td>${testData[i].name1}</td>
            <td>${testData[i].message1}</td>
            <td>${testData[i].timestamp1}</td>
            <td class="text-center">${testData[i].actions1}</td>
        </tr>`
      }


    currRow.after(listHtml);

        // $('#testTable').bootstrapTable({
        //     data: testData
        // });

        $('[data-toggle="tooltip"]').tooltip();
    }

    });


    $(document).on('click', '.irrelevant-mail', function(){
        $(this).mouseout();
        var currRow = $(this).parents('tr');
        var currIndex = $(this).parents('tr').attr('data-index');

        $('#revert_inbox').on('click',function(){
            deleteMail(currRow, currIndex);
        })
    // if(currRow.next('tr').attr('data-index') == currIndex + 1){ // already node open
    //     currRow.nextAll('tr').each(function() {
    //         if($(this).attr('data-index') >= currIndex + 1 && $(this).hasClass('childMail')){
    //             console.log('if')
    //             $(this).remove();
    //         }
    //         else {
    //             console.log('else')
    //             return false;
    //         }
    //     });
    //     $(this).parents('tr').remove();
    // }
    // else {
    //     $(this).parents('tr').remove();
    // }

    });

    $(document).on('click', '.attachFile', function () {
        console.log('asyhdfsy1')
        $(this).next('.myFile').click();
    });
    
    $(document).on('change','input[type=file]',function (e) {
        console.log('asyhdfsy2');
        $(this).next('.customfileupload').html($(this).val());
    });
})