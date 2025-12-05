const { validateDonation } = require("../JS/donation.js");

describe("Donation Tracker Validation Tests", () => {

    test("Valid donation returns true", () => {
        expect(validateDonation("Food Bank", 20, "2025-01-01", "Good")).toBe(true);
    });

    test("Negative amount returns false", () => {
        expect(validateDonation("Food Bank", -10, "2025-01-01", "Bad")).toBe(false);
    });

    test("Empty fields return false", () => {
        expect(validateDonation("", 20, "2025-01-01", "Ok")).toBe(false);
    });
});
