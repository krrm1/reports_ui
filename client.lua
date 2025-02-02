RegisterCommand('show', function ()
    SendNUIMessage({event = "ShowUI"})
end)

RegisterCommand('hide', function ()
    SendNUIMessage({event = "HideUI",})
end)

RegisterCommand('update', function ()
    SendNUIMessage({event = "UpdateReport", report = 'OPPPSSS You Got Report In the cityy !!'})
end)

RegisterCommand('clear-reprots', function ()
    SendNUIMessage({event = "ClearReport", report = 'Cleared Reports'})
end)