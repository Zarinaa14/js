function countTags(n) {	// n – это Node
var numtags = 0;	
if (n.nodeType	== 1 /*Node.ELEMENT_NODE*/) 
numtags++;	
var numberofcomment = 0, numberoftext = 0;  	
var children = n.childNodes;	
for(var i=0; i	< children.length; i++) {	
numtags +=	countTags(children[i]);	// Рекурсия по всем дочерним элементам
}
console.log(numtags);	 	 
return numtags;	 	
}
countTags(document);
alert('Количество тегов в документе: ' + countTags(document));
var comment = 0, text = 0; 
var CommentText = function(elem){ 
if (elem === undefined) return false; 
for (var i = 0; i < elem.length; i++){ 
if (obj[i].nodeType == 3) 
text++; 
if (obj[i].nodeType == 8) 
comment++; 
} 
}
CommentText();
alert("Количество текста на странице : " + text); 
alert("Количество комментариев : " + comment); 
