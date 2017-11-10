var zakr='';
var zzakk='';
function A(Event) {
if (window.event) zzakk=event.srcElement;
else zzakk=Event.target;
zakr=zzakk.className;
   if (zakr=="exelem") {
    for (var i=0;i<zzakk.childNodes.length;i++) {
             if (zzakk.childNodes[i].className) {
                  if (zzakk.childNodes[i].className=="colelem") {
                     if (zzakk.childNodes[i].childNodes.length!=1) zzakk.childNodes[i].style.color="red";
                     else zzakk.childNodes[i].style.color="black";
                 zzakk.childNodes[i].className="exelem";
              }
                  else { 
                   for (var i=0;i<zzakk.childNodes.length;i++) {
                if (zzakk.childNodes[i].className) zzakk.childNodes[i].className="colelem";
              }
                 }                  
                }        
        }
  }
  else 
  if (zakr=="exeexe") {
     for (var i=0;i<zzakk.childNodes.length;i++) {
             if (zzakk.childNodes[i].className=="colelem") {
                    if (zzakk.childNodes[i].childNodes.length!=1) zzakk.childNodes[i].style.color="red";
                zzakk.childNodes[i].className="exelem";
             }
                 else {
                   if (zzakk.childNodes[i].className) {
                   zzakk.childNodes[i].style.color="black";
                   zzakk.childNodes[i].className="colelem";
                   }
                }
        }
  }
}