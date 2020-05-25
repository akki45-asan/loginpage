$(document).ready(function () {
var $table = $('#table');
var mydeptdata =
[
 {
    "departmentname": "Department1",
    "departmentcode": "323",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"

},
{
    "departmentname": "Department2",
    "departmentcode": "33",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department3",
    "departmentcode": "021",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department4",
    "departmentcode": "3013",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department5",
    "departmentcode": "14",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department6",
    "departmentcode": "30",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department7",
    "departmentcode": "142",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department8",
    "departmentcode": "333",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department9",
    "departmentcode": "353",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department10",
    "departmentcode": "3323",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department11",
    "departmentcode": "3203",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department12",
    "departmentcode": "23",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department13",
    "departmentcode": "3231",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department14",
    "departmentcode": "30",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></div>"
},
{
    "departmentname": "Department15",
    "departmentcode": "142 ",
    "actions": "<div class='list-icons'><a class='list-icons-item 'href='update_department.html'><a class='list-icons-item 'href='update_department.html'><i class='icon-pencil7 icon-1x' data-popup='tooltip' title='Edit' data-placement='right'></i></a></a></div>"
}
];
$('#table').bootstrapTable({
    data: mydeptdata
});
var classes = ['table', 'table-hover'];
    $('#table').bootstrapTable('refreshOptions', {
        classes: classes.join(' '),
        paginationSuccessivelySize: 2,
        paginationPagesBySide: 1
      });
});