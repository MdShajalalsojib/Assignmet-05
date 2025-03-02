let taskCoun = document.getElementById("task-number");
const addNumber = document.getElementById("nad-number")
let comBut = document.getElementsByClassName("completed-btn");
const historyContainer = document.querySelector(".history-container");

function addHistory(title, time){
    historyContainer.innerHTML += `
        <div>
            <h2>${title}</h2>
            <p>${time}</p>
        </div>
        <hr>
    `
}

[...comBut].forEach(btn => {
    btn.addEventListener('click', function(e){
        e.target.disabled = true
        e.target.style.opacity = .5
        const title = e.target.parentElement.parentElement.parentElement.querySelector('h2').innerText;
        const time = new Date().toLocaleString()

        addHistory(title,time)

        let tasks = taskCoun.innerText - 1
        taskCoun.innerText = tasks

        tasks = +addNumber.innerText + 1
        addNumber.innerText = tasks
        
    })
})
     
const clearBtn = document.querySelector(".clear-btn");

if(clearBtn){
    clearBtn.addEventListener("click", function(){
        location.reload()
    });
}