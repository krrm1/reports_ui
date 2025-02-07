    function UpdateShow() {
        $("body").show();
    }
    
    function UpdateHide() {
        $("body").hide();
    }
    
    window.addEventListener('message', function(event) {
        let data = event.data;

        switch (data.event) {
            case 'ShowUI':
                UpdateShow();
            break;
    
            case 'HideUI':
                UpdateHide();
            break;
        }
    
        // Check if the message type is 'updateData'
        if (event.data.type === 'updateData') {
            // Access the data sent from Lua
            const Reportdata = event.data.data;
    
            // Now you can use the data in your JavaScript code
        $(".report").html(Reportdata.text);
        $(".street1").html(Reportdata.street1);
        $(".street2").html(Reportdata.street2);
        $(".report").addClass("large"); // To increase font size
        }

        // Check if the message type is 'updateData'
        if (event.data.type === 'clearData') {
            // Access the data sent from Lua
            const Reportdata = event.data.data;
    
            // Now you can use the data in your JavaScript code
        $(".report").html(Reportdata.text);
        $(".street1").html(Reportdata.street1);
        $(".street2").html(Reportdata.street2);
        $(".report").removeClass("large"); // To reset font size
        }
    });
