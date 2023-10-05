import Player from '@vimeo/player';
import _, { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
        console.log('played the video!');
    });

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', _.throttle(function (data) {
    
  
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", seconds);
       
    })

     
},  1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));






// player.on("timeupdate", throttle(() => {
   
// }, 1000));

// throttle(
//     () => {

//     }
// ), 

// player.on('timeupdate', function () {
//  player._throttle("timeupdate", 1000)
// })



//  iframe._throttle("timeupdate",1000);

//  player.on._throttle("timeupdate",1000);


// // Avoid excessively updating the position while scrolling.
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 
// // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
// var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
// jQuery(element).on('click', throttled);
 
// // Cancel the trailing throttled invocation.
// jQuery(window).on('popstate', throttled.cancel);

//      ._throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300);
    