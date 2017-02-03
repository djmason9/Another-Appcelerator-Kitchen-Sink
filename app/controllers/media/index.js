function playSound() {
    var player = Ti.Media.createSound({
        url : "sounds/cryin.wav"
    });

    player.play();
}
