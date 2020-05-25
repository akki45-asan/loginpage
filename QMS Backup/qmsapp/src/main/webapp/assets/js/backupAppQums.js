$(document).ready(function () {
    // windowWidth = $(window).width();
    // if ($(window).width() > 1284) {
    //     $('#dashboardTable').removeClass('table-responsive');
    //     $('#dashboardTable2').removeClass('table-responsive');
    // }



    $('.datePickerfunction').change(function () {
        var pickDate = $(".datePickerfunction").val();
        // var date = new Date(pickDate);
        var arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        // for current/previous day
        var dailyDate = new Date(pickDate);
        var dailyDateForPrev = new Date(pickDate);
        var prevDate = new Date(dailyDateForPrev.setDate(dailyDateForPrev.getDate() - 1));
        console.log(prevDate)
        var currDate = dailyDate.getDate() + ' ' + arrMonth[(dailyDate.getMonth() + 1) - 1] + ' ' + dailyDate.getFullYear();
        var preDate = prevDate.getDate()+ ' ' + arrMonth[(prevDate.getMonth() + 1) - 1]+ ' ' + prevDate.getFullYear();
        // var pre_date;
        // var preDate
        // if (dailyDate == 1) {
        //     // pre_date = dailyDate.getDate();
        //     preDate = dailyDate.getDate() - 1 + ' ' + arrMonth[(dailyDate.getMonth() + 1) - 1] + ' ' + dailyDate.getFullYear();

        // }
        // else {
        //     // pre_date = dailyDate.getDate();
        //     preDate = dailyDate.getDate()+ ' ' + arrMonth[(dailyDate.getMonth() + 1) - 1] + ' ' + dailyDate.getFullYear();

        // }
        $(".previousDaily").html(preDate);
        $(".currentDaily").html(currDate);



        // for previous weekly
        var dateForPrevWeek = new Date(pickDate);
        var prevWeeklyFirst = new Date(dateForPrevWeek.setDate((dateForPrevWeek.getDate() - dateForPrevWeek.getDay() - 6)));
        var prevWeeklyLast = new Date(dateForPrevWeek.setDate(dateForPrevWeek.getDate() - dateForPrevWeek.getDay() + 7));

        prevWeeklyFirst = prevWeeklyFirst.getDate() + ' ' + arrMonth[(prevWeeklyFirst.getMonth() + 1) - 1] + ' ' + prevWeeklyFirst.getFullYear();
        prevWeeklyLast = prevWeeklyLast.getDate() + ' ' + arrMonth[(prevWeeklyLast.getMonth() + 1) - 1] + ' ' + prevWeeklyLast.getFullYear();

        $('.previousWeekly').html(prevWeeklyFirst + ' to ' + prevWeeklyLast);


        // for current weekly
        var dateForWeek = new Date(pickDate);
        var currWeeklyFirst = new Date(dateForWeek.setDate(dateForWeek.getDate() - dateForWeek.getDay() + 1));
        var currWeeklyLast = new Date(dateForWeek.setDate(dateForWeek.getDate() - dateForWeek.getDay() + 7));

        currWeeklyFirst = currWeeklyFirst.getDate() + ' ' + arrMonth[(currWeeklyFirst.getMonth() + 1) - 1] + ' ' + currWeeklyFirst.getFullYear();
        currWeeklyLast = currWeeklyLast.getDate() + ' ' + arrMonth[(currWeeklyLast.getMonth() + 1) - 1] + ' ' + currWeeklyLast.getFullYear();

        $('.currentWeekly').html(currWeeklyFirst + ' to ' + currWeeklyLast);


        //Current Monthly
        var monethdate = new Date(pickDate),
            y = monethdate.getFullYear(),
            m = monethdate.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        firstDayofMonth = firstDay.getDate() + ' ' + arrMonth[(firstDay.getMonth() + 1) - 1] + ' ' + firstDay.getFullYear();
        lastDayofMonth = lastDay.getDate() + ' ' + arrMonth[(lastDay.getMonth() + 1) - 1] + ' ' + lastDay.getFullYear();
        $(".curentMonthly").html(firstDayofMonth + ' to ' + lastDayofMonth);

        //previous Monthly
        var previousmonthDate = new Date(pickDate);
        var dd = previousmonthDate.getDate();

        previousmonthDate.setDate(1); // going to 1st of the month
        previousmonthDate.setHours(-1); // going to last hour before this date even started.
        var prevMonthLastDay = previousmonthDate.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).split(' ').join('/');
        previousmonthDate.setDate(1); // going to 1st of the previous month

        var prevMonthFirstDay = previousmonthDate.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).split(' ').join('/');
        $(".previousMonthly").html(prevMonthFirstDay + ' to ' + prevMonthLastDay);


        //current Quaterly
        // var now = new Date();
        var dateForpreviousFortnightly = new Date(pickDate);
        var dateForcurrentQuaterly = new Date(pickDate);
        var quarter = Math.floor((dateForcurrentQuaterly.getMonth() / 3));
        var firstDate = new Date(dateForcurrentQuaterly.getFullYear(), quarter * 3, 1);
        firstDatee = firstDate.getDate() + ' ' + arrMonth[(firstDate.getMonth() + 1) - 1] + ' ' + firstDate.getFullYear();
        var endDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
        endDatee = endDate.getDate() + ' ' + arrMonth[(endDate.getMonth() + 1) - 1] + ' ' + endDate.getFullYear();
        // console.log('Current Quaterly',firstDate,endDate);
        $(".currentQuaterly").html(firstDatee + ' to ' + endDatee);


        //previous Quaterly
        var dateForprevQuaterly = new Date(pickDate);
        // var todayQuaterly = new Date();
        var quarter = Math.floor((dateForprevQuaterly.getMonth() / 3));
        var startDateQ = new Date(dateForprevQuaterly.getFullYear(), quarter * 3 - 3, 1);
        startDateQuaterly = startDateQ.getDate() + ' ' + arrMonth[(startDateQ.getMonth() + 1) - 1] + ' ' + startDateQ.getFullYear();
        var endDateQ = new Date(startDateQ.getFullYear(), startDateQ.getMonth() + 3, 0);
        endDateQuaterly = endDateQ.getDate() + ' ' + arrMonth[(endDateQ.getMonth() + 1) - 1] + ' ' + endDateQ.getFullYear();
        $(".previousQuaterly").html(startDateQuaterly + 'to' + endDateQuaterly);




        //for current year to date
        var currYearYTD = new Date(pickDate);
        var curyearYTD = currYearYTD.getFullYear();
        var curyearMonthYTD = currYearYTD.getMonth() + 1;
        var curyearDayYTD = currYearYTD.getDate();
        var lastYear = curyearYTD - 1;
        if ((curyearMonthYTD == 2) && (curyearDayYTD == 29)) {
            curyearDayYTD = 28;
        }

        var lastYearDisplay = new Date(("0000" + lastYear.toString()).slice(-4) + " " + ("00" + curyearMonthYTD.toString()).slice(-2) + "/" + ("00" + curyearDayYTD.toString()).slice(-2));
        plastYearDisplay = lastYearDisplay.getDate() + ' ' + arrMonth[(lastYearDisplay.getMonth())] + ' ' + lastYearDisplay.getFullYear();

        // ("LastYearDate : " + lastYearDisplay);
        // console.log('previousyear', lastYearDisplay)
        $(".previousYearToDate").html(lastYearDisplay);


        //current Year
        var dateObj = new Date(pickDate);
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();

        newdate = new Date(year + "/" + month + "/" + day);
        currLastYearDisplay = newdate.getDate() + ' ' + arrMonth[(newdate.getMonth())] + ' ' + newdate.getFullYear();

        enddate = year
        console.log('curr year', newdate);
        $(".currentYearToDate").html(plastYearDisplay + 'to' + currLastYearDisplay);



        // for prevprevious year(Current year -2)
        var prevcurrYear = new Date(pickDate);
        var prevcuryear = prevcurrYear.getFullYear();
        var prevcuryearMonth = prevcurrYear.getMonth() + 1;
        var prevcuryearDay = prevcurrYear.getDate();
        var prevlastYear = prevcuryear - 2;
        if ((prevcuryearMonth == 2) && (prevcuryearDay == 29)) {
            curyearDay = 28;
        }
        var prevlastYearDisplay = new Date(("0000" + prevlastYear.toString()).slice(-4) + "/" + ("00" + prevcuryearMonth.toString()).slice(-2) + "/" + ("00" + prevcuryearDay.toString()).slice(-2));
        previouslastYearDisplay = prevlastYearDisplay.getDate() + ' ' + arrMonth[(prevlastYearDisplay.getMonth())] + ' ' + prevlastYearDisplay.getFullYear();

        //previous year -3
        var YTD = new Date(pickDate);
        var prevcuryearYTD = YTD.getFullYear();
        var prevcuryearMonthYTD = YTD.getMonth() + 1;
        var prevcuryearDayYTD = YTD.getDate();
        var prevlastYearYTD = prevcuryearYTD - 3;
        if ((prevcuryearMonthYTD == 2) && (prevcuryearDayYTD == 29)) {
            prevcuryearDayYTD = 28;
        }
        var prevlastYearDisplayYTD = new Date(("0000" + prevlastYearYTD.toString()).slice(-4) + "/" + ("00" + prevcuryearMonthYTD.toString()).slice(-2) + "/" + ("00" + prevcuryearDayYTD.toString()).slice(-2));
        // ("prevLastYearDate : " + prevlastYearDisplayYTD);
        previouslastYearDisplayYTD = prevlastYearDisplayYTD.getDate() + ' ' + arrMonth[(prevlastYearDisplayYTD.getMonth())] + ' ' + prevlastYearDisplayYTD.getFullYear();

        console.log('prevpreviousyear', prevlastYearDisplayYTD);

        $(".previousYearToDate").html(previouslastYearDisplayYTD + ' to ' + previouslastYearDisplay);





        //fortnightly current
        var dateForfortnight = new Date(pickDate);
        var fortnightYear = dateForfortnight.getFullYear();
        var fortnightMonth = dateForfortnight.getMonth();
        var fortnightDay = dateForfortnight.getDate();
        if (fortnightDay >= 16) {
            var fortnightLastDay = new Date(fortnightYear, fortnightMonth + 1, 0);
            fortnightFirstDayDisplay = '16' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
            fortnightLastDateDisplay = fortnightLastDay.getDate() + ' ' + arrMonth[(fortnightLastDay.getMonth() + 1) - 1] + ' ' + fortnightLastDay.getFullYear();
            var prevfirstDayFortnight = '1' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
            var prevlastDayFortnight = '15' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
            $(".previousFortnightly").html(prevfirstDayFortnight + ' to ' + prevlastDayFortnight);
            $(".currentFortnightly").html(fortnightFirstDayDisplay + ' to ' + fortnightLastDateDisplay);
    
        }

        else {
            var prevfirstDayFortnight = '1' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
            var prevlastDayFortnight = '15' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
            var fortnightLastDay = new Date(fortnightYear, fortnightMonth + 1, 0);
            fortnightFirstDayDisplay = '16' + ' ' + arrMonth[fortnightMonth] + ' ' + fortnightYear;
            fortnightLastDateDisplay = fortnightLastDay.getDate() + ' ' + arrMonth[(fortnightLastDay.getMonth() + 1) - 1] + ' ' + fortnightLastDay.getFullYear();
            console.log('fortnightLastDaysrgtsdr', prevfirstDayFortnight, prevlastDayFortnight);
            $(".previousFortnightly").html(prevlastDayFortnight + ' to ' + prevfirstDayFortnight );
            $(".currentFortnightly").html( fortnightLastDateDisplay + ' to ' + fortnightFirstDayDisplay);
        }
     
    });

    // $("#dashboardTable td").click(function() {     
    //     var colIndex = $(this).parent().children().index($(this));
    //     var rowIndex = $(this).parent().parent().children().index($(this).parent())+1;
    //      // alert('Row: ' + rowIndex + ', Column: ' + colIndex);
    //      var rowposition = $("#dashboardTable tr:eq("+rowIndex+") td:eq(" + colIndex + ") a").html();
    //     var colposition = $("#dashboardTable thead tr th:eq(" +colIndex + ")").html();
    //     console.log('Row: ' + rowposition + ', Column: ' + colposition);

    // });

    $("#dashboardTable td a").on('click', function(e) {
        var rowIndex = e.target.parentElement.parentElement.rowIndex ;
        var colIndex =  e.target.parentElement.cellIndex;

        console.log(rowIndex,colIndex)
        var rowposition = $("#dashboardTable tr:eq("+rowIndex+") td:eq(0)").html();
        var colposition = $("#dashboardTable thead tr th:eq(" +colIndex + ")").html();
        console.log(rowposition,colposition);

        localStorage.setItem('deptType',rowposition);
        localStorage.setItem('period',colposition);
        window.location.replace("inbox.html");

      });

});

function onchangependingFilter(ele) {
    var arrAll = [20, 100, 100, 100, 100, 60, 100];
    var arrClosed = [10, 60, 12, 90, 80, 500];
    var arrPending = [20, 60, 12, 90, 80, 50];
    if ($('.' + ele).val() == 'Closed') {
        $('.dashboard_table .pending_approval_filter td').each(function (index) {
            if (index > 0) {
                $(this).html(arrClosed[index - 1]);
            }
            // var arrClosed = $(this).attr("href");
        });
    }
    else if ($('.' + ele).val() == 'Pending') {
        $('.dashboard_table .pending_approval_filter td').each(function (index) {
            if (index > 0) {
                $(this).html(arrPending[index - 1]);
            }
            // var arrPending = $(this).attr("href");
        });
    }
    else {
        $('.dashboard_table .pending_approval_filter td').each(function (index) {
            if (index > 0) {
                $(this).html(arrAll[index - 1]);
            }
        });
    }
}

function onchangeSignificantcriticality(ele) {
    var arrAll1 = [20, 100, 100, 100, 100, 100, 100];
    var arrSignificant = [100, 600, 120, 900, 85, 800];
    var arrCritical = [20, 60, 12, 90, 80, 50];
    var arrImportant = [10, 60, 12, 90, 80, 500];
    if ($('.' + ele).val() == 'Significant') {
        $('.dashboard_table .significant_approval_filter td').each(function (index) {
            if (index > 0) {
                $(this).html(arrSignificant[index - 1]);
            }
            // var arrSignificant = $(this).attr("href");
        });
    }
    else if ($('.' + ele).val() == 'Critical') {
        $('.dashboard_table .significant_approval_filter td').each(function (index) {
            if (index > 0) {
                $(this).html(arrCritical[index - 1]);
            }
            // var arrCritical = $(this).attr("href");
        });
    }
    else if ($('.' + ele).val() == 'Important') {
        $('.dashboard_table .significant_approval_filter td').each(function (index) {
            if (index > 0) {
                $(this).html(arrImportant[index - 1]);
            }
            // var arrImportant = $(this).attr("href");
        });
    }
    else {
        $('.dashboard_table .significant_approval_filter td').each(function (index) {
            if (index > 0) {
                console.log(arrSignificant[index - 1])
                $(this).html(arrAll1[index - 1]);
            }
        });
    }
}