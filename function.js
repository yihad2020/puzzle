/*Incializamos los elementos*/
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');
var p10 = document.getElementById('p10');
var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var p13 = document.getElementById('p13');
var p14 = document.getElementById('p14');
var p15 = document.getElementById('p15');
var p16 = document.getElementById('p16');
var p17 = document.getElementById('p17');
var p18 = document.getElementById('p18');
var p19 = document.getElementById('p19');
var p20 = document.getElementById('p20');
var p21 = document.getElementById('p21');
var p22 = document.getElementById('p22');
var p23 = document.getElementById('p23');
var p24 = document.getElementById('p24');
var p25 = document.getElementById('p25');

var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');
var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');
var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');
var c18 = document.getElementById('c18');
var c19 = document.getElementById('c19');
var c20 = document.getElementById('c20');
var c21 = document.getElementById('c21');
var c22 = document.getElementById('c22');
var c23 = document.getElementById('c23');
var c24 = document.getElementById('c24');
var c25 = document.getElementById('c25');
/*Final de elementos y inicio del drag & drop*/

var cuadro = document.querySelector('.puzzle');

var cancion1 = document.getElementById('cancion1');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

/*Comprobamos si la pieza esta correcta*/
var wasCalled = false;                           /*WasCalled se utiliza para que la función se reproduzca solo una vez*/
var wasCalled2 = false;
var wasCalled3 = false;
var wasCalled4 = false;
var wasCalled5 = false;
var wasCalled6 = false;
var wasCalled7 = false;
var wasCalled8 = false;
var wasCalled9 = false;
var wasCalled10 = false;
var wasCalled11 = false;
var wasCalled12 = false;
var wasCalled13 = false;
var wasCalled14 = false;
var wasCalled15 = false;
var wasCalled16 = false;
var wasCalled17 = false;
var wasCalled18 = false;
var wasCalled19 = false;
var wasCalled20 = false;
var wasCalled21 = false;
var wasCalled22 = false;
var wasCalled23 = false;
var wasCalled24 = false;
var wasCalled25 = false;

var wasCalledF = false;

function comprobar1() {
  if(!wasCalled) {
let rp7 = p7.getBoundingClientRect();
let rc3 = c3.getBoundingClientRect();
if  (rp7.right < rc3.left || 
                rp7.left > rc3.right || 
                rp7.bottom < rc3.top || 
                rp7.top > rc3.bottom){
} else{
 return 1;
 wasCalled = true;
}
  }
}

function comprobar2() {
  if(!wasCalled2) {
let rp10 = p10.getBoundingClientRect();
let rc7 = c7.getBoundingClientRect();
if  (rp10.right < rc7.left || 
                rp10.left > rc7.right || 
                rp10.bottom < rc7.top || 
                rp10.top > rc7.bottom){
} else{
 return 1;
 wasCalled2 = true;
}
  }
}

function comprobar3() {
  if(!wasCalled3) {
let rp11 = p11.getBoundingClientRect();
let rc8 = c8.getBoundingClientRect();
if  (rp11.right < rc8.left || 
                rp11.left > rc8.right || 
                rp11.bottom < rc8.top || 
                rp11.top > rc8.bottom){
} else{
 return 1;
 wasCalled3 = true;
}
  }
}

function comprobar4() {
  if(!wasCalled4) {
let rp12 = p12.getBoundingClientRect();
let rc9 = c9.getBoundingClientRect();
if  (rp12.right < rc9.left || 
                rp12.left > rc9.right || 
                rp12.bottom < rc9.top || 
                rp12.top > rc9.bottom){
} else{
 return 1;
 wasCalled4 = true;
}
  }
}

function comprobar5() {
  if(!wasCalled5) {
let rp15 = p15.getBoundingClientRect();
let rc13 = c13.getBoundingClientRect();
if  (rp15.right < rc13.left || 
                rp15.left > rc13.right || 
                rp15.bottom < rc13.top || 
                rp15.top > rc13.bottom){
} else{
return 1;
 wasCalled5 = true;
}
  }
}

function comprobar6() {
  if(!wasCalled6) {
let rp19 = p19.getBoundingClientRect();
let rc18 = c18.getBoundingClientRect();
if  (rp19.right < rc18.left || 
                rp19.left > rc18.right || 
                rp19.bottom < rc18.top || 
                rp19.top > rc18.bottom){
} else{
 return 1;
 wasCalled6 = true;
}
  }
}

function comprobar7() {
  if(!wasCalled7) {
let rp6 = p6.getBoundingClientRect();
let rc2 = c2.getBoundingClientRect();
if  (rp6.right < rc2.left || 
                rp6.left > rc2.right || 
                rp6.bottom < rc2.top || 
                rp6.top > rc2.bottom){
} else{
 return 1;
 wasCalled7 = true;
}
  }
}

function comprobar8() {
  if(!wasCalled8) {
let rp14 = p14.getBoundingClientRect();
let rc12 = c12.getBoundingClientRect();
if  (rp14.right < rc12.left || 
                rp14.left > rc12.right || 
                rp14.bottom < rc12.top || 
                rp14.top > rc12.bottom){
} else{
 return 1;
 wasCalled8 = true;
}
  }
}

function comprobar9() {
  if(!wasCalled9) {
let rp1 = p1.getBoundingClientRect();
let rc1 = c1.getBoundingClientRect();
if  (rp1.right < rc1.left || 
                rp1.left > rc1.right || 
                rp1.bottom < rc1.top || 
                rp1.top > rc1.bottom){
} else{
 return 1;
 wasCalled9 = true;
}
  }
}

function comprobar10() {
  if(!wasCalled10) {
let rp2 = p2.getBoundingClientRect();
let rc6 = c6.getBoundingClientRect();
if  (rp2.right < rc6.left || 
                rp2.left > rc6.right || 
                rp2.bottom < rc6.top || 
                rp2.top > rc6.bottom){
} else{
 return 1;
 wasCalled10 = true;
}
  }
}

function comprobar11() {
  if(!wasCalled11) {
let rp8 = p8.getBoundingClientRect();
let rc4 = c4.getBoundingClientRect();
if  (rp8.right < rc4.left || 
                rp8.left > rc4.right || 
                rp8.bottom < rc4.top || 
                rp8.top > rc4.bottom){
} else{
 return 1;
 wasCalled11 = true;
}
  }
}

function comprobar12() {
  if(!wasCalled12) {
let rp9 = p9.getBoundingClientRect();
let rc5 = c5.getBoundingClientRect();
if  (rp9.right < rc5.left || 
                rp9.left > rc5.right || 
                rp9.bottom < rc5.top || 
                rp9.top > rc5.bottom){
} else{
 return 1;
 wasCalled12 = true;
}
  }
}

function comprobar13() {
  if(!wasCalled13) {
let rp13 = p13.getBoundingClientRect();
let rc10 = c10.getBoundingClientRect();
if  (rp13.right < rc10.left || 
                rp13.left > rc10.right || 
                rp13.bottom < rc10.top || 
                rp13.top > rc10.bottom){
} else{
 return 1;
 wasCalled13 = true;
}
  }
}

function comprobar14() {
  if(!wasCalled14) {
let rp3 = p3.getBoundingClientRect();
let rc11 = c11.getBoundingClientRect();
if  (rp3.right < rc11.left || 
                rp3.left > rc11.right || 
                rp3.bottom < rc11.top || 
                rp3.top > rc11.bottom){
} else{
 return 1;
 wasCalled14 = true;
}
  }
}

function comprobar15() {
  if(!wasCalled15) {
let rp16 = p16.getBoundingClientRect();
let rc14 = c14.getBoundingClientRect();
if  (rp16.right < rc14.left || 
                rp16.left > rc14.right || 
                rp16.bottom < rc14.top || 
                rp16.top > rc14.bottom){
} else{
 return 1;
 wasCalled15 = true;
}
  }
}

function comprobar16() {
  if(!wasCalled16) {
let rp18 = p18.getBoundingClientRect();
let rc17 = c17.getBoundingClientRect();
if  (rp18.right < rc17.left || 
                rp18.left > rc17.right || 
                rp18.bottom < rc17.top || 
                rp18.top > rc17.bottom){
} else{
  return 1;
 wasCalled16 = true;
}
  }
}

function comprobar17() {
  if(!wasCalled17) {
let rp4 = p4.getBoundingClientRect();
let rc16 = c16.getBoundingClientRect();
if  (rp4.right < rc16.left || 
                rp4.left > rc16.right || 
                rp4.bottom < rc16.top || 
                rp4.top > rc16.bottom){
} else{
  return 1;
 wasCalled17 = true;
}
  }
}

function comprobar18() {
  if(!wasCalled18) {
let rp17 = p17.getBoundingClientRect();
let rc15 = c15.getBoundingClientRect();
if  (rp17.right < rc15.left || 
                rp17.left > rc15.right || 
                rp17.bottom < rc15.top || 
                rp17.top > rc15.bottom){
} else{
 return 1;
 wasCalled18 = true;
}
  }
}

function comprobar19() {
  if(!wasCalled19) {
let rp20 = p20.getBoundingClientRect();
let rc19 = c19.getBoundingClientRect();
if  (rp20.right < rc19.left || 
                rp20.left > rc19.right || 
                rp20.bottom < rc19.top || 
                rp20.top > rc19.bottom){
} else{
 return 1;
 wasCalled19 = true;
}
  }
}

function comprobar20() {
  if(!wasCalled20) {
let rp21 = p21.getBoundingClientRect();
let rc20 = c20.getBoundingClientRect();
if  (rp21.right < rc20.left || 
                rp21.left > rc20.right || 
                rp21.bottom < rc20.top || 
                rp21.top > rc20.bottom){
} else{
 return 1;
 wasCalled20 = true;
}
  }
}

function comprobar21() {
  if(!wasCalled21) {
let rp5 = p5.getBoundingClientRect();
let rc21 = c21.getBoundingClientRect();
if  (rp5.right < rc21.left || 
                rp5.left > rc21.right || 
                rp5.bottom < rc21.top || 
                rp5.top > rc21.bottom){
} else{
 return 1;
 wasCalled21 = true;
}
  }
}

function comprobar22() {
  if(!wasCalled22) {
let rp22 = p22.getBoundingClientRect();
let rc22 = c22.getBoundingClientRect();
if  (rp22.right < rc22.left || 
                rp22.left > rc22.right || 
                rp22.bottom < rc22.top || 
                rp22.top > rc22.bottom){
} else{
 return 1;
 wasCalled22 = true;
}
  }
}

function comprobar23() {
  if(!wasCalled23) {
let rp23 = p23.getBoundingClientRect();
let rc23 = c23.getBoundingClientRect();
if  (rp23.right < rc23.left || 
                rp23.left > rc23.right || 
                rp23.bottom < rc23.top || 
                rp23.top > rc23.bottom){
} else{
 return 1;
 wasCalled23 = true;
}
  }
}

function comprobar24() {
  if(!wasCalled24) {
let rp24 = p24.getBoundingClientRect();
let rc24 = c24.getBoundingClientRect();
if  (rp24.right < rc24.left || 
                rp24.left > rc24.right || 
                rp24.bottom < rc24.top || 
                rp24.top > rc24.bottom){
} else{
 return 1;
 wasCalled24 = true;
}
  }
}

function comprobar25() {
  if(!wasCalled25) {
let rp25 = p25.getBoundingClientRect();
let rc25 = c25.getBoundingClientRect();
if  (rp25.right < rc25.left || 
                rp25.left > rc25.right || 
                rp25.bottom < rc25.top || 
                rp25.top > rc25.bottom){
} else{
 return 1;
 wasCalled25 = true;
}
  }
}

/*Comprobamos si el puzzle está completo*/
var puzzle_completo = setInterval(function(){
  if(!wasCalledF) {
if (comprobar1() == 1 && comprobar2() == 1 && comprobar3() == 1 && comprobar4() == 1 && comprobar5() == 1 && comprobar6() == 1 && comprobar7() == 1 && comprobar8() == 1 && comprobar9() == 1 && comprobar10() == 1 && comprobar11() == 1 && comprobar12() == 1 && comprobar13() == 1 && comprobar14() == 1 && comprobar15() == 1 && comprobar16() == 1 && comprobar17() == 1 && comprobar18() == 1 && comprobar19() == 1 && comprobar20() == 1 && comprobar21() == 1 && comprobar22() == 1 && comprobar23() == 1 && comprobar24() == 1 && comprobar25() == 1 ) {
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: '¡Felicidades, completaste el rompecabezas!',
  showConfirmButton: false,
  timer: 3000
})
   wasCalledF = true;
}
}
},1);

function reproducir(){
  var reproducir1 = document.getElementById('reproducir1');
  var reproducir2 = document.getElementById('reproducir2');
  cancion1.play();
  reproducir1.style.display="none";
  reproducir2.style.display="block";
}

function mute(){
  var reproducir1 = document.getElementById('reproducir1');
  var reproducir2 = document.getElementById('reproducir2');
  cancion1.pause();
  reproducir2.style.display="none";
  reproducir1.style.display="block";
}


var puzzle_completo2 = setInterval(function(){
let cuadros = cuadro.getBoundingClientRect();
if  (cuadros.right < cuadros.left || 
                cuadros.left >cuadros.right || 
                cuadros.bottom < cuadros.top || 
                cuadros.top > cuadros.bottom){
} else{

}
},1);