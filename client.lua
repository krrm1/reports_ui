RegisterCommand('show', function ()
    SendNUIMessage({event = "ShowUI"})
end)

RegisterCommand('hide', function ()
    SendNUIMessage({event = "HideUI",})
end)

RegisterCommand('clear', function()
    local myData = {
        text = "No Reports Found",
        street1 = "none",
        street2 = "none"
    }
    SendNUIMessage({
        type = 'clearData',  -- This is a custom type to identify the message
        data = myData         -- The data you want to send
    })
end)

RegisterNetEvent('report:client:UpdateReports', function (myData)
    SendNUIMessage({
        type = 'updateData',  -- This is a custom type to identify the message
        data = myData         -- The data you want to send
    })
end)