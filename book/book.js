let names = [];
let descs = [];

window.onload = () => {
    let chars = load_chars();
    chars.forEach(element => {
        let el = document.getElementById(get_exclude_size_from_char_id(element));
        if (el != null) {
            el.src = "../image/char/" + element + ".png";
        }
    });
}

// Charsを読み込む
function load_chars() {
    return get_chars();
}

function on_return_title_button() {
    window.location.href = "../title/title.html";
}