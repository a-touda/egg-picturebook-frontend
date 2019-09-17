window.onload = () => {
    let id = get_egg_data();
    if (id != -1) {
        let elm = document.getElementById("char");
        elm.src = "../image/char/" + id + ".png";

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

function on_return_title_button() {
    window.location.href = "../title/title.html";
}

function on_book_button() {
    window.location.href = "../book/book.html";
}