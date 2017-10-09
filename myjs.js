document.getElementById("lup1").addEventListener("click", function () {
    "use strict";
    document.getElementById("lcon").style.left = "0px";
    
});
document.getElementById("ldown1").addEventListener("click", function () {
    "use strict";
    document.getElementById("lcon").style.left = "-82px";
    
});

document.getElementById("imgl1").addEventListener("click", function () {
    "use strict";
    document.getElementById("ike_1").src = "img/ike1.png";
});
document.getElementById("imgl2").addEventListener("click", function () {
    "use strict";
    document.getElementById("ike_1").src = "img/bike.png";
});
document.getElementById("imgl3").addEventListener("click", function () {
    "use strict";
    document.getElementById("ike_1").src = "img/sike.png";
});

var myBox = document.getElementById("imgl");
var imgss =document.getElementById("ike_1");
var myTop = 270;
var myleft = 225;
var myimg = 100;

document.getElementById("leftup").addEventListener("click", function(){
    myTop = myTop-5;
    myBox.style.top = myTop+"px";
});

document.getElementById("lbot").addEventListener("click", function(){
    myTop = myTop+5;
    myBox.style.top= myTop+"px";
});

document.getElementById("lleft").addEventListener("click", function(){
    myleft = myleft-5;
    myBox.style.left = myleft+"px";
});

document.getElementById("lright").addEventListener("click", function(){
    myleft = myleft + 5;
    myBox.style.left = myleft+"px";
});

document.getElementById("lin").addEventListener("click", function(){
    myimg = myimg+5;
    imgss.style.height = myimg+"%";
    imgss.style.width = myimg+"%";
});

document.getElementById("lout").addEventListener("click", function(){
    myimg = myimg-5;
    imgss.style.height = myimg+"%";
    imgss.style.width = myimg+"%";
});

document.getElementById("lreset1").addEventListener("click", function(){
    myBox.style.top = "270px";
    myBox.style.left = "225px";
    imgss.style.height ="100%";
    imgss.style.width ="100%";
    myTop = 270;
    myleft = 225;
    myimg = 100;
});



document.getElementById("rup1").addEventListener("click", function () {
    "use strict";
    document.getElementById("rcon").style.right = "0px";
    
});
document.getElementById("rdown1").addEventListener("click", function () {
    "use strict";
    document.getElementById("rcon").style.right = "-82px";
    
});

document.getElementById("imgr1").addEventListener("click", function () {
    "use strict";
    document.getElementById("lucina").src = "img/lucina.png";
});
document.getElementById("imgr2").addEventListener("click", function () {
    "use strict";
    document.getElementById("lucina").src = "img/eluncina.png";
});
document.getElementById("imgr3").addEventListener("click", function () {
    "use strict";
    document.getElementById("lucina").src = "img/bluncina.png";
});

var myBox1 = document.getElementById("imgr");
var imgss1 =document.getElementById("lucina");
var myTop1 = 270;
var myright1 = 225;
var myimg1 = 100;

document.getElementById("rightup").addEventListener("click", function(){
    myTop1 = myTop1-5;
    myBox1.style.top = myTop1+"px";
});

document.getElementById("rightbot").addEventListener("click", function(){
    myTop1 = myTop1+5;
    myBox1.style.top= myTop1+"px";
});

document.getElementById("rightright").addEventListener("click", function(){
    myright1 = myright1-5;
    myBox1.style.right = myright1+"px";
});

document.getElementById("rightleft").addEventListener("click", function(){
    myright1 = myright1 + 5;
    myBox1.style.right = myright1+"px";
});

document.getElementById("rightin").addEventListener("click", function(){
    myimg1 = myimg1+5;
    imgss1.style.height = myimg1+"%";
    imgss1.style.width = myimg1+"%";
});

document.getElementById("rightout").addEventListener("click", function(){
    myimg1 = myimg1-5;
    imgss1.style.height = myimg1+"%";
    imgss1.style.width = myimg1+"%";
});

document.getElementById("rreset1").addEventListener("click", function(){
    myBox1.style.top = "270px";
    myBox1.style.right = "225px";
    imgss1.style.height ="100%";
    imgss1.style.width ="100%";
    myTop1 = 270;
    myright1 = 225;
    myimg1 = 100;
});


document.getElementById("bup1").addEventListener("click", function () {
    "use strict";
    document.getElementById("bcon").style.bottom = "55px";
    
});
document.getElementById("bdown1").addEventListener("click", function () {
    "use strict";
    document.getElementById("bcon").style.bottom = "-14px";
    
});

document.getElementById("lyn1").addEventListener("click", function () {
    "use strict";
    document.getElementById("lyn").src = "img/Lyn.png";
});
document.getElementById("lyn2").addEventListener("click", function () {
    "use strict";
    document.getElementById("lyn").src = "img/bralyn.png";
});
document.getElementById("lyn3").addEventListener("click", function () {
    "use strict";
    document.getElementById("lyn").src = "img/Brilyn.png";
});

var myBox2 = document.getElementById("imgb");
var imgss2 =document.getElementById("lyn");
var myTop2 = 170;
var myleft2 = 690;
var myimg2 = 100;

document.getElementById("bottomup").addEventListener("click", function(){
    myTop2 = myTop2+5;
    myBox2.style.bottom = myTop2+"px";
});

document.getElementById("bottombot").addEventListener("click", function(){
    myTop2 = myTop2-5;
    myBox2.style.bottom= myTop2+"px";
});

document.getElementById("bottomright").addEventListener("click", function(){
    myleft2 = myleft2+5;
    myBox2.style.left = myleft2+"px";
});

document.getElementById("botleft1").addEventListener("click", function(){
    myleft2 = myleft2 -5;
    myBox2.style.left = myleft2+"px";
});

document.getElementById("butin1").addEventListener("click", function(){
    myimg2 = myimg2+5;
    imgss2.style.height = myimg2+"%";
    imgss2.style.width = myimg2+"%";
});

document.getElementById("butout1").addEventListener("click", function(){
    myimg2 = myimg2-5;
    imgss2.style.height = myimg2+"%";
    imgss2.style.width = myimg2+"%";
});

document.getElementById("breset1").addEventListener("click", function(){
    myBox2.style.bottom = "170px";
    myBox2.style.left = "690px";
    imgss2.style.height ="100%";
    imgss2.style.width ="100%";
    myTop = 270;
    myleft = 225;
    myimg = 100;
});


document.getElementById("tup1").addEventListener("click", function () {
    "use strict";
    document.getElementById("tcon").style.top = "-71px";
    
});
document.getElementById("tdown1").addEventListener("click", function () {
    "use strict";
    document.getElementById("tcon").style.top = "0px";
    
});

document.getElementById("roy1").addEventListener("click", function () {
    "use strict";
    document.getElementById("roy").src = "img/Roy.png";
});
document.getElementById("roy2").addEventListener("click", function () {
    "use strict";
    document.getElementById("roy").src = "img/broy.png";
});
document.getElementById("roy3").addEventListener("click", function () {
    "use strict";
    document.getElementById("roy").src = "img/dlcroy.png";
});

var myBox3 = document.getElementById("imgt");
var imgss3 =document.getElementById("roy");
var myTop3 = 170;
var myleft3 = 690;
var myimg3 = 100;

document.getElementById("topup").addEventListener("click", function(){
    myTop3 = myTop3-5;
    myBox3.style.top = myTop3+"px";
});

document.getElementById("topbot").addEventListener("click", function(){
    myTop3 = myTop3+5;
    myBox3.style.top= myTop3+"px";
});

document.getElementById("topleft").addEventListener("click", function(){
    myleft3 = myleft3-5;
    myBox3.style.left = myleft3+"px";
});

document.getElementById("topright").addEventListener("click", function(){
    myleft3 = myleft3 +5;
    myBox3.style.left = myleft3+"px";
});

document.getElementById("topin").addEventListener("click", function(){
    myimg3 = myimg3+5;
    imgss3.style.height = myimg3+"%";
    imgss3.style.width = myimg3+"%";
});

document.getElementById("topout").addEventListener("click", function(){
    myimg3 = myimg3-5;
    imgss3.style.height = myimg3+"%";
    imgss3.style.width = myimg3+"%";
});

document.getElementById("treset1").addEventListener("click", function(){
    myBox3.style.top = "170px";
    myBox3.style.left = "690px";
    imgss3.style.height ="100%";
    imgss3.style.width ="100%";
    myTop3 = 170;
    myleft3 = 690;
    myimg3 = 100;
})


