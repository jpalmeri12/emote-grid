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
    var chars = 0;
    for (var i = 0; i < Math.min(GRID_HEIGHT, h); i++) {
        for (var j = 0; j < Math.min(GRID_WIDTH, w); j++) {
            var isOn = $("#box" + i + "-" + j).prop("checked");
            console.log(i, j, isOn);
            if (isOn) {
                out += onEmote;
                chars += onEmote.length;
            } else {
                out += offEmote;
                chars += offEmote.length;
            }
        }
        out += "<br>";
    }
    $("#results").empty();
    $("#results").append(out);
    $("#outputText").text("Output (" + chars + " chars):");
}

function autoResize() {
    var newWidth = 0;
    var newHeight = 0;
    for (var i = 0; i < GRID_HEIGHT; i++) {
        for (var j = 0; j < GRID_WIDTH; j++) {
            var isOn = $("#box" + i + "-" + j).prop("checked");
            if (isOn && i + 1 > newHeight) {
                newHeight = i + 1;
            }
            if (isOn && j + 1 > newWidth) {
                newWidth = j + 1;
            }
        }
    }
    $("#gridHeight").val(newHeight);
    $("#gridWidth").val(newWidth);
}