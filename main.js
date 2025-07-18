$(document).ready(function() {
    $('#regButton').on('click', function() {
        alert("ボタンがクリックされました");
        const taskValue = $('#taskInput').val().trim();
        if(taskValue) {
            console.log(`入力されたタスク:${taskValue}`);
        } else {
            console.log('タスクが入力されていません')
        }
    });
});
