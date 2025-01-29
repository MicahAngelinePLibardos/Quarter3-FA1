function getUserInfo() {
   let firstName = getValidInput("Enter your first name:");
   let lastName = getValidInput("Enter your last name:");
   let birthYear = getValidInput("Enter your birth year:", true);

   let currentYear = new Date().getFullYear();
   let age = currentYear - parseInt(birthYear);

   let outputDiv = document.createElement("div");
    outputDiv.innerText = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;
    document.body.appendChild(outputDiv);

}
