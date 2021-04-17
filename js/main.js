let pixel = document.getElementsByClassName("cua");

let pos = [ 0,1,2,3,4,5,6,7,8,9,10,11,
            13,15,17,19,21,23,
            24,25,26,27,28,29,
            31,33,35,37,45,47,49,51,53,55,
            67,66,65,64,63,62,61,60,59,58,57,56,
            54,52,50,48,46,44,
            43,42,41,40,39,38,
            36,34,32,30,22,20,18,16,14,12 ];

const printPixel = (i,it,clear) => {
    pixel.item(pos[i]).style = 'background-color: white;';
    if (clear){
      pixel.item(pos[it]).style = 'background-color: transparent;';
    }
}

const start = () =>{
  let contador = 0;
  let it = 0;
  let i = 0;

  setInterval(()=>{
    let clc;
    (contador>60)? clc=true:clc=false;

    printPixel(i,it,clc);
    (i<pixel.length-1)? i++:i=0;
    contador++;
    if(clc){
      (it<pixel.length-1)? it++:it=0;
    }
  },120);
}

// ---------------------------------------------------------
// let body = document.body;

document.addEventListener('DOMContentLoaded',start());