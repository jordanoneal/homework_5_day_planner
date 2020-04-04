$("#currentDay").text(moment().format("LL")); //today's date
var containerEl = $(".container") //main container to hold data

var currentHour = new Date().getHours(); //current hour
console.log(currentHour); //test if current hour is logged
var workHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; //array of work schedule hours
var todos = []; // array to hold todo items

for(var i=0; i < workHours.length; i++) {
    console.log(i)
    createTimeBlock(i);
}

function createTimeBlock(currentIndex) {
    //add new row
    var newRow = $("<div>");
    newRow.addClass("row");
    containerEl.append(newRow);
    
    //add hour column
    var hourColumn = $("<div>");
    hourColumn.addClass("time-block col-md-2");
    newRow.append(hourColumn);
    //hour text area
    var hourEl = $("<h2>")
    hourEl.addClass("hour");
    hourEl.text(convertedHours(workHours[currentIndex]))
    hourColumn.append(hourEl);
    
    //todo column
    var rowColumn = $("<div>");
    rowColumn.addClass("col-md-8");
    newRow.append(rowColumn);
    //todo text area
    var todoEl = $("<textarea>")
    todoEl.addClass(todoAddClassColor(workHours[currentIndex]))
    todoEl.val()
    rowColumn.append(todoEl);
    
    //add button column
    var buttonColumn = $("<div>");
    buttonColumn.addClass("col-md-2");
    newRow.append(buttonColumn);
    //add button
    var buttonEl = $("<button>");
    buttonEl.addClass("saveBtn")
    buttonColumn.append(buttonEl);
    //add save icon image
    var saveIcon = $("<i>")
    saveIcon.addClass("far fa-save")
    buttonEl.append(saveIcon);
    
    }
    
    function convertedHours(hours) {
        var newHour;
        if(hours>12) {
            newHour = (hours -12) + "PM"
        }
        else if(hours=== 12) {
            newHour =hours + "PM"
        }
        else {
            newHour = hours + "AM"
        }

        return newHour;
    }

    function todoAddClassColor(hours) {
        if(currentHour > hours) {
            return "past";
        }
        else if (currentHour === hours) {
            return "present"
        }
        else {
            return "future"
        }

    }

    $(".saveBtn").on("click", function(event) {
        event.preventDefault()
        storeTodos();



    })

    function init() {
        var storedTodos = JSON.parse(localStorage.getItem("todos"));

        if (storedTodos === null) {
            todos = storedTodos
        }

    }

    function storeTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("it ran");
    }
