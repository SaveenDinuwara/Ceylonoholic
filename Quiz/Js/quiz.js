//function for timer
time = setInterval(quiztimer, 1000); 
var time;
var sec = 60; 
var minutes = parseInt(sec/60)   
var seconds = parseInt(sec%60) 
function quiztimer() {
    if(seconds<10){
      seconds=`0${seconds}`
    }
    if(minutes<10){
      minutes=`0${minutes}`
    }
    document.getElementById('timer').innerHTML = minutes+":"+seconds;
    sec--;   
    minutes = parseInt(sec/60)
    seconds = parseInt(sec%60)
    console.log(sec)
    if (sec === -1) {
        clearInterval(time);
        //disable submit button after time excedes
        document.getElementById("submitbtn").disabled = true; 
        quizsubmit();
    }
}
//function for submit quiz
function quizsubmit() {
  var totalmarks = 0
  clearInterval(time);//time freeze when submit button clicked

  document.getElementById("resultbox").style.display="block"
  window.location = '#resultbox';
  document.getElementById("quiz").style.display = "none"

  function getRadioValue (quename) {
    var radionumber = document.getElementsByName(quename);
    for (var i = 0, length = radionumber.length; i < length; i++) {
      if (radionumber[i].checked) {
        //answer  saved with cheked value
        var answersvalue = Number(radionumber[i].value);
      }
      radionumber[i].disabled = true;
    }
    // deduct marks for unselected question
    if (isNaN(answersvalue)) {
    answersvalue = -1;
  }
  return answersvalue;
  }
  // calculate marks using getRadiovalue function
  quename=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]
  var calculatemarks
  for(var i=0; i<10; i++){
    calculatemarks=getRadioValue(quename[i])
    console.log(calculatemarks)
    totalmarks=calculatemarks+totalmarks
    
  }
//function for display answer is correct  if correct answer given 
  function correct(number){
    return("Your Answer for Question no."+number+" is correct ")
  }

   //function for display correct answer if given answer is incorrect
   function incorrectans (correctno, quenumber) {
    return ("Correct answer for question no." + quenumber + ": &nbsp;<strong>" +
    (document.getElementById(correctno).textContent) + "</strong>");
  }
   

  if (getRadioValue('q1') === -1) {
    document.getElementById('correctans1').innerHTML = incorrectans('correct1', 1);
    document.getElementById('correctans1').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans1').innerHTML = correct(1);
    document.getElementById('correctans1').style.backgroundColor="#53ff1a"
  }
  if (getRadioValue('q2') === -1) {
    document.getElementById('correctans2').innerHTML = incorrectans('correct2', 2);
    document.getElementById('correctans2').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans2').innerHTML = correct(2);
    document.getElementById('correctans2').style.backgroundColor="#53ff1a"
  }
  if (getRadioValue('q3') === -1) {
    document.getElementById('correctans3').innerHTML = incorrectans('correct3', 3);
    document.getElementById('correctans3').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans3').innerHTML = correct(3);
    document.getElementById('correctans3').style.backgroundColor="#53ff1a"
  }
  if (getRadioValue('q4') === -1) {
    document.getElementById('correctans4').innerHTML = incorrectans('correct4', 4);
    document.getElementById('correctans4').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans4').innerHTML = correct(4);
    document.getElementById('correctans4').style.backgroundColor="#53ff1a"
  }
  if(getRadioValue('q5') === -1){
    document.getElementById('correctans5').innerHTML = incorrectans('correct5', 5);
    document.getElementById('correctans5').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans5').innerHTML = correct(5);
    document.getElementById('correctans5').style.backgroundColor="#53ff1a"
  }
  if(getRadioValue('q6') === -1){
    document.getElementById('correctans6').innerHTML = incorrectans('correct6', 6);
    document.getElementById('correctans6').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans6').innerHTML = correct(6);
    document.getElementById('correctans6').style.backgroundColor="#53ff1a"
  }
  if(getRadioValue('q7') === -1){
    document.getElementById('correctans7').innerHTML = incorrectans('correct7', 7);
    document.getElementById('correctans7').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans7').innerHTML = correct(7);
    document.getElementById('correctans7').style.backgroundColor="#53ff1a"
  }
  if(getRadioValue('q8') === -1){
    document.getElementById('correctans8').innerHTML = incorrectans('correct8', 8);
    document.getElementById('correctans8').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans8').innerHTML = correct(8);
    document.getElementById('correctans8').style.backgroundColor="#53ff1a"
  }
  if(getRadioValue('q9') === -1){
    document.getElementById('correctans9').innerHTML = incorrectans('correct9', 9);
    document.getElementById('correctans9').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans9').innerHTML = correct(9);
    document.getElementById('correctans9').style.backgroundColor="#53ff1a"
  }
  if(getRadioValue('q10') === -1){
    document.getElementById('correctans10').innerHTML = incorrectans('correct10', 10);
    document.getElementById('correctans10').style.backgroundColor="#ff4d4d"
  }else{
    document.getElementById('correctans10').innerHTML = correct(10);
    document.getElementById('correctans10').style.backgroundColor="#53ff1a"
  }
 
 
  var maxmarks = 20;

 // if total marks less than 0, set totalmarks 0

  if (totalmarks < 0){
    totalmarks =0;
  }

  var marks = "&nbsp; Your Score: " + totalmarks +"/" + maxmarks ;

  //print wishes according to total marks
  if (totalmarks === maxmarks) {
    marks = marks + "&nbsp; <strong>Superb! You got the full marks.</strong>";
  }else if (totalmarks >10) {
    marks = marks + "&nbsp; <strong>Good! </strong>";
  }else{
    marks = marks + "&nbsp; <strong>Weak! Try Again.</strong>";
  }

  //change background colour according to marks
  document.getElementById('usermarks').innerHTML = marks;
  if(totalmarks>10){
    document.getElementById("resultbox").style.backgroundColor="#53ff1a"
  }else{
    document.getElementById("resultbox").style.backgroundColor="#ff4d4d"
  }
}
