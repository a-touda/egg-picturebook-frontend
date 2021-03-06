let timeout;

window.onload = () => {
    timeout = setTimeout(function () {
        window.location.href = "../result/result.html";
    }, 2000);

    let id = get_egg_data();
    if (id != -1) {
        let elm = document.getElementById("egg");
        elm.src = "../image/egg/" + get_exclude_size_from_char_id(id) + ".png";
    } else {
        alert("何も起こらなかった。");
        clearTimeout(timeout);
        window.location.href = "../title/title.html";
    }
}

function on_skip() {
    jumpResultPage();
}

function jumpResultPage() {
    window.location.href = "../result/result.html";
}