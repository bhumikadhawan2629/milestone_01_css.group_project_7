document.addEventListener("DOMContentLoaded", () => {
    loadDonations();

    document.getElementById("donationForm").addEventListener("submit", (e) => {
        e.preventDefault();
        handleDonationSubmit();
    });
});

// ---------- VALIDATION ----------
function validateDonation(charity, amount, date, comment) {
    if (!charity || !amount || !date || !comment) return false;
    if (isNaN(amount) || amount <= 0) return false;
    return true;
}

// ---------- SUBMIT ----------
function handleDonationSubmit() {
    let charity = document.getElementById("charityName").value.trim();
    let amount = Number(document.getElementById("donationAmount").value);
    let date = document.getElementById("donationDate").value;
    let comment = document.getElementById("donorComment").value.trim();

    if (!validateDonation(charity, amount, date, comment)) {
        document.getElementById("errorMessage").innerText =
            "Please fill all fields correctly.";
        return;
    }

    document.getElementById("errorMessage").innerText = "";

    let donation = { charity, amount, date, comment };

    saveDonation(donation);
    loadDonations();

    alert("Donation saved!");
    document.getElementById("donationForm").reset();
}

// ---------- SAVE ----------
function saveDonation(donation) {
    let donations = JSON.parse(localStorage.getItem("donations")) || [];
    donations.push(donation);
    localStorage.setItem("donations", JSON.stringify(donations));
}

// ---------- LOAD ----------
function loadDonations() {
    let donations = JSON.parse(localStorage.getItem("donations")) || [];
    let tableBody = document.querySelector("#donationTable tbody");
    tableBody.innerHTML = "";

    donations.forEach((d, index) => {
        let row = `
        <tr>
            <td>${d.charity}</td>
            <td>$${d.amount}</td>
            <td>${d.date}</td>
            <td>${d.comment}</td>
            <td><button onclick="deleteDonation(${index})">X</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    updateTotal();
}

// ---------- DELETE ----------
function deleteDonation(index) {
    let donations = JSON.parse(localStorage.getItem("donations")) || [];
    donations.splice(index, 1);
    localStorage.setItem("donations", JSON.stringify(donations));
    loadDonations();
}

// ---------- TOTAL ----------
function updateTotal() {
    let donations = JSON.parse(localStorage.getItem("donations")) || [];
    let total = donations.reduce((sum, d) => sum + d.amount, 0);
    document.getElementById("totalDonation").innerText =
        `Total Donation: $${total}`;
}

module.exports = { validateDonation };
