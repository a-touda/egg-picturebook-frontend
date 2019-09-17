// 図鑑に登録されているキャラクターのidの配列を返します。
function get_chars() {
    if (localStorage.getItem("CharsList") == undefined)
        localStorage.setItem("CharsList", JSON.stringify([]));

    return JSON.parse(localStorage.getItem("CharsList"))
}

// キャラクターが図鑑に登録されているかを返します。
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
        return false

    let chars = JSON.parse(localStorage.getItem("CharsList"));
    chars.push(id)
    localStorage.setItem("CharsList", JSON.stringify(chars));

    return true
}