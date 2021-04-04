function SendReport() {
    let report = document.getElementById("report");

    let score = document.getElementById("score");

    let reason = document.getElementById("reason");

    let sol = document.getElementById("solution");

    if (!report.value || !score.value || !reason.value || !sol.value) {
        console.log("情報が入力されていません")
        return;
    };

    var post = "【内容】" + "\n"
        + report.value + "\n\n"
        + "【自己評価】" + "\n"
        + score.value + "点\n\n"
        + "【理由】" + "\n"
        + reason.value + "\n\n"
        + "【その他】" + "\n"
        + sol.value;
    console.log(post);

    let url = "https://~~~";

    var xhr = new XMLHttpRequest();
    try {
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatehange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (status >= 200 && status < 400) {
                    console.log(xhr.responseText);
                    console.log(data);
                    xhr.send(data);
                    alert("投稿に成功しました");
                }

            }
        }
    } catch {
        alert("処理に失敗しました")
    }


}