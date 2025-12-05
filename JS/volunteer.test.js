const { validateVolunteer } = require("../JS/volunteer.js");
 
describe("Volunteer Tracker Tests", () => {
 
    test("Valid entry returns true", () => {
        expect(validateVolunteer("Shelter", 5, "2025-01-01", 4)).toBe(true);
    });
 
    test("Invalid rating returns false", () => {
        expect(validateVolunteer("Shelter", 5, "2025-01-01", 7)).toBe(false);
    });
 
    test("Missing fields return false", () => {
        expect(validateVolunteer("", 5, "2025-01-01", 4)).toBe(false);
    });
 
});