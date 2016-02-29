var myimage=document.getElementById("myphoto")
var imageArray=["2.jpg", "3.jpg", "4.jpg", "5.jpg" , "10.jpg", "11.jpg", "12.jpg"];

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