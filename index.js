let c1_e="Texto encriptado", 
c1_d="Texto desencriptado", 
c2="", 
e1="Ningún mensaje fue encontrado", 
e2="Ingresa el texto que desees encriptar o desencriptar"
mc="./imgs/corre.png",
me="./imgs/mono.png";
let mens=document.getElementById("menSal");
let parr=document.getElementById("parSal");
let mono=document.getElementById("imgs");
var t=document.getElementById("mensaje");
t.style.visibility="hidden";



function correct(o1,o2,i)
{
    mens.textContent=o1;
    parr.textContent=o2;
    mono.src=i;
}

function error(o1,o2,i) {
    mens.textContent=o1;
    parr.textContent=o2;
    mono.src=i;
}

function encriptar()
{
    let txt=document.getElementById("txtEnc").value;
    let textEnc=txt
                .replace(/e/gi,"enter")
                .replace(/i/gi,"imes")
                .replace(/a/gi,"ai")
                .replace(/o/gi,"ober")
                .replace(/u/gi,"ufat");
                if (document.getElementById("txtEnc").value!="") 
                {
                    mono.style.visibility="hidden";
                    t.style.visibility="visible";
                    mens.style.visibility="hidden";
                    document.getElementById("txtEnc").value="";
                    document.getElementById("mensaje").value=textEnc;
                    txt.textContent="";
                    correct(c1_d,c2,0);
                }
                else
                {
                    mens.style.visibility="visible";
                    mono.style.visibility="visible";
                    t.style.visibility="hidden";
                    error(e1,e2,me);
                }
}

function desencriptar() {
    let txt=document.getElementById("txtEnc").value;
    let txtDec=txt
                .replace(/enter/gi,"e")
                .replace(/imes/gi,"i")
                .replace(/ai/gi,"a")
                .replace(/ober/gi,"o")
                .replace(/ufat/gi,"u");
                if (document.getElementById("txtEnc").value!="")
                {
                    document.getElementById("txtEnc").value="";
                    mens.style.visibility="hidden";
                    mono.style.visibility="hidden";
                    t.style.visibility="visible";
                    document.getElementById("mensaje").value=txtDec;
                    correct(c1_d,c2,0);
                    txt.textContent="";
                }
                else
                {
                    mens.style.visibility="visible";
                    t.style.visibility="hidden";
                    mono.style.visibility="visible";
                    error(e1,e2,me);
                }
}

