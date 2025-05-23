document.querySelector('#button').onclick = function () {
      const inputField = document.querySelector('#content input');
      const taskText = inputField.value.trim();

      if (taskText === '') {
        alert("Please Enter a Task");
        return;
      }

      // Create elements
      const taskContainer = document.createElement('div');
      taskContainer.className = "tasks lg:text-xl font-medium bg-white lg:p-5  p-3 lg:w-full  flex flex-row items-center justify-between   rounded hover:bg-white/70  transition";

      const taskContent = document.createElement('span');
      taskContent.className = "task-content";
      taskContent.innerText = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = "delete text-red-500 hover:cursor-pointer hover:text-red-700";
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

      // Append elements
      taskContainer.appendChild(taskContent);
      taskContainer.appendChild(deleteBtn);
      document.querySelector('#task').appendChild(taskContainer);

      // Delete functionality
      deleteBtn.onclick = function () {
        taskContainer.remove();
      };

      // Toggle completed state
      taskContent.onclick = function () {
        taskContent.classList.toggle('line-through');
        taskContent.classList.toggle('text-green-500');
      };

      // Clear input
      inputField.value = '';
    };
