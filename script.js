// Welcome alert
alert("Welcome to my website!");

// Change text button functionality
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Text changed!";
});

// Contact form functionality
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Thanks for visiting.";
});