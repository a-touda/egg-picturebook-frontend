window.onload = () => {
    let id = get_char_id_from_data(sizeVal, colorVal, patternVal);
    set_egg_data(id)
    egg_update();
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
    let value = Math.floor(Math.random() * 100);

    if (value % 10 == 0 && book_comp() && (colorVal == 8 || colorVal == 9 || colorVal == 10 || colorVal == 11)) {
        patternVal = 3;
    };

    let id = get_char_id_from_data(sizeVal, colorVal, patternVal);
    set_egg_data(id)

    let hint = document.getElementById("hint");

    if (has_char(id)) {
        hint.textContent = "あれ、見たことあるかも...？";
        console.log("登録済み");
    } else {
        hint.textContent = " ";
        console.log("登録していない");
    }


    let elm = document.getElementById("egg");
    elm.src = "../image/egg/" + id + ".png";

}