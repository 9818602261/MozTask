var myimage=document.getElementById("myphoto")
var imageArray=["fm.jpg", "7.jpg", "8.jpg", "9.jpg" , "6.jpg"];

var imageindex=0;
function changeimage (){
	myphoto.setAttribute("src",imageArray [imageindex]);
	imageindex++;
	if (imageindex>= imageArray.length){
		imageindex=0;
	}
}
var intervalhandle =setInterval(changeimage,3000);
myphoto.onclick=function(){
	clearInterval(intervalhandle)
}