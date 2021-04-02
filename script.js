// Event Planner

// Declare Variables
var eventTbodyEl = $("#project-display");
var today = moment();
 
//    Array Definition:
// 0=9  1=10  2=11  3=12  4=1  5=2  6=3  7=4  8=5
var events = ["","","","","","","","",""]
    
// Declare Functions

function getEvents() {
    events = JSON.parse(localStorage.getItem("events"));
    console.log(events);
      printEvents();
  }; // End getEvents



// Print time grid and data
function printEvents() {
    var dynamicItems = ''
    for (var i = 9; i <13; i++) {
        curHour=today.format("h");
        dynamicItems += `<div class="row time-block">
        <div class="col-sm-2 hour">${i} am</div>
        <textarea id="${i}" class="col-sm-8 description `
          // Set text background based on time
          if (i < curHour){dynamicItems += `greybackground">`}
          else if (i == curHour){dynamicItems += `redbackground">`}
          else {dynamicItems += `greenbackground">`};

          // Set event text if not null
          if (i==9){dynamicItems += `${events[0]}`}
          else if (i==10){dynamicItems += `${events[1]}`}
          else if (i==11){dynamicItems += `${events[2]}`}
          else if (i==12){dynamicItems += `${events[3]}`};
        
        dynamicItems += `</textarea><button class="col-sm-2 saveBtn" id="save"><img src="save.jpg" width="25px" height="25px" /></button></div>`
      //console.log(dynamicItems);
    } // End AM Loop

    for (var i=1;i<6;i++) {
        dynamicItems += `<div class="row time-block">
        <div class="col-sm-2 hour">${i} pm</div>
        <textarea id="${i}" class="col-sm-8 description `
          if (i < curHour){dynamicItems += `greybackground">`}
          else if (i = curHour){dynamicItems += `redbackground">`}
          else {dynamicItems += `greenbackground">`};

                    // Set event text if not null
                    if (i==1){dynamicItems += `${events[4]}`}
                    else if (i==2){dynamicItems += `${events[5]}`}
                    else if (i==3){dynamicItems += `${events[6]}`}
                    else if (i==4){dynamicItems += `${events[7]}`}
                    else if (i==5){dynamicItems += `${events[8]}`};

      dynamicItems += `</textarea><button class="col-sm-2 saveBtn" id="save"><img src="save.jpg" width="25px" height="25px" /></button></div>`
     } // End PM Loop

    var containerEl = $(".container");
    //console.log(dynamicItems);
    containerEl.append(dynamicItems);

} // End printEvents



// Display date
$("#currentDay").text(today.format("dddd, MMM Do"));

getEvents();

$("button").on("click", function(){
    var curID=$(this).siblings()[1].id;
    var curTxt=$(this).siblings()[1].value;

console.log(curID);
console.log(curTxt);

    if (curID==9){events[0]=curTxt}
    else if (curID==10){events[1]=curTxt}
    else if (curID==11){events[2]=curTxt}
    else if (curID==12){events[3]=curTxt}
    else if (curID==1){events[4]=curTxt}
    else if (curID==2){events[5]=curTxt}
    else if (curID==3){events[6]=curTxt}
    else if (curID==4){events[7]=curTxt}
    else if (curID==5){events[8]=curTxt};

console.log(events);
localStorage.setItem("events", JSON.stringify(events));

    
          // Set event text if not null
          //if (i=9 && events[0].eText != ""){dynamicItems += `${envents[0].eText}`}
          //else if (i=10 && events[1].eText != ""){dynamicItems += `${envents[1].eText}`}
          //else if (i=11 && events[2].eText != ""){dynamicItems += `${envents[2].eText}`}
          //else if (i=12 && events[3].eText != ""){dynamicItems += `${envents[3].eText}`};

})