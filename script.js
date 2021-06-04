// This is a little function that does just one thing.
// This is clean code :-)
function createListItem(daysUntil, text){
  return `<li>${daysUntil} ${text}</li>`;
}
// How many places would we have to change the code if we wanted to:
// - change the way got todays date?
// - add a smiley face to every list item?
const showSmile = function() {
  return ':-)';
}
// This populates the day until when the button is clicked
$("#trigger1").click(function(){
  const holidayDates = [
    [new Date(2021,11,25), ('days until Christmas Day')], 
    [new Date(2022,0,01), ('days until New Years Day')], 
    [new Date(2022,1,14), ('days until Valentines Day')]];

var today = new Date();

var todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  holidayDates.forEach((item) => 
  {const calcDaysUntil = Math.ceil((item[0].getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
   
   const countdownResult = createListItem(calcDaysUntil, item[1]);
    $("#days-until").append(countdownResult).append(showSmile);
  });
})

// This populates the days until when the mouse hovers over the image
$("#trigger2").mouseover(function(){
  const holidayDates = [
    [new Date(2021,11,25), ('days until Christmas Day')], 
    [new Date(2022,0,01), ('days until New Years Day')], 
    [new Date(2022,1,14), ('days until Valentines Day')]];

var today = new Date();

var todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  holidayDates.forEach((item) => 
  {const calcDaysUntil = Math.ceil((item[0].getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
   
   const countdownResult = createListItem(calcDaysUntil, item[1]);
     $("#days-until").append(countdownResult).append(showSmile);
  });
})