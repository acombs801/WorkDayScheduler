//When the planner is opened Todays date and time is shown on top

//Under the date are time blocks for each hour of the work day'9-5'

//User can click on each individual time block and add an event

//When event is added the user is able to save to the planner using 'local storage'

//When page is refreshed the events persist

var todaysDate = moment().format('LLL');
    console.log(todaysDate);
var event = localStorage.getItem("Event");
    

    
$("#currentDay").append(todaysDate);

var container = $(".container");

var times = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm", "5pm"];

for (let i = 0; i < times.length; i++) {
    var row = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("time-block col-1").text(times[i]);
    var textArea = $("<textarea>").addClass("col-10").attr("id",times[i]);
    var button = $("<button>").addClass("saveBtn col-1");
    container.append(row);
    row.append(timeBlock, textArea, button);
}



$(".saveBtn").on("click", function(){
    var eventContent = $(this).prev().val();
    var timeEl = $(this).prev().prev().text();

    localStorage.setItem(JSON.stringify(timeEl).replace(/["']/g, ""), JSON.stringify(eventContent));
    // localStorage.setItem("Time", JSON.stringify(timeEl));


    console.log(timeEl);
    console.log(eventContent);
  
});

   function renderSavedData() {
    //  var saved9am = JSON.parse(localStorage.getItem("9am"));
    //  var saved10am = JSON.parse(localStorage.getItem("10am"));
    for (let i = 0; i < localStorage.length; i++) {
        console.log(document.getElementById(localStorage.key(i)));
        if(document.getElementById(localStorage.key(i)) !== null){
        
        document.getElementById(localStorage.key(i)).value = localStorage.getItem(localStorage.key(i)).replace(/["']/g, "");
        }
    };

};
   renderSavedData(); 
 



