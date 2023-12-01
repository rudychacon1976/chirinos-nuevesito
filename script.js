const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const nextBtnFifth = document.querySelector(".next-4");
const prevBtnSixth = document.querySelector(".prev-5");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const preBtns = document.querySelector(".previ-1");
const preBtnt = document.querySelector(".previ-2");
const preBtnf = document.querySelector(".previ-3");
const preBtnfi = document.querySelector(".previ-4");
const preBtnsx = document.querySelector(".previ-5");
const nextBtnLast = document.querySelector(".nexti-4");
let current = 1;




nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-20%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-125%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-20%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnSixth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
//progress bar
preBtns.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
preBtnt.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-20%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
preBtnf.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
preBtnfi.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
preBtnsx.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
nextBtnLast.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-125%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
//ends

//menus despl
document.getElementById('masc').addEventListener('change', function(){
  var selecmascota = this.value;
  var showdivmasc = document.getElementById('showmascotas');

  if (selecmascota==='si'){
    showdivmasc.style.display ='block';
  } else if (selecmascota ==='no'){
    showdivmasc.style.display = 'none';
  }
});
document.getElementById('showmascotas').addEventListener('change', function(){
  var selecotramascota = this.value;
  var showdivotramasc = document.getElementById('showotrasmascotas');

  if (selecotramascota==='otro'){
    showdivotramasc.style.display ='block';
  } else{
    showdivmasc.style.display = 'none';
  }
});
document.getElementById('internet').addEventListener('change', function(){
  var selecinternet = this.value;
  var showdivinter = document.getElementById('showinternet');

  if (selecinternet==='si'){
    showdivinter.style.display ='block';
  } else if (selecinternet ==='no'){
    showdivinter.style.display = 'none';
  }
});
document.getElementById('cable').addEventListener('change', function(){
  var seleccable = this.value;
  var showdivcable = document.getElementById('showcable');

  if (seleccable==='si'){
    showdivcable.style.display ='block';
  } else if (seleccable ==='no'){
    showdivcable.style.display = 'none';
  }
});
document.getElementById('divclap').addEventListener('change', function(){
  var selecclap = this.value;
  var showdivclap = document.getElementById('showclap');

  if (selecclap==='si'){
    showdivclap.style.display ='block';
  } else if (selecclap ==='no'){
    showdivclap.style.display = 'none';
  }
});
document.getElementById('bolsanutri').addEventListener('change', function(){
  var selecbolsanutri = this.value;
  var showdivbolsanutri = document.getElementById('showbolsanutri');

  if (selecbolsanutri==='si'){
    showdivbolsanutri.style.display ='block';
  } else if (selecbolsanutri ==='no'){
    showdivbolsanutri.style.display = 'none';
  }
});

document.getElementById('cilindro').addEventListener('change', function(){
  var seleccilindro = this.value;
  var showdivcilindro = document.getElementById('showcilindro');

  if (seleccilindro==='si'){
    showcilindro.style.display ='block';
  } else if (seleccilindro ==='no'){
    showdivcilindro.style.display = 'none';
  }
});

document.getElementById('actividadvivienda').addEventListener('change', function(){
  var selecactviv = this.value;
  var showdivactviv = document.getElementById('showactividadvivienda');

  if (selecactviv==='si'){
    showdivactviv.style.display ='block';
  } else if (selecactviv ==='no'){
    showdivactviv.style.display = 'none';
  }
});


//cargas
document.getElementById('cargasfamiliares').addEventListener('change', function(){
  var seleccargas = this.value;
  var showdivcarga1 = document.getElementById('primeracargapage');
  var showdivcarga2 = document.getElementById('segundacargapage');
  var showdivcarga3 = document.getElementById('terceracargapage');
  var showdivcarga4 = document.getElementById('cuartacargapage');
  var showdivcarga5 = document.getElementById('quintacargapage');
  var showdivcarga6 = document.getElementById('sextacargapage');
  var showdivcarga7 = document.getElementById('septimacargapage');
  var showdivcarga8 = document.getElementById('octavacargapage');
  var showdivcarga9 = document.getElementById('novenacargapage');
  var showdivcarga10 = document.getElementById('decimacargapage');


  if (seleccargas==="1"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display = 'none';
    showdivcarga3.style.display = 'none';
    showdivcarga4.style.display = 'none';
    showdivcarga5.style.display = 'none';
    showdivcarga6.style.display = 'none';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  } else if (seleccargas==="2"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'none';
    showdivcarga4.style.display = 'none';
    showdivcarga5.style.display = 'none';
    showdivcarga6.style.display = 'none';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  } else if (seleccargas==="3"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'none';
    showdivcarga5.style.display = 'none';
    showdivcarga6.style.display = 'none';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  } else if (seleccargas==="4"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'none';
    showdivcarga6.style.display = 'none';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  }else if (seleccargas==="5"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'block';
    showdivcarga6.style.display = 'none';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  }else if (seleccargas==="6"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'block';
    showdivcarga6.style.display = 'block';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  }else if (seleccargas==="7"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'block';
    showdivcarga6.style.display = 'block';
    showdivcarga7.style.display = 'block';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  }else if (seleccargas==="8"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'block';
    showdivcarga6.style.display = 'block';
    showdivcarga7.style.display = 'block';
    showdivcarga8.style.display = 'block';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  }else if (seleccargas==="9"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'block';
    showdivcarga6.style.display = 'block';
    showdivcarga7.style.display = 'block';
    showdivcarga8.style.display = 'block';
    showdivcarga9.style.display = 'block';
    showdivcarga10.style.display = 'none';
  }else if(seleccargas==="10"){
    showdivcarga1.style.display ='block';
    showdivcarga2.style.display ='block';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'block';
    showdivcarga5.style.display = 'block';
    showdivcarga6.style.display = 'block';
    showdivcarga7.style.display = 'block';
    showdivcarga8.style.display = 'block';
    showdivcarga9.style.display = 'block';
    showdivcarga10.style.display = 'block';
  }else{
    showdivcarga1.style.display ='none';
    showdivcarga2.style.display = 'none';
    showdivcarga3.style.display = 'block';
    showdivcarga4.style.display = 'none';
    showdivcarga5.style.display = 'none';
    showdivcarga6.style.display = 'none';
    showdivcarga7.style.display = 'none';
    showdivcarga8.style.display = 'none';
    showdivcarga9.style.display = 'none';
    showdivcarga10.style.display = 'none';
  }
});
