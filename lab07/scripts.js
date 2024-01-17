document.addEventListener("DOMContentLoaded",function() {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");

    let todos = [];

    //เพิ่มรายการใหม่เมื่อมีการคลิกปุ่ม "เพิ่ม"
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = {
                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
            renderTodoList();
            todoInput.value = "";
        }
    }

    //ลบรายการที่เพิ่ม
    function deleteTodo(index) {
        todos.splice(index,1);
        renderTodoList();
    }

    //สามารถกดเสร็จ/ยกเลิกได้
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    }
    

    //แสดงรายการ To do บนเว็บ
    function renderTodoList() {
        console.log(todos);
        todoList.innerHTML = "";

        for(let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;
            if(todoItem.completed) {
                listItem.classList.add("completed");
            }
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        }
    }

    // การกดปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);

    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function(event) {
        if(event.key === "Enter") {
            addTodo();
        }
    });
    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});