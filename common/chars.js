// 図鑑に登録されているキャラクターのidの配列を返します。
function get_chars() {
    if (localStorage.getItem("CharsList") == undefined)
        localStorage.setItem("CharsList", JSON.stringify([]));

    return JSON.parse(localStorage.getItem("CharsList"))
}

// キャラクターが図鑑に登録されているかをtrueまたはfalseで返します。
function has_char(id) {
    if (localStorage.getItem("CharsList") == undefined)
        localStorage.setItem("CharsList", JSON.stringify([]));

    return localStorage.getItem("CharsList").search(id) != -1
}

// キャラクターを図鑑に登録します。
// 登録に成功した場合は、trueを返します。
// キャラクターが重複して登録しようとすると、falseを返します。
function set_char(id) {
    if (localStorage.getItem("CharsList") == undefined)
        localStorage.setItem("CharsList", JSON.stringify([]));

    if (has_char(id))
        return false;

    let chars = JSON.parse(localStorage.getItem("CharsList"));
    chars.push(id)
    localStorage.setItem("CharsList", JSON.stringify(chars));

    return true;
}

// キャラクターのIDを取得します。
function get_char_id_from_data(size, color, pattern) {
    return color * 100 + size * 10 + pattern;
}

// 作成した卵の情報を一時的に保存します。 
function set_egg_data(id) {
    sessionStorage.setItem("EggData", id);
}

// 一時的に保存した卵の情報を取得します。
function get_egg_data() {
    if (sessionStorage.getItem("EggData") == undefined)
        return -1;

    return sessionStorage.getItem("EggData");
}

function remove_egg_data() {
    if (sessionStorage.getItem("EggData") != undefined)
        sessionStorage.removeItem("EggData");
}