$(document).ready(function(){
  $("#hesabyarat").submit(function(e){
    if($("#ad").val()==""){
      $("#ad").addClass("is-invalid");
      $("#pad").addClass("text-danger");
      $("#pad").text("Boş qoymayin");
    }
    if($("#telefon").val()==""){
      $("#telefon").addClass("is-invalid");
      $("#ptelefon").addClass("text-danger");
      $("#ptelefon").text("Telefon düzgün formada yazılmayıb. Bu (000-00-00) formada yazılmalıdır.");
    }
    if($("#istifadeciAdi").val()==""){
      $("#istifadeciAdi").addClass("is-invalid");
      $("#pistifadeciadi").addClass("text-danger");
      $("#pistifadeciadi").text("Boş qoymayın.Minimum 2,Maksimum 30 simvol ola biler")
    }
    if($("#sifre").val()==""){
      $("#sifre").addClass("is-invalid");
      $("#psifre").addClass("text-danger");
      $("#psifre").text("Boş qoymayın.Minimum 2,Maksimum 30 simvol ola biler")
    }
  })

  $("#ad").keyup(function(){
    if($("#ad").val() !=""){
      $("#ad").removeClass("is-invalid")
      $("#ad").addClass("is-valid")
      $("#pad").text("Düzgündür");
      $("#pad").removeClass("text-danger");
      $("#pad").addClass("text-success");
    }
  })
  $("#telefon").keyup(function(){
    if($("#telefon").val() !=""){
      $("#telefon").removeClass("is-invalid")
      $("#telefon").addClass("is-valid")
      $("#ptelefon").text("Düzgündür")
      $("#ptelefon").removeClass("text-danger");
      $("#ptelefon").addClass("text-success");
    }
  })
  $("#istifadeciAdi").keyup(function(){
    var nameval = $("#istifadeciAdi").val();
    if(nameval !=""){
      $("#istifadeciAdi").removeClass("is-invalid")
      $("#istifadeciAdi").addClass("is-valid")
      $("#pistifadeciadi").text("Düzgündür")
      $("#pistifadeciadi").removeClass("text-danger");
      $("#pistifadeciadi").addClass("text-success");
    }
    if (nameval.length < 2 || 30 < nameval.length) {
      $("#istifadeciAdi").removeClass("is-valid");
      $("#istifadeciAdi").addClass("is-invalid");
      $("#pistifadeciadi").text("Minimum 2,Maksimum 30 simvol ola biler")
      $("#pistifadeciadi").addClass("text-danger");

  } else if (nameval.length >= 2 && 30 >= nameval.length) {
      $("#istifadeciAdi").removeClass("is-invalid");
      $("#istifadeciAdi").addClass("is-valid");
      $("pistifadeciadi").text("Düzgündür")   
      $("#pistifadeciadi").removeClass("text-danger");
      $("#pistifadeciadi").addClass("text-success");   
  }
  })
  $("#sifre").keyup(function(){
    var g = $("#sifre").val();
    if(g !=""){
      $("#sifre").removeClass("is-invalid")
      $("#sifre").addClass("is-valid")
      $("#psifre").text("Düzgündür")
      $("#psifre").removeClass("text-danger");
      $("#psifre").addClass("text-success");
    }
    if (g.length < 2 || 30 < g.length) {
        $("#sifre").removeClass("is-valid");
        $("#sifre").addClass("is-invalid");
        $("#psifre").text("Minimum 2,Maksimum 30 simvol ola biler")
        $("#psifre").addClass("text-danger");

    } else if (g.length >= 2 && 30 >= g.length) {
        $(".signg").addClass("d-none");
        $("#sifre").removeClass("is-invalid");
        $("#sifre").addClass("is-valid");
        $("#psifre").text("Düzgündür")   
        $("#psifre").removeClass("text-danger");
        $("#psifre").addClass("text-success");   
    }
  })
//localSrorege elave etmek
  if(localStorage.getItem("ID")==null){
    localStorage.setItem("ID", 0);
}
$("#hesabyarat").submit(function(e){
    e.preventDefault();
    if($("#ad").val()==""&&$("#telefon").val()==""&&$("#istifadeciAdi").val()==""&&$("#sifre").val()==""){
      $("#ugurluQeydiyat").addClass("d-none")
      $("#ugursuzQeydiyat").removeClass("d-none")
     }else if($("#ad").val()==""||$("#telefon").val()==""||$("#istifadeciAdi").val()==""||$("#sifre").val()==""){
      $("#ugurluQeydiyat").addClass("d-none")
      $("#ugursuzQeydiyat").removeClass("d-none")
    }else{
      let num = Number(localStorage.getItem("ID")) + 1;
      localStorage.setItem(`user${num}-name`, $("#ad").val());
      localStorage.setItem(`user${num}-phone`, $("#telefon").val());
      localStorage.setItem(`user${num}-username`, $("#istifadeciAdi").val());
      localStorage.setItem(`user${num}-password`, $("#sifre").val());
      localStorage.setItem("ID", num);
      $("#ugursuzQeydiyat").addClass("d-none")
      $("#ugurluQeydiyat").removeClass("d-none")
    }
    
});
})