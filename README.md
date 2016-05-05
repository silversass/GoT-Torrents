# GoT-Torrents
Simple script to get a list of the latest Game of Thrones episode's torrents for Skype bot

# Requirements
Node.js

EZTV API module (https://github.com/moesalih/node-eztv)

NB! As of 05.05.2016, EZTV API module's `index.js` needs the following added before `episode.magnet` declaration:
`episode.size = String($(e).find("td").eq(3).text());`
