$(document).ready(function() {
    $('.disc').click(function(){
        var audio = new Audio('/audio/miracleMusical.mp3');
        audio.play();

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'lyrics.txt', true);
        
        xhr.onload = function(e) {
          if (this.status == 200) {
            var text = this.responseText;
            var lines = text.split('\n');
            var marquee = document.getElementById('my-marquee');
            for (var i = 0; i < lines.length; i++) {
              var line = lines[i].trim();
              if (line) {
                var span = document.createElement('span');
                span.textContent = line;
                marquee.appendChild(span);
                marquee.appendChild(document.createTextNode(' '));
              }
            }
          }
        };
        xhr.send();
    });
});