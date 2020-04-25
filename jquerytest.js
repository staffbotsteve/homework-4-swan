$(document).ready(function() {

    $("#mySlider").slider({
        range: "min",
        min: 8,
        max: 128,
        value: 8,
        slide: function(event, ui) {
            $("#total").val(ui.value);
        }
    });
    $("#total").val($("#mySlider").slider("value"));


});