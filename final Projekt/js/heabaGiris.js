$(document).ready(function() {
  $("#hesabagiris").submit(function(e) {
    e.preventDefault();
    if ($("#istifadeciadi").val() == "") {
      $("#istifadeciadi").addClass("is-invalid")
    }
    if ($("#pass").val() == "") {
      $("#pass").addClass("is-invalid")
    }
  })
  $("#istifadeciadi").blur(function() {
    if ($("#istifadeciadi").val() != "") {
      $("#istifadeciadi").removeClass("is-invalid")
      $("#istifadeciadi").addClass("is-valid")
    }

  })
  $("#pass").blur(function () {
    if ($("#pass").val() != "") {
      $("#pass").removeClass("is-invalid")
      $("#pass").addClass("is-valid")
    }
  })
  
  var yoxla = false;
  $("#hesabagiris").submit(function(e) {
      e.preventDefault();
      var istifadeAdi = $("#istifadeciadi").val();
      var sifre = $("#pass").val();
      var local = Number(localStorage.getItem(`ID`));
      for (var i = 0; i <= local; i++) {
          if (istifadeAdi == localStorage.getItem(`user${i}-username`)) {
              if (sifre == localStorage.getItem(`user${i}-password`)) {
                  localStorage.setItem(`name`,localStorage.getItem(`user${i}-username`))
                  yoxla = true;
                  window.location.assign("heseab.html");
              }
      }
    
    }

      if(!yoxla){
        alert("bele bir istifadeci yoxdur!!!")
      }
     
  })
});