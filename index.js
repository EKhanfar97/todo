typeTask = document.querySelector(".add")
addTask = document.querySelector(".ok")
itemsList = document.querySelector(".list")
addTask.onclick = todoTask
let items = []
function todoTask() {
    let taskValue = typeTask.value
    items.push(taskValue)
    console.log(items)
    let data = ' '
    for (let index = 0; index < items.length; index++) {
        data += `
        <input type="checkbox" name="${items[index]}" id="${items[index]}">
        <label for="${items[index]}"> ${items[index]}</label><br>

        `
    }
    typeTask.value = ""
    itemsList.innerHTML = data
    let checkboxes = document.querySelectorAll('.list input');
for (let i = 0; i < checkboxes.length; i++) { // تصحيح هنا
    checkboxes[i].addEventListener('change', function () {
        if (this.checked)
            this.nextElementSibling.style.textDecoration = 'line-through'; // تم تصحيح الأمر هنا
        else
            this.nextElementSibling.style.textDecoration = 'none'; // تم تصحيح الأمر هنا
    });
}
}
