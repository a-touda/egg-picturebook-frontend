let idVal;

window.onload = () => {
    let id = get_egg_data();
    if (id != -1) {
        let elm = document.getElementById("char");
        elm.src = "../image/char/" + get_exclude_size_from_char_id(id) + ".png";

        idVal = id;

        remove_egg_data();

        if (set_char(id)) {
            let spawn = document.getElementById("new-spawn")
            spawn.innerText = "新しいいきもの！";
        }
    } else {
        alert("何も起こらなかった。");
        window.location.href = "../title/title.html"
    }
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

function on_book_button() {
    window.location.href = "../book/book.html";
}