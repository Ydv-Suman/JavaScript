// const todo = ["Exercise", "Code", "Video Game", "Appointment", "Movie"];

// // // Delete the 3rd item
// // // add a new onto the end
// // // remove th first item from the list
// console.log('\n');
// console.log(todo.splice(2, 1));
// console.log(todo);
// todo.push("Buy food");
// console.log(todo);
// console.log(todo.shift());
// console.log(todo);
// console.log('\n');
// console.log(`I have ${todo.length} to do lists.`);
// console.log(`The first to do is: ${todo[0]}.\nThe last to do is: ${todo[todo.length-1]}.`);


// console.log('\n');
// // forEach
// todo.forEach(function(value, num){
//     console.log(`${num+1}. ${value}`);
//     // if (num == 1 || num == 2){
//     //     console.log(`${num}. ${value}`);
//     // }
// })



// for loop
// for (let i = 0; i < todo.length; i++){
//     console.log(`${i+1}. ${todo[i]}`);
// }

// convert array array of objects -> title, completed
// create function to remove a todo by status value very first object
// console.log('\n);
const newTodo = [{
    title: 'Exercise',
    status: 'Not Completed'
},{
    title: 'code',
    status: 'Completed'
},{
    title: 'Video Game',
    status: 'Not Completed'
},{
    title: 'Appointment',
    status: 'completed'
}];

const deleteTodo = function(newTodo, status){
    const index = newTodo.findIndex(function(newTodo){
        return newTodo.status.toLowerCase() === status.toLowerCase();
    })
    if (index > -1){
        newTodo.splice(index, 1);
    }
    return newTodo;
}
const given = deleteTodo(newTodo, 'Completed');
console.log(given);