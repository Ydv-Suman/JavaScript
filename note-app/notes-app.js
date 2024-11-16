// DOM document object Model

// query and remove
// const p = document.querySelector('p2')
// p.remove()

// query all and remove 
const allP = document.querySelectorAll('p')
allP.forEach(function(p){
    p.remove()
})

// add a new element
const addParagraph = document.createElement('p')
addParagraph.textContent = 'This a update using JS'
document.querySelector('body').appendChild(addParagraph)