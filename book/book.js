const CharsCount = 5;

window.onload = () => {
    let chars = load_chars();
    for (var i = 0; i < CharsCount; i++)
        if (chars.indexOf(i) != -1) {
            // DOMを操作する
        }
}

// Charsを読み込む
function load_chars() {
    return get_chars();
}

function on_return_title_button() {
    window.location.href = "../title/title.html";
}