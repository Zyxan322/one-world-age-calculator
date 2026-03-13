// Function to calculate the age, zodiac sign, and display them in a step-by-step format
function calculateAgeAndZodiac() {
    var dob = new Date(document.getElementById("dob").value);
    var today = new Date();
    var ageInMilliseconds = today - dob;

    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInWeeks = ageInDays / 7;
    var ageInMonths = ageInDays / 30.44; // Average days in a month
    var ageInYears = ageInMonths / 12;

    var zodiacSign = getZodiacSign(dob);

    var result = document.getElementById("age-result");
    result.innerHTML = ""; // Clear any previous results

    var steps = [
        `Age: ${Math.floor(ageInYears)} years`,
        `${Math.floor((ageInMonths % 12))} months`,
        `${Math.floor((ageInDays % 30.44))} days`,
        `${Math.floor(ageInMonths)} months`,
        `${Math.floor((ageInDays % 30.44))} days`,
        `${Math.floor(ageInWeeks)} weeks`,
        `${Math.floor((ageInDays % 7))} days`,
        `${Math.floor(ageInDays)} days`,
        `${Math.floor(ageInHours)} hours`,
        `${Math.floor(ageInMinutes)} minutes`,
        `${Math.floor(ageInSeconds)} seconds`,
        `Zodiac Sign: ${zodiacSign}`
    ];

    for (var i = 0; i < steps.length; i++) {
        var li = document.createElement("li");
        li.textContent = steps[i];
        result.appendChild(li);
    }
}

// Event listener for the "Calculate" button
document.getElementById("calculate").addEventListener("click", calculateAgeAndZodiac);

// Function to determine the zodiac sign based on the birth date
function getZodiacSign(date) {
    const month = date.getMonth() + 1; // Month is 0-based
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else {
        return "Capricorn";
    }
}
