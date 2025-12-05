// this will run after the HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("donationForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // stop normal form submit (no page reload)

        // 1. get values from form inputs
        const charity = document.getElementById("charityName").value.trim();
        const amount = document.getElementById("donationAmount").value.trim();
        const date = document.getElementById("donationDate").value;
        const comment = document.getElementById("donorComment").value.trim();
        const errorDiv = document.getElementById("errorMessage");

        // 2. validate
        if (!charity || !amount || !date || !comment) {
            errorDiv.textContent = "Please fill in all fields.";
            return;
        }

        const amountNumber = Number(amount);
        if (isNaN(amountNumber) || amountNumber <= 0) {
            errorDiv.textContent = "Donation amount must be a positive number.";
            return;
        }

        // if we reach here, data is valid
        errorDiv.textContent = "";

        // 3. create a temporary data object
        const donation = {
            charity: charity,
            amount: amountNumber,
            date: date,
            comment: comment
        };

        console.log("Temporary donation object:", donation);

        // 4. for now, just show a simple message
        alert("Donation saved (temporary only).");

        // 5. clear the form
        form.reset();
    });
});
