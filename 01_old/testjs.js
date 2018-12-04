var video = document.createElement('video');
video.setAttribute('playsinline', '');

navigator.getUserMedia
(
    {
        video: true
    },

    function(stream)
    {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    },
)