const todo = ["Exercise", "Code", "Video Game", "Appointment", "Movie"];
// Delete the 3rd item
// add a new onto the end
// remove th first item from the list
console.log(todo.splice(2, 1));
console.log(todo);
todo.push("Buy food");
console.log(todo);
console.log(todo.shift());
console.log(todo);
console.log('\n');
console.log(`I have ${todo.length} to do lists.`);
console.log(`The first to do is: ${todo[0]}.\nThe last to do is: ${todo[todo.length-1]}.`);
