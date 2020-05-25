$(document).ready(function () {
    var $table = $('#mailData');
    var mymaildata =
    [
     {  "srno": "1",
        "mailname": "Mail Name 1",
        "mailsubject": "Password Change",
        "modifiedby":"Chandler Bing",
        "timestamp": "2019-12-17 21:46:11.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    
    },
    {
        "srno": "2",
        "mailname": "Mail Name 2",
        "mailsubject": "Reset Password",
        "modifiedby":"Ross Geller",
        "timestamp": "2019-12-12 15:19:13.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "3",
        "mailname": "Mail Name 3",
        "mailsubject": "Request Raised",
        "modifiedby":"Rachel Green",
        "timestamp": "2019-12-14 17:34:02.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "4",
        "mailname": "Mail Name 4",
        "mailsubject": "Password Changed",
        "modifiedby":"Michael Scott",
        "timestamp": "2019-03-20 13:41:18.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "5",
        "mailname": "Mail Name 5",
        "mailsubject": "Reset Password",
        "modifiedby":"Tom Hanks",
        "timestamp": "2019-10-25 17:50:37.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "6",
        "mailname": "Mail Name 6",
        "mailsubject": "Request Raised",
        "modifiedby":"James Johnson",
        "timestamp": "2019-03-25 15:20:38.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "7",
        "mailname": "Mail Name 7",
        "mailsubject": "Request Raised",
        "modifiedby":"Mary Smith",
        "timestamp": "2019-03-22 15:57:41.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "8",
        "mailname": "Mail Name 8",
        "mailsubject": "Password Reset",
        "modifiedby":"Maria Rodriguez",
        "timestamp": "2019-03-19 11:44:34.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "9",
        "mailname": "Mail Name 9",
        "mailsubject": "Request Raised",
        "modifiedby":"James Smith",
        "timestamp": "2017-07-19 16:38:59.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "10",
        "mailname": "Mail Name 10",
        "mailsubject": "Password Changed",
        "modifiedby":"Chandler Jewish",
        "timestamp": "2019-10-25 10:44:05.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "10",
        "mailname": "Mail Name 10",
        "mailsubject": "Password Changed",
        "modifiedby":"Chandler Jewish",
        "timestamp": "2019-10-25 10:44:05.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "10",
        "mailname": "Mail Name 10",
        "mailsubject": "Password Changed",
        "modifiedby":"Chandler Jewish",
        "timestamp": "2019-10-25 10:44:05.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    {
        "srno": "10",
        "mailname": "Mail Name 10",
        "mailsubject": "Password Changed",
        "modifiedby":"Chandler Jewish",
        "timestamp": "2019-10-25 10:44:05.000",
        "status": "Enabled",
        "actions": "<div class='list-icons'><a class='list-icons-item 'href='update-mail.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
    },
    ];
    $('#mailData').bootstrapTable({
        data: mymaildata
    });
    var classes = ['table', 'table-hover'];
    $('#mailData').bootstrapTable('refreshOptions', {
        classes: classes.join(' '),
        paginationSuccessivelySize: 2,
        paginationPagesBySide: 1
      });

    });