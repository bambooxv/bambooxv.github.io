// JavaScript Document
$( document ).ready(function() {
//starting page hides content pages
document.getElementById("update").innerHTML = document.lastModified;
$("#content1").hide();
$("#content2").hide();
$("#content3").hide();
$("#content4").hide();
//Shows web dev content
$("#button1").click(function(){
$("#content1").show();
$("#content2").hide();
$("#content3").hide();
$("#content4").hide();
});
//shows digital art content
$("#button2").click(function(){
$("#content1").hide();
$("#content2").show();
$("#content3").hide();
$("#content4").hide();
});
//shows photo editing content
$("#button3").click(function(){
$("#content1").hide();
$("#content2").hide();
$("#content3").show();
$("#content4").hide();
});
//shows video editing content
$("#button4").click(function(){
$("#content1").hide();
$("#content2").hide();
$("#content3").hide();
$("#content4").show();
});
	
});
