 var objCount=60;	 
	 var maxX=750;
	 var maxY=550;

	 function randomInteger(min, max) {
	     var rand = min - 0.5 + Math.random() * (max - min + 1)
	     rand = Math.round(rand);
	     return rand;
	  }

function initObjects()
 {

  	var destinationSearch = document.getElementById("backgr");
	 while (destinationSearch.firstChild) {
	     destinationSearch.removeChild(destinationSearch.firstChild);
	 }


   	var destinationFound = document.getElementById("out");
 	 while (destinationFound.firstChild) {
 	     destinationFound.removeChild(destinationFound.firstChild);
 	 }


	 for(i=1; i<=objCount; i++)
	 {
		 
		 var newPicture=document.createElement('img');	  
	     destinationSearch.appendChild(newPicture);
	     newPicture.src = "alm"+i+".png";
		 newPicture.className='hiddenObject';
		 newPicture.style.position='absolute';
		 newPicture.style.left=randomInteger(0,maxX)+"px";	
		 newPicture.style.top=randomInteger(0,maxY)+"px";
		 

		 
		 
		 var newPictureFound=document.createElement('img');	  
	     destinationFound.appendChild(newPictureFound);
	     newPictureFound.src = "alm"+i+".png";
		 newPictureFound.className="foundObject";
		 newPictureFound.id="found"+i;
		 
		 var j=newPictureFound;
		 
		 (function(j) {
		 newPicture.addEventListener('click',function(e){ 
		 this.style.display="none"; 
		 j.className="";
		 j.style.opacity=1;
		 incrementScore(); 
		 }) }(j))
	 }
	
 }
 
 


 
 
 
   var img = document.getElementById("backgr");
document.getElementById("button").addEventListener('click',function(){
 doIt();
 })
 
document.getElementById("pause").addEventListener('click',function(){
	if(isPaused) return;
		isPaused=true;	
	var items = document.getElementsByClassName('hiddenObject');
	for (var i = 0; i < items.length; ++i) {
	    var item = items[i];  
	    item.style.display='none';
	}	
	 	clearInterval(idInterval);

 })
 
 
 
 document.getElementById("resume").addEventListener('click',function(){
		if(!isPaused) return; 
		isPaused=false;	 
 	var items = document.getElementsByClassName('hiddenObject');
 	for (var i = 0; i < items.length; ++i) {
 	    var item = items[i];  
 	    item.style.display='';
 	}	
	resumeTimer();
  })
 
 
 
 /* 
 var ElemPred = document.getElementsByClassName("pred");
for (var i = 0; i < ElemPred.length; i++) {
 var pred[i]=document.getElementById("pred");
   
}
 var ElemPredmet = document.getElementsByClassName("predmet");
for (var k = 0; k < ElemPredmet.length; k++) {
  var w[k]=document.getElementById("predmet");
} 
w[k].addEventListener('click',function(e){ 
w[k].style.display="none"; 
pred[i].style.opacity="1"; 
incrementScore(); 
})
 
 

 
  
img.addEventListener('click',function(e){
decrementScore();
})
 
 
 */
 var timerVal;
 var idInterval=0;;
 var score=0;
 var isPaused=false;
 function incrementScore()
 {
 score++;
 document.getElementById("siteScore").innerHTML=score;
 if(score==objCount) { alert('Вы выиграли!');
	 			clearInterval(idInterval);
	}

}


 function decrementScore()
 {
 return;
 score--;
 document.getElementById("siteScore").innerHTML=score;
 }


function clearAll()
 {
	 isPaused=false;
 	clearInterval(idInterval);
document.getElementById("siteScore").innerHTML=score;
 }
 
 
 

 function doIt() {

	 initObjects();
	 score=0;

       timerVal= 250; 
          document.getElementById("siteTime").style.fontSize = "40px";	
		  resumeTimer();
	  
	  }
		  
		  
function resumeTimer()
{

  idInterval = setInterval(function() {
     if (timerVal <= 20) {
         document.getElementById("siteTime").style.color = "red";
     }
     document.getElementById("siteTime").innerHTML = timerVal;
     if (timerVal == 0) {
         clearInterval(idInterval);
         alert("Время вышло!!!Вы проиграли!");
		 clearAll();
         document.getElementByTagName("p").innerHTML = "Вы опоздали";
     }
	//if(score=9) {timerVal=0}
     timerVal = timerVal - 1;  

 }, 1000);
 
 
}
