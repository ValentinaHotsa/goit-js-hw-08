import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', function(data) {
   
   player.getCurrentTime().then(function(seconds) {
       console.log(seconds);
       localStorage.setItem("videoplayer-current-time", seconds);
})
    });
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

