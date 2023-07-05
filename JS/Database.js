// Add event listeners to the buttons
let projectButtons = document.querySelectorAll("#project");
let mailButton = document.getElementById("mailButton");
let githubButton = document.getElementById("githubButton");
let linkedinButton = document.getElementById("linkedinButton");
let facebookButton = document.getElementById("facebookButton");
let submitMessageButton = document.getElementById("submitMessageButton");

projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        updateButtonClick("Projects_clicks");
    });
});

mailButton.addEventListener("click", function () {
    updateButtonClick("Mail_clicks");
});

githubButton.addEventListener("click", function () {
    updateButtonClick("Github_clicks");
});

linkedinButton.addEventListener("click", function () {
    updateButtonClick("Linkedin_clicks");
});

facebookButton.addEventListener("click", function () {
    updateButtonClick("Facebook_clicks");
});

if (submitMessageButton) {
    submitMessageButton.addEventListener("click", function () {
        console.log("Submit_message");
        updateButtonClick("Submit_message");
    });
}

function updateButtonClick(buttonName) {
    var data = {
        buttonName: buttonName
    };

    // Send an AJAX request to the PHP file
    fetch("../php/ButtonClicks.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);
        });
}
