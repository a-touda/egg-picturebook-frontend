window.onload = () => {
    let id = get_char_id_from_data(sizeVal, colorVal, patternVal);
    set_egg_data(id)
}

var sizeVal = 0;
var colorVal = 0;
var patternVal = 0;

function on_size_change(size) {
    sizeVal = size;

    egg_update();
}

function on_color_change(color) {
    colorVal = color;

    egg_update();
}

function on_pattern_change(pattern) {
    patternVal = pattern;

    egg_update();
}

function on_enter_button() {
    let id = get_char_id_from_data(sizeVal, colorVal, patternVal);
    set_egg_data(id)
    window.location.href = "../hatching/hatching.html";
}

function egg_update() {
    let id = get_char_id_from_data(sizeVal, colorVal, patternVal);
    set_egg_data(id)
    // DOM操作
}