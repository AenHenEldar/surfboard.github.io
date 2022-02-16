let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '355',
        width: '660',
        videoId: 'EfvxEuJzDXw',
        playerVars: {
            'playsinline': 1
        },
        events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        }
    });
}