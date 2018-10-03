let data;
let people = [];
const addPerson = function(){
person = document.getElementById("firstNameInp").value;
people.push(person);
// lastNameInput = window.getElementById("lasttNameInp");
if(data = "undefined"){
	data = window.localStorage;
}
data.setItem('Class List', JSON.stringify(people));
};


