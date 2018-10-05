// Nav moblie controls
var navigation = document.getElementById("nav");
function toggleNavigation() {
  console.log(navigation.classList);
  if (navigation.classList.contains("navOpen")) {
    navigation.classList.remove("navOpen");
  } else {
    navigation.classList.add("navOpen");
  }
}

// Form validation
var contactForm = document.forms["myForm"];

contactForm.onsubmit = e => {
  validator(e);
};

//Function for Validating

function validator(e) {
  let fields = ["firstName", "lastName", "emailInput"];
  let newArray = [];
  for (let i = 0; i < fields.length; i++) {
    newArray.push({
      na: contactForm[fields[i]].name,
      val: contactForm[fields[i]].value
    });
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].val === "") {
      alert(`${newArray[i].na} needs information.`);
      e.preventDefault();
    }
  }
}
