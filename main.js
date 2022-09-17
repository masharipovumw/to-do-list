const input = document.querySelector('#input')
const button = document.querySelector('#button')
const list = document.querySelector('#list')

let todos = []

button.onclick = () => {
    clear()
    add()
    render()
}

function clear() {
    list.innerHTML = ''
}

function add() {
    let text = input.value
    todos.push(text)
}

function render() {
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i]
        let li = document.createElement('li')
        li.className = 'list-group-item mb-2'

        let div = document.createElement('div')
        div.className = 'd-flex'

        let span = document.createElement('span')
        span.className = 'w-100'
        span.textContent = todo

        let button = document.createElement('button')
        button.className = 'btn btn-danger'
        button.textContent = 'X'

        button.onclick = () => {
            todos.splice(i, 1)
            clear()
            render()
        }
        div.append(span, button)
        li.appendChild(div)
        list.appendChild(li)
    }
}
