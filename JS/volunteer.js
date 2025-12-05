document.addEventListener("DOMContentLoaded", () => {
    loadVolunteerLogs();
 
    document.getElementById("volunteerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        handleVolunteerSubmit();
    });
});
 
// ------- VALIDATION -------
function validateVolunteer(charity, hours, date, rating) {
    if (!charity || !hours || !date || !rating) return false;
    if (isNaN(hours) || hours <= 0) return false;
    if (isNaN(rating) || rating < 1 || rating > 5) return false;
    return true;
}
 
// ------- SUBMIT HANDLER -------
function handleVolunteerSubmit() {
    let charity = vCharity.value.trim();
    let hours = Number(vHours.value);
    let date = vDate.value;
    let rating = Number(vRating.value);
 
    if (!validateVolunteer(charity, hours, date, rating)) {
        vError.innerText = "Fill all fields correctly. Rating must be 1–5.";
        return;
    }
 
    vError.innerText = "";
 
    let entry = { charity, hours, date, rating };
    saveVolunteer(entry);
    loadVolunteerLogs();
 
    alert("Volunteer log saved!");
    volunteerForm.reset();
}
 
// ------- SAVE -------
function saveVolunteer(entry) {
    let logs = JSON.parse(localStorage.getItem("volunteerLogs")) || [];
    logs.push(entry);
    localStorage.setItem("volunteerLogs", JSON.stringify(logs));
}
 
// ------- LOAD -------
function loadVolunteerLogs() {
    let logs = JSON.parse(localStorage.getItem("volunteerLogs")) || [];
    let tbody = document.querySelector("#volunteerTable tbody");
    tbody.innerHTML = "";
 
    logs.forEach((log, index) => {
        tbody.innerHTML += `
<tr>
<td>${log.charity}</td>
<td>${log.hours}</td>
<td>${log.date}</td>
<td>${log.rating}</td>
<td><button onclick="deleteVolunteer(${index})">X</button></td>
</tr>`;
    });
 
    updateTotalHours();
}
 
// ------- DELETE -------
function deleteVolunteer(index) {
    let logs = JSON.parse(localStorage.getItem("volunteerLogs")) || [];
    logs.splice(index, 1);
    localStorage.setItem("volunteerLogs", JSON.stringify(logs));
    loadVolunteerLogs();
}
 
// ------- TOTAL HOURS -------
function updateTotalHours() {
    let logs = JSON.parse(localStorage.getItem("volunteerLogs")) || [];
    let sum = logs.reduce((t, l) => t + l.hours, 0);
    totalHours.innerText = "Total Hours: " + sum;
}
 
module.exports = { validateVolunteer };