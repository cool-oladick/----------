let x = prompt("Введіть день тижня:")
if (isNaN(x)) {
    alert("Ми не дурні! Оберіть цифру!")
}
else {
    if (x >= 1 && x <= 5) {
        alert("Ви обрали будній день тижня.");
    }
    else if (x == 6 || x == 7) {
        alert("Вітаю! Ви обрали вихідний день.");
    }
    else {
        alert("Введіть правильне значення від 1 до 7");
    }
}