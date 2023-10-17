        // Get the current date
        const currentDate = new Date();

        // Specify the date for my birthday (14th august 2004)
        // Months start on 0, which is why the 8th month is 7.
        const targetDate = new Date(2004, 7, 14);

        // Calculate the difference in years
        const yearsDifference = currentDate.getFullYear() - targetDate.getFullYear();

        // Update the age element
        const ageElement = document.getElementById('age');
        ageElement.textContent = yearsDifference;
