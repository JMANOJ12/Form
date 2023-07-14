const inputBox = document.getElementById('input-box'); 
const listContainer = document.getElementById('list-container'); 


function addTask() { 
    if (inputBox.value === '') { 
        alert("You must write something here"); 
    }
     else { 
        let li = document.createElement('li'); 

        // This would be adding the text to the li from the input field
        li.innerHTML = inputBox.value; 
        // the list would needed to be displayed under the list contianer
        listContainer.append(li); 
        let span = document.createElement("span"); 
        // Cross Icon
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
     }
     inputBox.value = ""; 
     saveData(); // Saving whenever we add a new task
}

listContainer.addEventListener("click" , function(e){ 
    if (e.target.tagName == "LI") { 
        e.target.classList.toggle("checked"); 
        saveData();
    } else if (e.target.tagName === "SPAN") { 
        e.target.parentElement.remove(); 
        saveData();
    }
}, false)

function saveData() { 
    // Saving the contents in our browser
    localStorage.setItem("data" , listContainer.innerHTML); 
}


function showTask(){ 
    listContainer.innerHTML = localStorage.getItem("data"); 

}

showTask();