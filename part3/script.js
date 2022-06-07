var envoyer = document.querySelector("#envoyer");

function verification() {
  var nom = document.querySelector("#nom");
  var prenom = document.querySelector("#prenom");
  var date = document.querySelector("#date");
  var alger = document.querySelector("#alger");
  var guelma = document.querySelector("#guelma");
  var constantine = document.querySelector("#constantine");
  var autre = document.querySelector("#autre");
  var adresse = document.querySelector("#adresse");
  var code = document.querySelector("#code");
  var email = document.querySelector("#email");
  var phone = document.querySelector("#phone");
  var semestre = document.querySelector("#semestre");
  var level = document.querySelector("#level");
  var html = document.querySelector("#html");
  var css = document.querySelector("#css");
  var js = document.querySelector("#js");
  var php = document.querySelector("#php");
  var lieu_field = document.querySelector("#lieu_field");

  var valid = false;
  var tab_value = [nom, prenom, date, adresse, code, email, phone, semestre];
  var tab_langage = [html, css, js, php];
  for (var i = 0; i < tab_value.length; i++) {
    if (tab_value[i].value == "") {
      tab_value[i].style.border = "1px solid red";
      valid = false;
      break;
    } else {
      tab_value[i].style.border = "1px solid green";
      valid = true;
    }
  }
  if (
    !alger.checked &&
    !guelma.checked &&
    !constantine.checked &&
    !autre.checked
  ) {
    lieu_field.style.border = "1px solid red";
    valid = false;
  } else {
    lieu_field.style.border = "1px solid green";
    valid = true;
  }

  var checked = document.querySelectorAll("input[type=checkbox]:checked");
  if (checked.length == 0) {
    var cadre = document.querySelector(".cadre");
    cadre.style.border = "1px solid red";
    cadre.style.backgroundColor = "rgba(255,0,0,0.3)";
    cadre.style.color = "black";
    valid = false;
  } else {
    var cadre = document.querySelector(".cadre");
    cadre.style.border = "1px solid black";
    cadre.style.backgroundColor = "#c0c0ff";
    cadre.style.color = "red";
    valid = true;
  }
  if (valid) {
    document.location.href = "destination.html";
  }
}
envoyer.addEventListener("click", verification, null);
