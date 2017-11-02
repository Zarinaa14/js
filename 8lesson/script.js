var Menu = document.getElementsByTagName("div")[0];
Menu.style.height = "640px";
var obj = [
	{
		title: "Masha",
		result: function(){
			alert("Hellow,Masha");
		}
	},
	{
		title: "Sveta",
			result: function(){
			alert("Hellow,Sveta");
		}
	},
	{
		title: "Katya",
			result: function(){
			alert("Hellow,Katay");
		}
	},
	
	{
		title: "Nikita",
			result: function(){
			alert("Hellow,Nikita");
		}
	}
]
var ContextMenu = document.createElement("div");
ContextMenu.setAttribute("class","context");
for(var i = 0; i < obj.length; i++){
	var Element = document.createElement("div");
	Element.innerHTML = "<p>" + obj[i].title + "</p>"; 
	ContextMenu.appendChild(Element);
}
ContextMenu.addEventListener("click", function(e){
	// console.log(e.target);
	obj.forEach(function(elem){
		if(elem.title == e.target.outerText){
			elem.result();
		}
	})
})
    Menu.addEventListener("contextmenu", function(e){
	e.preventDefault();
	ContextMenu.style.position = "absolute";
	ContextMenu.style.left = e.clientX +  10 +'px';
	ContextMenu.style.top = e.clientY + 10 + 'px';
	

	
	ContextMenu.style.left = (document.documentElement.clientWidth > e.clientX + 150) ? e.clientX + 10 + "px" : e.clientX -145 + "px" ;
	ContextMenu.style.top = (document.documentElement.clientHeight > e.clientY + 150) ? e.clientY + 10 + "px" : e.clientY -156 + "px" ;
    this.appendChild(ContextMenu);

	
})

Menu.addEventListener("click", function(){
	ContextMenu.remove();
})