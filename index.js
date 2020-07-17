var s1 = document.getElementById('1');
var s2 = document.getElementById('2');
var s3 = document.getElementById('3');
var s4 = document.getElementById('4');
var s5 = document.getElementById('5');
var s6 = document.getElementById('6');
var s7 = document.getElementById('7');
var s8 = document.getElementById('8');
var s9 = document.getElementById('9');
var s10 = document.getElementById('10');
var s11 = document.getElementById('11');
var s12 = document.getElementById('12');

var g1 = document.getElementById('g1');
var g2 = document.getElementById('g2');
var g3 = document.getElementById('g3');
var g4 = document.getElementById('g4');
var g5 = document.getElementById('g5');
var g6 = document.getElementById('g6');
var g7 = document.getElementById('g7');
var g8 = document.getElementById('g8');
var g9 = document.getElementById('g9');
var g10 = document.getElementById('g10');
var g11 = document.getElementById('g11');
var g12 = document.getElementById('g12');

var başla = document.getElementById('başla');
var tekrar = document.getElementById('tekrar');
var kontrol = document.getElementById('kontrol');
var yeniden = document.getElementById('yeniden');

var span = document.getElementById('süre');
var süre = 5;
var mode = 0;

var mytime = setInterval(timer, 1000);

başla.onclick = function(){
    clearInterval(mytime);
    mytime = setInterval(timer, 1000);
    süre= 5;
    göster();
    rastgele();
    mode = 1;
    başla.disabled = true;
  }
tekrar.onclick = function(){
  tekrar.disabled = true;
  süre = 5;
  mytime = setInterval(timer,1000);
  göster();
}
kontrol.onclick = function(){

  if(s1.value==g1.value){s1.style.backgroundColor="green";}else{s1.style.backgroundColor="red";}
  if(s2.value==g2.value){s2.style.backgroundColor="green";}else{s2.style.backgroundColor="red";}
  if(s3.value==g3.value){s3.style.backgroundColor="green";}else{s3.style.backgroundColor="red";}
  if(s4.value==g4.value){s4.style.backgroundColor="green";}else{s4.style.backgroundColor="red";}
  if(s5.value==g5.value){s5.style.backgroundColor="green";}else{s5.style.backgroundColor="red";}
  if(s6.value==g6.value){s6.style.backgroundColor="green";}else{s6.style.backgroundColor="red";}
  if(s7.value==g7.value){s7.style.backgroundColor="green";}else{s7.style.backgroundColor="red";}
  if(s8.value==g8.value){s8.style.backgroundColor="green";}else{s8.style.backgroundColor="red";}
  if(s9.value==g9.value){s9.style.backgroundColor="green";}else{s9.style.backgroundColor="red";}
  if(s10.value==g10.value){s10.style.backgroundColor="green";}else{s10.style.backgroundColor="red";}
  if(s11.value==g11.value){s11.style.backgroundColor="green";}else{s11.style.backgroundColor="red";}
  if(s12.value==g12.value){s12.style.backgroundColor="green";}else{s12.style.backgroundColor="red";}

  if(s1.value == g1.value && s2.value == g2.value && s3.value == g3.value && s4.value == g4.value && s5.value == g5.value && s6.value == g6.value && s7.value == g7.value && s8.value == g8.value && s9.value == g9.value && s10.value == g10.value && s11.value == g11.value && s12.value == g12.value ){
    başla.disabled = false;
    tekrar.disabled = false;
    window.alert("Tebrikler! Güçlü bir hafızaya sahipsiniz.");
  }
  else{
    window.alert("Kaybettiniz! Tekrar Deneyin.");
  }
}

yeniden.onclick = function(){
  arkaplanbeyaz();
  başla.disabled = false;
  tekrar.disabled = false;
}


function timer(){
  if(mode==1){
    süre--;
    span.innerHTML=süre;
    if(süre==0){
      clearInterval(mytime);
      gizle();
    }

  }
}

function rastgele(){
  g1.value = Math.round(Math.random()*100);
  g2.value = Math.round(Math.random()*100);
  g3.value = Math.round(Math.random()*100);
  g4.value = Math.round(Math.random()*100);
  g5.value = Math.round(Math.random()*100);
  g6.value = Math.round(Math.random()*100);
  g7.value = Math.round(Math.random()*100);
  g8.value = Math.round(Math.random()*100);
  g9.value = Math.round(Math.random()*100);
  g10.value = Math.round(Math.random()*100);
  g11.value = Math.round(Math.random()*100);
  g12.value = Math.round(Math.random()*100);

}

function gizle(){
  g1.style.visibility = "hidden";
  g2.style.visibility = "hidden";
  g3.style.visibility = "hidden";
  g4.style.visibility = "hidden";
  g5.style.visibility = "hidden";
  g6.style.visibility = "hidden";
  g7.style.visibility = "hidden";
  g8.style.visibility = "hidden";
  g9.style.visibility = "hidden";
  g10.style.visibility = "hidden";
  g11.style.visibility = "hidden";
  g12.style.visibility = "hidden";
}
function göster(){
  g1.style.visibility = "visible";
  g2.style.visibility = "visible";
  g3.style.visibility = "visible";
  g4.style.visibility = "visible";
  g5.style.visibility = "visible";
  g6.style.visibility = "visible";
  g7.style.visibility = "visible";
  g8.style.visibility = "visible";
  g9.style.visibility = "visible";
  g10.style.visibility = "visible";
  g11.style.visibility = "visible";
  g12.style.visibility = "visible";
}

function arkaplanbeyaz(){
  s1.style.backgroundColor="white";
  s2.style.backgroundColor="white";
  s3.style.backgroundColor="white";
  s4.style.backgroundColor="white";
  s5.style.backgroundColor="white";
  s6.style.backgroundColor="white";
  s7.style.backgroundColor="white";
  s8.style.backgroundColor="white";
  s9.style.backgroundColor="white";
  s10.style.backgroundColor="white";
  s11.style.backgroundColor="white";
  s12.style.backgroundColor="white";

  s1.value = "";
  s2.value = "";
  s3.value = "";
  s4.value = "";
  s5.value = "";
  s6.value = "";
  s7.value = "";
  s8.value = "";
  s9.value = "";
  s10.value = "";
  s11.value = "";
  s12.value = "";
}
