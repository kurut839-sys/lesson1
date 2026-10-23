
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

const todayList = document.getElementById("today-list");
const fiveList = document.getElementById("five-list");

const todayBtn = document.getElementById("today-btn");
const fiveBtn = document.getElementById("five-btn");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || {
    today: [],
    five: []
};

let currentPlan = "today";

function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function renderList(plan, list) {
    list.innerHTML = "";

    tasks[plan].forEach(function (task, index) {
        const li = document.createElement("li");

        if (task.done) {
            li.classList.add("done");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;

        checkbox.addEventListener("change", function () {
            task.done = checkbox.checked;
            saveTasks();
            renderList(plan, list);
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        const del = document.createElement("button");
        del.className = "delete";
        del.textContent = "×";

        del.addEventListener("click", function () {
            tasks[plan].splice(index, 1);
            saveTasks();
            renderList(plan, list);
        });

        li.append(checkbox, span, del);
        list.appendChild(li);
    });
}

function renderAll() {
    renderList("today", todayList);
    renderList("five", fiveList);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    tasks[currentPlan].push({
        text: text,
        done: false
    });

    saveTasks();
    renderAll();

    input.value = "";
});

todayBtn.addEventListener("click", function () {
    currentPlan = "today";
    input.focus();
    document.getElementById("today-section").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

fiveBtn.addEventListener("click", function () {
    currentPlan = "five";
    input.focus();
    document.getElementById("five-section").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

input.addEventListener("focus", function () {
    input.placeholder = currentPlan === "today"
        ? "Today's task..."
        : "Your 5-year goal...";
});

renderAll();
