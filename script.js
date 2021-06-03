$("#trigger").ready(function(){
  $("button").click(function(){
  
  const holidayDates = [
    [new Date(2021,11,25), ('days until Christmas Day')], 
    [new Date(2022,0,01), ('days until New Years Day')], 
    [new Date(2022,1,14), ('days until Valentines Day')]];

  const today = new Date();
  
  holidayDates.forEach((item) => 
  {const calcDaysUntil = Math.ceil((item[0].getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
   
    const countdownResult = `<li> ${calcDaysUntil} ${item[1]}</li>`;
    $("#days-until").append(countdownResult);
  });
});

})
