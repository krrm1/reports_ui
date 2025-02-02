    function UpdateShow() {
        $("body").show();
    }
    
    function UpdateHide(report) {
        $("body").hide();
        // $(".notes").removeClass("large"); // To reset font size
    }

    function UpdateReport(report) {
        $(".notes").html(report);
        $(".notes").addClass("large"); // To increase font size
    }

    function ClearReport(report) {
        $(".notes").html(report);
        $(".notes").removeClass("large"); // To reset font size
    }

    
window.addEventListener('message', function(event, report) {
    let data = event.data;

    switch (data.event) {
        case 'ShowUI':
            UpdateShow();
        break;

        case 'HideUI':
            UpdateHide();
        break;

        case 'UpdateReport':
            UpdateReport(data.report); // To Updata Report
        break;

        case 'ClearReport':
            ClearReport(data.report); // To Clear Report
        break;
    }
});