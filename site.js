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
function addtolist_custom(textin, limit){
	var list = document.all.list;
	var text = textin.split(/\r?\n/);
	var number = text.length > limit ? limit : (text.length - 1)
	for (var i = 0; i != number; i++) {
		var listitem = document.createElement("LI");
		listitem.innerHTML = "<d>" + text[i].substr(0, text[i].indexOf(':')) +"</d>"+ text[i].substr(text[i].indexOf(':')+1);
		list.appendChild(listitem);
	}
}
function addtolist(textin){
	addtolist_custom(textin, 7);
}
function addtolist_nolimit(textin){
	addtolist_custom(textin, -1);
}
