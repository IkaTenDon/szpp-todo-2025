// 画面が読み込まれて以降の処理
$(document).ready(function() {
    // 登録ボタンが押されたら
    $('#regButton').on('click', function() {
        // タスク入力からデータを取得
        // trimはデータの空白を削除して取得する文字列のメソッド(機能)
        const taskValue = $('#taskInput').val().trim();
        // データが入っているなら
        if (taskValue) {
            console.log(`入力されたタスク: ${taskValue}`);
        } else {
            console.log('タスクが入力されていません。');
        }
    });
});