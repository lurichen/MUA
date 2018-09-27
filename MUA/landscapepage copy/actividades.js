

/*function createSelect() {
var myDiv = document.getElementById("myDiv");

  //Create array of options to be added
  var array = ["Generales - San Francisco", "Generales - Oakland", "Generales - Union City"];

  //Create and append select list
  var selectList = document.createElement("select");
  selectList.setAttribute("id", "mySelect");
  myDiv.appendChild(selectList);

  //Create and append the options
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
  }
}
document.getElementById("btnTest").addEventListener("click", function(){
  createSelect();
});*/

function validationForm() {
            var buttonSelect = document.getElementById("buttonSelect");
            var chosenButton = buttonSelect.options[buttonSelect.selectedIndex].value;
            if (chosenButton == 0) {
              return false;
              alert("Por favor, seleccionar una actividad");
            else {
              alert("Seleccionastes : " + chosenButton);
              return true;
            }
          };



//Assign function name from html
//function myFunction() {

//Take the id from html and let it equal to x
//var x = document.getElementById("myDiv");

//else if statement to hide and show element 
/*if (x.style.display === "block") {
    x.style.display = "none";
} else if (x.style.display === ""){
  x.style.display = "none";
}
  else {
    x.style.display = "block";
    }
  };*/

//
//var y = document.querySelectorAll('.dropbtn');
//target.addEventListener()
