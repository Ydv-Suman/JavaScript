// const pTag = document.querySelectorAll('p')
// pTag.forEach(function(allP){
//     if (allP.textContent.includes('walk')){
//         allP.remove()
//     }
// })

const todo = [{
    title: 'Exercise',
    completed: false
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

//shows how many todos left to be completed
let count = 0
todo.forEach(function(todos){
    if (!todos.completed)
        count++
})
const addHead = document.createElement('h2')
addHead.textContent = `There are ${count} todos left to be completed.`
document.querySelector('body').appendChild(addHead)

//add a p for each todo above
todo.forEach(function(todos){
    if (!todos.completed){
        const notCompleted = todos.title
        const addParagraph = document.createElement('p')
        addParagraph.textContent = notCompleted
        document.querySelector('body').appendChild(addParagraph)
    }
})