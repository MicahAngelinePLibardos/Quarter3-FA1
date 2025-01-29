function showInfo() {
   let nickname = "Micah";  
   let heightInches = 62; 
   let weightKg = 50; 

   let heightFeet = Math.floor(heightInches / 12);
   let heightRemainder = heightInches % 12;

   let weightLbs = (weightKg * 2.20462).toFixed(3);

   alert("Name: " + nickname + "\nHeight: " + heightFeet + "'" + heightRemainder + "\"\nWeight: " + weightLbs + " lbs");

}
