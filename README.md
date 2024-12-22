* Name:Sayantani Das
* Company: CODTECH IT SOLUTIONS
* ID: CT08DKU
* Domain: Frontend Web Development
* Duration: December 20th, 2024 to January 20th, 2025
* Mentor: NEELA SANTHOSH


**Overview of the Project:**

**Project: TO-DO LIST APPLICATION WITH LOCAL STORAGE**

**Objective**
The primary purpose of the To-Do List application is to create a user-friendly tool to manage daily tasks effectively. It allows users to add, track, and organize tasks, with the added benefit of persistence through browser local storage.

![Screenshot (315)](https://github.com/user-attachments/assets/5d4598ea-924a-4af3-8f68-bb896f36ba74)

Specific Objectives: 

***Task Management:*** Enable users to add, mark as completed, and delete tasks.
***Filtering Options:*** Provide a way to filter tasks by their status (e.g., completed, pending).
***Data Persistence:*** Use local storage to ensure tasks persist even after the browser is closed or refreshed.
***Enhanced User Experience:*** Make the interface intuitive, visually appealing, and responsive.
***Lightweight Application:*** Use minimal resources to ensure smooth operation in any browser.

**Key Activities**
Core Features and Workflow

1) Adding Tasks:
* Users can input a task in the input box and press either the "Enter" key or click the "Add" button.
* New tasks are saved in the todos array and displayed on the screen.
* Tasks are stored in local storage for persistence.

2) Displaying Tasks:
* Tasks are rendered dynamically in the task list (ul.todos).
* The application differentiates tasks by their status (completed or pending).

3) Marking Tasks as Completed:
* Each task includes a checkbox. When checked, the task is marked as "completed," and its title is   displayed with a strikethrough effect.

4) Deleting Tasks:
* Users can delete individual tasks using the delete button (X icon) next to each task.
* There’s also a "Delete All" option to remove all tasks at once.

5) Filtering Tasks:
* Filters allow users to view only completed or pending tasks, simplifying task management.

6) Local Storage Integration:
* The application retrieves saved tasks from local storage upon initialization.
* Changes to the tasks (add, delete, update status) are synced back to local storage.

**Enhancements for UX**
* Empty state image (empty.svg) displayed when no tasks are available.
* Smooth animations and transitions for buttons and list interactions.
* Responsive design to work across devices.

![Screenshot (319)](https://github.com/user-attachments/assets/63c4c4d5-3418-4ded-b6bc-1b54e341010c)
![Screenshot (318)](https://github.com/user-attachments/assets/b3ffc270-cd2b-4573-b217-daa9ef05988d)
![Screenshot (317)](https://github.com/user-attachments/assets/71f457b2-4e31-41aa-b214-742c86e848bc)
![Screenshot (316)](https://github.com/user-attachments/assets/b6d6f15b-53f0-4a06-b42f-270c879fa9af)


**Technologies Used**
Front-End:
* HTML5: Provides the structure of the application, including input fields, buttons, and task display lists.
* CSS3: Styles the interface to make it visually appealing with features like:
        ** A blurred background using backdrop-filter.
        ** Hover effects on buttons and tasks.
        ** Flexbox for responsive layouts.
        ** Smooth animations and transitions.
* JavaScript (ES6): Implements the dynamic functionality of the application:
        ** DOM manipulation to update the task list dynamically.
        ** Event listeners for user interactions.
        ** Local storage API for data persistence.

**Conclusion:**

This To-Do List application is an excellent demonstration of a lightweight, functional web tool that addresses daily task management needs. Its integration with local storage ensures persistence, while its modern design and responsive functionality make it accessible on various devices. It serves as a solid foundation for more advanced task management tools.
