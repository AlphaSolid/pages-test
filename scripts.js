function myMode(theme) {
    if (theme == "light") {
        document.body.style.backgroundColor = '#99aab5';
        document.body.style.color = '#2c2f33';
        document.getElementById("n95a").removeEventListener("click", myMode);
        document.getElementById("n95a").addEventListener("click", function() {myMode('dark');});
    } else if (theme == "dark") {
        document.body.style.backgroundColor = '#2c2f33';
        document.body.style.color = '#99aab5';
        document.getElementById("n95a").removeEventListener("click", myMode);
        document.getElementById("n95a").addEventListener("click", function() {myMode('light');});
    } else {alert("No such theme: " + theme);}
}