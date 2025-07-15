// 画面が読み込まれて以降の処理
$(document).ready(function() {
    // 登録ボタンが押されたら
    $('#regButton').on('click', function() {
        // タスク入力からデータを取得
        // trimはデータの空白を削除して取得する文字列のメソッド(機能)
        const taskValue = $('#taskInput').val().trim();
        // データが入っているなら
        if (taskValue) {
            // console.log(`入力されたタスク: ${taskValue}`);
            // todoItemを作成
            const todoItem = createTodoItem(taskValue);
            // 作成したtodoItemを表示するリストに追加
            $('#todoList').append(todoItem);
            // 入力欄を空にする
            $('#taskInput').val('');
        } else {
            // console.log('タスクが入力されていません。');
        }
    });

    // 完了ボタンの機能（斜線をトグル）
    $('#todoList').on('click', '.finButton', function() {
        const taskElement = $(this).siblings('li');
        const isCompleted = taskElement.css('text-decoration').includes('line-through');
        taskElement.css('text-decoration', isCompleted ? 'none' : 'line-through');
        console.log(isCompleted ? 'タスクが未完了に戻りました:' : 'タスクが完了しました:', taskElement.text());
    });

    // 削除ボタンの機能
    $('#todoList').on('click', '.delButton', function() {
        const todoItem = $(this).closest('.todoItem');
        todoItem.remove();
        console.log('タスクが削除されました');
    });
});

// todoItemを作成する関数
function createTodoItem(taskValue) {
    // span要素を作成,todoItemというクラス名を設定
    const todoItem = $('<span>').addClass('todoItem');

    // li要素を作成してタスク内容を設定
    const taskElement = $('<li>').text(taskValue);

    // 完了ボタンを作成
    const finButton = $('<input>').attr({
        type: 'button',
        value: 'finish'
    }).addClass('finButton');

    // 削除ボタンを作成
    const delButton = $('<input>').attr({
        type: 'button',
        value: 'delete'
    }).addClass('delButton');

    // span要素に子要素を追加
    todoItem.append(taskElement, finButton, delButton);

    // 作成したtodoItemを返す
    return todoItem;
}

