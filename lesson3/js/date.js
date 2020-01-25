function timeDate() {
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
    document.getElementById("lastChanged").innerHTML = "Last Updated: " + document.lastModified;
}
