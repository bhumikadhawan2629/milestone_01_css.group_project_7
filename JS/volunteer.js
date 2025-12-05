document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("volunteerForm");
 
    form.addEventListener("submit", (event) => {
        event.preventDefault();
 
        const charity = document.getElementById("charityName").value.trim();
        const hours = document.getElementById("hoursVolunteered").value.trim();
        const date = document.getElementById("volunteerDate").value;
        const rating = document.getElementById("experienceRating").value.trim();
 
        const errorDiv = document.getElementById("errorMessage");
 
        // VALIDATION
        if (!charity || !hours || !date || !rating) {
            errorDiv.textContent = "Please fill in all fields.";
            return;
        }
 
        const hoursNum = Number(hours);
        const ratingNum = Number(rating);
 
        if (isNaN(hoursNum) || hoursNum <= 0) {
            errorDiv.textContent = "Hours volunteered must be a positive number.";
            return;
        }
 
        if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
            errorDiv.textContent = "Rating must be a number between 1 and 5.";
            return;
        }
 
        errorDiv.textContent = "";
 
        const log = {
            charity,
            hours: hoursNum,
            date,
            rating: ratingNum
        };
 
        console.log("Temporary volunteer log:", log);
        alert("Volunteer log saved (temporary).");
 
        form.reset();
    });
});