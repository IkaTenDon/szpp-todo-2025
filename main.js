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
