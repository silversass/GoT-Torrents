const eztv = require('eztv');

module.exports = {

	reply: function(bot, tags, user){

		return getTorrents(bot);
	}
};

function getTorrents(bot){

	// 481 is Game of Thrones's ID
	eztv.getShowEpisodes(481, function(error, body){

		if (error){

			console.log('[ERROR] Unable to get episode data');

		} else {

			var episodeList = body['episodes'];
			var s = episodeList[0].seasonNumber;
			var e = episodeList[0].episodeNumber;
			var i;

			for (i in episodeList){

				var episode = episodeList[i];

				if (episode.seasonNumber == s && episode.episodeNumber == e){

					// Read quality from the torrent's title
					if (episode.title.indexOf('720p') > -1){
							quality = '720p';
						} else if (episode.title.indexOf('1080p') > -1){
							quality = '1080p';
						} else {
							quality = 'Misc';
						}

					var result = '';

					result += 'S: ' + s + ' | ' + 'Ep: ' + e + ' | ' + 'Q: ' + quality;
					result += ' | ' + 'Size: ' + episode.size + ' | ' + 'L: ' + episode.torrentURL;

					// Example output:
					// S: 6 | Ep: 1 | Q: 720p | Size: 1.4 GB | L: http://x.com/got.torrent

					bot.reply(result, true);

				} else {
					break;
				}
			}
		}
	})
};