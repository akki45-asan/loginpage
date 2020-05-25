$(document).ready(function(){
	var $table = $('#paratable');
	var paratabledata = [
	{
		"Parameter_Name":"Parameter 1",
		"Mail_Name":"Mail Name 1",
		"Parameter_Name1":"Parameter 2",
		"Mail_Name1":"Mail Name 2",
		"Parameter_Name2":"Parameter 3",
		"Mail_Name2":"Mail Name 3",
	},
	{
		"Parameter_Name":"Parameter 4",
		"Mail_Name":"Mail Name 4",
		"Parameter_Name1":"Parameter 5",
		"Mail_Name1":"Mail Name 5",
		"Parameter_Name2":"Parameter 6",
		"Mail_Name2":"Mail Name 6",
	},
	{
		"Parameter_Name":"Parameter 7",
		"Mail_Name":"Mail Name 7",
		"Parameter_Name1":"Parameter 8",
		"Mail_Name1":"Mail Name 8",
		"Parameter_Name2":"Parameter 9",
		"Mail_Name2":"Mail Name 9",
	},
	{
		"Parameter_Name":"Parameter 10",
		"Mail_Name":"Mail Name 10",
		"Parameter_Name1":"Parameter 11",
		"Mail_Name1":"Mail Name 11",
		"Parameter_Name2":"Parameter 12",
		"Mail_Name2":"Mail Name 12",
	},
	{
		"Parameter_Name":"Parameter 13",
		"Mail_Name":"Mail Name 13",
		"Parameter_Name1":"Parameter 14",
		"Mail_Name1":"Mail Name 14",
		"Parameter_Name2":"Parameter 15",
		"Mail_Name2":"Mail Name 15",
	},
	{
		"Parameter_Name":"Parameter 16",
		"Mail_Name":"Mail Name 16",
		"Parameter_Name1":"Parameter 17",
		"Mail_Name1":"Mail Name 17",
		"Parameter_Name2":"Parameter 18",
		"Mail_Name2":"Mail Name 18",
	},
	{
		"Parameter_Name":"Parameter 19",
		"Mail_Name":"Mail Name 19",
		"Parameter_Name1":"Parameter 20",
		"Mail_Name1":"Mail Name 20",
		"Parameter_Name2":"Parameter 21",
		"Mail_Name2":"Mail Name 21",
	},
	{
		"Parameter_Name":"Parameter 22",
		"Mail_Name":"Mail Name 22",
		"Parameter_Name1":"Parameter 23",
		"Mail_Name1":"Mail Name 23",
		"Parameter_Name2":"Parameter 24",
		"Mail_Name2":"Mail Name 24",
	}
	]
	$('#paratable').bootstrapTable({
            data: paratabledata
        });
	var classes = ['table', 'table-hover'];
    $('#paratable').bootstrapTable('refreshOptions', {
        classes: classes.join(' '),
        paginationSuccessivelySize: 2,
        paginationPagesBySide: 1
      });
});