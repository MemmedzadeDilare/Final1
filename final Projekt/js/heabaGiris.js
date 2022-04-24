$(document).ready(function(){
    $("#hesabagiris").submit(function(e){
      if($("#istifadeciAdi").val()==""){
        $("#istifadeciAdi").addClass("is-invalid")
      }
      if($("#sifre").val()==""){
        $("#sifre").addClass("is-invalid")
      }
    })
    $("#istifadeciAdi").keyup(function(){
      if($("#istifadeciAdi").val() !=""){
        $("#istifadeciAdi").removeClass("is-invalid")
        $("#istifadeciAdi").addClass("is-valid")
      }

    })
    $("#sifre").keyup(function(){
      if($("#sifre").val() !=""){
        $("#sifre").removeClass("is-invalid")
        $("#sifre").addClass("is-valid")
      }
    })
    $("#daxilOl").submit(function(){
      let username = $("#istifadeciAdi").val();
      let pass = $("#sifre").val();
      var cvb=true;
      // local-da axtarish
      if (cvb == false) {
          for (let i = 1; i <= Number(localStorage.getItem("ID")); i++){
              if (username == localStorage.getItem(`user${i}-username`)) {
                  cvb = true;
                  if (pass == localStorage.getItem(`user${i}-password`)) {
                      window.location.assign("index.html");
                  }
              }
          }
      }
      if(cvb == false){
          alert("bele istifadeci yoxdur");
      }
    })

  })