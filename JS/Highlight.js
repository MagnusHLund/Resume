let url = new URL(window.location.href);
let id;

// Get the page name based on the URL using a switch statement
switch (true) {
    case url.pathname.includes("home"):
        console.log("Home page");
        id = document.getElementById("HomeId");
        pageName = "Home";
        break;
    case url.pathname.includes("about"):
        console.log("About page");
        id = document.getElementById("AboutId");
        pageName = "About";
        break;
    case url.pathname.includes("education"):
        console.log("Education page");
        id = document.getElementById("EducationId");
        pageName = "Education";
        break;
    case url.pathname.includes("projects"):
        console.log("Project page");
        id = document.getElementById("ProjectId");
        pageName = "Projects";
        break;
    default:
        console.log("Cannot specify webpage location");
}

// Adds the active class to the element with the correct id
id.classList.add("active");

// Prepare the data object to be sent to PHP
var data = { pageName: pageName };

// Send the data to PHP using AJAX
var xhr = new XMLHttpRequest();
xhr.open('POST', '../php/PageViews.php', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Response from PHP:', xhr.responseText);
    } else {
        console.log('Error sending data to PHP');
    }
};
xhr.send('data=' + encodeURIComponent(JSON.stringify(data)));
