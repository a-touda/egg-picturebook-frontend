let names = [];
let descs = [];

window.onload = () => {
    let chars = load_chars();
    chars.forEach(element => {
        let el = document.getElementById(get_exclude_size_from_char_id(element));
        if (el != null) {
            el.src = "../image/char/" + get_exclude_size_from_char_id(element) + ".png";
        }
    });

    let cnt = document.getElementById("count");
    cnt.innerText = distinct_chars_count();
}

// Charsを読み込む
function load_chars() {
    return get_chars();
}

function on_fav_button() {
    if (has_favorite_char(idVal)) {
        remove_favorite_char(idVal);
    } else {
        set_favorite_char(idVal);
    }
}

function on_return_title_button() {
    window.location.href = "../title/title.html";
}