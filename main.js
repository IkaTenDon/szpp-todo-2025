$(document).ready(function() {
    $('#regButton').on('click', function() {
        const taskValue = $('#taskInput').val().trim();
        if(taskValue) {
            const todoItem = createTodoItem(taskValue);
            $('#todoList').append(todoItem);
            $('#taskInput').val('');
        } else {
            alert('タスクが入力されていません')
        }
    });

    $('#todoList').on('click', 'finButton', function() {
        const taskElement = $(this).siblings('li');
        const isCompleted = taskElement.css('text-decoration').includes('line-through');
        taskElement.css('text-decoration', isCompleted ? 'none' : 'line-through');
        console.log(isCompleted ? 'タスクが未完了に戻りました:' : 'タスクが完了しました:', taskElement.text());
    });

    $('#todoList').on('click', '.delButton', function() {
        const todoItem = $(this).closest('.todoItem');
        todoItem.remove();
        console.log('タスクが削除されました');
    });
});


function createTodoItem(taskValue){
    const todoItem = $('<li>').addClass("todoItem");
    const taskElement = $('<li>').text(taskValue);
    const finButton = $('<input>').attr({
        type: 'button',
        value: 'finish'
    }).addClass('finButton');
    const delButton = $('<input>').attr({
        type: 'button',
        value: 'delete'
    }).addClass('delButton');
    todoItem.append(taskElement, finButton, delButton);
    
    return todoItem;
}
