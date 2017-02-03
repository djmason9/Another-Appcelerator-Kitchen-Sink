(function() {
    $.indicatorLight.show();
    $.indicatorDark.show();
    $.indicatorBig.show();
    $.indicatorMessage.show();
})();

function changeTintColor(e) {
    var colors = ["red", "green", "blue", "yellow", "purple"];

    $.indicatorLight.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
    $.indicatorDark.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
    $.indicatorBig.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
    $.indicatorMessage.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
}
