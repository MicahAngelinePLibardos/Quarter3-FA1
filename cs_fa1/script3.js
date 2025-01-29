function askPermission() {
   let shareInfo = confirm("Do you agree to share your personal information?");

if (shareInfo) {
    console.log("Name: " + nickname);
    console.log("Height: " + heightFeet + "'" + heightRemainder + "\"");
    console.log("Weight: " + weightLbs + " lbs");
}

 else {
    console.log("User does not wish to share their information.");

}

}