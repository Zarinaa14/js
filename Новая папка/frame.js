var FrameWork = {
	append: function(e1, e2){
		return el1.appendChild(e2);
	}
	
	,prepend: function(e1, e2){
			return e2.parentNode.insertBefore(e1, e2);
	}
	,remove: function(e){
		return e.remove();
	}
	,create: function(name){
		return document.createElement(name);
	}
	
	,Get: {
		byId: function(id){
			document.getElementById(id);
		}
		,ByTag: function(tag){
			return document.getElementsByTagName(tag);
		}
		,ByClass: function(className){
			return document.getElementsByClassName(className);
		}
		,ByName: function (name){
			return document.getElementById(name);
		}
		,bySelector: function(css){
			return document.querySelector(css);
		}
		,bySelectorAll: function(css){
			return document.querySelectorAll(css);
		}
	}
	
	,Event: {
		add: function(type, elem, f){
			if(typeof(elem.addEventListener)=="function")
				return elem.addEventListener(type, f);
			else
				return elem.attachEvent("on"+type, f);
		}
		,remove: function(type, elem, f){
			if(typeof(elem.removeEventListener)=="function")
				return elem.removeEventListener(type, f);
			else
				return elem.detachEvent("on"+type, f);
		}
		,dispatch: function(type,elem){
			typeof addEventListener == "function" ? elem.dispatchEvent(new Event(type)) : elem.fireEvent('on' + type, new Event(type));
		}
	}
}