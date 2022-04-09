var startIdx=0;   
var endIdx=50;
var paraText="A teacher's professional duties may extend beyond formal teaching. Outside of the classroom teachers may accompany students on field trips, supervise study halls, help with the organization of school functions, and serve as supervisors for extracurricular activities. In some education systems, teachers may have responsibility for student discipline.";
var inputText;
const dLenth=49;
var timeRemains=60;
var inputText;
const inputTextArray= inputText=document.getElementById("userText");
 

inputText.addEventListener('click', startGame);

function startGame() {
  let t = setTimeout(function(){startGame() }, 1000);
     if (timeRemains>0){
       timeRemains-=1; }
       document.getElementById("time").innerHTML=`${timeRemains}s`;
       showRunningText();
       displayAccuracy();
     } 

 function displayAccuracy(){
  var successCnt=0;
  var totCnt=0;
  var errors=0;
  var inputTextArray=document.getElementById("userText").value.toString().split(" ");   
  if (inputTextArray.length !=1){
  paraTextArray=paraText.split(" ");
  inputTextArray.forEach(myFunction);
  function myFunction(item) {
      if (paraTextArray.includes(item))
           { 
           successCnt+=1;
           totCnt+=1;
           }
           else {errors+=1;
              totCnt+=1;
           }

     }
  accuracy=Math.floor(successCnt/totCnt*100);
  document.getElementById("accuracy").innerHTML=`${accuracy}`;
  document.getElementById("errors").innerHTML=`${errors}`;
  } 
  let t = setTimeout(function(){displayAccuracy() }, 500);   
} 


 function showRunningText(){  
  displayedText= paraText.substring(startIdx,endIdx);  
  startIdx+=1;   
  endIdx+=1;  
  document.getElementById("place_text").innerHTML=displayedText;
  let t = setTimeout(function(){ showRunningText() }, 2000);
 }



