$(document).ready(function(){
$('#elaveEt').click(function(){
  var kateqoriya = $('#kateqoriya').val();
  var ad = $('#ad').val();
  var qiymet = $('#qiymet').val();
  var tesviri = $('#tesviri').val();
  var yoxla = $('#yoxla').val();
  var sekli = $('#sekli').val();
  var eyaddas = $('#eyaddas').val();
  var prosessor = $('#prosessor').val();
  var dyaddas = $('#dyaddas').val();
  var tip = $('#tip').val();
  var  sistem= $('#sistem').val();
  var  video= $('#video').val();
  

  if(kateqoriya == ""){
      $('#kateqoriya').classList.remove("is-valid");
      $('#kateqoriya').classList.add("is-invalid");
  }else{
      $('#kateqoriya').classList.remove("is-invalid");
      $('#kateqoriya').classList.add("is-valid");
  }
  if(ad == ""){
      $('#ad').classList.remove("is-valid");
      $('#ad').classList.add("is-invalid");
  }else{
      $('#ad').classList.remove("is-invalid");
      $('#ad').classList.add("is-valid");
  }
  if(qiymet == ""){
      $('#qiymet').classList.remove("is-valid");
      $('#qiymet').classList.add("is-invalid");
  }else{
      $('#qiymet').classList.remove("is-invalid");
      $('#qiymet').classList.add("is-valid");
  }
  if(tesviri == ""){
      $('#tesviri').classList.remove("is-valid");
      $('#tesviri').classList.add("is-invalid");
  }else{
      $('#tesviri').classList.remove("is-invalid");
      $('#tesviri').classList.add("is-valid");
  }
  if(yoxla == ""){
      $('#yoxla').classList.remove("is-valid");
      $('#yoxla').classList.add("is-invalid");
  }else{
      $('#yoxla').classList.remove("is-invalid");
      $('#yoxla').classList.add("is-valid");
  }
  if(sekli == ""){
      $('#sekli').classList.remove("is-valid");
      $('#sekli').classList.add("is-invalid");
  }else{
      $('#sekli').classList.remove("is-invalid");
      $('#sekli').classList.add("is-valid");
  }
  if(eyaddas == ""){
      $('#eyaddas').classList.remove("is-valid");
      $('#eyaddas').classList.add("is-invalid");
  }else{
      $('#eyaddas').classList.remove("is-invalid");
      $('#eyaddas').classList.add("is-valid");
  }
  if(prosessor == ""){
      $('#prosessor').classList.remove("is-valid");
      $('#prosessor').classList.add("is-invalid");
  }else{
      $('#prosessor').classList.remove("is-invalid");
      $('#prosessor').classList.add("is-valid");
  }
  if(dyaddas == ""){
      $('#dyaddas').classList.remove("is-valid");
      $('#dyaddas').classList.add("is-invalid");
  }else{
      $('#j').classList.remove("is-invalid");
      $('#j').classList.add("is-valid");
  }
  if(tip == ""){
      $('#tip').classList.remove("is-valid");
      $('#tip').classList.add("is-invalid");
  }else{
      $('#tip').classList.remove("is-invalid");
      $('#tip').classList.add("is-valid");
  }
  if(sistem == ""){
      $('#sistem').classList.remove("is-valid");
      $('#sistem').classList.add("is-invalid");
  }else{
      $('#sistem').classList.remove("is-invalid");
      $('#sistem').classList.add("is-valid");
  }
  if(video == ""){
    $('#video').classList.remove("is-valid");
    $('#video').classList.add("is-invalid");
}else{
    $('#video').classList.remove("is-invalid");
    $('#video').classList.add("is-valid");
}
  
  });
 
});