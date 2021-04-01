// Event Planner

// Declare Variables
var eventTbodyEl = $("#project-display");

var today = moment();

var events = 
    {eTime: 9,
    eText: ""
}

// Declare Functions

function getEvents() {
    var events = JSON.parse(localStorage.getItem("events"));
      printEvents();
  }; // End getEvents



// Print time grid and data
function printEvents() {
    var dynamicItems = ''
    for (var i = 9; i <13; i++) {
        dynamicItems += `      <div class="row time-block">
        <div class="col-sm-2 hour">${i} am</div>
        <textarea class="col-sm-8 description"></textarea>
        <button class="col-sm-2 saveBtn" id="save${i}">Save</button>
      </div>`
    } // End AM Loop

    for (var i=1;i<6;i++) {
        dynamicItems += `      <div class="row time-block">
        <div class="col-sm-2 hour">${i} am</div>
        <textarea class="col-sm-8 description"></textarea>
        <button class="col-sm-2 saveBtn" id="save${i}">Save</button>
      </div>`
     } // End PM Loop

     var containerEl = $(".container");

 containerEl.append(dynamicItems);


} // End printEvents


getEvents();

$("button").on("click", function(){
    console.log($(this))
    //sibilings
    //how to get textarea value with jquer
    //save that value with the time to local storage
})