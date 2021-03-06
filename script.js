const newTodo = document.getElementById('myText')

window.onload = async function(){
    let todoData = await fetchTodos();
    let todoList = todoData.data;
    document.getElementById('todo-list').innerHTML= "";
    todoList.forEach(createTodo);
}

async function add_record() {
    try{
        console.log('adding item to list');
        let todoCaption = newTodo.value;
        newTodo.value='';
        let data = JSON.stringify({
            caption:todoCaption
        });
        let res = await fetch('http://127.0.0.1:2222/api/todos', {
            method : 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await res.json();
        console.log('Success:', JSON.stringify(myJson));
    } catch(error){
        console.error('Error:', error);
    }
}

async function fetchTodos() {
    let res = await fetch('http://127.0.0.1:2222/api/todos');
    let data = await res.json();
    console.log(data);
    return data;
}

async function onClick() {
    await add_record();
    let todoData = await fetchTodos();
    let todoList = todoData.data;
    document.getElementById('todo-list').innerHTML='';
    todoList.forEach(createTodo);
}

function createTodo(todo){
    var list = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.setAttribute('id',todo._id);
    var status = document.createElement('input');
    status.setAttribute('type','checkbox');
    status.setAttribute('id','status-'+todo._id);
    var caption = document.createElement('span');
    caption.innerText=todo.caption;
    var del = document.createElement('a');
    del.setAttribute('onClick','deleteTodo()');
    del.innerHTML = '<i>      close</i>';
    li.appendChild(status);
    li.appendChild(caption);
    li.appendChild(del);
    list.appendChild(li);
}

async function deleteTodo() {
    let todo = event.target.parentNode.parentNode;
    console.log(todo.id);
    let delUri = "http://127.0.0.1:2222/api/todos/"+todo.id;
    await fetch(delUri, {
        method:'DELETE',
        headers:{'content-type':'application/json'}
    });

    let todoData = await fetchTodos();
    let todoList = todoData.data;
    document.getElementById('todo-list').innerHTML='';
    todoList.forEach(createTodo);
}


