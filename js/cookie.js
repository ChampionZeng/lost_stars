function setCookie(name,value,exday){
	var  now = new Date();
	now.setDate(now.getDate()+exday);
	document.cookie = name+"="+value+'; '+'expires='+now+"; ";
}

function getCookie(name){
	var  cookies = document.cookie;
	var  arr = cookies.split("; ");
	for(var i=0;i<arr.length;i++){
		var  arr2 = arr[i].split("=");
		for(var  j=0;j<arr2.length;j++){
			if(arr2[0]==name){
				return arr2[1];
			}
		}
	}
	return false;
}

function  removeCookie(name){
	setCookie(name,"",-1);
}
