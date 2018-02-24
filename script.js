// Set the date we're counting down to
var countDownDate = new Date("Feb 20, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
}, 1000);
window.onload = function(){
    document.getElementById("navbar").innerHTML ="<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">" +
    "<a class=\"navbar-brand\" href=\"#\">4992</a>" +
    "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
    "<span class=\"navbar-toggler-icon\"></span>" + 
    "</button>" +
    "<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">" +
    "<ul class=\"navbar-nav mr-auto\">" +
    "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" href=\"index.html\">Home <span class=\"sr-only\">(current)</span></a>" +
    "</li>" +
    "<li class=\"nav-item\">" +
    "<a class=\"nav-link\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSeKr5mHEF1jRvOzxuAyhQcdSjcjXRDv4jLa5kRVhCI43TZJ1A/viewform\" target=\"_blank\">Join Team 4992</a>" +
    "</li>" +
    "<li class = \"nav-item\">" +
    "<a class = \"nav-link\" href = \"sponsors.html\">Sponsors</a>" +
    "</li>"+
    "<li class = \"nav-item\">"+
    "<a class = \"nav-link\" href = \"links.html\">Links</a>"+
    "</li>"+
    "<li class=\"nav-item dropdown\">"+
    "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Social Media" +
    "</a>" +
    "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">" +
    "<a class=\"dropdown-item\" href=\"https://twitter.com/team4992\" target = \"_blank\">Twitter</a>" +
    "<a class = \"dropdown-item\" href=\"https://www.instagram.com/team4992/\" target=\"_blank\">Instagram</a>" +
    "</div>" +
    "</li>" +
    "<li class=\"nav-item dropdown\">" +
    "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
    "Other" +
    "</a>"+
    "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">" +
    "<a class=\"dropdown-item disabled\" href=\"http://www.4992.ca\" target = \"_blank\">Old Webpage</a>" + 
    "<a class = \"dropdown-item disabled\" href = \"countdown.html\">Count Down to Bag 'n Tag</a>" +
    "</div>" +
    "</li>" +
    "<li class = \"nav-item\">" +
    "<a href = \"contact.html\"class = \"nav-link\">Contact</a>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</nav>";
};
