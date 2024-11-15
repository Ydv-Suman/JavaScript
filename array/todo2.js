// sorting by boolean value

const todo = [{
    title: 'Exercise',
    completed: true
},{
    title: 'code',
    completed: false
},{
    title: 'Video Game',
    completed: false
},{
    title: 'Appointment',
    completed: true
}];
const updateTodo = function(todos){
    todos.sort(function(todo1, todo2){
        if(!todo1.completed && todo2.completed){
            return -1;
        } else if (!todo2.completed && todo1.completed){
            return 1;
        } else {
            return 0;
        }
    })
}
updateTodo(todo);
console.log(todo);