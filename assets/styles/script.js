// Variables
var timeBlockEl = $(".time-block");
var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
var currentHour = dayjs().hour();
var hourTimeNum = [];

for (var i = 0; i < timeBlockEl.length; i++) {
    var elementID = timeBlockEl[i].getAttribute("id");
    if (elementID.length === 6) hourTimeNum.push(parseInt(elementID[5]));
    if (elementID.length === 7)
        hourTimeNum.push(parseInt(elementID[5] + elementID[6]));
}
// function to update class time-blocks
function timeCheck() {
    for (var i =0; i < hourTimeNum.length; i++)
    if (hourTimeNum[i] < currentHour) {
        timeBlockEl[i].classList.add('past');
    } else if (hourTimeNum[i] == currentHour) {
        timeBlockEl[i].classList.add('present');
    } else if (hourTimeNum[i] > currentHour) {
        timeBlockEl[i].classList.add('future');
    }
}
// save user input
function renderUserInput() {
    for (var i = 0; i < timeBlockEl.length; i++) {
        var key = timeBlockEl[i].getAttribute("id");
        var value = localStorage.getItem(key);
        timeBlockEl[i].children[1].innerText = value;
    }
}
// save user inputed text into local storage
function saveUserInput() {
    var value = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, value);
}

setInterval(function() {
    var today = dayjs().format("MM DD, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(today);
}, 1000);

$(".saveBtn").on("click", saveUserInput);

timeCheck();
renderUserInput();