function ConnectReport() {
    let report = document.getElementById("report");

    let score = document.getElementById("score");

    let reason = document.getElementById("reason");

    let sol = document.getElementById("solution");

    var connect = "【内容】" + "\n"
        + report.value + "\n\n"
        + "【自己評価】" + "\n"
        + score.value + "点\n\n"
        + "【理由】" + "\n"
        + reason.value + "\n\n"
        + "【その他】" + "\n"
        + sol.value;
    console.log(connect);

    document.getElementById("connect").innerHTML = connect;








}