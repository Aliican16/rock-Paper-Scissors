var kullaniciPuani=[];
var bilgisayarPuani=[];
window.onload = function(){
  let title = document.getElementById("title");
  setInterval(()=>{
    const date = new Date();
    let hour = date.getHours().toString();
    let min = date.getMinutes().toString();
    let sec = date.getSeconds().toString();
   
    
    title.innerText =('0'  + hour).slice(-2)+':'+ ('0'  + min).slice(-2)+':'+('0' + sec).slice(-2);
  },1000);
}

function deger(e) {
  document.getElementById("tas").style = "border-color:tranparent;";
  document.getElementById("kagit").style = "border-color:tranparent;";
  document.getElementById("makas").style = "border-color:tranparent;";

  console.log(e);
  console.log(e.type + " event i tetiklendi!!");

  
  let kullanıcıGirdisi = e.target.value;
  let bilgisayarGirdisi = Math.floor(Math.random() * 3);
  console.log(bilgisayarGirdisi);
  console.log(kullanıcıGirdisi);
  
  if (bilgisayarGirdisi == 0 && kullanıcıGirdisi == "0") {
    alert("AYNI HAREKETLER YAPILDI");
  }else;
   if (bilgisayarGirdisi == 0 && kullanıcıGirdisi == "1") {
    alert("OYUNCU KAZANDI");
    kullaniciPuani.push("1");
  } else;
  if (bilgisayarGirdisi == 0 && kullanıcıGirdisi == "2") {
    alert("Bilgisayar Kazandı");
    bilgisayarPuani.push("1");
  } else;
  if (bilgisayarGirdisi == 1 && kullanıcıGirdisi == "0") {
    alert("Bilgisayar Kazandı");
    bilgisayarPuani.push("1");
  }else;
   if (bilgisayarGirdisi == 1 && kullanıcıGirdisi == "1") {
    alert("AYNI HAREKETLER YAPILDI");
  } else;
   if (bilgisayarGirdisi == 1 && kullanıcıGirdisi == "2") {
    alert("OYUNCU KAZANDI");
    kullaniciPuani.push("1");
  } else;
  if (bilgisayarGirdisi == 2 && kullanıcıGirdisi == "0") {
    alert("OYUNCU KAZANDI");
    kullaniciPuani.push("1");
  } else;
  if (bilgisayarGirdisi == 2 && kullanıcıGirdisi == "1") {
    alert("Bilgisayar Kazandı");
    bilgisayarPuani.push("1");
  } else;
  if (bilgisayarGirdisi == 2 && kullanıcıGirdisi == "2") {
    alert("AYNI HAREKETLER YAPILDI");
  } else;
  
  setTimeout(()=>{
    document.getElementById("tas").style = "border-color:tranparent;";
  document.getElementById("kagit").style = "border-color:tranparent;";
  document.getElementById("makas").style = "border-color:tranparent;";
},3000);
  console.log(kullaniciPuani.length);
  document.getElementById("ks").innerHTML =`Kullanıcının Puanı:${kullaniciPuani.length}`;
  document.getElementById("bs").innerHTML =`Bilgisayarın Puanı:${bilgisayarPuani.length}`;

  
  if (kullanıcıGirdisi == 0) {
    document.getElementById("tas").style = "border-color:green;";
  }
 if (kullanıcıGirdisi == 1) {
    document.getElementById("kagit").style = "border-color:green;";
  }

  if (kullanıcıGirdisi == 2) {
    document.getElementById("makas").style = "border-color:green;";
  }
 if (bilgisayarGirdisi == 0) {
    document.getElementById("tas").style = "border-color:red;";
  }
  if (bilgisayarGirdisi == 1) {
    document.getElementById("kagit").style = "border-color:red;";
  }
 if (bilgisayarGirdisi == 2) {
    document.getElementById("makas").style = "border-color:red;";
  }
  if (kullanıcıGirdisi == bilgisayarGirdisi) {
    document.getElementById("tas").style = "border-color:yellow;";
    document.getElementById("kagit").style = "border-color:yellow;";
    document.getElementById("makas").style = "border-color:yellow;";
  }
  else;
  
}
