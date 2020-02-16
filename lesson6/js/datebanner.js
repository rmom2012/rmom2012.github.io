
var date = new Date();
document.getElementById("year").textContent = date.getFullYear();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("date").textContent = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

if (date.getDay() == 5) {
    document.getElementById("saturday").style.display = "block";
}
else {
    document.getElementById("saturday").style.display = "none";
}