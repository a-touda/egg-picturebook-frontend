window.onload = () => {
    let id = get_egg_data();
    if (id != -1) {
        let elm = document.getElementById("egg");
        elm.src = "../image/egg/" + id + ".png";
    } else {
        alert("何も起こらなかった。");
        window.location.href = "../title/title.html"
    }
}

function on_skip() {
    jumpResultPage();
}

function jumpResultPage() {
    window.location.href = "../result/result.html";
}