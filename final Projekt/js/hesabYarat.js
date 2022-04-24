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
    if($("#istifadeciAdi").val() !=""){
      $("#istifadeciAdi").removeClass("is-invalid")
      $("#istifadeciAdi").addClass("is-valid")
      $("#pistifadeciadi").text("Düzgündür")
      $("#pistifadeciadi").removeClass("text-danger");
      $("#pistifadeciadi").addClass("text-success");
    }
  })
  $("#sifre").keyup(function(){
    if($("#sifre").val() !=""){
      $("#sifre").removeClass("is-invalid")
      $("#sifre").addClass("is-valid")
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
    let num = Number(localStorage.getItem("ID")) + 1;
    localStorage.setItem(`user${num}-name`, $("#ad").val());
    localStorage.setItem(`user${num}-phone`, $("#telefon").val());
    localStorage.setItem(`user${num}-username`, $("#istifadeciAdi").val());
    localStorage.setItem(`user${num}-password`, $("#sifre").val());
    localStorage.setItem("ID", num);
});
})