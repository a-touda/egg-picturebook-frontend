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

    return JSON.parse(localStorage.getItem("CharsList")).indexOf(id) != -1
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

function get_exclude_size_from_char_id(id) {
    return Math.floor(Math.floor(id / 100) * 100 + id % 10);
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

// 図鑑のコンプリートチェック
function book_comp() {
    var list = get_chars();
    var ev = [];
    list.forEach(element => {
        var sid = get_exclude_size_from_char_id(element);
        if (ev.indexOf(sid) == -1) {
            ev.push(sid);
        }
    });

    return ev.length >= 36;
}

function has_favorite_char(id) {
    if (localStorage.getItem("FavChar") == undefined)
        localStorage.setItem("FavChar", JSON.stringify([]))

    return JSON.parse(localStorage.getItem("FavChar")).indexOf(id) != -1;
}

function set_favorite_char(id) {

    if (has_favorite_char(id))
        return false;

    let chars = JSON.parse(localStorage.getItem("FavChar"));
    chars.push(id)
    localStorage.setItem("FavChar", JSON.stringify(chars));

    return true;
}