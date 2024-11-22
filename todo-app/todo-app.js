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
    title: 'play Video Game',
    completed: false
},{
    title: 'play football',
    completed: true
},{
    title: 'Appointment',
    completed: true
}];

// setup a div contain for todos
// setup filters(searchText) and wire up a new input to change it
// create a  renderTodos function to render the latest filtered data

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredTodos = filteredTodos.filter(function(todo){
        // if(filters.hideCompleted){
        //     return !todo.completed
        // } else {
        //     return true
        // }
        return !filters.hideCompleted || !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    filteredTodos.forEach(function(todos){
        const todoElt = document.createElement('p')
        todoElt.textContent = todos.title
        document.querySelector('#todos').appendChild(todoElt)
    })
    //shows how many todos left to be completed
    document.querySelector('#summary').innerHTML =''
    let count = 0
    filteredTodos.forEach(function(todos){
        if (!todos.completed)
            count++
    })
    const addHead = document.createElement('p')
    addHead.textContent = `There are ${count} todos left to be completed.`
    document.querySelector('#summary').appendChild(addHead)

//add a p for each todo above
    filteredTodos.forEach(function(todos){
        if (!todos.completed){
            const notCompleted = todos.title
            const addParagraph = document.createElement('p')
            addParagraph.textContent = notCompleted
            document.querySelector('#summary').appendChild(addParagraph)
        }
    })
}
renderTodos(todo,filters)
document.querySelector('#inputTodo').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todo, filters)
    console.log(e.target.value)
})

// create a form with a signle input for todo text
// setup a submit handler an d cancel the default action
// add a new item to the todos array with that text data (completed value of false)
// Rerender the application
// clear the input field value

document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault()
    todo.push({
        title: e.target.elements.enterTodo.value,
        completed: false
    })
    renderTodos(todo, filters)
    e.target.elements.enterTodo.value = ''
})

// create a check box and setup event listenr 'hide completed'
// create new hidecompleted filter(default false)
// update hidecompleted an Rerender list on checkbox chanage
// set renderTodos to remove competed items

document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todo, filters)
})



// //shows how many todos left to be completed
// let count = 0
// todo.forEach(function(todos){
//     if (!todos.completed)
//         count++
// })
// const addHead = document.createElement('h2')
// addHead.textContent = `There are ${count} todos left to be completed.`
// document.querySelector('body').appendChild(addHead)

// //add a p for each todo above
// todo.forEach(function(todos){
//     if (!todos.completed){
//         const notCompleted = todos.title
//         const addParagraph = document.createElement('p')
//         addParagraph.textContent = notCompleted
//         document.querySelector('body').appendChild(addParagraph)
//     }
// })

// using id to access the tag
// # is used for id

// document.querySelector('#addItem').addEventListener('input', function(e){
//     console.log(e.target.value)
// })

// document.querySelector('#add-button').addEventListener('click', function(e){
//     e.target.textContent = 'added'
// })

// document.querySelector('#remove-button').addEventListener('click', function(e){
//     // using class
//     // . used for class
//     document.querySelectorAll('.p').forEach(function(todo){
//         todo.remove()
//     })
//     e.target.textContent = 'removed'
// })