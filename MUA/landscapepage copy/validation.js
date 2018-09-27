
function validateForm() {
  if (document.getElementById("ddOne").value == "" || document.getElementById("ddTwo").value == "" || document.getElementById("ddThree").value == "") {
    alert("You need to fill in all three dropboxes and not just some");
    return false;
  }
}
