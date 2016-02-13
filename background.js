var url = document.location.href;
var zone = false;
var found = false;
var i = 0;

while( i < pro_urls.length && !found ){
	if( url.indexOf( pro_urls[i] ) > -1 ){
		zone = "pro";
		found = true;
	}
	i++;
}

i = 0;
while( i < dev_urls.length && !found ){
	if( url.indexOf( dev_urls[i] ) > -1 ){
		zone = "dev";
		found = true;
	}
	i++;
}

i = 0;
while( i < test_urls.length && !found ){
	if( url.indexOf( test_urls[i] ) > -1 ){
		zone = "test";
		found = true;
	}
	i++;
}

if( found ){
	var bar = document.createElement("div");
	bar.className = "devspoiler_bar devspoiler_" + zone;
	
	var text = document.createTextNode("estás en " + zone);
	bar.appendChild(text); 
	
	document.getElementsByTagName("body")[0].appendChild(bar); 
}
