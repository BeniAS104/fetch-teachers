"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

  // Function to initialize the Web App
 async function initApp() {
    console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
    const teachers = await getTeachers();
    console.log (teachers);
  displayTeachers(teachers);
  displayTeachersGrid(teachers);
  }

async function getTeachers() {
  const response = await fetch ("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json ")
  const data = await response.json();
  return data;
}

function displayTeachers(teachers) {
    const teachersList = document.querySelector("#teachers-list");

  for (const teacher of teachers) {
    teachersList.insertAdjacentHTML ("beforeend",
      `
      <li>
        ${teacher.name}
      </li>
      `
      
    );
  }  
}

function displayTeachersGrid(teachers) {
  const teachersGrid = document.querySelector("#teachers-grid");
  
for (const teacher of teachers) {
  teachersGrid.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="grid-item">
      <img src="${teacher.image}" alt="${teacher.name}" />
      <h2>${teacher.name}</h2>
      <p>${teacher.title}</p>
      <a href>${teacher.mail}</a>
    </article>
  `
  );
}
}
