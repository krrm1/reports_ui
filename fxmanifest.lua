-- Resource Metadata
fx_version 'cerulean'
games { 'rdr3', 'gta5' }

-- What to run
client_scripts {
    'client.lua',
}

server_scripts {
    'server.lua'
}

shared_script '@ox_lib/init.lua'


ui_page('index.html')

files {
   'index.html',
   'script.js',
   'style.css'
}


lua54 'yes'