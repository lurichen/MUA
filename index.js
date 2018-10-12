let data;
let people = [];

const addPerson = function() {
  person = document.getElementById("firstNameInp").value;

  people.push(person);

  // lastNameInput = window.getElementById("lasttNameInp");
  if(data = "undefined") {
	 data = window.localStorage;
  }

  data.setItem('Class List', JSON.stringify( people ));
};


// C.R.U.D.
// Create
// Read
function read(index) { 
  JSON.parse(localStorage.getItem("Class List"))[index]
};

// Update

// Delete

