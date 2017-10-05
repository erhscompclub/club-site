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
function docontact(){
	document.all.sponsora.href="mailto:devo__e.joh_so_=pgcps.org".replace(/_/g,'n').replace(/=/g,'@');
	document.all.sponsorb.href="mailt_:michael.h_lder=pgcps.org".replace(/_/g,'o').replace(/=/g,'@');
	document.all.president.innerText="W_lson Sm_th".replace(/_/g,'i');
	document.all.president.href="ma_lto:w_lson-sm_th=pgcps.org".replace(/_/g,'i').replace(/=/g,'@');
	document.all.vicepresident.innerText="J_hn Sant_t_me".replace(/_/g,'o');
	document.all.vicepresident.href="mailt_:j_hn-sant_tome=pgcps._rg".replace(/_/g,'o').replace(/=/g,'@');
	document.all.secretary.innerText="Taj W_lk_nson".replace(/_/g,'i');
	document.all.secretary.href="ma_lto:taj-w_lk_nson=pgcps.org".replace(/_/g,'i').replace(/=/g,'@');
	document.all.expose.parentNode.removeChild(document.all.expose);
}
get("list", addtolist);

//Wilson Smith 28/09/2017
