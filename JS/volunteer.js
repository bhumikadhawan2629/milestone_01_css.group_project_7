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