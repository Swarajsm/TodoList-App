 //selectors
 const todoInput = document.querySelector('.todo-input')
 const todoButton = document.querySelector('.todo-button')
 const todoList = document.querySelector('.todo-list')
 const filterOption = document.querySelector('.filter-todo')

 //Event Listener

 todoButton.addEventListener("click", addTodo);
 todoList.addEventListener('click', deleteCheck);
 filterOption.addEventListener('click', filterTodo)
 //Functions

function addTodo(event){
    //prevent from Submitting
    event.preventDefault();

    //TODO Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed /CheckMark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);

    //clear
    todoInput.value = " ";
} 

function deleteCheck(e){
    const item = e.target;
// delete an item
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
        todo.remove();
    });
    }

    //Check Mark
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
}
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display ='flex';
                }else{
                    todo.style.display="none"; 
                }
                }
    });
}

