function get(url, ret){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200){
			ret(http.responseText);
		}
	}
	http.open("GET", url, true); // some browsers are asynchronous 
	http.send(null);
}
function addtolist(textin){
	var list = document.all.list;
	var text = textin.split(/\r?\n/);
	for(var i=0;i<(text.length > 7 ? 7 : text.length-1);i++){
		var listitem = document.createElement("LI");
		listitem.appendChild(document.createTextNode(text[i]));
		list.appendChild(listitem);
	}
}
function addtolist_nolimit(textin){
	var list = document.all.list;
	var text = textin.split(/\r?\n/);
	for(var i=0;i<text.length-1;i++){
		var listitem = document.createElement("LI");
		listitem.appendChild(document.createTextNode(text[i]));
		list.appendChild(listitem);
	}
}
//Wilson Smith 28/09/2017
