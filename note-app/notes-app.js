const notes = [{
    topic: 'call',
    descp: 'friend'
},{
    topic: 'fitness',
    descp: 'exercise'
},{
    topic: 'read',
    descp: 'book'
}]

const filters = { // creating object to store data
    searchText: ''
}
// const user = {
//     name: 'Suman',
//     age: 21
// }
// userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}.`) // must use user not userJSON

// localStorage.setItem('location', 'Monroe')
// console.log(localStorage.getItem('location'))
// // delete data
// localStorage.removeItem('location')


const renderNote = function(notes,filters){
    //limit thee notes to just those that passes the filter
    const filteredNotes =notes.filter(function(note){ 
        return note.topic.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    // Clearing notes before we add something
    // innerHTML allows to set new HTML value
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(notes){
        const noteElt = document.createElement('p')
        noteElt.textContent = notes.topic
        document.querySelector('#notes').appendChild(noteElt)
    })
}
renderNote(notes, filters)
document.querySelector('#input-text').addEventListener('input', function(e){
    // when search value is change, it update the filters and call the function again
    filters.searchText = e.target.value
    renderNote(notes, filters)
})


document.querySelector("#form").addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value =''
})

document.querySelector('#sort-by').addEventListener('change', function(e){
    console.log(e.target.value)
})


// // checkBox
// document.querySelector('#label').addEventListener('change',function(e){
//     console.log(e.target.checked)
// })



// document.querySelector('#create-note').addEventListener('click', function(e){
//     filtersNote.searchText = e.target.value
//     renderNote(note, filtersNote)
// })

// document.querySelector('#remove-all').addEventListener('click', function(){
//     // . is used for class
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//      })
//     //e.target.textContent = 'Remove'
// })

// DOM document object Model

// query and remove
// const p = document.querySelector('p2')
// p.remove()

// query all and remove 
// const allP = document.querySelectorAll('p')
// allP.forEach(function(p){
//     p.remove()
// })

// add a new element
// const addParagraph = document.createElement('p')
// addParagraph.textContent = 'This a update using JS'
// document.querySelector('body').appendChild(addParagraph)


// // accessing the button
// // if only one button
// document.querySelector('button').addEventListener('click', function(e){
//     e.target.textContent = 'Add'
// })

// // provide index to target specific button
// // otherwise it will only access the first button
// document.querySelectorAll('button')[1].addEventListener('click', function(e){
//     e.target.textContent = 'Remove'
// })

// alternate method
// # for id