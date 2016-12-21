var GRID_WIDTH = 24;
var GRID_HEIGHT = 24;

$(function () {
    makeCheckboxes();
});

function makeCheckboxes() {
    $("#inputs").empty();
    for (var i = 0; i < GRID_HEIGHT; i++) {
        for (var j = 0; j < GRID_WIDTH; j++) {
            $("#inputs").append('<input id="box' + i + "-" + j + '" type="checkbox">');
        }
        $("#inputs").append('<br>');
    }
}

function makeEmoteText() {
    var out = "";
    var h = $("#gridHeight").val();
    var w = $("#gridWidth").val();
    var onEmote = $("#emoteOn").val();
    var offEmote = $("#emoteOff").val();
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            var isOn = $("#box" + i + "-" + j).prop("checked");
            console.log(i, j, isOn);
            if (isOn) {
                out += onEmote;
            }
            else {
                out += offEmote;
            }
        }
        out += "<br>";
    }
    $("#results").empty();
    $("#results").append(out);
}