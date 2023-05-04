
window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#task-input");
    const list_el = document.querySelector("#tasks");

    var count = 0;

    form.addEventListener('submit', (e) => {
       e.preventDefault();

       
       // creating the task via user input
       const newTask = input.value;

       const taskElement = document.createElement("div");
       taskElement.classList.add("newTask");

         // creating the content for each task element. 
         const taskContents = document.createElement("div");
         taskContents.classList.add("content");
         taskContents.innerText = newTask;
         count++;
         document.getElementById('counter').innerHTML = count;

       taskElement.appendChild(taskContents);       


       // creating the delete button for each task
       const taskUI = document.createElement("div");
       taskUI.classList.add("UI")

          const taskDelete = document.createElement("button")
          taskDelete.classList.add("delete");
          taskDelete.innerHTML = "Delete This Task";
          taskUI.appendChild(taskDelete);


       taskElement.appendChild(taskUI);

       list_el.appendChild(taskElement); 
       
    
       input.value = " ";   

       //creating the 'delete' button functionalities on click
       taskDelete.addEventListener('click', () => {
          list_el.removeChild(taskElement);
          count -= 1;
          document.getElementById('counter').innerHTML = count;
       })
    })
})