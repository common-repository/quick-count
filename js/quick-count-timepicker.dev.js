jQuery(document).ready(function(){
    jQuery.datepicker.regional['quick_count'] = {
            closeText: quick_count.i18n.closeText,
            prevText: quick_count.i18n.prevText,
            nextText: quick_count.i18n.nextText,
            currentText: quick_count.i18n.currentText,
            monthNames: [
                quick_count.i18n.monthNames[0],
                quick_count.i18n.monthNames[1],
                quick_count.i18n.monthNames[2],
                quick_count.i18n.monthNames[3],
                quick_count.i18n.monthNames[4],
                quick_count.i18n.monthNames[5],
                quick_count.i18n.monthNames[6],
                quick_count.i18n.monthNames[7],
                quick_count.i18n.monthNames[8],
                quick_count.i18n.monthNames[9],
                quick_count.i18n.monthNames[10],
                quick_count.i18n.monthNames[11]
            ],
            monthNamesShort: [
                quick_count.i18n.monthNamesShort[0],
                quick_count.i18n.monthNamesShort[1],
                quick_count.i18n.monthNamesShort[2],
                quick_count.i18n.monthNamesShort[3],
                quick_count.i18n.monthNamesShort[4],
                quick_count.i18n.monthNamesShort[5],
                quick_count.i18n.monthNamesShort[6],
                quick_count.i18n.monthNamesShort[7],
                quick_count.i18n.monthNamesShort[8],
                quick_count.i18n.monthNamesShort[9],
                quick_count.i18n.monthNamesShort[10],
                quick_count.i18n.monthNamesShort[11]
            ],
            dayNames: [
                quick_count.i18n.dayNames[0],
                quick_count.i18n.dayNames[1],
                quick_count.i18n.dayNames[2],
                quick_count.i18n.dayNames[3],
                quick_count.i18n.dayNames[4],
                quick_count.i18n.dayNames[5],
                quick_count.i18n.dayNames[6]
            ],
            dayNamesShort: [
                quick_count.i18n.dayNamesShort[0],
                quick_count.i18n.dayNamesShort[1],
                quick_count.i18n.dayNamesShort[2],
                quick_count.i18n.dayNamesShort[3],
                quick_count.i18n.dayNamesShort[4],
                quick_count.i18n.dayNamesShort[5],
                quick_count.i18n.dayNamesShort[6]
            ],
            dayNamesMin: [
                quick_count.i18n.dayNamesMin[0],
                quick_count.i18n.dayNamesMin[1],
                quick_count.i18n.dayNamesMin[2],
                quick_count.i18n.dayNamesMin[3],
                quick_count.i18n.dayNamesMin[4],
                quick_count.i18n.dayNamesMin[5],
                quick_count.i18n.dayNamesMin[6]
            ],
            weekHeader: quick_count.i18n.weekHeader,
            dateFormat: quick_count.i18n.dateFormat,
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
    jQuery.datepicker.setDefaults(jQuery.datepicker.regional['quick_count']);


    jQuery.timepicker.regional['quick_count'] = {
        currentText: quick_count.i18n.currentText,
        closeText: quick_count.i18n.closeText,
        amNames: [
            quick_count.i18n.amNames[0],
            quick_count.i18n.amNames[1]
        ],
        pmNames: [
            quick_count.i18n.pmNames[0],
            quick_count.i18n.pmNames[1]
        ],
        timeFormat: quick_count.i18n.timeFormat,
        timeOnlyTitle: quick_count.i18n.timeOnlyTitle,
        timeText: quick_count.i18n.timeText,
        hourText: quick_count.i18n.hourText,
        minuteText: quick_count.i18n.minuteText,
        secondText: quick_count.i18n.secondText,
        millisecText: quick_count.i18n.millisecText,
        timezoneText: quick_count.i18n.timezoneText,
        timeSuffix: '',
        isRTL: false
    };
    jQuery.timepicker.setDefaults(jQuery.timepicker.regional['quick_count']);

    jQuery('input[id^="quick-count-filter-"]').datetimepicker({dateFormat : 'yy/mm/dd', timeFormat : 'HH:mm:ss', showSecond: true});
});